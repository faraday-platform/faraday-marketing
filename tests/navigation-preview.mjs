import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.NAV_PREVIEW_BASE_URL || "http://127.0.0.1:3000";
for (let attempt = 0; ; attempt++) {
  try { const response = await fetch(base); if (response.ok) break; } catch {}
  if (attempt >= 90) throw new Error("Preview server did not become ready");
  await new Promise(resolve => setTimeout(resolve, 500));
}
await mkdir("test-results/navigation", { recursive: true });
const browser = await chromium.launch();
try {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 664 }, { width: 320, height: 568 }, { width: 844, height: 390 }]) {
    const context = await browser.newContext({ viewport, reducedMotion: "reduce" });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    for (const variant of ["compact", "directory"]) {
      await page.goto(base + "/navigation-preview/" + variant);
      const trigger = page.getByRole("button", { name: /^Open .*navigation menu$/ });
      await trigger.waitFor();
      assert.equal(await trigger.getAttribute("aria-expanded"), "false");
      const baselineScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      await trigger.focus();
      await page.keyboard.press("Enter");
      const panel = page.locator("#preview-navigation-panel");
      await panel.waitFor({ state: "visible" });
      await page.waitForFunction(() => document.activeElement?.textContent?.trim() === "FACP");
      for (const title of ["Products", "Projects", "Company"]) {
        assert.equal(await panel.getByRole("heading", { name: title, exact: true }).count(), 1);
      }
      const products = panel.getByRole("region", { name: "Products", exact: true });
      assert.equal(await products.getByRole("link").count(), 4);
      assert.equal(await products.getByRole("link", { name: /Music Box/ }).count(), 0);
      const project = panel.getByRole("region", { name: "Projects", exact: true }).getByRole("link", { name: /Music Box/ });
      assert.equal(await project.getAttribute("href"), "https://musicbox.faradaycapitalsystems.com");
      assert.equal(await project.getAttribute("target"), "_blank");
      assert.equal(await project.getAttribute("rel"), "noopener noreferrer");
      assert.equal(await panel.getByRole("link", { name: /Capital Access/ }).count(), 0);
      // The unchanged homepage has decorative glows outside the viewport, clipped by its body.
      // The menu must fit the viewport and must not add horizontal overflow to that baseline.
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth) <= baselineScrollWidth, true, "Menu adds horizontal overflow");
      assert.equal(await panel.evaluate(el => { const r = el.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth; }), true, "Menu exceeds viewport width");
      assert.equal(await panel.evaluate(el => el.getBoundingClientRect().bottom <= innerHeight), true);
      const result = await new AxeBuilder({ page }).include('nav[aria-label="Main navigation"]').analyze();
      await page.screenshot({ path: "test-results/navigation/" + variant + "-" + viewport.width + "x" + viewport.height + ".png" });
      assert.deepEqual(result.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => ({ html: n.html, summary: n.failureSummary })) })), [], "Navigation accessibility violations");
      await page.keyboard.press("Escape");
      await panel.waitFor({ state: "detached" });
      assert.equal(await page.evaluate(() => document.activeElement?.id), "preview-menu-trigger");
      await page.keyboard.press("Space");
      await page.locator("#preview-navigation-panel").waitFor({ state: "visible" });
      await page.waitForFunction(() => document.activeElement?.textContent?.trim() === "FACP");
      await page.keyboard.press("Tab");
      assert.match(await page.evaluate(() => document.activeElement?.textContent || ""), /Studio/);
      // Keyboard section navigation closes the panel and moves focus to real content.
      await page.getByRole("region", { name: "Products", exact: true }).getByRole("link", { name: "FACP", exact: true }).focus();
      await page.keyboard.press("Enter");
      await page.locator("#preview-navigation-panel").waitFor({ state: "detached" });
      assert.equal(await page.evaluate(() => document.activeElement?.id), "products");
      await page.locator("#preview-menu-trigger").click();
      await page.locator("#preview-navigation-panel").waitFor({ state: "visible" });
      // A non-modal disclosure permits tabbing out; focus departure closes it.
      await page.locator("#preview-navigation-panel").getByRole("link", { name: "Terms", exact: true }).focus();
      await page.keyboard.press("Tab");
      await page.locator("#preview-navigation-panel").waitFor({ state: "detached" });
      await page.locator("#preview-menu-trigger").click();
      await page.locator("#preview-navigation-panel").waitFor({ state: "visible" });
      await page.mouse.click(2, 80);
      await page.locator("#preview-navigation-panel").waitFor({ state: "detached" });
      assert.deepEqual(errors, [], "Client runtime errors");
      console.log("PASS", variant, viewport.width + "x" + viewport.height);
    }
    // Default route keeps the existing header and video, rather than enabling a preview menu.
    await page.goto(base);
    assert.equal(await page.locator("#preview-menu-trigger").count(), 0);
    assert.equal(await page.locator("#platform-demonstration video").count(), 1);
    await context.close();
  }
} finally { await browser.close(); }
