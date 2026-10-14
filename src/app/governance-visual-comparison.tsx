"use client";
import { useState } from "react";
export default function GovernanceVisualComparison(){
  const [variant,setVariant]=useState<"flow"|"film">("flow");
  const steps=[{name:"Request",note:"System asks to act"},{name:"Authority",note:"Governed review"},{name:"Evidence",note:"Decision trace"}];
  return <section aria-labelledby="motion-heading" className="relative z-[1] py-16 sm:py-24 px-6 sm:px-10 border-t border-border">
    <div className="max-w-[1100px] mx-auto">
      <p className="font-mono text-xs text-accent-light tracking-widest uppercase mb-4">Experience lab · Preview only</p>
      <h2 id="motion-heading" className="text-[clamp(2rem,4vw,2.8rem)] font-bold text-white mb-4">Capability is not authority.</h2>
      <p className="text-base text-[#c2c2d0] leading-relaxed max-w-[760px] mb-7">Compare two visual approaches to the same governance story. Both are conceptual illustrations, not a live demonstration or production capability claim.</p>
      <div role="group" aria-label="Choose visual direction" className="flex flex-wrap gap-2 mb-7">
        <button type="button" aria-pressed={variant==="flow"} onClick={()=>setVariant("flow")} className={`rounded-lg px-4 py-3 text-sm font-semibold border focus-visible:outline-2 focus-visible:outline-accent-light ${variant==="flow"?"bg-accent border-accent text-white":"border-white/25 text-white"}`}>A · Interactive flow</button>
        <button type="button" aria-pressed={variant==="film"} onClick={()=>setVariant("film")} className={`rounded-lg px-4 py-3 text-sm font-semibold border focus-visible:outline-2 focus-visible:outline-accent-light ${variant==="film"?"bg-accent border-accent text-white":"border-white/25 text-white"}`}>B · Cinematic stage</button>
      </div>
      {variant==="flow"?<div className="rounded-2xl border border-indigo-300/25 bg-[#101225] relative overflow-hidden px-5 py-12 sm:px-10">
        <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,rgba(129,140,248,0.22)_1px,transparent_1px)] [background-size:25px_25px]"/>
        <div className="relative grid grid-cols-3 gap-2 sm:gap-6">
          {steps.map((s,i)=><div key={s.name} className="min-w-0 text-center">
            <div className="mx-auto w-11 h-11 sm:w-16 sm:h-16 rounded-full border border-indigo-300/40 bg-indigo-400/10 shadow-[0_0_35px_rgba(99,102,241,0.18)] flex items-center justify-center text-indigo-200 text-lg motion-safe:animate-pulse">{i===0?"◇":i===1?"◎":"▣"}</div>
            <p className="mt-4 text-sm sm:text-base font-semibold text-white">{s.name}</p>
            <p className="mt-1 text-[11px] sm:text-sm text-[#c2c2d0]">{s.note}</p>
          </div>)}
        </div>
        <div aria-hidden="true" className="relative h-1 mt-9 rounded-full bg-white/10 overflow-hidden"><div className="w-1/3 h-full bg-indigo-300/80 rounded-full motion-safe:animate-[flow-across_5s_ease-in-out_infinite]"/></div>
        <p className="relative text-center mt-5 text-xs text-[#c2c2d0]">A · Lightweight motion, no video download</p>
      </div>:<div className="rounded-2xl border border-indigo-300/25 bg-[#070914] relative overflow-hidden min-h-[330px] flex items-center justify-center p-6">
        <div aria-hidden="true" className="absolute inset-0 [background:radial-gradient(ellipse_at_50%_50%,rgba(99,102,241,0.25),transparent_65%)]"/>
        <div aria-hidden="true" className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-indigo-300/30 shadow-[0_0_80px_rgba(99,102,241,0.25),inset_0_0_65px_rgba(99,102,241,0.08)] motion-safe:animate-[slow-rotate_16s_linear_infinite]"/>
        <div aria-hidden="true" className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-dashed border-violet-300/40 motion-safe:animate-[slow-rotate_11s_linear_infinite_reverse]"/>
        <div className="relative text-center z-10 max-w-[240px]">
          <p className="font-mono text-[11px] tracking-widest uppercase text-indigo-200">Authority boundary</p>
          <p className="text-2xl font-bold text-white mt-3">Identity · Policy · Evidence</p>
          <p className="text-xs text-[#c2c2d0] mt-3">B · Cinematic CSS concept, not finished video</p>
        </div>
      </div>}
      <p className="mt-4 text-sm text-[#c2c2d0]">Neither treatment introduces autoplay audio. Reduced-motion preferences disable continuous animation. A finished video concept would require a separately reviewed, captioned media asset.</p>
    </div>
  </section>;
}
