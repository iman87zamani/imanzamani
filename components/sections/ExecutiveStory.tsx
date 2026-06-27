"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { STORY_CHAPTERS, CREDENTIALS } from "@/lib/constants";

export function ExecutiveStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--void-2)" }}
      aria-label="Perspective"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(237,229,216,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(237,229,216,0.02) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* ── Intro ──────────────────────────────────── */}
      <div className="relative max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6 pt-32 pb-20">
        <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-12 items-end">
          <RevealOnScroll>
            <SectionLabel>Perspective</SectionLabel>
            <GoldRule className="mb-7" />
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(38px,4.2vw,62px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--parch)" }}
            >
              How I developed a{" "}
              <em className="italic" style={{ color: "var(--gold)" }}>different way of seeing</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p style={{ fontSize: "17px", lineHeight: 1.82, color: "var(--muted)" }}>
              This is not a career summary. It is the story of how fifteen years of building operating models across complex environments shaped a perspective on technology leadership that I believe is rare — and increasingly necessary.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* ── Split: editorial photo + chapters ─────── */}
      <div className="relative max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6 pb-0">
        <div className="grid grid-cols-[42%_58%] gap-0 max-lg:grid-cols-1">

          {/* Sticky portrait — editorial treatment */}
          <div className="relative max-lg:hidden">
            <div className="sticky top-24 pb-32">
              <div className="relative overflow-hidden" style={{ border: "1px solid rgba(184,150,106,0.18)" }}>
                <motion.div style={{ y: photoY }}>
                  <Image
                    src="/images/portrait.jpg"
                    alt="Iman Zamani"
                    width={520}
                    height={680}
                    quality={90}
                    className="w-full object-cover object-top"
                    style={{ filter: "grayscale(8%) contrast(1.04)", aspectRatio: "520/680" }}
                  />
                </motion.div>
                {/* Right fade to blend */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(90deg,transparent 55%,var(--void-2) 100%)" }}
                  aria-hidden="true"
                />
                {/* Caption overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: "linear-gradient(0deg,var(--void-2),transparent)" }}
                >
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>
                    Dallas–Fort Worth, Texas
                  </p>
                </div>
              </div>

              {/* Pull quote */}
              <div className="mt-10 pr-8">
                <blockquote style={{ borderLeft: "2px solid var(--gold-rule)", paddingLeft: "20px" }}>
                  <p
                    className="font-serif italic font-light"
                    style={{ fontSize: "clamp(17px,1.7vw,21px)", lineHeight: 1.52, color: "var(--gold)" }}
                  >
                    "I started looking at organizations not through the lens of their technology, but through the lens of their operational architecture."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Story chapters */}
          <div className="pl-16 max-lg:pl-0 pb-24 max-lg:pb-16 flex flex-col">
            {STORY_CHAPTERS.map((chapter, i) => (
              <StoryChapter key={chapter.period} chapter={chapter} index={i} />
            ))}

            {/* Mobile pull quote */}
            <div className="lg:hidden mt-10 pt-10" style={{ borderTop: "1px solid var(--line)" }}>
              <blockquote style={{ borderLeft: "2px solid var(--gold-rule)", paddingLeft: "20px" }}>
                <p className="font-serif italic font-light" style={{ fontSize: "clamp(17px,4vw,21px)", lineHeight: 1.52, color: "var(--gold)" }}>
                  "I started looking at organizations not through the lens of their technology, but through the lens of their operational architecture."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* ── Credentials ────────────────────────────── */}
      <RevealOnScroll className="max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6 pb-32">
        <div className="pt-10" style={{ borderTop: "1px solid var(--line)" }}>
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "var(--muted)" }}>
            Credentials
          </p>
          <div className="flex flex-wrap gap-2.5">
            {CREDENTIALS.map((c, i) => (
              <motion.span
                key={c}
                className="text-[10px] font-semibold tracking-[0.18em] uppercase px-3.5 py-2 border"
                style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function StoryChapter({
  chapter, index,
}: {
  chapter: typeof STORY_CHAPTERS[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="py-14 max-lg:py-10"
      style={{ borderBottom: "1px solid var(--line)" }}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Period label */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
          {chapter.period}
        </span>
        <span
          className="block h-px flex-1"
          style={{ background: "linear-gradient(90deg,rgba(184,150,106,0.25),transparent)" }}
          aria-hidden="true"
        />
      </div>

      {/* Chapter heading */}
      <h3
        className="font-serif font-light mb-5"
        style={{ fontSize: "clamp(22px,2.3vw,30px)", lineHeight: 1.12, letterSpacing: "-0.015em", color: "var(--parch)" }}
      >
        {chapter.heading}
      </h3>

      {/* Body */}
      <p style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--muted)", maxWidth: "540px" }}>
        {chapter.body}
      </p>
    </motion.div>
  );
}
