"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { POV_BELIEFS } from "@/lib/constants";

export function ExecutivePOV() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="pov"
      className="relative py-32 max-lg:py-20"
      style={{ background: "var(--void-2)" }}
      aria-label="Executive Point of View"
    >
      {/* Vertical gold accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: "linear-gradient(180deg,transparent,var(--gold-rule) 20%,var(--gold-rule) 80%,transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6">

        {/* Header */}
        <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-10 items-end mb-20">
          <RevealOnScroll>
            <SectionLabel>Executive Point of View</SectionLabel>
            <GoldRule className="mb-7" />
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(38px,4.2vw,62px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--parch)" }}
            >
              Six convictions about{" "}
              <em className="italic" style={{ color: "var(--gold)" }}>technology leadership</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p style={{ fontSize: "17px", lineHeight: 1.82, color: "var(--muted)" }}>
              These are not talking points. They are the beliefs formed across 15 years of building operating models in environments where the cost of getting it wrong is organizational — and where the organizations that got it right did so by thinking differently about what technology leadership actually requires.
            </p>
          </RevealOnScroll>
        </div>

        {/* Beliefs — signature interactive accordion */}
        <div role="list" aria-label="Leadership convictions">
          {POV_BELIEFS.map((belief, i) => (
            <BeliefEntry
              key={belief.numeral}
              belief={belief}
              index={i}
              isActive={activeIndex === i}
              onToggle={() => setActiveIndex(prev => prev === i ? null : i)}
            />
          ))}
        </div>

        {/* Closing conviction */}
        <RevealOnScroll className="mt-20 pt-12" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="grid grid-cols-[1fr_320px] gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">
            <blockquote
              className="font-serif italic font-light"
              style={{ fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.4, color: "var(--cream)" }}
            >
              "The executives who will define technology leadership in the next decade are those who understand that the organizational design question is harder than the technology question — and more consequential."
            </blockquote>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: "var(--gold)" }}>
                Iman Zamani
              </p>
              <p className="text-[12px]" style={{ color: "var(--muted)" }}>
                Technology Operations &<br />Transformation Executive
              </p>
              <div className="h-px w-8 mt-4" style={{ background: "linear-gradient(90deg,var(--gold),transparent)" }} aria-hidden="true" />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function BeliefEntry({
  belief, index, isActive, onToggle,
}: {
  belief: typeof POV_BELIEFS[number];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      role="listitem"
      className="border-b"
      style={{ borderColor: "var(--line)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Always-visible header */}
      <button
        className="w-full text-left cursor-large group"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-label={belief.title}
      >
        <div className="grid grid-cols-[64px_1fr_auto] max-sm:grid-cols-[48px_1fr] gap-6 py-8 max-lg:py-6 items-start">

          {/* Number */}
          <span
            className="font-serif font-light pt-1 transition-colors duration-300"
            style={{ fontSize: "12px", letterSpacing: "0.14em", color: isActive ? "var(--gold)" : "var(--muted)" }}
            aria-hidden="true"
          >
            {belief.numeral}
          </span>

          {/* Title */}
          <div>
            <h3
              className="font-serif font-light transition-colors duration-300"
              style={{
                fontSize: "clamp(17px,1.9vw,24px)",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                color: isActive ? "var(--parch)" : "var(--cream)",
              }}
            >
              {belief.title}
            </h3>
            <AnimatePresence>
              {!isActive && (
                <motion.p
                  className="text-[12px] mt-2"
                  style={{ color: "var(--muted)" }}
                  initial={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Click to read the full argument →
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Domain tag — desktop only */}
          <div className="flex items-center gap-3 pt-1 max-sm:hidden">
            <span
              className="text-[10px] font-semibold tracking-[0.16em] uppercase px-3 py-1.5 border whitespace-nowrap"
              style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}
            >
              {belief.domain}
            </span>
          </div>
        </div>
      </button>

      {/* Expanded: full thesis + implication */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div
              className="grid grid-cols-[64px_1fr] max-sm:grid-cols-1 gap-6 pb-10"
            >
              <div aria-hidden="true" />
              <div className="max-w-[680px]">
                {/* Thesis */}
                <div className="h-px w-10 mb-6" style={{ background: "linear-gradient(90deg,var(--gold),transparent)" }} aria-hidden="true" />
                <p className="mb-6" style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--muted)" }}>
                  {belief.thesis}
                </p>

                {/* Practical implication */}
                <div
                  className="p-5 border-l-2"
                  style={{ background: "var(--void-3)", borderLeftColor: "var(--gold-rule)" }}
                >
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--gold)" }}>
                    In Practice
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: 1.78, color: "var(--cream)" }}>
                    {belief.implication}
                  </p>
                </div>

                {/* Mobile domain tag */}
                <span className="sm:hidden inline-block mt-5 text-[10px] font-semibold tracking-[0.16em] uppercase px-3 py-1.5 border" style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}>
                  {belief.domain}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
