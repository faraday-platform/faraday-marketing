export const SITE = {
  name: "Faraday Capital Systems",
  description:
    "Faraday builds governed AI systems for the workflows that keep your business running — the work that moves between your tools, the decisions that need oversight, and the handoffs that break when systems don't talk to each other.",
  tagline: "AI-native governance for business operations.",
  url: "https://faradaycapitalsystems.com",
  platformUrl: "https://platform.faradaycapitalsystems.com",
  contactEmail: "info@faradaycapitalsystems.com",
} as const;

export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Platform", href: "#platform" },
] as const;

export const PRODUCTS = [
  {
    label: "FACP",
    title: "Faraday Accounting Control Plane",
    subtitle: "Governed accounting workflows",
    description:
      "FACP sits on top of your ERP to automate controls, monitor transactions, and keep finance teams continuously audit-ready. The first Faraday application of governance to a workflow where accuracy and accountability are non-negotiable.",
    link: null,
  },
  {
    label: "PSE",
    title: "Payroll Synergy Experts",
    subtitle: "Governed payroll operations",
    description:
      "PSE validates payroll across entities and jurisdictions — reducing errors, automating compliance checks, and keeping documentation audit-ready. Governance applied to one of the highest-stakes operational workflows in any business.",
    link: "https://payrollsynergyexperts.com",
  },
  {
    label: "Studio",
    title: "Creative Intelligence",
    subtitle: "Governed creative execution",
    description:
      "Studio is where strategy becomes visible. A governed AI environment for founders, operators, and brand teams to turn ideas into polished brand assets, product interfaces, and presentation materials — with the same discipline for consistency, reusability, and quality that Faraday brings to operational workflows.",
    link: null,
  },
  {
    label: "Beacon",
    title: "Faraday Beacon",
    subtitle: "Governed operational intelligence",
    description:
      "Currently engaged with design partners. Beacon is the governed intelligence layer for revenue, sales, and operations workflows — capturing signal across every system, validating integrity as it moves, and giving leadership trusted operational truth. Beacon applies Faraday's governance philosophy to the workflows that drive growth.",
    link: null,
  },
] as const;

export const ARCHITECTURE_DIAGRAM = `┌─ EDGE (Cloudflare) ───────────────────────────────────────┐
│  DNS • CDN • WAF • TLS Termination                      │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─ COMPUTE ──────────┐   ┌─ AI LAYER ──────────────┐ │
│  │  Gateway API        │   │  Agents (autonomous ops)  │ │
│  │  Workflow Runtime   │   │  DataWeave (ETL + ML)     │ │
│  │  Platform (Next.js) │   │  Security (compliance AI) │ │
│  └────────┬────────────┘   └──────────┬────────────────┘ │
│           │                           │                  │
│  ┌────────▼───────────────────────────▼────────────────┐ │
│  │              PostgreSQL + Redis                     │ │
│  │         Audit logs • State • Sessions               │ │
│  └─────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘`;
