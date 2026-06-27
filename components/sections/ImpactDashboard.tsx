"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldRule } from "@/components/ui/GoldRule";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const METRICS = [
  { value: 18, suffix: "", label: "Acquisitions\nIntegrated", sub: "Zero service disruptions", color: "var(--gold)" },
  { value: 2000, suffix: "+", label: "Manual Tickets\nEliminated Monthly", sub: "Identity lifecycle automation", color: "var(--gold-hi)" },
  { value: 400, suffix: "+", label: "Agents\nMigrated", sub: "Platform modernization", color: "var(--gold)" },
  { value: 85, suffix: "%", label: "Provisioning\nTime Reduced", sub: "20+ days → ~3 days", color: "var(--gold-hi)" },
  { value: 90, suffix: "+", label: "Enterprise\nCustomers Scaled", sub: "Global SaaS operations", color: "var(--gold)" },
  { value: 15, suffix: "+", label: "Years\nEnterprise Leadership", sub: "Insurance · SaaS · PE", color: "var(--gold-hi)" },
];

const TIMELINE_BARS = [
  { label: "M&A Integration", value: 98, description: "18 acquisitions · Enterprise standard" },
  { label: "Operating Model Design", value: 96, description: "End-to-end framework architecture" },
  { label: "AI Readiness & Automation", value: 90, description: "Workflow automation · 2,000+ tickets/mo eliminated" },
  { label: "Governance & SOX Compliance", value: 94, description: "Audit-ready controls · Public company" },
  { label: "Enterprise Service Management", value: 92, description: "ITSM at 9,000+ employee scale" },
  { label: "Digital Transformation", value: 88, description: "Cloud-native · Platform modernization" },
];

export function ImpactDashboard() {
  return (
    <section
      id="outcomes"
      className="relative py-32 max-lg:py-20"
      style={{ background: "var(--void-2)" }}
      aria-label="Business Impact Dashboard"
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
              Outcomes that{" "}
              <em className="italic" style={{ color: "var(--gold)" }}>boards understand</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p style={{ fontSize: "17px", lineHeight: 1.82, color: "var(--muted)" }}>
              Verified outcomes delivered across publicly traded and high-growth environments — where operational precision is the difference between value creation and value destruction.
            </p>
          </RevealOnScroll>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-px mb-px" style={{ background: "var(--line)" }}>
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} metric={m} index={i} />
          ))}
        </div>

        {/* Capability depth bars */}
        <div className="mt-px border border-[var(--line)]" style={{ background: "var(--void-2)" }}>
          <div className="p-10 max-md:p-6">
            <p className="text-[10px] font-semibold tracking-[0.24em] uppercase mb-8" style={{ color: "var(--muted)" }}>
              Domain Depth
            </p>
            <div className="flex flex-col gap-5">
              {TIMELINE_BARS.map((bar, i) => (
                <DepthBar key={bar.label} bar={bar} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index }: { metric: typeof METRICS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      className="relative p-10 max-md:p-6 group overflow-hidden"
      style={{ background: "var(--void-2)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, ${metric.color}, transparent)` }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{
          background: `linear-gradient(90deg, ${metric.color}, transparent)`,
          transform: isInView ? "scaleX(1)" : "scaleX(0)",
          transition: `transform 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 0.08 + 0.2}s`,
        }}
      />
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 whitespace-pre-line" style={{ color: "var(--muted)" }}>
        {metric.label}
      </p>
      <div
        className="font-serif font-medium leading-none mb-3"
        style={{ fontSize: "clamp(44px,5vw,68px)", letterSpacing: "-0.04em", color: metric.color }}
      >
        <AnimatedCounter target={metric.value} suffix={metric.suffix} />
      </div>
      <p className="text-[12px]" style={{ color: "var(--muted)" }}>{metric.sub}</p>
    </motion.div>
  );
}

function DepthBar({ bar, index }: { bar: typeof TIMELINE_BARS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="grid grid-cols-[200px_1fr_48px] max-sm:grid-cols-1 gap-4 items-center">
      <div>
        <p className="text-[13px] font-medium" style={{ color: "var(--cream)" }}>{bar.label}</p>
        <p className="text-[11px] mt-0.5" style={{ color: "var(--muted)" }}>{bar.description}</p>
      </div>
      <div className="h-px relative" style={{ background: "var(--line-md)" }}>
        <motion.div
          className="absolute left-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, var(--gold-hi), var(--gold))" }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${bar.value}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <span className="text-[12px] font-semibold text-right" style={{ color: "var(--gold)" }}>
        {bar.value}
      </span>
    </div>
  );
}
