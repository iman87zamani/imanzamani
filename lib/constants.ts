// ─── SITE CONFIG ──────────────────────────────────────────
export const SITE_CONFIG = {
  name: "Iman Zamani",
  title: "Iman Zamani — Operating Models. Transformation. Governance.",
  description:
    "Technology doesn't transform businesses. Operating models do. Iman Zamani partners with boards, CIOs, and PE operating partners to build the operational architecture that makes enterprise transformation permanent.",
  url: "https://imanzamani.com",
  email: "imanzamanii@yahoo.com",
  linkedin: "https://linkedin.com/in/imanzamani",
  location: "Dallas–Fort Worth, Texas",
} as const;

// ─── NAV ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Framework", href: "/framework" },
{ label: "The Brief",    href: "#brief"    },
  { label: "Point of View",href: "#pov"      },
  { label: "Case Studies", href: "#cases"    },
  { label: "Perspective",  href: "#story"    },
  { label: "Insights",     href: "#insights" },
] as const;

// ─── HERO ─────────────────────────────────────────────────
export const HERO = {
  worldview:  "Technology doesn't transform businesses.",
  worldview2: "Operating models do.",
  subhead:
    "Most transformation initiatives fail not because of the technology — but because the operational architecture beneath it was never built. I partner with boards, CIOs, and PE operating partners to design the operating models, governance frameworks, and AI readiness foundations that make enterprise change permanent.",
  descriptor: "Technology Operations & Transformation Executive",
  cta1Label:  "Read the Board Brief",
  cta2Label:  "View Point of View",
} as const;

// ─── BOARD BRIEF ──────────────────────────────────────────
export const BOARD_BRIEF = {
  summary:
    "Iman Zamani is a technology operations and transformation executive with 15 years of experience building the operational architecture that makes enterprise strategy executable. He is recognized for designing operating models at scale, standardizing M&A integration across acquisition-heavy environments, establishing governance frameworks that survive regulatory scrutiny, and building the operational foundations that determine whether AI investments produce outcomes or experiments.",

  philosophy:
    "Enterprise transformation is not a technology project. It is an organizational design problem with a technology dimension. The organizations that win are those that redesign how work gets done — the ownership structures, governance disciplines, service models, and operational rhythms — before they deploy the next platform. Technology accelerates what already works. It rarely fixes what doesn't.",

  outcomes: [
    "Operationalized 18 acquisitions at a publicly traded specialty insurance holding company — zero service disruptions, full audit continuity across every transaction",
    "Eliminated 2,000+ manual transactions per month through identity lifecycle automation across a 9,000-employee enterprise",
    "Reduced environment provisioning from 20+ days to approximately 3 days through process redesign and operational standardization",
    "Built the global IT operations function from inception, scaling support from 5 to 90+ enterprise customers at a SaaS insurance technology company",
    "Established SOX-aligned governance controls and audit readiness practices across a regulated public company environment",
  ],

  strengths: [
    "Operating Model Architecture",
    "M&A Integration",
    "AI Readiness",
    "Governance & Compliance",
    "Enterprise Transformation",
    "ITSM at Scale",
  ],

  industries: ["Insurance", "SaaS", "Private Equity–Backed", "Publicly Traded"],

  approach:
    "Every engagement begins with the same question: what does this organization need to be able to do — consistently, at scale, under pressure — that it cannot do today? The answer defines the operating model. Technology follows from that answer, never precedes it.",

  whyOrgsCallMe: [
    "When M&A activity is outpacing integration capability and each acquisition is harder than the last",
    "When AI investments are stalling on operational readiness gaps that no vendor will name",
    "When governance and compliance are consuming leadership attention rather than enabling growth",
    "When IT service delivery cannot keep pace with enterprise ambition",
    "When transformation programs are producing activity, not outcomes",
  ],

  differentiators: [
    "Operates at the intersection of strategy and execution — rare at VP and CIO level, and increasingly the competency boards are seeking",
    "Brings a repeatable M&A integration methodology validated across 18 acquisitions in a single operating environment",
    "Treats governance as a growth instrument, not a compliance obligation — and can demonstrate the return on that framing",
    "Designs operating models before selecting platforms — ensuring technology serves the model, not the reverse",
    "Communicates in the language of business value, risk, and competitive advantage — not IT delivery",
  ],
} as const;

