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
              AI-native governance for business operations
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-heading mb-7 max-w-[920px]">
            Your business runs across dozens of systems.{" "}
            <span className="bg-gradient-to-br from-accent via-accent-lighter to-accent-light bg-clip-text text-transparent">
              Faraday makes sure they run right.
            </span>
          </h1>

          <p className="animate-fade-in-up delay-200 text-[19px] leading-[1.65] text-muted max-w-[640px] mb-11">
            Faraday verifies, governs, and controls the outputs of the systems
            you already run — payroll, finance, and operations — before errors
            become real problems.
          </p>

          <div className="animate-fade-in-up delay-350 flex flex-wrap gap-4">
            <a
              href="mailto:info@faradaycapitalsystems.com?subject=Faraday Waitlist Signup"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all"
            >
              Join the Waitlist
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#solutions" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-white/5 text-[#ccc] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all">
              See How It Works
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
              The problem isn&apos;t more tools. It&apos;s the work happening between them.
            </h2>
            <p className="mt-5 text-[17px] text-muted max-w-[780px] leading-relaxed">
              Every business runs on a stack of systems that weren&apos;t designed
              to talk to each other. The work that moves between them — approvals,
              handoffs, decisions, data that has to stay consistent — is where
              errors hide, where compliance slips, and where teams burn hours on
              manual work. Faraday is the intelligence and governance layer that
              watches, validates, and controls that work in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Keep work moving accurately between systems",
                desc: "Every business-critical workflow crosses multiple tools — pipeline updates, customer handoffs, financial transactions, operational approvals. Faraday monitors the work as it moves, catches inconsistencies as they happen, and keeps every system aligned.",
              },
              {
                title: "Govern AI-assisted decisions, not just manual ones",
                desc: "As AI takes on more actions across your stack — summarizing, routing, approving, generating — the oversight problem grows faster than the capability. Faraday gives you the controls, validation, and audit trails to trust what your AI systems are doing.",
              },
              {
                title: "Govern the work that shouldn't be manual",
                desc: "Spreadsheets tracking reconciliation. Email chains approving exceptions. Tribal knowledge managing handoffs. Faraday automates the governance work that currently runs on patience and vigilance — across whichever function owns it.",
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
            <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">Products</div>
            <p className="text-[15px] text-subtle leading-relaxed max-w-[780px] mb-5">
              Faraday sits above execution. These products run independently
              and send their outputs up for governance.
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading max-w-[720px]">
              Four expressions of the same philosophy.
            </h2>
            <p className="mt-5 text-[17px] text-muted max-w-[780px] leading-relaxed">
              Faraday products share a common belief: AI should make business
              systems more reliable, more accurate, and more governable — not
              more complex. That belief now shows up across four domains —
              accounting, payroll, creative execution, and revenue operations —
              with more to come as we extend into every workflow where the cost
              of error is high.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                id: "FACP",
                title: "Faraday Accounting Control Panel",
                subtitle: "Governed accounting workflows",
                desc: "FACP sits on top of your ERP to automate controls, monitor transactions, and keep finance teams continuously audit-ready. The first Faraday application of governance to a workflow where accuracy and accountability are non-negotiable.",
                relationship: "→ Outputs governed by Faraday for accuracy and completeness before close.",
                link: null as { label: string; href: string } | null,
              },
              {
                id: "PSE",
                title: "Payroll Synergy Experts",
                subtitle: "Governed payroll operations",
                desc: "PSE validates payroll across entities and jurisdictions — reducing errors, automating compliance checks, and keeping documentation audit-ready. Governance applied to one of the highest-stakes operational workflows in any business.",
                relationship: "→ Outputs governed by Faraday before payroll is finalized.",
                link: { label: "Visit payrollsynergyexperts.com →", href: "https://payrollsynergyexperts.com" },
              },
              {
                id: "Studio",
                title: "Creative Intelligence",
                subtitle: "Governed creative execution",
                desc: "Studio is where founders and operators produce brand-quality assets — decks, interfaces, content, campaigns — without a creative team. Faraday governance applies to how assets get made: brand standards, approval workflows, version control, and reusability across the business.",
                relationship: "→ Faraday governs the rules. Studio executes against them.",
                link: null,
              },
              {
                id: "Beacon",
                title: "Faraday Beacon",
                subtitle: "Governed operational intelligence",
                desc: "Currently engaged with design partners. Beacon is the governed intelligence layer for revenue, sales, and operations workflows — capturing signal across every system, validating integrity as it moves, and giving leadership trusted operational truth. Beacon applies Faraday's governance philosophy to the workflows that drive growth.",
                relationship: "→ Signals governed by Faraday for action and escalation.",
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
      <section id="platform" className="relative z-[1] py-24 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-heading mb-5">
              Built on a shared philosophy of governed intelligence.
            </h2>
            <p className="text-[17px] text-muted max-w-[720px] mx-auto leading-relaxed">
              Faraday products are built on a common set of principles —
              intelligent workflows, role-based controls, full audit trails,
              security-first integration. Over time, those principles become a
              shared platform across every Faraday application.
            </p>
          </div>

          <p className="text-[15px] text-muted leading-relaxed text-center">
            Workflow orchestration across ERP, HRIS, CRM, and operational
            systems · AI-driven automation and decision support · Role-based
            access and governance · Full audit trails · End-to-end encryption ·
            SOC 2 readiness tooling
          </p>
        </div>
      </section>

      {/* ── VISION ────────────────────────────────────────────────── */}
      <section className="relative z-[1] py-28 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[900px] mx-auto">
          <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">Vision</div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-8 max-w-[780px]">
            From workflow governance to governed intelligence.
          </h2>

          <p className="text-[17px] text-muted leading-relaxed mb-6">
            Faraday&apos;s work today is grounded in workflows where the cost of
            error is highest — accounting, payroll, creative execution, and the
            revenue and operational workflows that drive growth. But the
            pattern is the same everywhere: as AI takes on more decisions, more
            actions, and more execution across every function of the business,
            the hardest problem stops being capability and becomes oversight.
          </p>

          <p className="text-[17px] text-muted leading-relaxed mb-12">
            We&apos;re building the intelligence and governance layer for that
            future — a place where every workflow, every system, and every
            AI-driven action stays accurate, accountable, and aligned with how
            your business actually runs.
          </p>

          <blockquote className="border-l-2 border-accent pl-8 py-4 my-4">
            <p className="text-[clamp(1.5rem,3vw,2rem)] font-semibold italic leading-[1.4] tracking-[-0.02em] bg-gradient-to-br from-accent via-accent-lighter to-accent-light bg-clip-text text-transparent">
              The future of business operations isn&apos;t more tools. It&apos;s
              governed intelligence.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── FOUNDER ───────────────────────────────────────────────── */}
      <section className="relative z-[1] py-28 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[900px] mx-auto">
          <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">Founder</div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-8 max-w-[780px]">
            Built by operators who&apos;ve lived inside the workflows that matter.
          </h2>
          <p className="text-[17px] text-muted leading-relaxed">
            Faraday was built by operators who know what happens when critical
            workflows break across disconnected systems — because we&apos;ve been
            on the other side of those breakdowns. Our first products are shaped
            in accounting, payroll, and creative execution, but the mission is
            broader: helping businesses use AI in a practical, governed way
            across every workflow that keeps the company running.
          </p>
        </div>
      </section>

      {/* ── ANCHOR ────────────────────────────────────────────────── */}
      <section className="relative z-[1] py-28 px-6 sm:px-10 text-center border-t border-border">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.04em]">
            <span className="text-heading">
              Faraday doesn&apos;t run your systems.
            </span>
            <br />
            <span className="bg-gradient-to-br from-accent via-accent-lighter to-accent-light bg-clip-text text-transparent">
              It makes sure they&apos;re running correctly — and stops them
              when they&apos;re not.
            </span>
          </h2>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative z-[1] py-24 px-6 sm:px-10 text-center border-t border-border">
        <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-5 max-w-[820px] mx-auto">
          Be first to see Faraday as each product opens.
        </h2>
        <p className="text-[17px] text-muted mb-9 max-w-[640px] mx-auto leading-relaxed">
          Faraday products are rolling out as they&apos;re ready for real
          workflows. Join the waitlist to get early access to FACP, PSE,
          Studio, or Beacon — and hear first when design partner programs open.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:info@faradaycapitalsystems.com?subject=Faraday Waitlist Signup"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all"
          >
            Join the Waitlist
          </a>
          <a
            href="https://platform.faradaycapitalsystems.com"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-white/5 text-[#ccc] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all"
          >
            Access Platform
          </a>
        </div>
      </section>
    </main>
  );
}
