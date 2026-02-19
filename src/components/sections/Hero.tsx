import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative z-[1] min-h-screen flex items-center px-6 sm:px-10 pt-36 pb-24">
      {/* Gradient orbs */}
      <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_60%)] blur-[60px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.06)_0%,transparent_60%)] blur-[60px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full relative">
        {/* Badge */}
        <div className="animate-fade-in-up mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-xs font-semibold text-accent-light tracking-[0.06em] uppercase font-mono">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-light"
              style={{ animation: "node-glow 3s infinite" }}
            />
            AI-Powered Financial Infrastructure
          </span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up delay-100 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-heading mb-7 max-w-[800px]">
          Capital systems
          <br />
          <span className="bg-gradient-to-br from-accent via-accent-lighter to-accent-light bg-clip-text text-transparent">
            built for velocity.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 text-[19px] leading-[1.65] text-muted max-w-[560px] mb-11">
          {SITE.description}
        </p>

        {/* Buttons */}
        <div className="animate-fade-in-up delay-350 flex flex-wrap gap-4">
          <a
            href={SITE.platformUrl}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all"
          >
            Access Platform
            <ArrowRight size={16} />
          </a>
          <a
            href={SITE.foundryUrl}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-white/5 text-[#ccc] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all"
          >
            Open Foundry
          </a>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-white/5 text-[#ccc] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