// ─── CASE STUDIES ─────────────────────────────────────────
export const CASE_STUDIES = [
  {
    id: "ma-integration",
    tag: "M&A Integration",
    company: "Ryan Specialty Group",
    context: "Publicly Traded · Specialty Insurance",
    headline:
      "When acquisition velocity outpaces integration capability, enterprise value erodes faster than it is created.",
    problem:
      "Ryan Specialty was growing through acquisition at a pace the existing IT integration approach could not sustain. Each acquisition introduced governance gaps, inconsistent service standards, and compliance risk. There was no repeatable framework — every integration was a bespoke effort that taxed the same team, consumed the same leadership attention, and produced inconsistent results. The cost was not visible on any one transaction. It compounded across all of them.",
    approach:
      "Designed an enterprise M&A integration methodology from the ground up: a standardized framework incorporating technology assessment, service desk onboarding, application governance, asset inventorying, ownership structures, and operational handoff criteria. Built to scale — each acquisition entering the process would be faster, more controlled, and more compliant than the last. The methodology was adopted as the enterprise standard for all future M&A activity.",
    outcome:
      "18 acquisitions operationalized with zero service disruptions and full audit continuity across every transaction.",
    mattered:
      "In acquisition-heavy environments, integration speed and consistency are direct drivers of enterprise value. A repeatable, governed integration framework transforms M&A from an operational risk into a competitive capability — one that compounds in the organization's favor with every transaction.",
    metric: "18",
    metricLabel: "Acquisitions",
    metricSub: "Zero disruptions",
  },
  {
    id: "automation",
    tag: "AI Readiness & Automation",
    company: "Ryan Specialty Group",
    context: "Enterprise Operations · 9,000+ Employees",
    headline:
      "Manual processes at scale are not an IT problem. They are a governance problem wearing operational clothing.",
    problem:
      "Identity lifecycle management across a 9,000-employee enterprise was handled through manual processes generating more than 2,000 transactions per month. Beyond the operational burden, each manual transaction represented an access governance risk — the gap between when a role changed and when access reflected that change. In a SOX-regulated environment, that gap has audit consequences. It also had AI readiness consequences: an organization that cannot govern identity consistently cannot build reliable data foundations for automation or AI.",
    approach:
      "Designed and implemented automated identity lifecycle workflows that eliminated the manual transaction layer entirely. The solution addressed the operational burden and the governance risk as a single design problem — because they were. The automation architecture was built with AI readiness in mind: clean process design, trusted data flows, and governed ownership that would serve as foundation for future intelligent automation.",
    outcome:
      "2,000+ manual transactions eliminated per month. Access governance risk reduced. Audit posture improved. AI readiness foundation established.",
    mattered:
      "This was not an efficiency project. It was a governance and readiness project. Organizations that cannot govern identity consistently cannot govern anything consistently — and cannot build the operational foundations that AI requires to deliver value rather than risk.",
    metric: "2,000+",
    metricLabel: "Per month",
    metricSub: "Tickets eliminated",
  },
  {
    id: "saas-scale",
    tag: "Operating Model Design",
    company: "Duck Creek Technologies",
    context: "SaaS · Insurance Core Systems · Global",
    headline:
      "You cannot scale a SaaS business on an IT operations model that was never designed to scale.",
    problem:
      "Duck Creek was growing from a small number of enterprise customers to a global SaaS platform serving the insurance industry. The IT operations function had not been designed — it existed reactively. There was no NOC, no mature incident management, no standardized change process, and environment provisioning was taking 20+ days — a significant drag on customer onboarding, satisfaction, and the business's ability to close new contracts confidently.",
    approach:
      "Built the global IT operations function from inception: designed the operating model, established the 24x7 NOC, implemented ITIL-aligned incident, problem, and change management processes, and redesigned environment provisioning through process standardization and automation. Every structural decision was made with scale in mind — building an operating model capable of supporting 10× the customer base without proportional headcount growth.",
    outcome:
      "Provisioning reduced from 20+ days to approximately 3. Major incident frequency measurably reduced. Operations scaled to support 90+ enterprise customers.",
    mattered:
      "The operating model built here was the operational infrastructure behind Duck Creek's growth story. The business did not scale because of the technology it deployed. It scaled because the operating model beneath that technology was designed to support scale. That distinction is the thesis of this entire body of work.",
    metric: "−85%",
    metricLabel: "Provisioning",
    metricSub: "20 days → 3 days",
  },
] as const;

