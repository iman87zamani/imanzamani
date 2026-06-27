"use client";
import { INSIGHTS, SITE_CONFIG } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ThoughtLeadership() {
  return (
    <section id="insights" className="relative py-32" aria-label="Thought Leadership">
      <div className="max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6">
        <RevealOnScroll><SectionLabel>Perspectives</SectionLabel><GoldRule className="mb-7" />
          <h2 className="font-serif font-light mb-16" style={{color:"var(--parch)"}}>Ideas at the intersection of <em style={{color:"var(--gold)"}}>strategy and operations</em></h2>
        </RevealOnScroll>
        <div className="grid grid-cols-3 gap-px max-lg:grid-cols-2 max-sm:grid-cols-1">
          {INSIGHTS.map((a) => (<a key={a.headline} href={a.href} target="_blank" rel="noopener noreferrer" className="flex flex-col p-8" style={{background:"var(--void-2)",minHeight:"280px",textDecoration:"none"}}>
            <span className="text-[10px] font-bold uppercase mb-5 self-start px-2 py-1 border" style={{color:"var(--gold)",borderColor:"var(--gold-rule)"}}>{a.tag}</span>
            <h3 className="font-serif font-light mb-4 flex-1" style={{fontSize:"22px",color:"var(--cream)"}}>{a.headline}</h3>
            <p className="text-[12px] mb-6" style={{color:"var(--muted)"}}>{a.subhead}</p>
            <span className="text-[10px] font-bold uppercase" style={{color:"var(--gold)"}}>Read on LinkedIn</span>
          </a>))}
        </div>
        <div className="mt-12 flex justify-center">
          <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase px-8 py-4 border" style={{color:"var(--gold)",borderColor:"var(--gold-rule)"}}>Follow on LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
