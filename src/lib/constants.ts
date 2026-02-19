export const SITE = {
  name: "Faraday Capital Systems",
  description:
    "AI-native platform for financial operations — connecting data pipelines, compliance automation, and intelligent decisioning into a single operational layer.",
  url: "https://faradaycapitalsystems.com",
  platformUrl: "https://platform.faradaycapitalsystems.com",
  foundryUrl: "https://foundry.faradaycapitalsystems.com",
} as const;

export const NAV_LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Architecture", href: "#architecture" },
] as const;

export const CAPABILITIES = [
  {
    label: "Foundry",
    title: "Application Framework",
    description:
      "Build, test, and deploy financial applications with pre-built compliance guardrails and real-time data connectors.",
    link: "https://foundry.faradaycapitalsystems.com",
  },
  {
    label: "DataWeave",
    title: "Data Pipeline Engine",
    description:
      "ETL and transformation pipelines designed for financial data — reconciliation, normalization, and enrichment at scale.",
    link: null,
  },
  {
    label: "Gateway",
    title: "API & Integration Layer",
    description:
      "Unified API gateway for connecting internal systems, third-party providers, and regulatory reporting endpoints.",
    link: null,
  },
  {
    label: "Agents",
    title: "AI Operations",
    description:
      "Autonomous agents for compliance monitoring, anomaly detection, document processing, and operational intelligence.",
    link: null,
  },
  {
    label: "Runtime",
    title: "Execution Environment",
    description:
      "Secure, sandboxed execution environment for financial computations with full audit trails and version control.",
    link: null,
  },
  {
    label: "Security",
    title: "Trust & Compliance",
    description:
      "End-to-end encryption, role-based access, SOC 2 readiness tooling, and automated compliance evidence collection.",
    link: null,
  },
] as const;

export const ARCHITECTURE_DIAGRAM = `┌─ EDGE (Cloudflare) ───────────────────────────────────────┐
│  DNS • CDN • WAF • TLS Termination                      │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─ COMPUTE ──────────┐   ┌─ AI LAYER ──────────────┐ │
│  │  Gateway API        │   │  Agents (autonomous ops)  │ │
│  │  Foundry Runtime    │   │  DataWeave (ETL + ML)     │ │
│  │  Platform (Next.js) │   │  Security (compliance AI) │ │
│  └────────┬────────────┘   └──────────┬────────────────┘ │
│           │                           │                  │
│  ┌────────▼───────────────────────────▼────────────────┐ │
│  │              PostgreSQL + Redis                     │ │
│  │         Audit logs • State • Sessions               │ │
│  └─────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘`;
