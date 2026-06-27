export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ProofPoint {
  company: string;
  stat: string;
  description: string;
}

export interface Discipline {
  num: string;
  label: string;
  name: string;
  body: string;
}

export interface PhilosophyPrinciple {
  numeral: string;
  title: string;
  body: string;
}

export interface InsightCard {
  tag: string;
  headline: string;
  body: string;
  cta: string;
  href: string;
}

export interface ExperienceItem {
  period: string;
  company: string;
  context: string;
  role: string;
  summary: string;
  bullets: readonly string[];
}
