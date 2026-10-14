"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const menu = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Products", href: "/#products" },
  { label: "Projects", href: "/#projects" },
  { label: "Platform", href: "/#platform" },
  { label: "Investor Interest", href: "https://www.srholdingsllc.com/investors?venture=faraday&source=faraday-marketing#investor-form" },
];

export default function SiteNavigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);

  return <nav aria-label="Primary navigation" className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex items-center justify-between min-h-16 gap-4">
      <Link href="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
        <span aria-hidden="true" className="w-[34px] h-[34px] shrink-0 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white font-bold text-xs font-mono">F</span>
        <span className="font-semibold text-[17px] text-heading tracking-tight truncate">Faraday Capital Systems</span>
      </Link>
      <div className="hidden lg:flex items-center gap-5">
        {menu.map(item => <a key={item.label} href={item.href} className="text-sm font-medium text-[#b8b8c7] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light">{item.label}</a>)}
        <a href="mailto:info@faradaycapitalsystems.com" className="px-5 py-2.5 rounded-lg text-[13px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white">Contact</a>
      </div>
      <button type="button" aria-expanded={open} aria-controls="faraday-mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="lg:hidden shrink-0 rounded-lg border border-white/20 px-3 py-2 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light">
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>
    </div>
    {open && <div id="faraday-mobile-menu" className="lg:hidden border-t border-white/10 bg-background px-6 py-4 max-h-[calc(100dvh-4rem)] overflow-y-auto">
      {menu.map(item => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block py-3 border-b border-white/10 text-[#e3e3e8] focus-visible:outline-2 focus-visible:outline-accent-light">{item.label}</a>)}
      <a href="mailto:info@faradaycapitalsystems.com" onClick={() => setOpen(false)} className="block py-3 text-accent-light">Contact</a>
    </div>}
  </nav>;
}
