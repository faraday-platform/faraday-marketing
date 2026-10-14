"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
const steps=[
["01","Identity & context","A principal requests a bounded capability."],
["02","Policy decision","Shield evaluates permitted authority."],
["03","Bounded execution","Allowed requests proceed within explicit scope."],
["04","Evidence & verification","The decision and outcome are reviewable."]
];
export default function MotionV5(){
 const root=useRef<HTMLDivElement>(null);
 const [reduced,setReduced]=useState(false);
 const [active,setActive]=useState(0);
 useEffect(()=>{
  const query=window.matchMedia("(prefers-reduced-motion: reduce)");
  const handle=()=>setReduced(query.matches);handle();query.addEventListener("change",handle);
  return()=>query.removeEventListener("change",handle);
 },[]);
 useEffect(()=>{
  if(reduced||!root.current)return;
  gsap.registerPlugin(ScrollTrigger);
  const context=gsap.context(()=>{
   gsap.fromTo(".v5-node",{opacity:.25,y:55,scale:.9},{opacity:1,y:0,scale:1,stagger:.25,duration:.8,ease:"power2.out",scrollTrigger:{trigger:".v5-stage",start:"top 65%",end:"bottom 35%",scrub:1}});
   gsap.fromTo(".v5-path",{scaleX:0},{scaleX:1,transformOrigin:"left",ease:"none",scrollTrigger:{trigger:".v5-stage",start:"top 65%",end:"bottom 35%",scrub:1}});
  },root);
  return()=>context.revert();
 },[reduced]);
 return <div ref={root} className="min-h-screen bg-[#070812] text-white">
  <header className="px-6 py-5 border-b border-white/10 flex justify-between items-center"><Link href="/" className="font-semibold tracking-tight">FARADAY <span className="text-indigo-300">/ EXPERIENCE LAB</span></Link><Link href="/" className="text-sm text-indigo-200 underline">Live site ↗</Link></header>
  <main>
   <section className="min-h-[85svh] px-6 py-24 flex flex-col justify-center max-w-5xl mx-auto">
    <p className="text-xs tracking-[.25em] uppercase text-indigo-300 mb-7">Architecture-driven cinematic preview · V5</p>
    <h1 className="text-[clamp(3.1rem,10vw,7.5rem)] leading-[.97] tracking-[-.06em] font-bold">Capability is not <span className="text-indigo-300">authority.</span></h1>
    <p className="mt-8 text-lg sm:text-2xl text-slate-300 max-w-2xl leading-relaxed">A request does not grant itself permission. Discover how identity, governance, bounded execution and evidence relate.</p>
    <a href="#sequence" className="self-start mt-10 px-6 py-4 rounded-xl bg-indigo-500 font-semibold focus-visible:outline-2 focus-visible:outline-white">Explore the platform sequence ↓</a>
   </section>
   <section id="sequence" className="v5-stage relative border-y border-white/10 bg-[#101229] px-6 py-24 sm:py-36">
    <div className="max-w-6xl mx-auto">
     <p className="uppercase text-indigo-300 text-xs tracking-widest">Conceptual architecture · no live data</p>
     <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mt-5 mb-8">From request to evidence.</h2>
     <p className="max-w-3xl text-slate-300 mb-14">The visual represents an approved architectural direction—not evidence that every platform capability is deployed.</p>
     <div aria-label="Governance process from identity and context through policy, bounded execution, and evidence" className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
      <div aria-hidden="true" className="v5-path hidden md:block absolute top-1/2 left-[8%] right-[8%] h-[3px] bg-indigo-400/70"/>
      {steps.map((step,i)=><button key={step[0]} type="button" onClick={()=>setActive(i)} aria-pressed={active===i} className={`v5-node relative z-10 text-left rounded-2xl min-h-52 border p-6 focus-visible:outline-2 focus-visible:outline-white ${active===i?"bg-[#343982] border-indigo-300/70":"bg-[#171a35] border-white/20"}`}>
       <span className="text-indigo-200 font-mono text-sm">{step[0]}</span><span className="block mt-8 text-xl font-semibold">{step[1]}</span><span className="block mt-3 text-slate-200 text-sm leading-relaxed">{step[2]}</span>
      </button>)}
     </div>
     <p className="mt-7 text-sm text-slate-300" aria-live="polite">Selected: {steps[active][1]}. {steps[active][2]}</p>
     <p className="mt-3 text-xs text-slate-400">Scroll to reveal. Select any stage for a static, accessible explanation. Reduced-motion preferences disable animated progression.</p>
    </div>
   </section>
   <section className="max-w-6xl mx-auto px-6 py-24">
    <p className="uppercase tracking-widest text-indigo-300 text-xs">Four core products</p><h2 className="text-4xl sm:text-6xl font-bold mt-5 mb-10">One platform. Four domains.</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[["FACP","Accounting governance","/#products"],["Studio","Creative intelligence","https://studio.faradaycapitalsystems.com"],["Beacon","Business discovery","/#products"],["PSE","Payroll intelligence","https://payrollsynergyexperts.com"]].map((p,i)=><a key={p[0]} href={p[2]} className="rounded-2xl p-6 min-h-48 border border-indigo-300/25 bg-gradient-to-br from-[#23254a] to-[#141625] hover:border-indigo-300/70"><span className="text-indigo-300 text-xs">0{i+1}</span><h3 className="text-2xl font-bold mt-7">{p[0]}</h3><p className="text-slate-300 mt-2">{p[1]}</p><p className="text-indigo-200 mt-4">Explore ↗</p></a>)}
    </div>
   </section>
  </main>
  <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">Isolated experimental preview · No live data · Production unchanged</footer>
 </div>
}
