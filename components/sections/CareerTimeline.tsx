"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldRule } from "@/components/ui/GoldRule";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ChevronDown } from "lucide-react";

const ROLES = [
  {
    period: "2023 — Present",
    company: "Ryan Specialty Group",
    context: "Publicly Traded · 9,000+ Employees · Chicago / Remote",
    role: "Director, Technology Operations & Enterprise Transformation",
    summary: "Leads enterprise technology operations, operating model design, M&A integration, governance strategy, and service delivery transformation across a publicly traded specialty insurance holding company managing 18+ acquisitions and 700+ business stakeholders.",
    impact: ["18 acquisitions operationalized", "2,000+ manual tickets/month eliminated", "400+ agents migrated", "SOX governance established"],
    bullets: [
      "Operationalized 18 acquisitions through standardized governance frameworks, onboarding playbooks, and service readiness standards — adopted as the enterprise M&A integration standard.",
      "Architected enterprise application onboarding operating model establishing ownership accountability, supportability standards, and governance controls at scale.",
      "Established SOX-aligned governance controls and audit readiness practices across a regulated public company environment.",
      "Automated identity lifecycle management processes eliminating 2,000+ manual transactions per month.",
      "Led migration of 400+ IT support agents to modernized enterprise service management platform with zero service continuity disruption.",
      "Developed enterprise service desk future-state strategy aligned to AI readiness and intelligent automation.",
    ],
  },
  {
    period: "2019 — 2023",
    company: "Duck Creek Technologies",
    context: "SaaS / Insurance · Global Operations · Boston, MA",
    role: "Global Head of IT Operations",
    summary: "Built the company's global IT operations function from the ground up — designing the operating model, building the team, and establishing service delivery frameworks to support growth from 5 to 90+ enterprise insurance customers.",
    impact: ["5→90+ enterprise customers", "20+ days→3 days provisioning", "24/7 NOC established", "Global team built from inception"],
    bullets: [
      "Built global IT operations from inception — operating model, staffing, service delivery frameworks, and 24x7 NOC established in parallel with rapid enterprise growth.",
      "Reduced environment provisioning from 20+ days to approximately 3 days through process redesign, automation, and cross-functional alignment.",
      "Designed ITIL-aligned incident, problem, and change management processes — measurably reducing major incident frequency.",
      "Led enterprise cloud transformation operational initiatives supporting Duck Creek's transition to a cloud-native SaaS delivery model.",
    ],
  },
  {
    period: "Earlier Career",
    company: "NTT DATA",
    context: "Service Management · Advisory",
    role: "Service Management Advisor",
    summary: "Developed foundational expertise in enterprise service management, operational improvement, and stakeholder alignment — the disciplines that anchor a 15-year career in technology operations leadership.",
    impact: ["ITSM foundations built", "Enterprise process design", "Stakeholder alignment"],
    bullets: [],
  },
] as const;

export function CareerTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="relative py-32 max-lg:py-20"
      style={{ background: "var(--void)" }}
      aria-label="Career Timeline"
    >
      <div className="max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6">
        <RevealOnScroll className="mb-16">
          <SectionLabel>Career</SectionLabel>
          <GoldRule className="mb-7" />
          <h2
            className="font-serif font-light"
            style={{ fontSize: "clamp(38px,4.2vw,62px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "var(--parch)" }}
          >
            Where the operating{" "}
            <em className="italic" style={{ color: "var(--gold)" }}>models were built</em>
          </h2>
        </RevealOnScroll>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px max-md:hidden" style={{ background: "var(--line-md)" }} aria-hidden="true" />

          <div className="flex flex-col gap-0">
            {ROLES.map((role, i) => (
              <TimelineItem
                key={role.company}
                role={role}
                index={i}
                isActive={activeIndex === i}
                onToggle={() => setActiveIndex(prev => prev === i ? null : i)}
              />
            ))}
          </div>
        </div>

        {/* Credentials */}
        <RevealOnScroll className="mt-16 pt-12 border-t" style={{ borderColor: "var(--line)" }}>
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "var(--muted)" }}>
            Credentials & Certifications
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["ITIL Foundation", "Azure Foundation", "Six Sigma", "Wharton PE Operations", "B.S. Accounting — UNT"].map(c => (
              <span
                key={c}
                className="text-[10px] font-semibold tracking-[0.18em] uppercase px-3.5 py-2 border"
                style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function TimelineItem({
  role, index, isActive, onToggle
}: {
  role: typeof ROLES[number];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className="relative pl-14 max-md:pl-0"
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-[18px] top-9 w-[9px] h-[9px] rounded-full border max-md:hidden transition-all duration-300"
        style={{
          background: isActive ? "var(--gold)" : "var(--void-3)",
          borderColor: isActive ? "var(--gold)" : "var(--gold-rule)",
          boxShadow: isActive ? "0 0 0 4px rgba(184,150,106,0.15)" : "none",
        }}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className="border-b cursor-large"
        style={{ borderColor: "var(--line)" }}
      >
        <button
          className="w-full text-left py-8 max-md:py-6"
          onClick={onToggle}
          aria-expanded={isActive}
          aria-label={`${role.role} at ${role.company}`}
        >
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 flex-wrap mb-3">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
                  {role.period}
                </span>
                <span className="text-[11px]" style={{ color: "var(--muted)" }}>{role.context}</span>
              </div>
              <h3
                className="font-serif font-light"
                style={{ fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.15, letterSpacing: "-0.01em", color: isActive ? "var(--parch)" : "var(--cream)" }}
              >
                {role.role}
              </h3>
              <p className="text-[13px] mt-1.5 font-semibold" style={{ color: "var(--muted)" }}>{role.company}</p>
            </div>
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 mt-1"
              aria-hidden="true"
            >
              <ChevronDown size={16} color="var(--muted)" />
            </motion.div>
          </div>

          {/* Impact chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {role.impact.map(imp => (
              <span
                key={imp}
                className="text-[10px] font-medium tracking-[0.1em] px-2.5 py-1"
                style={{ color: "var(--gold)", background: "var(--gold-lo)", border: "1px solid var(--gold-rule)" }}
              >
                {imp}
              </span>
            ))}
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-8">
                <p className="text-[15px] leading-[1.82] mb-6 max-w-[640px]" style={{ color: "var(--muted)" }}>
                  {role.summary}
                </p>
                {role.bullets.length > 0 && (
                  <ul className="flex flex-col gap-0">
                    {role.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="text-[14px] leading-[1.7] py-2.5 pl-5 relative border-b"
                        style={{ color: "var(--muted)", borderColor: "var(--line)" }}
                      >
                        <span className="absolute left-0 top-3 text-[12px]" style={{ color: "var(--gold)" }}>—</span>
                        <span dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--cream);font-weight:500">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
