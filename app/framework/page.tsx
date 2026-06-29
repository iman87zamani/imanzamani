"use client";

import { useEffect, useRef, useState } from "react";

interface Pillar {
  name: string;
  layer: "foundation" | "direction";
  definition: string;
  implication: string;
  question: string;
  example: string;
}

interface ValueOutcome {
  title: string;
  description: string;
}

interface ValueGroup {
  label: string;
  outcomes: ValueOutcome[];
}

const PILLARS: Pillar[] = [
  {
    name: "Governance",
    layer: "foundation",
    definition: "Named owners. Clear decision rights. Accountability that lives in structure, not individuals.",
    implication: "Without governance, AI makes decisions no one owns. Every automated outcome becomes an unowned risk.",
    question: "When your AI produces a harmful output tomorrow, who is accountable — and did you know that before it happened?",
    example: "Organizations with mature governance frameworks reduced AI-related incident escalations by establishing decision rights before deployment, not in response to failure.",
  },
  {
    name: "Process",
    layer: "foundation",
    definition: "Documented before automated. Governed before scaled. Clear enough to hand to a machine.",
    implication: "Automating an undocumented process does not fix it. It accelerates it. AI inherits the dysfunction and executes it at speed.",
    question: "Can you describe, precisely, the process you are about to automate — or does it exist only in the institutional memory of three people?",
    example: "At Ryan Specialty, process documentation preceded every automation initiative. The result was not just successful automation — it was transferable, auditable, and scalable across 18 acquisitions.",
  },
  {
    name: "Data",
    layer: "foundation",
    definition: "Trusted. Governed. Owned. Every field has an accountable steward.",
    implication: "AI learns from your data. If your data reflects years of accumulated dysfunction, your AI will too — with confidence.",
    question: "Would you make a business-critical decision based entirely on your current data? If not, what makes you trust the AI that trains on it?",
    example: "Data governance established before AI deployment creates a compounding advantage. Organizations that solve this early develop a data asset that becomes more valuable as AI capabilities expand.",
  },
  {
    name: "Strategy",
    layer: "direction",
    definition: "AI investment tied directly to business outcomes the board cares about.",
    implication: "Technology without strategic alignment accelerates activity in the wrong direction. Speed is not value if the destination is wrong.",
    question: "Does every AI initiative in your organization trace directly to a business outcome — or to a technology team roadmap?",
    example: "The organizations extracting the most value from AI are not the ones with the most sophisticated models. They are the ones that made AI investment a business strategy decision before it became a technology one.",
  },
  {
    name: "Technology",
    layer: "direction",
    definition: "Platforms serve the operating model. Not the reverse.",
    implication: "A technology stack built for the tool defaults rather than the organization operating model creates a ceiling on every transformation initiative.",
    question: "Is your enterprise platform configured to how your organization actually works — or to how the vendor imagined a generic organization works?",
    example: "Organizations that treat ServiceNow as a strategic operating layer — not a ticketing system — consistently extract three to five times the value from the same licensing investment.",
  },
  {
    name: "People",
    layer: "direction",
    definition: "Leaders who own outcomes. Not activities.",
    implication: "Technology transforms at the speed of adoption. Adoption happens at the speed of trust. Without deliberate change leadership, AI becomes the most expensive unused investment in the organization.",
    question: "Do your leaders know how to lead an organization where AI is a team member — or are they still leading one where it is a project?",
    example: "The executives who will define technology leadership in the next decade are those who develop AI literacy as a leadership competency, not a technical one.",
  },
];

const VALUE_GROUPS: ValueGroup[] = [
  {
    label: "Growth",
    outcomes: [
      { title: "Revenue Growth", description: "AI identifies opportunities at scale that human bandwidth cannot sustain. The operating model determines whether those signals reach decisions." },
      { title: "Customer Experience", description: "Faster resolution, smarter service, personalized at scale. Only possible when the process layer is clean enough to automate confidently." },
    ],
  },
  {
    label: "Efficiency",
    outcomes: [
      { title: "Margin Improvement", description: "Automation removes friction from every process it touches. The organizations with the cleanest processes compound this advantage fastest." },
      { title: "Operational Scale", description: "More output from the same cost base. Not by working harder — by building the operating model that lets AI absorb the volume." },
    ],
  },
  {
    label: "Resilience",
    outcomes: [
      { title: "Risk Reduction", description: "Governance designed before incidents is the only kind that works. AI governance retrofitted after a failure is crisis management, not leadership." },
      { title: "M&A Integration", description: "Every acquisition is an operating model transaction. Organizations with mature frameworks absorb acquisitions. Those without absorb their dysfunction." },
    ],
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", margin: "0 0 24px 0" }}>
      {children}
    </p>
  );
}

