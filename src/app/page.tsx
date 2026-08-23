export default function FaradayPage() {
  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative z-[1] min-h-screen flex items-center px-6 sm:px-10 pt-36 pb-24">
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_60%)] blur-[60px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.06)_0%,transparent_60%)] blur-[60px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto w-full relative">
          <div className="animate-fade-in-up mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-xs font-semibold text-accent-light tracking-[0.06em] uppercase font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light" style={{ animation: "node-glow 3s infinite" }} />
              The control plane for governed AI and business systems
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-heading mb-7 max-w-[920px]">
            Your systems can act faster than you can supervise them.
          </h1>

          <p className="animate-fade-in-up delay-200 text-[19px] leading-[1.65] text-muted max-w-[640px] mb-7">
            Faraday defines the authority boundaries for AI and business systems,
            evaluates decisions against governed policy, and preserves the
            evidence of what was decided and why.
          </p>

          <p className="animate-fade-in-up delay-200 text-[19px] font-semibold tracking-[-0.01em] mb-11 bg-gradient-to-br from-accent via-accent-lighter to-accent-light bg-clip-text text-transparent">
            Capability is not authority.
          </p>

          <div className="animate-fade-in-up delay-350 flex flex-wrap gap-4">
            <a
              href="mailto:info@faradaycapitalsystems.com?subject=Faraday Waitlist Signup"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all"
            >
              Join the waitlist
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#solutions" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-white/5 text-[#ccc] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT WE SOLVE ─────────────────────────────────────────── */}
      <section id="solutions" className="relative z-[1] py-28 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">What We Solve</div>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading max-w-[820px]">
              The problem isn&apos;t more tools. It&apos;s who decided, and whether they were allowed to.
            </h2>
            <p className="mt-5 text-[17px] text-muted max-w-[780px] leading-relaxed">
              Every business runs on a stack of systems that weren&apos;t designed
              to talk to each other — and increasingly, on models and automation
              that can produce consequential decisions inside them. Access gets
              provisioned. Capability gets deployed. Authority gets assumed.
              Faraday is the governance layer that makes authority explicit and
              every governed decision reviewable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Make decisions attributable across systems",
                desc: "Business-critical work crosses multiple tools — approvals, handoffs, financial transactions, operational exceptions. Faraday evaluates those decisions against governed policy and records who or what decided, under which authority.",
              },
              {
                title: "Govern AI-assisted decisions, not just manual ones",
                desc: "As AI takes on more decisions across your stack — summarizing, routing, approving, generating — oversight grows harder faster than capability grows. Faraday provides the policy, authority boundaries, and audit trail to know what your AI systems were permitted to do.",
              },
              {
                title: "Replace governance that runs on vigilance",
                desc: "Spreadsheets tracking reconciliation. Email chains approving exceptions. Tribal knowledge managing handoffs. Faraday makes that governance explicit, versioned, and reviewable — across whichever function owns it.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-card border border-border-hover rounded-2xl px-7 py-9 hover:bg-card-hover hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300">
                <h3 className="text-xl font-semibold text-heading tracking-tight mb-3 leading-snug">{card.title}</h3>
                <p className="text-sm leading-[1.7] text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────────── */}
      <section id="products" className="relative z-[1] py-28 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">One governed platform. Specialized domains.</div>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading max-w-[720px]">
              Four expressions of the same principle.
            </h2>
            <p className="mt-5 text-[17px] text-muted max-w-[780px] leading-relaxed">
              Faraday products share a common belief: AI should make business
              systems more accountable, not more complex. Each product
              specializes in an operational domain and participates through the
              same identity, policy, and evidence infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                id: "FACP",
                title: "Faraday Accounting Control Plane",
                subtitle: "Governed accounting decisions.",
                desc: "FACP sits alongside your ERP to make controls explicit, evaluate transactions against governed policy, and keep finance teams continuously audit-ready.",
                relationship: "→ Decisions evaluated and recorded before close.",
                link: null as { label: string; href: string } | null,
              },
              {
                id: "PSE",
                title: "Payroll Synergy Experts",
                subtitle: "Governed payroll operations.",
                desc: "PSE validates payroll across entities and jurisdictions — surfacing errors, evaluating compliance checks, and keeping documentation audit-ready.",
                relationship: "→ Decisions evaluated and recorded before payroll is finalized.",
                link: { label: "payrollsynergyexperts.com →", href: "https://payrollsynergyexperts.com" },
              },
              {
                id: "Studio",
                title: "Creative Intelligence",
                subtitle: "Governed creative execution.",
                desc: "Studio is where operators produce brand-quality assets — decks, interfaces, content, campaigns — under defined brand standards, approval workflows, and version control.",
                relationship: "→ Faraday governs the rules. Studio executes against them.",
                link: null,
              },
              {
                id: "Beacon",
                title: "Faraday Beacon",
                subtitle: "Governed operational observation.",
                desc: "Beacon is the pre-system observation layer for operations and growth workflows — detecting when operational reality starts to drift before it's been recorded anywhere. Non-authoritative by design.",
                relationship: "→ Beacon surfaces signals. Faraday governs how those signals may be interpreted and routed by authorized systems.",
                link: null,
              },
            ].map((product) => (
              <div key={product.id} className="bg-card border border-border-hover rounded-2xl px-7 py-9 hover:bg-card-hover hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                <div className="font-mono text-[11px] text-accent tracking-[0.08em] uppercase mb-3">{product.id}</div>
                <h3 className="text-xl font-semibold text-heading tracking-tight mb-1.5 leading-snug">{product.title}</h3>
                <p className="font-mono text-[12px] text-subtle tracking-wide mb-4">{product.subtitle}</p>
                <p className="text-sm leading-[1.7] text-muted mb-3">{product.desc}</p>
                <p className="text-[13px] italic leading-[1.6] text-subtle mb-5">{product.relationship}</p>
                {product.link && (
                  <a
                    href={product.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-3 border-t border-border text-[13px] font-mono text-accent-light hover:text-white transition-colors"
                  >
                    {product.link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM ──────────────────────────────────────────────── */}
      <section id="platform" className="relative z-[1] pt-24 border-t border-border">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">Platform</div>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-heading mb-5">
              Identity, contracts, policy, authority, evidence.
            </h2>
            <p className="text-[17px] text-muted max-w-[720px] mx-auto leading-relaxed">
              Faraday products don&apos;t reimplement governance separately. They
              participate in a shared governed environment.
            </p>
          </div>

          <p className="text-[15px] text-muted leading-relaxed text-center">
            Identity and role-based authority · Explicit, versioned product
            contracts · Policy evaluation and decision support · Full audit
            trails · Encryption in transit and at rest · Controls that support
            audit readiness
          </p>
        </div>

        {/* Boundary band — full-bleed, absorbs the retired standalone anchor */}
        <div className="mt-20 w-full border-y border-accent/15 bg-accent/[0.04] py-20 px-6 sm:px-10">
          <div className="max-w-[1100px] mx-auto text-center">
            <p className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.03em]">
              <span className="text-heading">
                Faraday doesn&apos;t run your systems, and it doesn&apos;t act inside them.
              </span>
              <br />
              <span className="bg-gradient-to-br from-accent via-accent-lighter to-accent-light bg-clip-text text-transparent">
                It determines what they&apos;re authorized to decide — and
                preserves the record of what happened.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── VISION ────────────────────────────────────────────────── */}
      <section className="relative z-[1] py-28 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[900px] mx-auto">
          <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">Vision</div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-8 max-w-[780px]">
            From workflow governance to governed authority.
          </h2>

          <p className="text-[17px] text-muted leading-relaxed mb-12">
            Faraday&apos;s work today is grounded in workflows where the cost of
            error is highest — accounting, payroll, creative execution, and the
            revenue and operational workflows that drive growth. The pattern is
            the same everywhere: as software and AI take on more decisions across
            every function, the hardest problem stops being capability and
            becomes authority.
          </p>

          <blockquote className="border-l-2 border-accent pl-8 py-4 my-4">
            <p className="text-[clamp(1.5rem,3vw,2rem)] font-semibold italic leading-[1.4] tracking-[-0.02em] bg-gradient-to-br from-accent via-accent-lighter to-accent-light bg-clip-text text-transparent">
              The future of business operations isn&apos;t more tools. It&apos;s
              knowing what your systems are permitted to decide.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── WAITLIST ──────────────────────────────────────────────── */}
      <section className="relative z-[1] py-24 px-6 sm:px-10 text-center border-t border-border">
        <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-5 max-w-[820px] mx-auto">
          Be first to see Faraday as each product opens.
        </h2>
        <p className="text-[17px] text-muted mb-9 max-w-[640px] mx-auto leading-relaxed">
          Faraday products are rolling out as they&apos;re ready for real
          workflows. Join the waitlist for early access to FACP, PSE, Studio, or
          Beacon — and hear first when design partner programs open.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:info@faradaycapitalsystems.com?subject=Faraday Waitlist Signup"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all"
          >
            Join the waitlist
          </a>
        </div>
      </section>
    </main>
  );
}