// ─── POV BELIEFS ──────────────────────────────────────────
export const POV_BELIEFS = [
  {
    numeral: "01",
    title: "Technology doesn't transform businesses. Operating models do.",
    thesis:
      "The deployment of enterprise technology is not the moment of transformation. It is the moment of test. Organizations that have built the right operating model — clear ownership, governed processes, disciplined execution — find that technology accelerates what is already working. Organizations that haven't find that technology reveals, at scale, every structural weakness they had before the implementation began. The platform is neutral. The operating model determines the outcome.",
    implication:
      "Before any platform decision, the question is: what is the operating model this technology is supposed to serve? If the answer is unclear, the investment will underperform — not because the technology fails, but because the organization was never built to use it.",
    domain: "Operating Model",
  },
  {
    numeral: "02",
    title: "Governance is the highest-leverage investment most organizations aren't making.",
    thesis:
      "In every high-growth, acquisition-heavy, or regulated environment I have worked in, the organizations with the strongest governance frameworks moved faster — not slower. Governance eliminates the decision latency, the audit firefighting, and the integration drag that consume leadership attention and organizational capacity. The organizations that treat governance as a constraint pay for that framing every quarter, in ways that rarely appear on a single line of the P&L but are visible in aggregate to anyone looking.",
    implication:
      "Governance frameworks designed as growth infrastructure give leadership the visibility and confidence to move at the speed the business demands. The question is not whether to govern — every organization governs, well or badly. The question is whether governance is designed to enable velocity or absorb it.",
    domain: "Governance",
  },
  {
    numeral: "03",
    title: "M&A integration is the operational stress test that exposes every weakness in your operating model.",
    thesis:
      "An acquisition doesn't create operational problems — it reveals them. Organizations with weak service ownership, inconsistent governance, and undisciplined integration processes find that each acquisition amplifies those weaknesses. Organizations with strong operating models find that each acquisition gets smoother, faster, and more controlled than the last. After 18 acquisitions through one standardized integration framework, the pattern is impossible to miss: integration quality is a direct and measurable function of operating model maturity.",
    implication:
      "The integration playbook is not a project plan. It is a mirror. Before the next acquisition closes, the question worth asking is not 'how will we integrate this?' but 'what does our current integration track record tell us about the operating model we're running?'",
    domain: "M&A Integration",
  },
  {
    numeral: "04",
    title: "AI readiness is an operational discipline problem — and most organizations are solving the wrong one.",
    thesis:
      "Most enterprise AI initiatives fail to deliver value not because the model is wrong, but because the operational environment beneath it was never prepared. Inconsistent data governance. Unclear service ownership. Undocumented processes. Knowledge trapped in individuals. AI amplifies what already exists in your operating model. The organizations seeing the highest AI ROI are the ones that invested in operational discipline before they invested in AI — and that sequence is not accidental.",
    implication:
      "AI readiness is assessed through the same lens as operating model maturity: the quality of process documentation, data governance, service catalog discipline, and knowledge management. The gap analysis is always organizational, not technical. The technology is rarely the constraint.",
    domain: "AI Readiness",
  },
  {
    numeral: "05",
    title: "Enterprise service management is the operating system of the modern organization — most companies are running the wrong version.",
    thesis:
      "ITSM was designed to manage IT services. Enterprise service management — when designed correctly — governs how the entire organization delivers value. It manages how work flows, how requests are fulfilled, how knowledge is captured and shared, and how performance is measured. Organizations still running enterprise service management as a helpdesk function are leaving an enormous operational leverage opportunity unclaimed — and building a ceiling on every AI and automation initiative that depends on clean process and data foundations.",
    implication:
      "ServiceNow is not an ITSM platform. It is an enterprise operating system. The organizations extracting the most value from it built the operating model first — defined service ownership, established governance, documented processes, designed the service catalog — and then let the platform serve that model. Most implementations invert this sequence. That inversion explains most of the disappointment.",
    domain: "Enterprise Svc Mgmt",
  },
  {
    numeral: "06",
    title: "The CIO role is being redefined. The executives who understand operational architecture will define what it becomes.",
    thesis:
      "The CIO of the next decade is not primarily a technology leader. They are an operational architect — someone who understands how technology, process, governance, and organizational design interact to create or destroy enterprise value. The technical decisions are becoming easier; commoditized platforms and capable vendors have reduced that variable. The organizational decisions — what operating model do we need, how do we govern at scale, how do we integrate without losing control — are becoming harder, more consequential, and more difficult to delegate.",
    implication:
      "The executives who will define technology leadership in the next decade are those who can operate fluently at the intersection of strategy, operations, governance, and organizational design. That is the intersection I have spent 15 years building at — and the one I believe the most important technology leadership conversations of the next decade will happen at.",
    domain: "Executive Leadership",
  },
] as const;

