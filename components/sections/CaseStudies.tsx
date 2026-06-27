"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CASE_STUDIES } from "@/lib/constants";

export function CaseStudies() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="cases"
      className="relative py-32 max-lg:py-20"
      style={{ background: "var(--void)" }}
      aria-label="Executive Case Studies"
    >
      <div className="max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6">

        {/* Header */}
        <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-10 items-end mb-20">
          <RevealOnScroll>
            <SectionLabel>Business Impact</SectionLabel>
            <GoldRule className="mb-7" />
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(38px,4.2vw,62px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--parch)" }}
            >
              Three problems.<br />
              <em className="italic" style={{ color: "var(--gold)" }}>Three operating model solutions.</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p style={{ fontSize: "17px", lineHeight: 1.82, color: "var(--muted)" }}>
              Each case study begins with a business problem, not a technology initiative. The distinction matters — because the solution always begins before the platform is selected.
            </p>
          </RevealOnScroll>
        </div>

        {/* Case studies */}
        <div className="flex flex-col gap-px" style={{ background: "var(--line)" }}>
          {CASE_STUDIES.map((cs, i) => (
            <CaseStudyRow
              key={cs.id}
              cs={cs}
              index={i}
              isActive={active === cs.id}
              onToggle={() => setActive(prev => prev === cs.id ? null : cs.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyRow({
  cs, index, isActive, onToggle,
}: {
  cs: typeof CASE_STUDIES[number];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: isActive ? "var(--void-3)" : "var(--void-2)", transition: "background 0.3s" }}
    >
      {/* Row header — always visible */}
      <button
        className="w-full text-left p-10 max-md:p-6 cursor-large group"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-label={cs.headline}
      >
        <div className="grid grid-cols-[1fr_auto] gap-8 items-start max-sm:grid-cols-1 max-sm:gap-4">
          <div>
            {/* Tag + company */}
            <div className="flex items-center gap-4 flex-wrap mb-4">
              <span
                className="text-[10px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 border"
                style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}
              >
                {cs.tag}
              </span>
              <span className="text-[11px]" style={{ color: "var(--muted)" }}>
                {cs.company} · {cs.context}
              </span>
            </div>

            {/* Headline — the problem framed as a conviction */}
            <h3
              className="font-serif font-light max-w-[680px]"
              style={{
                fontSize: "clamp(20px,2.2vw,28px)",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                color: isActive ? "var(--parch)" : "var(--cream)",
                transition: "color 0.3s",
              }}
            >
              {cs.headline}
            </h3>
          </div>

          {/* Metric */}
          <div className="text-right max-sm:text-left">
            <div
              className="font-serif font-medium leading-none"
              style={{ fontSize: "clamp(36px,4vw,56px)", letterSpacing: "-0.04em", color: "var(--gold)" }}
            >
              {cs.metric}
            </div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mt-1.5" style={{ color: "var(--muted)" }}>
              {cs.metricLabel}
            </p>
            <p className="text-[10px]" style={{ color: "var(--muted)" }}>{cs.metricSub}</p>
          </div>
        </div>

        {/* Expand cue */}
        <div className="flex items-center gap-2 mt-5" style={{ color: "var(--gold)" }}>
          <motion.div animate={{ rotate: isActive ? 90 : 0 }} transition={{ duration: 0.3 }}>
            <ArrowRight size={13} />
          </motion.div>
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase">
            {isActive ? "Close" : "Read the case"}
          </span>
        </div>
      </button>

      {/* Expanded content — the full case study */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-px max-lg:grid-cols-1" style={{ background: "var(--line)", borderTop: "1px solid var(--line)" }}>

              {/* Problem */}
              <CaseBlock label="The Business Problem" accent={false}>
                <p style={{ fontSize: "14px", lineHeight: 1.82, color: "var(--muted)" }}>{cs.problem}</p>
              </CaseBlock>

              {/* Approach */}
              <CaseBlock label="The Approach" accent={false}>
                <p style={{ fontSize: "14px", lineHeight: 1.82, color: "var(--muted)" }}>{cs.approach}</p>
              </CaseBlock>

              {/* Outcome + Why it mattered */}
              <CaseBlock label="The Outcome" accent>
                <p
                  className="font-serif italic font-light mb-4"
                  style={{ fontSize: "clamp(16px,1.6vw,19px)", lineHeight: 1.45, color: "var(--cream)" }}
                >
                  {cs.outcome}
                </p>
                <div className="h-px w-8 mb-4" style={{ background: "linear-gradient(90deg,var(--gold),transparent)" }} aria-hidden="true" />
                <p style={{ fontSize: "13px", lineHeight: 1.78, color: "var(--muted)" }}>
                  <strong style={{ color: "var(--cream)", fontWeight: 500 }}>Why it mattered: </strong>
                  {cs.mattered}
                </p>
              </CaseBlock>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CaseBlock({
  label, children, accent,
}: {
  label: string; children: React.ReactNode; accent?: boolean;
}) {
  return (
    <div
      className="p-8 max-md:p-6"
      style={{
        background: accent ? "var(--void-3)" : "var(--void-2)",
        borderTop: accent ? "2px solid var(--gold)" : "2px solid transparent",
      }}
    >
      <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "var(--gold)" }}>
        {label}
      </p>
      {children}
    </div>
  );
}
