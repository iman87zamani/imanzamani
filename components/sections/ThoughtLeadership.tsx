"use client";
import { INSIGHTS, SITE_CONFIG } from "@/lib/constants";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ThoughtLeadership() {
  return (
    <section
      id="insights"
      className="relative py-32 max-lg:py-20"
      style={{ background: "var(--void)" }}
      aria-label="Thought Leadership"
    >
      <div className="max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6">
        <RevealOnScroll>
          <SectionLabel>Perspectives</SectionLabel>
          <GoldRule className="mb-7" />
          <h2 className="font-serif font-light mb-16" style={{ fontSize: "clamp(38px,4.2vw,62px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--parch)" }}>
            Ideas at the intersection of{" "}
            <em className="italic" style={{ color: "var(--gold)" }}>strategy and operations</em>
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-3 gap-px max-lg:grid-cols-2 max-sm:grid-cols-1" style={{ background: "var(--line)" }}>
          {INSIGHTS.map((article) => (
            
              key={article.headline}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-8 cursor-large"
              style={{ background: "var(--void-2)", minHeight: "280px", textDecoration: "none" }}
            >
              <span
                className="text-[10px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 border mb-5 self-start"
                style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}
              >
                {article.tag}
              </span>
              <h3
                className="font-serif font-light mb-4 flex-1"
                style={{ fontSize: "clamp(17px,1.8vw,22px)", lineHeight: 1.2, color: "var(--cream)" }}
              >
                {article.headline}
              </h3>
              <p className="text-[12px] mb-6" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                {article.subhead}
              </p>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
                Read on LinkedIn →
              </span>
            </a>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-[0.18em] uppercase px-8 py-4 border"
            style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}
          >
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
