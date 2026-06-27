"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GoldRule } from "@/components/ui/GoldRule";
import { HERO } from "@/lib/constants";

interface HeroProps { isReady: boolean }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};
const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};
const rule = {
  hidden: { scaleX: 0, opacity: 0 },
  show:   { scaleX: 1, opacity: 1, transition: { duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero({ isReady }: HeroProps) {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-[55%_45%] max-lg:grid-cols-1 overflow-hidden"
      aria-label="Iman Zamani — Technology Operations & Transformation Executive"
    >
      {/* ── Copy column ─────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-end px-20 pb-28 pt-36 max-xl:px-14 max-lg:order-2 max-lg:px-8 max-lg:pb-16 max-lg:pt-6">
        <motion.div variants={container} initial="hidden" animate={isReady ? "show" : "hidden"}>

          {/* Overline */}
          <motion.div variants={up} className="flex items-center gap-3.5 mb-10">
            <span
              className="block h-px w-9 flex-shrink-0"
              style={{ background: "linear-gradient(90deg,var(--gold),transparent)" }}
              aria-hidden="true"
            />
            <p className="text-[10px] font-semibold tracking-[0.28em] uppercase" style={{ color: "var(--gold)" }}>
              {HERO.descriptor}
            </p>
          </motion.div>

          {/* Governing worldview — the headline that earns authority */}
          <motion.h1
            variants={up}
            className="font-serif font-light"
            style={{ fontSize: "clamp(46px,5.6vw,84px)", lineHeight: 1.01, letterSpacing: "-0.025em", color: "var(--parch)" }}
          >
            <span className="block">{HERO.worldview}</span>
            <em
              className="block not-italic"
              style={{ color: "var(--gold)", fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              {HERO.worldview2}
            </em>
          </motion.h1>

          {/* Gold rule */}
          <motion.div variants={rule} style={{ transformOrigin: "left center" }} className="my-9">
            <GoldRule />
          </motion.div>

          {/* Thesis — one clear paragraph about the work */}
          <motion.p
            variants={up}
            className="font-serif italic font-light mb-14"
            style={{ fontSize: "clamp(16px,1.65vw,20px)", lineHeight: 1.7, color: "var(--cream)", maxWidth: "490px" }}
          >
            {HERO.subhead}
          </motion.p>

          {/* Proof figures */}
          <motion.div
            variants={up}
            className="flex flex-wrap gap-x-12 gap-y-5 pt-10 mb-12"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            {[
              { n: "18",  label: "Acquisitions\nOperationalized" },
              { n: "15+", label: "Years Enterprise\nLeadership"  },
              { n: "9K+", label: "Employees\nSupported"          },
            ].map(s => (
              <div key={s.label}>
                <div
                  className="font-serif font-medium leading-none"
                  style={{ fontSize: "clamp(36px,3.6vw,50px)", letterSpacing: "-0.03em", color: "var(--gold)" }}
                >
                  {s.n}
                </div>
                <p
                  className="text-[10px] font-medium tracking-[0.13em] uppercase mt-1.5 leading-[1.6] whitespace-pre-line"
                  style={{ color: "var(--muted)", maxWidth: "108px" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTAs — specific, directional */}
          <motion.div variants={up} className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("brief")}
              className="text-[10px] font-bold tracking-[0.2em] uppercase px-9 py-[15px] transition-opacity duration-200 hover:opacity-84 cursor-large"
              style={{ background: "var(--gold)", color: "var(--void)" }}
              aria-label="Read the Board Brief"
            >
              {HERO.cta1Label}
            </button>
            <button
              onClick={() => scrollTo("pov")}
              className="text-[10px] font-semibold tracking-[0.17em] uppercase px-9 py-[14px] border transition-all duration-200 cursor-large"
              style={{ color: "var(--muted)", borderColor: "var(--line-md)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold-rule)"; e.currentTarget.style.color = "var(--parch)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line-md)"; e.currentTarget.style.color = "var(--muted)"; }}
              aria-label="View Point of View"
            >
              {HERO.cta2Label}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Editorial portrait ───────────────────────── */}
      <div
        className="relative overflow-hidden max-lg:h-[58vh] max-lg:order-1"
        aria-hidden="true"
      >
        <Image
          src="/images/hero.jpg"
          alt="Iman Zamani presenting at whiteboard in a modern executive boardroom"
          fill
          priority
          quality={93}
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-[center_18%]"
          style={{ transform: "scale(1.025)", transition: "transform 9s ease" }}
          onLoad={e => { (e.target as HTMLImageElement).style.transform = "scale(1)"; }}
        />

        {/* Gradient — seamless bleed from photo into dark background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "linear-gradient(270deg, transparent 18%, var(--void) 84%)",
              "linear-gradient(0deg, var(--void) 0%, transparent 24%)",
            ].join(","),
          }}
        />

        {/* Mobile-only bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none lg:hidden"
          style={{ background: "linear-gradient(0deg, var(--void) 0%, transparent 48%)" }}
        />
      </div>

      {/* Full-width bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none z-10"
        style={{ background: "linear-gradient(0deg, var(--void), transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