function Rule({ style }: { style?: React.CSSProperties }) {
  return <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", ...style }} />;
}

function Hero() {
  const { ref, inView } = useInView(0.1);
  return (
    <section ref={ref} style={{ padding: "140px 0 100px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.9s ease, transform 0.9s ease" }}>
      <Eyebrow>Executive Framework · Version 1.0</Eyebrow>
      <h1 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(36px,5vw,58px)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.02em", color: "#ffffff", margin: "0 0 20px 0", maxWidth: "760px" }}>
        The AI-Ready<br />Operating Model™
      </h1>
      <p style={{ fontFamily: "Georgia,serif", fontSize: "clamp(16px,2vw,19px)", fontStyle: "italic", color: "rgba(255,255,255,0.5)", margin: "0 0 36px 0", maxWidth: "560px", lineHeight: 1.5 }}>
        Why operating model maturity determines AI outcomes
      </p>
      <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "clamp(15px,1.8vw,18px)", color: "rgba(255,255,255,0.72)", margin: "0 0 52px 0", maxWidth: "580px", lineHeight: 1.65 }}>
        Most organizations do not have an AI problem.{" "}
        <span style={{ color: "#ffffff" }}>They have an operating model problem.</span>
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" as const }}>
        <a href="#amplifier" style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", background: "#ffffff", color: "#08080A", fontFamily: "system-ui,sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.5px", textDecoration: "none", borderRadius: "2px" }}>
          Explore the Framework
        </a>
        <a href="mailto:imanzamanii@yahoo.com" style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", background: "transparent", color: "rgba(255,255,255,0.6)", fontFamily: "system-ui,sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.5px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px" }}>
          Get in Touch
        </a>
      </div>
    </section>
  );
}

