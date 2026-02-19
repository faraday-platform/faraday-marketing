import { ArrowUpRight } from "lucide-react";
import { CAPABILITIES } from "@/lib/constants";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative z-[1] py-28 px-6 sm:px-10"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">
            Platform Capabilities
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading max-w-[500px]">
            One platform. Full stack.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.label}
              className="bg-card border border-border-hover rounded-2xl px-7 py-9 hover:bg-card-hover hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="font-mono text-[11px] text-accent tracking-[0.08em] uppercase mb-3">
                {cap.label}
              </div>
              <h3 className="text-xl font-semibold text-heading tracking-tight mb-3">
                {cap.title}
              </h3>
              <p className="text-sm leading-[1.7] text-muted mb-4">
                {cap.description}
              </p>
              {cap.link && (
                <a
                  href={cap.link}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-light hover:text-accent-lighter transition-colors"
                >
                  Open {cap.label}
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
