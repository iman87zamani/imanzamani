"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BOARD_BRIEF } from "@/lib/constants";

const BRIEF_TABS = [
  { id: "summary",      label: "Summary"      },
  { id: "philosophy",   label: "Philosophy"   },
  { id: "outcomes",     label: "Outcomes"     },
  { id: "approach",     label: "Approach"     },
  { id: "differentiators", label: "Differentiators" },
] as const;
type TabId = typeof BRIEF_TABS[number]["id"];

export function BoardBrief() {
  const [activeTab, setActiveTab] = useState<TabId>("summary");

  return (
    <section
      id="brief"
      className="relative py-32 max-lg:py-20 overflow-hidden"
      style={{ background: "var(--void-2)" }}
      aria-label="Board Brief"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(237,229,216,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(237,229,216,0.02) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6">

        {/* ── Header ───────────────────────────────── */}
        <div className="grid grid-cols-[1fr_auto] gap-12 items-end mb-16 max-md:grid-cols-1 max-md:gap-8">
          <RevealOnScroll>
            <SectionLabel>The Board Brief</SectionLabel>
            <GoldRule className="mb-7" />
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(38px,4.2vw,62px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--parch)" }}
            >
              An executive briefing designed to be read{" "}
              <em className="italic" style={{ color: "var(--gold)" }}>in two minutes.</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15} className="shrink-0 max-md:hidden">
            <div
              className="px-5 py-2.5 border font-serif italic text-center"
              style={{ borderColor: "var(--gold-rule)", color: "var(--gold)", fontSize: "13px" }}
            >
              Confidential · Executive Profile 2026
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Annual report layout ─────────────────── */}
        <div className="grid grid-cols-[320px_1fr] gap-0 border max-lg:grid-cols-1" style={{ borderColor: "var(--line-md)" }}>

          {/* Left: portrait + identity */}
          <div
            className="relative max-lg:h-[400px]"
            style={{ borderRight: "1px solid var(--line-md)" }}
          >
            <Image
              src="/images/portrait.jpg"
              alt="Iman Zamani"
              fill
              quality={88}
              sizes="320px"
              className="object-cover object-top"
              style={{ filter: "grayscale(10%) contrast(1.03)" }}
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(0deg,var(--void-2) 0%,rgba(14,14,17,0.3) 50%,transparent 100%)" }}
              aria-hidden="true"
            />
            {/* Identity block */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-serif font-light text-[28px] leading-[1.05] mb-1" style={{ color: "var(--parch)" }}>
                Iman<br /><em className="italic" style={{ color: "var(--gold)" }}>Zamani</em>
              </p>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--muted)" }}>
                Technology Operations &<br />Transformation Executive
              </p>
              <div className="h-px w-8 mb-3" style={{ background: "linear-gradient(90deg,var(--gold),transparent)" }} aria-hidden="true" />
              <div className="flex flex-wrap gap-1.5">
                {BOARD_BRIEF.industries.map(ind => (
                  <span key={ind} className="text-[9px] font-semibold tracking-[0.14em] uppercase px-2 py-1 border" style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}>
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: tabbed content */}
          <div>
            {/* Tab bar */}
            <div
              className="flex overflow-x-auto"
              style={{ borderBottom: "1px solid var(--line-md)" }}
              role="tablist"
              aria-label="Board brief sections"
            >
              {BRIEF_TABS.map(tab => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`brief-panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase px-6 py-4 transition-all duration-200 whitespace-nowrap cursor-large shrink-0"
                  style={{
                    color: activeTab === tab.id ? "var(--gold)" : "var(--muted)",
                    borderBottom: activeTab === tab.id ? "2px solid var(--gold)" : "2px solid transparent",
                    background: "transparent",
                  }}
                  onMouseEnter={e => { if (activeTab !== tab.id) e.currentTarget.style.color = "var(--cream)"; }}
                  onMouseLeave={e => { if (activeTab !== tab.id) e.currentTarget.style.color = "var(--muted)"; }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-10 max-md:p-6 min-h-[360px]">
              {activeTab === "summary" && (
                <BriefPanel id="summary">
                  <PanelHeading>Executive Summary</PanelHeading>
                  <p className="brief-body">{BOARD_BRIEF.summary}</p>
                  <div className="mt-8 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    {BOARD_BRIEF.strengths.map(s => (
                      <div key={s} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} aria-hidden="true" />
                        <span className="text-[12px] font-medium" style={{ color: "var(--cream)" }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </BriefPanel>
              )}

              {activeTab === "philosophy" && (
                <BriefPanel id="philosophy">
                  <PanelHeading>Leadership Philosophy</PanelHeading>
                  <blockquote
                    className="font-serif italic font-light mb-6 pl-5"
                    style={{ fontSize: "clamp(18px,1.8vw,22px)", lineHeight: 1.55, color: "var(--cream)", borderLeft: "2px solid var(--gold-rule)" }}
                  >
                    Enterprise transformation is not a technology project. It is an organizational design problem with a technology dimension.
                  </blockquote>
                  <p className="brief-body">{BOARD_BRIEF.philosophy}</p>
                </BriefPanel>
              )}

              {activeTab === "outcomes" && (
                <BriefPanel id="outcomes">
                  <PanelHeading>Verified Business Outcomes</PanelHeading>
                  <div className="flex flex-col gap-0">
                    {BOARD_BRIEF.outcomes.map((o, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 py-4"
                        style={{ borderBottom: i < BOARD_BRIEF.outcomes.length - 1 ? "1px solid var(--line)" : "none" }}
                      >
                        <span
                          className="font-serif font-light text-[24px] leading-none shrink-0 mt-0.5"
                          style={{ color: "var(--gold)", letterSpacing: "-0.03em" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[14px] leading-[1.72]" style={{ color: "var(--muted)" }}>{o}</p>
                      </div>
                    ))}
                  </div>
                </BriefPanel>
              )}

              {activeTab === "approach" && (
                <BriefPanel id="approach">
                  <PanelHeading>Transformation Approach</PanelHeading>
                  <blockquote
                    className="font-serif italic font-light mb-8 pl-5"
                    style={{ fontSize: "clamp(18px,1.8vw,22px)", lineHeight: 1.55, color: "var(--cream)", borderLeft: "2px solid var(--gold-rule)" }}
                  >
                    {BOARD_BRIEF.approach}
                  </blockquote>
                  <PanelHeading className="mt-8">Why Organizations Bring Me In</PanelHeading>
                  <div className="flex flex-col gap-0">
                    {BOARD_BRIEF.whyOrgsCallMe.map((r, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 py-3.5"
                        style={{ borderBottom: i < BOARD_BRIEF.whyOrgsCallMe.length - 1 ? "1px solid var(--line)" : "none" }}
                      >
                        <span className="h-px w-5 flex-shrink-0 mt-[10px]" style={{ background: "var(--gold)" }} aria-hidden="true" />
                        <p className="text-[14px] leading-[1.7]" style={{ color: "var(--muted)" }}>{r}</p>
                      </div>
                    ))}
                  </div>
                </BriefPanel>
              )}

              {activeTab === "differentiators" && (
                <BriefPanel id="differentiators">
                  <PanelHeading>What Differentiates This Executive</PanelHeading>
                  <div className="flex flex-col gap-4">
                    {BOARD_BRIEF.differentiators.map((d, i) => (
                      <div
                        key={i}
                        className="p-5 border"
                        style={{ borderColor: "var(--line-md)", background: "var(--void-3)" }}
                      >
                        <div className="flex items-start gap-4">
                          <span className="font-serif text-[11px] font-light shrink-0 mt-0.5" style={{ color: "var(--gold)", letterSpacing: "0.12em" }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-[14px] leading-[1.72]" style={{ color: "var(--cream)" }}>{d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </BriefPanel>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`.brief-body { font-size: 15px; line-height: 1.82; color: var(--muted); }`}</style>
    </section>
  );
}

function BriefPanel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.div
      key={id}
      id={`brief-panel-${id}`}
      role="tabpanel"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function PanelHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`text-[10px] font-semibold tracking-[0.24em] uppercase mb-5 ${className ?? ""}`}
      style={{ color: "var(--gold)" }}
    >
      {children}
    </p>
  );
}