function Amplifier() {
  const { ref, inView } = useInView(0.2);
  return (
    <section id="amplifier" style={{ padding: "80px 0 100px" }}>
      <Rule style={{ marginBottom: "80px" }} />
      <Eyebrow>The Amplifier Principle</Eyebrow>
      <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 400, color: "#ffffff", margin: "0 0 16px 0", letterSpacing: "-0.015em", lineHeight: 1.2, maxWidth: "640px" }}>
        AI does not fix operating models.<br />It amplifies them.
      </h2>
      <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", margin: "0 0 60px 0", maxWidth: "480px", lineHeight: 1.65 }}>
        The operating model determines the outcome. Always. Before a platform is selected, a model is deployed, or a vendor is engaged.
      </p>
      <div ref={ref} style={{ display: "flex", gap: "2px", flexWrap: "wrap" as const }}>
        <div style={{ flex: 1, minWidth: "260px", padding: "40px 36px", borderRadius: "2px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-32px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.25)", margin: "0 0 28px 0" }}>Weak Operating Model</p>
          {["Unclear governance.", "Undocumented process.", "Data no one trusts."].map(l => (
            <p key={l} style={{ fontFamily: "Georgia,serif", fontSize: "15px", fontStyle: "italic", color: "rgba(255,255,255,0.32)", margin: "0 0 6px 0", lineHeight: 1.5 }}>{l}</p>
          ))}
          <div style={{ margin: "24px 0 16px", height: "32px", borderLeft: "1px solid rgba(255,255,255,0.15)" }} />
          <p style={{ fontFamily: "Georgia,serif", fontSize: "15px", fontStyle: "italic", color: "rgba(255,255,255,0.28)", margin: 0 }}>AI amplifies the weakness</p>
        </div>
        <div style={{ flex: 1, minWidth: "260px", padding: "40px 36px", borderRadius: "2px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.18)", borderTop: "2px solid rgba(255,255,255,0.7)", opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(32px)", transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s" }}>
          <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.55)", margin: "0 0 28px 0" }}>Strong Operating Model</p>
          {["Clear governance.", "Defined process.", "Data with owners."].map(l => (
            <p key={l} style={{ fontFamily: "Georgia,serif", fontSize: "15px", fontStyle: "italic", color: "rgba(255,255,255,0.75)", margin: "0 0 6px 0", lineHeight: 1.5 }}>{l}</p>
          ))}
          <div style={{ margin: "24px 0 16px", height: "32px", borderLeft: "1px solid rgba(255,255,255,0.35)" }} />
          <p style={{ fontFamily: "Georgia,serif", fontSize: "16px", fontStyle: "italic", color: "#ffffff", margin: 0 }}>AI multiplies performance</p>
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  const [open, setOpen] = useState(false);
  return (
    <div role="button" tabIndex={0} aria-expanded={open}
      onClick={() => setOpen(!open)}
      onKeyDown={e => e.key === "Enter" && setOpen(!open)}
      style={{ padding: "28px 32px", border: `1px solid ${open ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)"}`, borderTop: `1px solid ${open ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.08)"}`, borderRadius: "2px", background: open ? "rgba(255,255,255,0.04)" : "transparent", cursor: "pointer", outline: "none", transition: "border-color 0.25s ease, background 0.25s ease" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", margin: "0 0 8px 0" }}>
            {pillar.layer === "foundation" ? "Foundation" : "Direction"}
          </p>
          <h3 style={{ fontFamily: "Georgia,serif", fontSize: "20px", fontWeight: 400, color: "#ffffff", margin: 0, letterSpacing: "-0.01em" }}>{pillar.name}</h3>
        </div>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "20px", transform: open ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.25s ease", marginTop: "2px", lineHeight: 1 }}>+</span>
      </div>
      {!open && <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)", margin: "12px 0 0", lineHeight: 1.6 }}>{pillar.definition}</p>}
      {open && (
        <div style={{ marginTop: "24px" }}>
          <Rule style={{ marginBottom: "24px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "28px" }}>
            {[
              { label: "Definition", content: pillar.definition },
              { label: "Business Implication", content: pillar.implication },
              { label: "Executive Question", content: pillar.question, quote: true },
              { label: "In Practice", content: pillar.example },
            ].map(({ label, content, quote }) => (
              <div key={label}>
                <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", margin: "0 0 10px" }}>{label}</p>
                <p style={{ fontFamily: quote ? "Georgia,serif" : "system-ui,sans-serif", fontSize: "14px", fontStyle: quote ? "italic" : "normal", color: quote ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.65 }}>
                  {quote ? `"${content}"` : content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Pillars() {
  const { ref, inView } = useInView(0.1);
  const foundation = PILLARS.filter(p => p.layer === "foundation");
  const direction = PILLARS.filter(p => p.layer === "direction");
  const layerLabel = (text: string, sub: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
      <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)", margin: 0 }}>{text} — {sub}</p>
      <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
    </div>
  );
  return (
    <section style={{ padding: "80px 0 100px" }}>
      <Rule style={{ marginBottom: "80px" }} />
      <Eyebrow>Six Pillars of Operating Model Readiness</Eyebrow>
      <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 400, color: "#ffffff", margin: "0 0 16px 0", letterSpacing: "-0.015em", lineHeight: 1.2, maxWidth: "600px" }}>
        The foundation determines the ceiling.
      </h2>
      <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", margin: "0 0 64px 0", maxWidth: "520px", lineHeight: 1.65 }}>
        Six pillars. Two layers. Click any pillar to expand.
      </p>
      <div ref={ref} style={{ opacity: inView ? 1 : 0, transition: "opacity 0.7s ease" }}>
        <div style={{ marginBottom: "40px" }}>
          {layerLabel("Foundation", "Can the organization execute?")}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
            {foundation.map(p => <PillarCard key={p.name} pillar={p} />)}
          </div>
        </div>
        <div>
          {layerLabel("Direction", "Is it aimed at the right destination?")}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
            {direction.map(p => <PillarCard key={p.name} pillar={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadinessFlow() {
  const { ref, inView } = useInView(0.2);
  const steps = [
    { label: "Operational Readiness", desc: "The organization executes consistently. Accountability is structural. AI has a foundation it can run on." },
    { label: "AI Readiness", desc: "AI deploys with confidence. Automation finds signal, not noise. Governance controls what happens at scale.", strong: true },
  ];
  return (
    <section style={{ padding: "80px 0 100px" }}>
      <Rule style={{ marginBottom: "80px" }} />
      <Eyebrow>The Readiness Progression</Eyebrow>
      <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 400, color: "#ffffff", margin: "0 0 60px 0", letterSpacing: "-0.015em", lineHeight: 1.2, maxWidth: "560px" }}>
        Readiness is sequential.<br />You cannot skip the foundation.
      </h2>
      <div ref={ref} style={{ maxWidth: "580px" }}>
        {steps.map((step, i) => (
          <div key={step.label}>
            <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.7s ease ${i * 0.2}s, transform 0.7s ease ${i * 0.2}s` }}>
              <div style={{ padding: "32px 36px", border: `1px solid ${step.strong ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.12)"}`, borderTop: `${step.strong ? "2" : "1"}px solid rgba(255,255,255,${step.strong ? "0.5" : "0.3"})`, borderRadius: "2px", background: step.strong ? "rgba(255,255,255,0.04)" : "transparent" }}>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "21px", fontWeight: 400, color: "#ffffff", margin: "0 0 12px 0" }}>{step.label}</h3>
                <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ padding: "0 0 0 36px", opacity: inView ? 1 : 0, transition: `opacity 0.7s ease ${(i + 0.5) * 0.2}s` }}>
                <div style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.2)", margin: "0" }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ValueCard({ outcome }: { outcome: ValueOutcome }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ padding: "24px 26px", border: "1px solid rgba(255,255,255,0.08)", borderTop: `1px solid rgba(255,255,255,${hovered ? "0.4" : "0.08"})`, borderRadius: "2px", background: hovered ? "rgba(255,255,255,0.05)" : "transparent", transition: "all 0.25s ease", cursor: "default" }}>
      <h4 style={{ fontFamily: "Georgia,serif", fontSize: "17px", fontWeight: 400, color: "#ffffff", margin: "0 0 10px 0" }}>{outcome.title}</h4>
      <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "13px", color: hovered ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.3)", margin: 0, lineHeight: 1.65, transition: "color 0.25s ease" }}>{outcome.description}</p>
    </div>
  );
}

function EnterpriseValue() {
  const { ref, inView } = useInView(0.1);
  return (
    <section style={{ padding: "80px 0 120px" }}>
      <Rule style={{ marginBottom: "80px" }} />
      <div style={{ padding: "36px 40px", background: "#ffffff", borderRadius: "2px", marginBottom: "2px" }}>
        <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: "rgba(0,0,0,0.4)", margin: "0 0 8px 0" }}>The Destination</p>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,4vw,42px)", fontWeight: 400, color: "#08080A", margin: "0 0 8px 0", letterSpacing: "-0.02em", lineHeight: 1.1 }}>Enterprise Value Creation</h2>
        <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "14px", color: "rgba(0,0,0,0.5)", margin: 0 }}>AI is a business strategy. Not a technology initiative.</p>
      </div>
      <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "2px", opacity: inView ? 1 : 0, transition: "opacity 0.8s ease 0.2s" }}>
        {VALUE_GROUPS.map(group => (
          <div key={group.label}>
            <div style={{ padding: "12px 26px", background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.45)", margin: 0 }}>{group.label}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
              {group.outcomes.map(o => <ValueCard key={o.title} outcome={o} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClosingQuote() {
  const { ref, inView } = useInView(0.2);
  return (
    <section ref={ref} style={{ padding: "100px 0 140px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "opacity 1s ease, transform 1s ease" }}>
      <Rule style={{ marginBottom: "80px" }} />
      <div style={{ maxWidth: "720px" }}>
        <div style={{ width: "2px", height: "48px", background: "#ffffff", marginBottom: "36px" }} />
        <blockquote style={{ margin: 0 }}>
          <p style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 400, fontStyle: "italic", color: "#ffffff", margin: "0 0 40px 0", lineHeight: 1.3, letterSpacing: "-0.015em" }}>
            "AI does not fix operating models.<br />It amplifies them."
          </p>
        </blockquote>
        <Rule style={{ marginBottom: "28px" }} />
        <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "14px", fontWeight: 600, color: "#ffffff", margin: "0 0 3px 0" }}>Iman Zamani</p>
        <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)", margin: "0 0 48px 0" }}>Technology Transformation Executive · Dallas–Fort Worth</p>
        <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.2)", margin: 0, textTransform: "uppercase" as const, letterSpacing: "0.5px" }}>
          The AI-Ready Operating Model™ · Version 1.0<br />
          Foundation: Governance · Process · Data · Direction: Strategy · Technology · People
        </p>
      </div>
    </section>
  );
}

export default function FrameworkPage() {
  return (
    <main id="main-content" style={{ background: "#08080A", minHeight: "100vh", color: "#ffffff" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 clamp(24px,5vw,80px)" }}>
        <Hero />
        <Amplifier />
        <Pillars />
        <ReadinessFlow />
        <EnterpriseValue />
        <ClosingQuote />
      </div>
      <style>{`
        @media (prefers-reduced-motion: reduce) { * { transition-duration: 0.01ms !important; } }
        *:focus-visible { outline: 2px solid rgba(255,255,255,0.5); outline-offset: 4px; }
      `}</style>
    </main>
  );
}
