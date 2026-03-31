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
              SR Holdings Platform · Governance Kernel
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-heading mb-7 max-w-[820px]">
            The governance layer<br />
            <span className="bg-gradient-to-br from-accent via-accent-lighter to-accent-light bg-clip-text text-transparent">
              every tenant inherits.
            </span>
          </h1>

          <p className="animate-fade-in-up delay-200 text-[19px] leading-[1.65] text-muted max-w-[600px] mb-11">
            Faraday Capital Systems is the governance kernel and shared operating
            infrastructure of the SR Holdings platform. Every operating tenant —
            starting with Payroll Synergy Experts — runs on Faraday&apos;s policy
            enforcement, audit infrastructure, and execution environment.
          </p>

          <div className="animate-fade-in-up delay-350 flex flex-wrap gap-4">
            <a
              href="https://platform.faradaycapitalsystems.com"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all"
            >
              Access Platform
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#kernel" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-white/5 text-[#ccc] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all">
              Explore the Kernel
            </a>
            <a href="https://srholdingsllc.com/structure" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-white/5 text-[#ccc] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all">
              Platform Architecture ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── PLATFORM CONTEXT STRIP ────────────────────────────────── */}
      <section className="relative z-[1] py-20 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {[
              { label: "SR Holdings LLC", role: "Parent Company", desc: "Capital, governance policy, and platform ownership.", href: "https://srholdingsllc.com", active: false },
              { label: "Faraday", role: "Governance Kernel", desc: "Shared infrastructure. Every tenant runs here.", href: null, active: true },
              { label: "Payroll Synergy Experts", role: "First Operating Tenant", desc: "Payroll compliance intelligence on the Faraday platform.", href: "https://payrollsynergyexperts.com", active: false },
            ].map((entity) => (
              <div key={entity.label} className={`px-8 py-7 ${entity.active ? "bg-accent/10" : "bg-card"}`}>
                <p className={`font-mono text-[11px] uppercase tracking-[0.08em] mb-2 ${entity.active ? "text-accent-light" : "text-subtle"}`}>
                  {entity.role}
                </p>
                <p className={`font-semibold text-base mb-1 ${entity.active ? "text-white" : "text-heading"}`}>
                  {entity.label}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-3">{entity.desc}</p>
                {entity.href && (
                  <a href={entity.href} className="text-xs font-mono text-subtle hover:text-accent-light transition-colors">
                    {entity.href.replace("https://", "")} ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE KERNEL FUNCTIONS ───────────────────────────── */}
      <section id="kernel" className="relative z-[1] py-28 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">Governance Infrastructure</div>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading max-w-[560px]">
              Six functions. One control plane.
            </h2>
            <p className="mt-4 text-[17px] text-muted max-w-[600px] leading-relaxed">
              Faraday provides the governance infrastructure that every SR Holdings
              operating tenant inherits automatically. These are not standalone products —
              they are the functions of a shared kernel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { id: "Foundry", title: "Application Runtime", desc: "Governed application framework — build, test, and deploy tenant operations with compliance guardrails and real-time data connectors enforced at the platform level.", governance: "Policy enforcement at deploy time" },
              { id: "DataWeave", title: "Data Pipeline Governance", desc: "ETL and transformation pipelines for regulated data — reconciliation, normalization, and enrichment governed by audit-trail requirements at every transformation step.", governance: "Immutable data lineage tracking" },
              { id: "Gateway", title: "API Control Layer", desc: "Unified API gateway governing all connections between tenant systems, third-party providers, and regulatory reporting endpoints. Every request is logged and attributed.", governance: "Request audit and access control" },
              { id: "Agents", title: "Governed AI Operations", desc: "Autonomous agents for compliance monitoring, anomaly detection, and document processing — operating within defined policy boundaries with exception handling and human approval escalation.", governance: "Agent boundary enforcement" },
              { id: "Runtime", title: "Execution Environment", desc: "Secure, sandboxed execution environment for all tenant computations. Every execution is versioned, attributed, and produces an immutable audit record before the result is returned.", governance: "Full execution traceability" },
              { id: "Security", title: "Trust & Compliance", desc: "End-to-end encryption, role-based access control, SOC 2 readiness tooling, and automated compliance evidence collection — shared infrastructure, not per-tenant configuration.", governance: "Centralized trust enforcement" },
            ].map((fn) => (
              <div key={fn.id} className="bg-card border border-border-hover rounded-2xl px-7 py-9 hover:bg-card-hover hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300">
                <div className="font-mono text-[11px] text-accent tracking-[0.08em] uppercase mb-3">{fn.id}</div>
                <h3 className="text-xl font-semibold text-heading tracking-tight mb-3">{fn.title}</h3>
                <p className="text-sm leading-[1.7] text-muted mb-4">{fn.desc}</p>
                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-light flex-shrink-0" />
                  <span className="font-mono text-[11px] text-subtle tracking-wide">{fn.governance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ──────────────────────────────────────────── */}
      <section id="architecture" className="relative z-[1] py-24 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-heading mb-5">
            Kernel architecture.
          </h2>
          <p className="text-[17px] text-[#666] mb-12 max-w-[600px] mx-auto">
            Every tenant in the SR Holdings platform operates within this stack.
            Faraday provides compute, governance, and data persistence.
            Tenants provide the domain logic.
          </p>
          <div className="bg-card border border-border-hover rounded-[20px] p-8 sm:p-12 text-left">
            <pre className="font-mono text-[13px] text-subtle leading-8 whitespace-pre-wrap overflow-x-auto">{`┌─ SR HOLDINGS LLC ─────────────────────────────────────────┐
│  Governance Policy • Capital Allocation • Platform Rules │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─ FARADAY KERNEL ───────────────────────────────────┐ │
│  │                                                    │ │
│  │  ┌─ EDGE (Cloudflare) ──────────────────────────┐ │ │
│  │  │  DNS • CDN • WAF • TLS Termination           │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  ┌─ COMPUTE ──────────┐  ┌─ GOVERNANCE ────────┐ │ │
│  │  │  Gateway API        │  │  Policy Enforcement  │ │ │
│  │  │  Foundry Runtime    │  │  Approval Chains     │ │ │
│  │  │  DataWeave (ETL)    │  │  Audit Trail Engine  │ │ │
│  │  └────────┬────────────┘  └──────────┬──────────┘ │ │
│  │           │                          │            │ │
│  │  ┌────────▼──────────────────────────▼──────────┐ │ │
│  │  │         PostgreSQL + Redis                   │ │ │
│  │  │   Audit logs • State • Sessions • Evidence   │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ TENANT: Payroll Synergy Experts (PSE) ────────────┐ │
│  │  CHAP AI™ • Compliance Engine • Audit Reporting    │ │
│  │  Governed by Faraday · Owned by SR Holdings        │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ FUTURE TENANTS ────────────────────────────────────┐ │
│  │  New domains. Same kernel. Same governance.         │ │
│  └────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘`}</pre>
          </div>
        </div>
      </section>

      {/* ── PSE: FIRST TENANT ─────────────────────────────────────── */}
      <section className="relative z-[1] py-24 px-6 sm:px-10 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">First Production Tenant</div>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-heading mb-5">
                Payroll Synergy Experts
              </h2>
              <p className="text-[17px] text-muted leading-relaxed mb-6">
                PSE is the first operating company to run on the Faraday kernel.
                Its CHAP AI™ compliance engine validates payroll against IRS, DOL,
                and state requirements before execution — with every decision
                governed, traced, and auditable through Faraday&apos;s infrastructure.
              </p>
              <p className="text-[15px] text-muted leading-relaxed mb-8">
                PSE proves the governance model in one of the most regulated,
                high-stakes operational domains available. What works at PSE scale
                works for every future tenant on the platform.
              </p>
              <a href="https://payrollsynergyexperts.com" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-[14px] font-semibold bg-white/5 text-[#ccc] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all">
                Visit PSE ↗
              </a>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Compliance Validation", value: "Pre-run IRS, DOL WHD, and state regulatory checks via CHAP AI™" },
                { label: "Audit Infrastructure", value: "Every payroll action produces an immutable, timestamped governance record" },
                { label: "Platform Integration", value: "CHAP Guard embeds directly into UKG, ADP, and third-party platforms" },
                { label: "Governance Model", value: "Operates within Faraday's approval chains — not alongside them" },
              ].map((item) => (
                <div key={item.label} className="bg-card border border-border-hover rounded-xl px-6 py-4">
                  <p className="font-mono text-[11px] text-accent tracking-[0.08em] uppercase mb-1.5">{item.label}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative z-[1] py-24 px-6 sm:px-10 text-center border-t border-border">
        <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-5">
          Platform access.
        </h2>
        <p className="text-[17px] text-[#666] mb-9 max-w-[500px] mx-auto">
          Faraday infrastructure is available to SR Holdings operating tenants.
          For platform access or investor inquiries, contact SR Holdings directly.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://platform.faradaycapitalsystems.com" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all">
            Access Platform
          </a>
          <a href="https://srholdingsllc.com/investors" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-white/5 text-[#ccc] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all">
            SR Holdings — Investor Access ↗
          </a>
        </div>
      </section>
    </main>
  );
}
