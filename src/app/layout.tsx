import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faraday Capital Systems — Governance Kernel | SR Holdings Platform",
  description:
    "Faraday Capital Systems is the governance kernel and shared operating infrastructure of the SR Holdings platform. Policy enforcement, audit trails, agent governance, and execution environment for all SR Holdings operating tenants.",
  metadataBase: new URL("https://faradaycapitalsystems.com"),
  openGraph: {
    title: "Faraday Capital Systems — Governance Kernel",
    description:
      "Governance kernel and shared infrastructure for the SR Holdings platform. Every operating tenant — starting with Payroll Synergy Experts — runs on Faraday.",
    url: "https://faradaycapitalsystems.com",
    siteName: "Faraday Capital Systems",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Faraday Capital Systems — Governance Kernel",
    description:
      "Governance kernel and shared infrastructure for the SR Holdings platform.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans antialiased overflow-x-hidden">
        {/* Animated grid background */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            animation: "grid-pulse 8s ease-in-out infinite",
          }}
        />

        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white font-bold text-xs font-mono">
                F
              </div>
              <span className="font-semibold text-[17px] text-heading tracking-tight">
                Faraday Capital Systems
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#kernel" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
                Kernel
              </a>
              <a href="#architecture" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
                Architecture
              </a>
              <a href="https://srholdingsllc.com" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
                SR Holdings ↗
              </a>
              <a
                href="https://platform.faradaycapitalsystems.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all"
              >
                Access Platform
              </a>
            </div>
            <button className="md:hidden text-muted hover:text-heading" aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="relative z-[1] px-6 sm:px-10 pt-12 pb-7 border-t border-border">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-10">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-[10px] font-bold font-mono">F</div>
                  <span className="font-semibold text-[15px] text-heading">Faraday Capital Systems</span>
                </div>
                <p className="text-[13px] leading-[1.7] text-subtle max-w-[280px]">
                  Governance kernel and shared operating infrastructure for the SR Holdings platform.
                </p>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-muted/80 tracking-[0.06em] uppercase mb-3.5">Platform</div>
                <div className="flex flex-col gap-2">
                  <a href="https://platform.faradaycapitalsystems.com" className="text-[13px] text-subtle hover:text-foreground transition-colors">Dashboard</a>
                  <a href="https://foundry.faradaycapitalsystems.com" className="text-[13px] text-subtle hover:text-foreground transition-colors">Foundry</a>
                </div>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-muted/80 tracking-[0.06em] uppercase mb-3.5">SR Holdings</div>
                <div className="flex flex-col gap-2">
                  <a href="https://srholdingsllc.com" className="text-[13px] text-subtle hover:text-foreground transition-colors">SR Holdings LLC ↗</a>
                  <a href="https://srholdingsllc.com/structure" className="text-[13px] text-subtle hover:text-foreground transition-colors">Platform Structure</a>
                  <a href="https://srholdingsllc.com/investors" className="text-[13px] text-subtle hover:text-foreground transition-colors">Investors</a>
                </div>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-muted/80 tracking-[0.06em] uppercase mb-3.5">Tenants</div>
                <div className="flex flex-col gap-2">
                  <a href="https://payrollsynergyexperts.com" className="text-[13px] text-subtle hover:text-foreground transition-colors">PSE — Tenant One ↗</a>
                  <a href="mailto:info@faradaycapitalsystems.com" className="text-[13px] text-subtle hover:text-foreground transition-colors">Contact</a>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-dim">
              <span>© {new Date().getFullYear()} Faraday Capital Systems. Part of the SR Holdings platform.</span>
              <a href="https://srholdingsllc.com" className="text-subtle hover:text-foreground transition-colors">srholdingsllc.com ↗</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
