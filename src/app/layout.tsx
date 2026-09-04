import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const INVESTOR_INTEREST_URL =
  "https://www.srholdingsllc.com/investors?venture=faraday&source=faraday-marketing#investor-form";

export const metadata: Metadata = {
  title: "Faraday Capital Systems — The control plane for governed AI and business systems",
  description:
    "Faraday defines the authority boundaries for your AI and business systems, evaluates decisions against governed policy, and preserves the evidence. Accounting, payroll, creative execution, and revenue operations.",
  metadataBase: new URL("https://faradaycapitalsystems.com"),
  openGraph: {
    title: "Faraday Capital Systems — The control plane for governed AI and business systems",
    description:
      "Faraday defines the authority boundaries for your AI and business systems, evaluates decisions against governed policy, and preserves the evidence. Accounting, payroll, creative execution, and revenue operations.",
    url: "https://faradaycapitalsystems.com",
    siteName: "Faraday Capital Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faraday Capital Systems — The control plane for governed AI and business systems",
    description:
      "Faraday defines the authority boundaries for your AI and business systems, evaluates decisions against governed policy, and preserves the evidence. Accounting, payroll, creative execution, and revenue operations.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans antialiased overflow-x-hidden">
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            animation: "grid-pulse 8s ease-in-out infinite",
          }}
        />

        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white font-bold text-xs font-mono">
                F
              </div>
              <span className="font-semibold text-[17px] text-heading tracking-tight">
                Faraday Capital Systems
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a href="#solutions" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
                Solutions
              </a>
              <a href="#products" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
                Products
              </a>
              <a href="#platform" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
                Platform
              </a>
              <a
                href={INVESTOR_INTEREST_URL}
                className="text-sm font-medium text-accent-light hover:text-white transition-colors"
              >
                Investor Interest
              </a>
              <a
                href="mailto:info@faradaycapitalsystems.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all"
              >
                Contact
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

        <footer className="relative z-[1] px-6 sm:px-10 pt-12 pb-7 border-t border-border">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-10">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-[10px] font-bold font-mono">F</div>
                  <span className="font-semibold text-[15px] text-heading">Faraday Capital Systems</span>
                </div>
                <p className="text-[13px] leading-[1.7] text-subtle max-w-[280px]">
                  The control plane for governed AI and business systems.
                </p>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-muted/80 tracking-[0.06em] uppercase mb-3.5">Products</div>
                <div className="flex flex-col gap-2">
                  <a href="#products" className="text-[13px] text-subtle hover:text-foreground transition-colors">FACP</a>
                  <a href="https://payrollsynergyexperts.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-subtle hover:text-foreground transition-colors">PSE ↗</a>
                  <a href="#products" className="text-[13px] text-subtle hover:text-foreground transition-colors">Studio</a>
                  <a href="#products" className="text-[13px] text-subtle hover:text-foreground transition-colors">Beacon</a>
                </div>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-muted/80 tracking-[0.06em] uppercase mb-3.5">Company</div>
                <div className="flex flex-col gap-2">
                  <a href={INVESTOR_INTEREST_URL} className="text-[13px] text-subtle hover:text-foreground transition-colors">Investor Interest</a>
                  <a href="mailto:info@faradaycapitalsystems.com" className="text-[13px] text-subtle hover:text-foreground transition-colors">Contact</a>
                </div>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-muted/80 tracking-[0.06em] uppercase mb-3.5">Legal</div>
                <div className="flex flex-col gap-2">
                  <a href="/privacy" className="text-[13px] text-subtle hover:text-foreground transition-colors">Privacy</a>
                  <a href="/terms" className="text-[13px] text-subtle hover:text-foreground transition-colors">Terms</a>
                  <a href="/security" className="text-[13px] text-subtle hover:text-foreground transition-colors">Security</a>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-dim">
              <span>© {new Date().getFullYear()} Faraday Capital Systems. All rights reserved.</span>
              <span className="text-subtle">The control plane for governed AI and business systems.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
