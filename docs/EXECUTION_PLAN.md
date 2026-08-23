# Faraday Marketing — Execution Plan

**Repo:** faraday-platform/faraday-marketing
**Baseline:** origin/main @ a6bfd41 (post-#13)
**Updated:** 2026-08-23

---

## Phase 0 — Complete

| PR | Title | Notes |
|---|---|---|
| #8 | fix: remove unearned platform capability claims | E2EE, SOC 2 readiness tooling, workflow orchestration, AI-driven automation removed from `page.tsx`. Legal routes untouched. |
| #9 | fix: remove 502 platform links and dead About anchor | 5 files. `platform.faradaycapitalsystems.com` purged repo-wide. `CTA.tsx` forced into scope by `next build`'s type-check. |
| #11 | chore: remove orphaned component tree | `src/components/**` + `src/lib/constants.ts`. 386 deletions. CSS diffed: 9 selectors dropped, none on any live page. |
| #12 | feat: homepage positioning refresh (copy v2.1) | Six sections. Founder + standalone Anchor deleted; anchor statement folded into the Platform boundary band. All three "AI-native governance" occurrences retired, including title-cased twitter fields. |
| #13 | feat: OG image, favicon, social metadata, security headers | Satori render verified by request. Four headers live on production. Card resolves end-to-end via `metadataBase`. |

**Production state:** v2.1 positioning, no dead links, no unearned claims,
working social card, favicon, baseline security headers.

---

## Phase 1 — PR #10 waitlist (only remaining engineering path)

PR #10 is open, CLEAN, Vercel SUCCESS (build only). Blocked on provider setup.
`requireEnv` fails closed — without env vars the route returns 500 rather than
half-writing. Merging before the submit test would ship a non-functional
conversion path.

### 1.1 Provider setup — no engineering

**Start with Resend.** DNS propagation is the only step measured in hours;
everything else is minutes. Run the rest in parallel while it propagates.

- [ ] **Resend** — verify sending domain, add DNS records, wait for propagation.
      `RESEND_FROM_EMAIL` must be on the verified domain or sends fail.
- [ ] **Supabase** — create project, apply `supabase/migrations/*_waitlist.sql`,
      confirm the `(lower(email), product)` unique index exists and RLS is on
      with zero policies.
- [ ] **Upstash** — create Redis DB, capture REST URL + token.
- [ ] **hCaptcha** — create sitekey. For preview testing either add the preview
      hostname to the allowlist or use the test sitekey
      `10000000-ffff-ffff-ffff-000000000001`.
- [ ] **Slack** — create incoming webhook, capture URL.

### 1.2 Vercel configuration

- [ ] Set nine env vars across **Production, Preview, and Development**:
      `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
      `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`,
      `RESEND_API_KEY`, `RESEND_FROM_EMAIL`,
      `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`, `HCAPTCHA_SECRET`,
      `SLACK_WAITLIST_WEBHOOK_URL`
- [ ] Generate a deployment protection bypass secret (see DEPLOY-01).
      Do **not** disable protection wholesale.

### 1.3 Submit test — on the #10 preview, using the bypass secret

**Bypass mechanics:**
- curl-driven → `x-vercel-protection-bypass` header
- browser-driven → same header **plus** `x-vercel-set-bypass-cookie: true`,
  or the form's `fetch` to `/api/waitlist` is unauthorized even though the page
  loaded

| # | Test | Expected |
|---|---|---|
| 1 | Valid submit | 200; row written; confirmation email received; Slack fires |
| 2 | Same email + same product | 200 `{ duplicate: true }`; no second email; no second Slack; no new row |
| 3 | Same email, different product | 200; new row (proves the `(email, product)` index) |
| 4 | Invalid email | 400; no row |
| 5 | Six submits in 10 min | 429 on the sixth |
| 6 | Land on `/?utm_source=test`, click through, submit | `utm_source` NULL — this is UTM-01, not a defect. **Record the NULL** as UTM-01's before-state. |

**Item 5 care:** the limiter keys on `x-forwarded-for`, so all six must share one
apparent IP. Use a **distinct email/product pair per attempt** so a 429 is not
confused with a 23505 duplicate 200. The Upstash window is 10 minutes; a retry
inside it is still limited.

### 1.4 Merge

- [ ] Re-run the dry-run merge of #10 against current main. An earlier check
      showed clean auto-merge with both CTA hrefs and v2.1 labels surviving, but
      main has moved since (#12, #13). Verify the merged tree semantically, not
      just the exit code.
- [ ] Merge #10.
- [ ] Verify on production: submit once, confirm row + email + Slack.

---

## Phase 2 — Gated on #10 merging

### UTM-01 — capture attribution on first landing

**Problem:** `WaitlistForm` reads UTM params on `/waitlist` load only. A visitor
landing on `/` with UTMs and clicking through arrives with none. Attribution is
lost on the common path. Deferred from #10 (`page.tsx` scoped to hrefs) and from
#12 (`WaitlistForm` was not on main at the time).

**Scope:**
- `src/app/AttributionCapture.tsx` (new)
- `src/app/layout.tsx` (mount only)

**Requirements:**
- Client component, renders null.
- On mount, read `utm_source/medium/campaign/term/content`, `document.referrer`,
  `window.location.pathname` from the **current** URL.
- Write to `sessionStorage` **only if no attribution key is set**. First-touch
  wins; do not overwrite on later navigations.
- Must match `WaitlistForm`'s existing `sessionStorage` key and value shape
  exactly. Inspect it first. If shapes cannot be matched without editing
  `WaitlistForm`, **stop** — that file is out of scope.
- Mount inside a `<Suspense>` boundary. `useSearchParams()` without one is a
  build-time error during static generation in Next 15; a misplaced boundary
  silently flips `/`, `/privacy`, `/terms`, `/security` from ○ Static to
  ƒ Dynamic.

**Verify:** post the build route table and assert all four routes are still
○ Static — a passing build does not catch this. Then functional: land on
`/?utm_source=test&utm_campaign=x` → click through → submit → row carries
`utm_source=test`. Compare against the NULL recorded in 1.3 item 6.

### SEC-02 — Content Security Policy

Deferred out of #13. Origins are not knowable until #10's providers are live.

- [ ] Enumerate: hCaptcha (script + frame + connect, `hcaptcha.com` and
      `*.hcaptcha.com`), Supabase (REST + realtime), Vercel preview-injected
      scripts, fonts (confirm self-hosted vs remote). Resend is server-side only
      and should need **no** browser-facing directive — if it does, that is a
      finding.
- [ ] Ship `Content-Security-Policy-Report-Only` first. Never enforcing on day one.
- [ ] Collect violations across a **real `/waitlist` submit**, not a page load.
      hCaptcha's challenge frame only fires on interaction.
- [ ] Promote to enforcing after a clean report window.
- [ ] `'unsafe-inline'` on `script-src` defeats the purpose. If Next's inline
      runtime forces it, use a nonce.

---

## Phase 3 — Independent, unscheduled

### LEGAL-01 — `/terms` service description

**File:** `src/app/terms/page.tsx`
**String:** "Faraday provides AI-powered governance and workflow systems for
business operations."
**Status:** Flagged. Legal track. **Do not edit in a marketing PR.**

Now that v2.1 ships, marketed scope and contracted scope describe different
products. "Workflow systems" implies in-system operation — the exact frame v2.1
removes from marketing. A mismatch between marketed and contracted scope is what
makes a positioning claim actionable rather than merely stale.

Route through the Termly (Pro+, two-site) replacement. A service description
change alters contract scope; it is not copy polish.

Draft for counsel to review, not to paste:

> Faraday provides governance software that evaluates decisions made by customer
> systems against customer-defined policy and preserves records of those
> evaluations. Faraday does not operate or execute within customer systems.

### LAYOUT-01 — mobile horizontal scroll

**Status:** Documented. Pre-existing; not introduced by #12.

At 375px the hero decorative blur (`src/app/page.tsx:7` — `absolute`,
`left-[5%]`, `w-[400px]`) extends to 418px. `body` has `overflow-x-hidden` but
the scroll is on the viewport axis, so the page genuinely pans (`scrollX` reaches
58). This also narrows the Platform boundary band to 360px on mobile — a symptom,
not a band defect.

**Fix:** clamp the blur — `w-[280px] sm:w-[400px]` — or wrap the decorative layer
in a `relative overflow-hidden` container.

**Do not** use `overflow-x-hidden` on `html`. It suppresses the symptom and
breaks `position: sticky` for any descendant added later.

### DEPLOY-01 — preview deployment protection

Vercel serves an SSO page for preview URLs, so runtime checks against a preview
measure Vercel's login page, not the app. Observed in #13: the SSO page
advertises `referrer-policy: origin-when-cross-origin` while the app sets
`strict-origin-when-cross-origin`.

**Resolution:** bypass secret; mechanics in 1.2 and 1.3. Do not disable
protection.

### Favicon residual — optional, low priority

`src/app/icon.svg` closed the observed console error — Chrome reads the link tag
and never requests `/favicon.ico`. Clients that hardcode the legacy path still
404. Adding `src/app/favicon.ico` closes it at the cost of a second asset that
can drift.

---

## Out of scope for this repo

PSE items (MKT-02 CHAP AI™ standardization, the `docs/gtm-held` disposition,
entity reconciliation, ORG-01 cross-org ownership) are tracked separately and are
not recorded here. `signal-interface/pse-marketing` is mid-transition; those
findings land wherever that repo settles.

---

## Critical path

```
Resend DNS (hours)
  → remaining providers (parallel, minutes)
  → 9 env vars + bypass secret
  → 6-item submit test
  → merge #10
  → UTM-01
  → SEC-02
```

Everything else is a legal-track item or unscheduled cleanup.
