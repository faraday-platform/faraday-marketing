import { SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative z-[1] py-24 px-6 sm:px-10 text-center">
      <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-5">
        Ready to build?
      </h2>
      <p className="text-[17px] text-[#666] mb-9 max-w-[500px] mx-auto">
        Access the Faraday platform or explore Foundry to start building
        financial applications.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href={SITE.platformUrl}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all"
        >
          Access Platform
        </a>
        <a
          href={SITE.foundryUrl}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-white/5 text-[#ccc] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all"
        >
          Open Foundry
        </a>
      </div>
    </section>
  );
}
