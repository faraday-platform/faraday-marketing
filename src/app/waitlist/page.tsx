import { Suspense } from "react";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistPage() {
  return (
    <main className="relative z-[1] min-h-screen px-6 sm:px-10 pt-36 pb-24">
      <div className="max-w-[560px] mx-auto">
        <div className="font-mono text-xs text-accent tracking-[0.1em] uppercase mb-4">
          Waitlist
        </div>
        <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-5">
          Be first to see Faraday as each product opens.
        </h1>
        <p className="text-[17px] text-muted leading-relaxed mb-10">
          Faraday products are rolling out as they&apos;re ready for real
          workflows. Join the waitlist for early access to FACP, PSE, Studio, or
          Beacon — and hear first when design partner programs open.
        </p>

        <Suspense
          fallback={
            <div className="rounded-2xl bg-card border border-border-hover px-7 py-9 text-sm text-muted">
              Loading…
            </div>
          }
        >
          <WaitlistForm />
        </Suspense>
      </div>
    </main>
  );
}
