"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

const groups = [
  { title: "Products", links: [
    { label: "FACP", href: "#products" },
    { label: "Studio", href: "https://studio.faradaycapitalsystems.com" },
    { label: "Beacon", href: "#products" },
    { label: "PSE", href: "https://payrollsynergyexperts.com" },
  ] },
  { title: "Projects", links: [
    { label: "Music Box", href: "https://musicbox.faradaycapitalsystems.com" },
  ] },
  { title: "Company", links: [
    { label: "Investor Interest", href: "https://www.srholdingsllc.com/investors?venture=faraday&source=faraday-marketing#investor-form" },
    { label: "Contact", href: "mailto:info@faradaycapitalsystems.com" },
  ] },
];

const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300";

export default function NavigationPreviewSwitch({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/navigation-preview/compact" || pathname === "/navigation-preview/directory") {
    return <PreviewNavigation key={pathname} variant={pathname.endsWith("/compact") ? "compact" : "directory"} />;
  }
  return children;
}

function PreviewNavigation({ variant }: { variant: "compact" | "directory" }) {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function close(restoreFocus: boolean) {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          close(true);
        }
      }}
      onBlurCapture={(event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) close(false);
      }}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-5 sm:px-10">
        <Link href="/" className={`flex min-w-0 items-center gap-3 rounded ${focusStyle}`}>
          <span aria-hidden="true" className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-light font-mono text-xs font-bold text-white">F</span>
          <span className="text-[17px] font-semibold tracking-tight text-heading sm:hidden">Faraday</span>
          <span className="hidden text-[17px] font-semibold tracking-tight text-heading sm:inline">Faraday Capital Systems</span>
        </Link>
        <div className="flex shrink-0 items-center gap-5">
          {variant === "compact" && (
            <div className="hidden items-center gap-6 lg:flex">
              <a href="#solutions" className={`rounded text-sm text-muted hover:text-white ${focusStyle}`}>Solutions</a>
              <a href="#platform" className={`rounded text-sm text-muted hover:text-white ${focusStyle}`}>Platform</a>
            </div>
          )}
          <a href="mailto:info@faradaycapitalsystems.com" className={`hidden rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white sm:inline-flex ${focusStyle}`}>Contact</a>
          <button
            id="preview-menu-trigger"
            ref={buttonRef}
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="preview-navigation-panel"
            onClick={() => setOpen(!open)}
            className={`flex min-h-11 items-center gap-3 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-heading hover:bg-white/5 ${focusStyle}`}
          >
            <span>{variant === "compact" ? "Explore" : "Menu"}</span>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div
          id="preview-navigation-panel"
          ref={panelRef}
          className={`absolute top-full max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-white/15 bg-[#10121e] p-6 shadow-2xl sm:p-8 ${variant === "compact" ? "right-4 left-4 sm:left-auto sm:w-[min(680px,calc(100vw-2rem))]" : "right-4 left-4 mx-auto max-w-[1120px] sm:right-8 sm:left-8"}`}
        >
          <div className={`grid gap-8 ${variant === "compact" ? "sm:grid-cols-3" : "md:grid-cols-[1fr_1.3fr_1fr]"}`}>
            {groups.map((group) => (
              <section key={group.title} aria-labelledby={`preview-${group.title.toLowerCase()}-heading`}>
                <h2 id={`preview-${group.title.toLowerCase()}-heading`} className="mb-3 font-mono text-xs uppercase tracking-widest text-indigo-300">{group.title}</h2>
                {variant === "directory" && group.title === "Projects" && (
                  <p className="mb-3 max-w-xs text-sm leading-relaxed text-zinc-400">Explore independent initiatives from the Faraday ecosystem.</p>
                )}
                <ul className="space-y-1">
                  {group.links.map((link) => {
                    const external = link.href.startsWith("https://");
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className={`flex min-h-11 items-center justify-between gap-4 rounded-lg px-3 py-2 text-base text-zinc-100 hover:bg-white/5 ${focusStyle}`}
                          onClick={(event) => {
                            // Keep new-tab navigation from leaving focus in a removed panel.
                            if (external) close(true);
                            else {
                              close(false);
                              if (link.href.startsWith("#") && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                                const target = document.getElementById(link.href.slice(1));
                                if (target) {
                                  event.preventDefault();
                                  target.setAttribute("tabindex", "-1");
                                  target.focus({ preventScroll: true });
                                  target.scrollIntoView({ behavior: "instant", block: "start" });
                                  history.replaceState(null, "", link.href);
                                }
                              }
                            }
                          }}
                        >
                          <span>{link.label}</span>
                          {external && <span aria-hidden="true">↗</span>}
                          {external && <span className="sr-only"> (opens in a new tab)</span>}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-4 text-sm text-zinc-300">
            <a href="#solutions" onClick={() => close(true)} className={`rounded py-2 ${focusStyle}`}>Solutions</a>
            <a href="#platform" onClick={() => close(true)} className={`rounded py-2 ${focusStyle}`}>Platform</a>
            <Link href="/privacy" className={`rounded py-2 ${focusStyle}`}>Privacy</Link>
            <Link href="/terms" className={`rounded py-2 ${focusStyle}`}>Terms</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
