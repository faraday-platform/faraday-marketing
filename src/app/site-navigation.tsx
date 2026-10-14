"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const investor = "https://www.srholdingsllc.com/investors?venture=faraday&source=faraday-marketing#investor-form";
const groups = [
  {name:"Products",description:"Four core Faraday offerings",items:[
    {name:"FACP",description:"Governed accounting controls",href:"/#products"},
    {name:"Studio",description:"Creative intelligence",href:"https://studio.faradaycapitalsystems.com"},
    {name:"Beacon",description:"Operational discovery",href:"/#products"},
    {name:"PSE",description:"Payroll intelligence",href:"https://payrollsynergyexperts.com"}
  ]},
  {name:"Projects",description:"Additional public initiatives",items:[
    {name:"Music Box",description:"Artist-directed music journeys",href:"https://musicbox.faradaycapitalsystems.com"}
  ]}
];

export default function SiteNavigation(){
  const [open,setOpen]=useState(false);
  const [expanded,setExpanded]=useState<string | null>("Products");
  const toggleRef=useRef<HTMLButtonElement>(null);
  const panelRef=useRef<HTMLDivElement>(null);
  const close=()=>setOpen(false);
  useEffect(()=>{
    if(!open)return;
    const previous=document.body.style.overflow;
    document.body.style.overflow="hidden";
    const key=(event:KeyboardEvent)=>{
      if(event.key==="Escape"){setOpen(false);toggleRef.current?.focus();}
      if(event.key==="Tab"&&panelRef.current){
        const els=Array.from(panelRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])'));
        const first=els[0],last=els[els.length-1];
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
      }
    };
    document.addEventListener("keydown",key);
    return ()=>{document.body.style.overflow=previous;document.removeEventListener("keydown",key);};
  },[open]);
  const closeAndFocus=()=>{close();toggleRef.current?.focus();};
  return <nav aria-label="Primary navigation" className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-xl border-b border-white/10">
    <div className="max-w-[1200px] mx-auto px-5 sm:px-10 flex items-center justify-between h-16 gap-3">
      <Link href="/" onClick={close} className="flex items-center gap-3 min-w-0 focus-visible:outline-2 focus-visible:outline-accent-light">
        <span aria-hidden="true" className="w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white font-bold text-xs font-mono">F</span>
        <span className="font-semibold text-[clamp(13px,3.6vw,17px)] text-white tracking-tight truncate">Faraday Capital Systems</span>
      </Link>
      <div className="hidden lg:flex items-center gap-5">
        <Link href="/#solutions" className="text-sm text-[#c9c9d5] hover:text-white">Solutions</Link>
        {groups.map(g=><Link key={g.name} href={"/#"+g.name.toLowerCase()} className="text-sm text-[#c9c9d5] hover:text-white">{g.name}</Link>)}
        <Link href="/#platform" className="text-sm text-[#c9c9d5] hover:text-white">Platform</Link>
        <Link href={investor} className="text-sm text-accent-light">Investor Interest</Link>
        <Link href="mailto:info@faradaycapitalsystems.com" className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-accent text-white">Contact</Link>
      </div>
      <button ref={toggleRef} type="button" aria-label={open?"Close navigation":"Open navigation"} aria-controls="faraday-mobile-menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="lg:hidden shrink-0 flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 text-white focus-visible:outline-2 focus-visible:outline-accent-light">
        <span aria-hidden="true" className="text-2xl leading-none">{open?"×":"☰"}</span>
      </button>
    </div>
    {open&&<div className="lg:hidden fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-[#0a0a12]">
      <div role="presentation" onClick={closeAndFocus} className="absolute inset-0 bg-black/50"/>
      <div id="faraday-mobile-menu" ref={panelRef} className="relative h-full overflow-y-auto overscroll-contain px-6 pt-6 pb-16 bg-[#0a0a12]">
        <Link href="/#solutions" onClick={close} className="block py-3 text-[#e5e5ed] border-b border-white/10">Solutions</Link>
        {groups.map(g=><div key={g.name} className="border-b border-white/10">
          <button type="button" aria-expanded={expanded===g.name} onClick={()=>setExpanded(expanded===g.name?null:g.name)} className="w-full py-4 flex items-center justify-between text-left text-white focus-visible:outline-2 focus-visible:outline-accent-light">
            <span><span className="block font-semibold">{g.name}</span><span className="block text-xs text-[#b5b5c4] mt-1">{g.description}</span></span>
            <span aria-hidden="true" className="text-xl text-accent-light">{expanded===g.name?"−":"+"}</span>
          </button>
          {expanded===g.name&&<div className="rounded-xl bg-white/[0.045] px-4 mb-3">
            {g.items.map(item=><Link key={item.name} href={item.href} onClick={close} className="block py-3.5 border-b last:border-0 border-white/10 focus-visible:outline-2 focus-visible:outline-accent-light">
              <span className="block text-sm font-semibold text-white">{item.name} <span aria-hidden="true">↗</span></span>
              <span className="block text-xs text-[#b9b9c9] mt-1">{item.description}</span>
            </Link>)}
          </div>}
        </div>)}
        <Link href="/#platform" onClick={close} className="block py-4 text-[#e5e5ed] border-b border-white/10">Platform</Link>
        <Link href={investor} onClick={close} className="block py-4 text-[#e5e5ed] border-b border-white/10">Investor Interest</Link>
        <Link href="mailto:info@faradaycapitalsystems.com" onClick={close} className="block mt-5 rounded-lg bg-accent text-center py-3.5 font-semibold text-white">Contact</Link>
      </div>
    </div>}
  </nav>;
}
