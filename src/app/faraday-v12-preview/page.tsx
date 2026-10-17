import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faraday V12 — Demonstration Sequence",
  description: "Written sequence for the synthetic Faraday Platform governance demonstration.",
  robots: { index: false, follow: false },
};

const transcript = [
  "Dashboard: examine synthetic policy activity and the Studio product card.",
  "Governance: open the DEMO-001 request and inspect identity and scope.",
  "Shield policy SYN-SHIELD-042: ASK requires a separate human decision and does not grant access.",
  "Synthetic reviewer: independently approves the illustrative request.",
  "Evidence: inspect the associated synthetic audit record SYN-EVD-001.",
  "Return to the Faraday Platform dashboard showing FACP, Studio, Beacon, and PSE.",
];

export default function FaradayV12MediaPreview() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-36 sm:px-10">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-indigo-300">
        Conceptual demonstration · synthetic data
      </p>
      <h1 className="mb-4 text-3xl font-semibold text-white md:text-5xl">Faraday Platform in motion</h1>
      <p className="mb-8 max-w-3xl text-base leading-relaxed text-zinc-400">
        A 38-second illustration of the request → Shield ASK → separate human review → evidence sequence.
        This is a synthetic visual demonstration, not a live product session or a claim of production readiness.
      </p>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e1c] shadow-2xl">
        <video
          className="block aspect-video w-full bg-[#0a0e1c] object-contain"
          controls
          playsInline
          preload="none"
          poster="/media/faraday-v12/faraday_v12_poster.jpg"
          aria-label="Faraday Platform conceptual governance workflow demonstration, 38 seconds"
        >
          <source src="/media/faraday-v12/faraday_v12_website.webm" type="video/webm" />
          <source src="/media/faraday-v12/faraday_v12_website.mp4" type="video/mp4" />
          <p>The video is unavailable. The description and sequence are provided below.</p>
        </video>
      </div>
      <p className="mt-3 text-sm text-zinc-400">
        Play on demand. The video remains paused until you choose Play,
        including when your device requests reduced motion.
      </p>
      <section className="mt-12 max-w-4xl">
        <h2 className="mb-4 text-2xl font-semibold text-white">Accessible sequence description</h2>
        <ol className="list-decimal space-y-3 pl-6 text-zinc-300">
          {transcript.map((item) => <li key={item}>{item}</li>)}
        </ol>
        <p className="mt-6 text-sm text-zinc-500">
          This written sequence describes the silent visual demonstration. All identities, requests,
          policies, decisions, and evidence shown are synthetic.
        </p>
      </section>
    </main>
  );
}