// ─── THOUGHT LEADERSHIP ───────────────────────────────────
export const INSIGHTS = [
  {
    tag: "Operating Models",
    readTime: "8 min",
    issue: "Issue 01",
    headline: "Why Most Digital Transformations Fail Before They Begin",
    subhead: "The problem isn't the technology. It's the operating model the technology is supposed to serve.",
    preview:
      "Every year, organizations invest billions in digital transformation. And every year, a significant majority of those investments underperform. The technology is rarely the problem. The operating model almost always is. Before a single platform is selected, before a single integration is scoped, the organization needs to answer one question: what does this enterprise need to be capable of doing — consistently, at scale, under pressure — that it cannot do today? The answer to that question is the operating model. Everything else is implementation.",
    href: "https://linkedin.com/in/imanzamani",
  },
  {
    tag: "M&A Integration",
    readTime: "6 min",
    issue: "Issue 02",
    headline: "The Integration Tax: Why PE-Backed IT Handoffs Destroy Value",
    subhead: "Integration drag is the silent destroyer of acquisition value — and it is almost entirely preventable.",
    preview:
      "The technology integration typically begins after the deal closes. By that point, the window for clean governance design has already closed. Service ownership is ambiguous. Compliance continuity is at risk. The team is reactive rather than prepared. The cost — in disruption, audit exposure, and leadership attention — compounds with every subsequent acquisition. Organizations that build the integration framework before the deals close move faster, with more control, and at materially lower operational risk.",
    href: "https://linkedin.com/in/imanzamani",
  },
  {
    tag: "AI Readiness",
    readTime: "7 min",
    issue: "Issue 03",
    headline: "The Five Operational Prerequisites Your AI Strategy Is Skipping",
    subhead: "The gap between AI ambition and AI value is almost always an operating model problem.",
    preview:
      "The organizations seeing the highest enterprise AI ROI share one characteristic: they invested in operational discipline before they invested in AI. Clean process documentation. Trusted knowledge management. Clear service ownership. Reliable data governance. A change management discipline capable of absorbing new tooling at scale. These are not technology problems. They are organizational readiness problems — and they are the consistent reason most enterprise AI initiatives produce impressive demonstrations rather than lasting operational outcomes.",
    href: "https://linkedin.com/in/imanzamani",
  },
  {
    tag: "Governance",
    readTime: "5 min",
    issue: "Issue 04",
    headline: "Governance as Competitive Advantage: The Case for Rethinking the Framing",
    subhead: "The organizations that move fastest are almost always the ones with the strongest governance disciplines.",
    preview:
      "The conventional wisdom treats governance as a friction cost — something regulated industries endure and everyone else avoids. The organizations I have worked with that move fastest and scale most effectively are the ones with the most rigorous governance disciplines. The reason is counterintuitive but consistent: strong governance eliminates the decision latency, audit firefighting, and integration drag that consume leadership attention and organizational capacity in less-governed environments. Governance is not a tax on ambition. It is the precondition for it.",
    href: "https://linkedin.com/in/imanzamani",
  },
  {
    tag: "ServiceNow",
    readTime: "6 min",
    issue: "Issue 05",
    headline: "ServiceNow Beyond ITSM: What an Enterprise Operating System Actually Requires",
    subhead: "Most organizations are operating a $50M enterprise platform as a sophisticated ticketing system.",
    preview:
      "The organizations extracting the most enterprise value from ServiceNow share one characteristic: they built the operating model first. They defined service ownership, established governance disciplines, documented processes, and designed the service catalog before they configured the platform. ServiceNow then became the system of record for how the enterprise works — not just how IT manages requests. The platform was always capable of this. Most implementations never gave it the operating model it required to get there.",
    href: "https://linkedin.com/in/imanzamani",
  },
  {
    tag: "Operational Excellence",
    readTime: "9 min",
    issue: "Issue 06",
    headline: "The Operating Model Is the Strategy: Why Execution Is Not a Second-Order Problem",
    subhead: "Strategy without operational architecture is aspiration. Operational architecture without strategy is activity.",
    preview:
      "The most common failure mode in enterprise leadership is treating execution as a second-order problem — something that follows from strategy rather than enabling it. The organizations that sustain competitive advantage over time are those where strategic intent and operational capability are designed together, iteratively, as the same problem. The operating model is not the implementation of the strategy. In the organizations that win, it is the strategy, expressed in the language of how the organization actually works.",
    href: "https://linkedin.com/in/imanzamani",
  },
] as const;

