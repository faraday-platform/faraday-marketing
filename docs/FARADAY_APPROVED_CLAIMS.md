# Faraday Approved Claims — Forbidden Frames

**Version:** 2.2
**Status:** Reconstructed 2026-08-23 from amendments agreed in working session.
No prior canonical text existed. Review before treating as settled.
**Scope:** All public copy in this repository. See ORG-01 in the execution plan
for the open question of whether this doctrine extends to PSE surfaces.

---

## Core constraint

Faraday governs decisions. **Faraday does not execute inside customer systems.**

Any diagram, arrow, or sentence placing Faraday between a customer system and its
own output is a violation, regardless of wording.

---

## Banned nouns and phrases

- "computational action", "infrastructure for action", "action layer"
- "controls the outputs", "stops them", "blocks", "intervenes", "remediates"
- "autonomous agents", "agentic execution", "runs your workflows"
- "Multi-Tenant Enterprise SaaS Platform"
- Any claim sourced from repository contents rather than shipped capability
- SOC 2 stated as a certification.
  Permitted: "controls that support audit readiness"
- "End-to-end encryption" unless literally true (provider cannot read plaintext).
  Permitted: "encryption in transit and at rest"

---

## Banned names on all public surfaces

Including metadata, OG tags, alt text, and navigation:

Foundry · DataWeave · Gateway · Runtime · Shield · Orbit · Replay Ledger ·
CIE · Freedom · faraday-governance · any repository name

---

## Verbs

**Approved:** authorizes · evaluates · validates · constrains · defines ·
governs · records · observes · surfaces · attributes

**Banned:** enforces · controls · stops · blocks · acts · remediates · intervenes

---

## `execute` / `execution` — scoped, not banned

**Banned** when Faraday is the subject, or the object is a customer system.

- ✗ "Faraday executes controls in your ERP"
- ✗ "governed execution layer" (Faraday-level)

**Permitted** when a bounded Faraday product is the subject acting within its own
product function, and the governance/execution split is stated.

- ✓ "Faraday governs the rules. Studio executes against them."
- ✓ "Governed creative execution" (Studio)

**Test:** Does the sentence place Faraday inside a customer system's execution
path? If no, `execute` is legitimate and often clearer than the alternatives.

---

## Context-sensitive terms — review triggers, not bans

Same subject/object discipline as `execute`.

### `AI-powered`
- **Review** when Faraday or the platform is the subject being defined.
  ✗ "Faraday provides AI-powered governance systems"
- **OK** describing a bounded product capability.
  ✓ "Studio's AI-powered asset generation runs under brand standards"

### `workflow systems` / `workflow platform`
- **Review** when Faraday is the subject — implies Faraday operates the workflow.
  ✗ "Faraday provides workflow systems for business operations"
- **OK** describing customer or third-party systems.
  ✓ "governs decisions made in the workflow systems you already run"

**Mandatory review surfaces:** marketing sites, sales collateral, procurement
responses, MSAs/Terms/DPAs/SOWs, investor materials.

**Test:** Is Faraday the grammatical subject of the capability? If yes, route to
review. If Faraday governs something else's capability, the phrase is fine.

---

## Trademark

`®` is a false claim until a registration certificate issues. **Hard ban.**

---

## Entity

SR Holdings LLC belongs in the Privacy/Terms footer only — not in marketing copy,
diagrams, or product surfaces. Entity reconciliation is unresolved; see the
execution plan.

---

## Verification discipline

Rules learned from the #8–#13 series. These are how the doctrine gets enforced,
not optional practice.

1. **Retirement greps assert a negative and must be case-insensitive.**
   Case-sensitivity converts a real hit into a silent pass. In #12,
   `"AI-Native Governance for Business Operations"` in twitter metadata would
   have passed a case-sensitive check while shipping retired positioning.

2. **A green build proves compilation, not runtime.** `ImageResponse` compiles
   and throws at render. Env-dependent routes build clean and return 500.
   Request the thing.

3. **Preview deployments behind Vercel protection are not evidence.** The SSO
   page serves its own headers. In #13, counting preview output would have
   "confirmed" `referrer-policy: origin-when-cross-origin`, a value the app
   never sets.

4. **Evidence before assertion, including inside prompt bodies.** A prompt body
   inherits whatever confidence its source had. This failed twice in the series
   — a file's contents asserted without grepping it, and a branch flagged as
   in-flight without checking for unique commits.

5. **Full-phrase grep fails on JSX line wrapping.** Search distinctive fragments,
   then match the rendered phrase. A phrase split across three lines is still
   that phrase.

---

## Copy baseline

The current homepage copy is frozen as **v2.1**, shipped in PR #12. Section
structure: Hero → What We Solve → Products → Platform → Vision → Waitlist.

Hero tagline: **Capability is not authority.**
Category frame: **The control plane for governed AI and business systems.**
