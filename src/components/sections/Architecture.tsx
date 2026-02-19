import { ARCHITECTURE_DIAGRAM } from "@/lib/constants";

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="relative z-[1] py-24 px-6 sm:px-10 border-t border-border"
    >
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-heading mb-5">
          Enterprise-grade. Founder-speed.
        </h2>
        <p className="text-[17px] text-[#666] mb-12 max-w-[600px] mx-auto">
          Built on proven infrastructure patterns with modern AI capabilities
          layered in — not bolted on.
        </p>

        <div className="bg-card border border-border-hover rounded-[20px] p-8 sm:p-12 text-left">
          <pre className="font-mono text-[13px] text-subtle leading-8 whitespace-pre-wrap overflow-x-auto">
            {ARCHITECTURE_DIAGRAM}
          </pre>
        </div>
      </div>
    </section>
  );
}
