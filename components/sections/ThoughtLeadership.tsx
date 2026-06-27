"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { INSIGHTS, SITE_CONFIG } from "@/lib/constants";

const FILTERS = ["All", "Operating Models", "M&A Integration", "AI Readiness", "Governance", "ServiceNow", "Operational Excellence"] as const;
type Filter = typeof FILTERS[number];

export function ThoughtLeadership() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filtered = activeFilter === "All" ? INSIGHTS : INSIGHTS.filter(a => a.tag === activeFilter);
  const [featured, ...rest] = filtered;

  return (
    <section
      id="insights"
      className="relative py-32 max-lg:py-20"
      style={{ background: "var(--void)" }}
      aria-label="Thought Leadership"
    >
      <div className="max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6">
        <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-10 items-end mb-14">
          <RevealOnScroll>
            <SectionLabel>Perspectives</SectionLabel>
            <GoldRule className="mb-7" />
            <h2 className="font-serif font-light" style={{ fontSize: "clamp(38px,4.2vw,62px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--parch)" }}>
              Ideas at the intersection of{" "}
              <em className="italic" style={{ color: "var(--gold)" }}>strategy and operations</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p style={{ fontSize: "17px", lineHeight: 1.82, color: "var(--muted)" }}>
              A practitioner perspective on technology leadership — written for executives who understand that the organizational questions are harder than the technology questions.
            </p>
          </RevealOnScroll>
        </div>

        <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filter articles">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="text-[10px] font-semibold tracking-[0.18em] uppercase px-4 py-2.5 border transition-all duration-200 cursor-large"
              style={{
                color: activeFilter === f ? "var(--void)" : "var(--gold)",
                background: activeFilter === f ? "var(--gold)" : "transparent",
                borderColor: "var(--gold-rule)",
              }}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {featured && (
              
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-px cursor-large group"
                aria-label={featured.headline}
              >
                <div
                  className="grid grid-cols-[1fr_120px] max-lg:grid-cols-1 border transition-colors duration-300"
                  style={{ background: "var(--void-2)", borderColor: "var(--line-md)" }}
                >
                  <div className="p-12 max-md:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 border" style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}>
                        {featured.tag}
                      </span>
                      <span className="text-[10px] font-medium tracking-[0.12em]" style={{ color: "var(--muted)" }}>{featured.issue}</span>
                      <span className="flex items-center gap-1.5 text-[10px]" style={{ color: "var(--muted)" }}>
                        <Clock size={10} aria-hidden="true" />{featured.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif font-light mb-4" style={{ fontSize: "clamp(22px,2.8vw,36px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "var(--cream)" }}>
                      {featured.headline}
                    </h3>
                    <p className="font-serif italic mb-6" style={{ fontSize: "16px", color: "var(--gold)", lineHeight: 1.5 }}>
                      {featured.subhead}
                    </p>
                    <p style={{ fontSize: "14px", lineHeight: 1.82, color: "var(--muted)" }}>{featured.preview}</p>
                    <div className="flex items-center gap-2 mt-8 text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }} aria-hidden="true">
                      Read on LinkedIn <ArrowUpRight size={12} />
                    </div>
                  </div>
                  <div className="relative flex flex-col justify-end p-8 max-lg:hidden" style={{ background: "var(--void-3)", borderLeft: "1px solid var(--line-md)" }}>
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--muted)" }}>Featured</p>
                    <p className="font-serif italic font-light" style={{ fontSize: "56px", lineHeight: 0.9, letterSpacing: "-0.03em", color: "rgba(184,150,106,0.12)" }}>
                      {featured.issue.split(" ")[1]}
                    </p>
                  </div>
                </div>
              </a>
            )}

            {rest.length > 0 && (
              <div className="grid grid-cols-3 gap-px max-lg:grid-cols-2 max-sm:grid-cols-1" style={{ background: "var(--line)" }}>
                {rest.map((article, i) => (
                  <motion.a
                    key={article.headline}
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col p-8 max-md:p-6 cursor-large relative"
                    style={{ background: "var(--void-2)", minHeight: "300px" }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    layout
                    aria-label={article.headline}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 border" style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}>
                        {article.tag}
                      </span>
                      <span className="flex items-center gap-1 text-[10px]" style={{ color: "var(--muted)" }}>
                        <Clock size={9} aria-hidden="true" />{article.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif font-light flex-1 mb-4" style={{ fontSize: "clamp(17px,1.8vw,22px)", lineHeight: 1.2, color: "var(--cream)" }}>
                      {article.headline}
                    </h3>
                    <p className="text-[12px] leading-[1.75] mb-6" style={{ color: "var(--muted)" }}>{article.subhead}</p>
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase mt-auto" style={{ color: "var(--gold)" }} aria-hidden="true">
                      Read on LinkedIn <ArrowUpRight size={11} />
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <RevealOnScroll className="mt-12 flex items-center justify-center">
          
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold tracking-[0.18em] uppercase px-8 py-4 border transition-all duration-200 cursor-large"
            style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--void)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
          >
            Follow on LinkedIn
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
