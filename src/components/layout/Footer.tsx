import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-[1] px-6 sm:px-10 pt-12 pb-7 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-[10px] font-bold font-mono">
                F
              </div>
              <span className="font-semibold text-[15px] text-heading">
                {SITE.name}
              </span>
            </div>
            <p className="text-[13px] leading-[1.7] text-subtle max-w-[280px]">
              AI-native financial infrastructure platform.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <div className="font-mono text-xs font-semibold text-muted/80 tracking-[0.06em] uppercase mb-3.5">
              Platform
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={SITE.platformUrl}
                className="text-[13px] text-subtle hover:text-foreground transition-colors"
              >
                Dashboard
              </a>
              <a
                href={SITE.foundryUrl}
                className="text-[13px] text-subtle hover:text-foreground transition-colors"
              >
                Foundry
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <div className="font-mono text-xs font-semibold text-muted/80 tracking-[0.06em] uppercase mb-3.5">
              Company
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://payrollsynergyexperts.com"
                className="text-[13px] text-subtle hover:text-foreground transition-colors"
              >
                PSE
              </a>
              <a
                href="mailto:info@faradaycapitalsystems.com"
                className="text-[13px] text-subtle hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-5 text-center text-xs text-dim">
          &copy; {new Date().getFullYear()} Faraday Capital Systems. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