// ─── PERSONAL STORY ───────────────────────────────────────
export const STORY_CHAPTERS = [
  {
    period: "The Formative Observation",
    heading:
      "The most ambitious organizations I encountered early in my career were being undone not by bad strategy — but by the absence of the operational discipline required to execute it.",
    body: "Not wrong technology choices. Not insufficient investment. By the absence of the structural disciplines — ownership clarity, governance rigor, process consistency, accountability rhythms — that allow a strategy to be executed reliably at scale. That observation became the lens through which I have evaluated every operating environment since. The question I learned to ask first was not 'what is the strategy?' but 'what is this organization actually capable of doing, consistently, under pressure?' The gap between those two answers is where most enterprise value is created or destroyed.",
  },
  {
    period: "The Scale Education",
    heading:
      "Building a global IT operations function from the ground up taught me that the operating model is the real product — the technology is just the interface.",
    body: "At Duck Creek Technologies, I built the operational infrastructure for a SaaS company growing faster than its operations could support. Every decision I made — how incidents would be managed, how changes would be governed, how environments would be provisioned, how the NOC would operate — became a structural element of an operating model that would need to support 10× the customer base without proportional headcount growth. The lesson was permanent: the operating model is not the thing you build after you figure out the strategy. In the organizations that scale, it is the strategy, expressed operationally.",
  },
  {
    period: "The Conviction",
    heading:
      "Eighteen acquisitions made the pattern undeniable: operating model maturity is the single most reliable predictor of M&A integration success.",
    body: "At Ryan Specialty Group, I had the opportunity — and the pressure — to operationalize 18 acquisitions through a standardized integration framework. What the process confirmed consistently was this: acquisitions entering a mature operating model environment were absorbed smoothly. Acquisitions encountering governance gaps, unclear ownership, or inconsistent service standards created drag that compounded with each transaction. The integration playbook I designed was, at its core, a governance and operating model delivery mechanism. It worked because it was built on the belief that operational discipline is not the cost of growth. It is the precondition for it.",
  },
] as const;

// ─── CREDENTIALS ──────────────────────────────────────────
export const CREDENTIALS = [
  "ITIL Foundation",
  "Azure Foundation",
  "Six Sigma",
  "Wharton PE Operations",
  "B.S. Accounting — University of North Texas",
] as const;

// ─── COMMAND MENU ─────────────────────────────────────────
export const COMMAND_SECTIONS = [
  {
    group: "Navigate",
    items: [
      { label: "The Board Brief",   href: "#brief"    },
      { label: "Point of View",     href: "#pov"      },
      { label: "Case Studies",      href: "#cases"    },
      { label: "Perspective",       href: "#story"    },
      { label: "Insights",          href: "#insights" },
      { label: "Contact",           href: "#contact"  },
    ],
  },
  {
    group: "Connect",
    items: [
      { label: "Send an Email",     href: "mailto:imanzamanii@yahoo.com" },
      { label: "LinkedIn Profile",  href: "https://linkedin.com/in/imanzamani" },
      { label: "Download Résumé",   href: "/resume.pdf" },
    ],
  },
] as const;
