"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const steps=[
 {key:"01",title:"A system requests action",detail:"A business operation reaches a decision boundary.",word:"REQUEST"},
 {key:"02",title:"Authority is evaluated",detail:"Identity, scope and policy determine what is permitted.",word:"POLICY"},
 {key:"03",title:"Evidence remains",detail:"The decision and its basis become reviewable.",word:"EVIDENCE"},
];
const products=[
 {name:"FACP",label:"Accounting controls",url:"/#products"},
 {name:"Studio",label:"Creative intelligence",url:"https://studio.faradaycapitalsystems.com"},
 {name:"Beacon",label:"Business discovery",url:"/#products"},
 {name:"PSE",label:"Payroll intelligence",url:"https://payrollsynergyexperts.com"},
];
export default function ExperiencePreview(){
 const [active,setActive]=useState(0);
 const [pause,setPause]=useState(false);
 const [reduced,setReduced]=useState(true);
 const [open,setOpen]=useState(false);
 const section=useRef<HTMLElement>(null);
 useEffect(()=>{
  const mq=window.matchMedia("(prefers-reduced-motion: reduce)");
  const update=()=>setReduced(mq.matches);
  update();mq.addEventListener("change",update);
  return()=>mq.removeEventListener("change",update);
 },[]);
 useEffect(()=>{
  if(pause||reduced)return;
  const id=window.setInterval(()=>setActive(v=>(v+1)%3),3500);
  return()=>window.clearInterval(id);
 },[pause,reduced]);
 return <main className="min-h-screen bg-[#060711] text-white overflow-hidden">
  <style>{`
  @keyframes lift{from{transform:translateY(22px);opacity:0}to{transform:translateY(0);opacity:1}}
  @keyframes orbit{to{transform:rotate(360deg)}}
  @keyframes pulse{0%,100%{opacity:.25;transform:scale(.93)}50%{opacity:.7;transform:scale(1.06)}}
  .rise{animation:lift .8s ease both}.orbit{animation:orbit 19s linear infinite}.glow{animation:pulse 6s ease-in-out infinite}
  @media(prefers-reduced-motion:reduce){.rise,.orbit,.glow{animation:none!important}}
  `}</style>
  <header className="relative z-20 border-b border-white/10 bg-[#060711]/90 backdrop-blur-xl">
   <div className="max-w-6xl mx-auto min-h-16 px-5 md:px-8 flex items-center justify-between gap-3">
    <Link href="/" className="flex items-center gap-3"><span className="w-9 h-9 bg-indigo-500 rounded-xl grid place-items-center font-bold">F</span><span className="font-semibold text-sm sm:text-base">Faraday Capital Systems</span></Link>
    <nav aria-label="Preview navigation" className="hidden md:flex gap-6 items-center text-sm text-slate-300"><a href="#story">The story</a><a href="#products-preview">Products</a><Link href="/">Live site ↗</Link></nav>
    <button type="button" aria-expanded={open} aria-controls="v4-menu" onClick={()=>setOpen(!open)} className="md:hidden border border-white/25 rounded-lg min-w-11 min-h-11" aria-label={open?"Close menu":"Open menu"}>{open?"×":"☰"}</button>
   </div>
   {open&&<nav id="v4-menu" aria-label="Mobile preview navigation" className="md:hidden px-6 pb-5 flex flex-col gap-4 text-slate-200"><a href="#story" onClick={()=>setOpen(false)}>The story</a><a href="#products-preview" onClick={()=>setOpen(false)}>Products</a><Link href="/">Live site ↗</Link></nav>}
  </header>
  <section className="relative max-w-6xl mx-auto px-6 md:px-8 pt-20 sm:pt-28 pb-20 md:pb-32 grid lg:grid-cols-[1fr_1fr] gap-10 min-h-[680px] items-center">
   <div className="relative z-10 rise">
    <p className="uppercase text-indigo-300 tracking-[.25em] text-[11px] font-bold mb-6">Faraday · experience preview V4</p>
    <h1 className="text-[clamp(3rem,10vw,6.9rem)] leading-[.98] tracking-[-.065em] font-bold max-w-3xl">Capability<br/>is not <span className="text-indigo-300">authority.</span></h1>
    <p className="mt-7 text-base sm:text-xl leading-relaxed text-slate-300 max-w-xl">As systems become more capable, decisions need clear boundaries. Discover the governed path from request to evidence.</p>
    <div className="mt-9 flex flex-wrap gap-3"><a href="#story" className="rounded-xl bg-indigo-500 hover:bg-indigo-400 px-6 py-4 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Experience the story ↓</a><a href="#products-preview" className="rounded-xl border border-white/25 px-6 py-4 font-semibold">Four core products ↗</a></div>
   </div>
   <div className="relative h-[330px] sm:h-[440px] grid place-items-center" aria-label="Conceptual visual of a request entering an authority boundary and producing evidence">
     <div className="absolute w-[310px] h-[310px] sm:w-[410px] sm:h-[410px] rounded-full bg-indigo-500/10 blur-3xl glow"/>
     <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-indigo-300/40 orbit" style={{boxShadow:"0 0 90px rgba(99,102,241,.24),inset 0 0 65px rgba(99,102,241,.12)"}}/>
     <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-dashed border-violet-300/40 orbit" style={{animationDirection:"reverse"}}/>
     <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-indigo-300/80 via-indigo-600/60 to-violet-900/20 backdrop-blur-2xl shadow-[0_0_85px_rgba(129,140,248,.4)] grid place-items-center text-center relative"><span className="font-mono text-xs tracking-widest">AUTHORITY<br/>BOUNDARY</span></div>
     <span className="absolute left-1 top-1/3 rounded-lg border border-white/20 bg-[#111526] px-3 py-2 text-xs text-slate-200">Request →</span>
     <span className="absolute right-0 bottom-1/4 rounded-lg border border-white/20 bg-[#111526] px-3 py-2 text-xs text-slate-200">✓ Evidence</span>
   </div>
  </section>
  <section id="story" ref={section} className="border-y border-white/10 bg-[#0d1022] py-20 sm:py-28 px-6">
   <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    <div><p className="text-xs text-indigo-300 uppercase tracking-[.25em] mb-5">01 / Understanding governance</p><h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">From request<br/>to evidence.</h2><p className="mt-6 text-slate-300 leading-relaxed text-lg max-w-md">A visual explanation of a decision boundary. This is conceptual, not a demonstration of deployed product functionality.</p>
      <div className="flex flex-wrap gap-3 mt-7"><button type="button" onClick={()=>{setPause(v=>!v)}} className="border border-white/25 rounded-lg px-4 py-3" aria-pressed={pause}>{pause?"Resume sequence ▶":"Pause sequence ‖"}</button><button type="button" className="border border-white/25 rounded-lg px-4 py-3" onClick={()=>setActive(v=>(v+1)%3)}>Next step →</button></div>
    </div>
    <div className="grid gap-3">{steps.map((s,i)=><button key={s.key} type="button" aria-pressed={active===i} onClick={()=>{setActive(i);setPause(true)}} className={`text-left rounded-2xl border p-6 sm:p-8 transition-colors duration-500 ${active===i?"border-indigo-300/60 bg-indigo-500/20":"border-white/10 bg-white/[.035]"}`}><div className="flex justify-between items-center gap-4"><span className="text-xs tracking-widest text-indigo-300">{s.key} / {s.word}</span><span className={active===i?"text-indigo-200":"text-slate-500"}>{active===i?"●":"○"}</span></div><h3 className="mt-3 text-xl sm:text-2xl font-semibold">{s.title}</h3><p className="mt-2 text-slate-300 text-sm sm:text-base">{s.detail}</p></button>)}</div>
   </div>
  </section>
  <section id="products-preview" className="max-w-6xl mx-auto px-6 py-20 sm:py-28"><p className="text-xs uppercase tracking-[.25em] text-indigo-300 mb-4">02 / Four core products</p><h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">One platform.<br/>Specialized domains.</h2><p className="text-slate-300 max-w-2xl mb-10">FACP, Studio, Beacon, and PSE are the four core products. Additional initiatives belong under Projects.</p><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{products.map((p,i)=><a href={p.url} key={p.name} className="group block rounded-2xl min-h-[230px] p-6 border border-indigo-300/20 bg-gradient-to-br from-[#22254d] to-[#111222] hover:border-indigo-300/70 focus-visible:outline-2 focus-visible:outline-indigo-300"><p className="text-indigo-300 text-xs tracking-widest">0{i+1} / PRODUCT</p><h3 className="text-3xl font-bold mt-9">{p.name}</h3><p className="mt-2 text-slate-300">{p.label}</p><p className="mt-6 text-indigo-200">Explore ↗</p></a>)}</div></section>
  <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">V4 experimental design preview · No production changes · <Link href="/" className="underline">Return to live Faraday site</Link></footer>
 </main>;
}
