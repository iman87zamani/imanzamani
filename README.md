# Iman Zamani — Executive Personal Brand Website
### Production-Ready · Next.js 14 · TypeScript · Tailwind CSS · Framer Motion

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # Production build
npm run lint       # ESLint check
```

## Deploy to Vercel (zero config)

```bash
npx vercel         # Follow prompts — deploys in ~90 seconds
```

---

## Project Structure

```
iman-zamani/
├── app/
│   ├── globals.css          # Design tokens (dark + light mode)
│   ├── layout.tsx           # Root: fonts, SEO, structured data
│   ├── page.tsx             # Main page — all sections
│   ├── not-found.tsx        # Custom 404
│   ├── sitemap.ts           # Auto-generated sitemap
│   └── robots.txt           # SEO robots file
├── components/
│   ├── StructuredData.tsx   # Schema.org JSON-LD
│   ├── layout/
│   │   ├── Navigation.tsx   # Sticky nav, mobile menu, ⌘K, theme toggle
│   │   └── Footer.tsx       # Links, résumé download
│   ├── sections/
│   │   ├── PageOrchestrator.tsx   # Intro → Hero state handoff
│   │   ├── IntroOverlay.tsx       # Cinematic 3.5s entry sequence
│   │   ├── Hero.tsx               # Full-bleed hero + stats
│   │   ├── ExecutiveStory.tsx     # Narrative career story (sticky photo)
│   │   ├── ExecutivePOV.tsx       # 7 leadership beliefs (accordion)
│   │   ├── ImpactDashboard.tsx    # Metrics + capability depth bars
│   │   ├── CareerTimeline.tsx     # Animated career timeline
│   │   ├── ThoughtLeadership.tsx  # Filterable insights library
│   │   └── ContactSection.tsx     # Validated contact form + channels
│   └── ui/
│       ├── AnimatedCounter.tsx    # Count-up on scroll
│       ├── Button.tsx             # solid / ghost / text variants
│       ├── CommandMenu.tsx        # ⌘K command palette
│       ├── CustomCursor.tsx       # Spring-physics gold cursor
│       ├── GoldRule.tsx           # Signature gold divider
│       ├── RevealOnScroll.tsx     # Reusable scroll reveal
│       ├── ScrollProgress.tsx     # Top progress bar
│       ├── SectionLabel.tsx       # Uppercase section eyebrows
│       └── ThemeToggle.tsx        # Dark/light mode toggle
├── hooks/
│   ├── useCommandMenu.ts    # ⌘K keyboard shortcut state
│   ├── useScrollProgress.ts # Scroll position → progress bar
│   └── useTheme.ts          # Dark/light mode with localStorage
├── lib/
│   ├── constants.ts         # ALL site content — edit copy here
│   └── utils.ts             # cn() Tailwind merge helper
├── public/
│   ├── favicon.svg          # SVG favicon
│   ├── images/              # All 5 professional photos
│   └── resume.pdf           # ← ADD YOUR RÉSUMÉ HERE
└── types/index.ts           # TypeScript interfaces
```

---

## Premium Features Included

| Feature | Component | Notes |
|---|---|---|
| Cinematic intro | `IntroOverlay.tsx` | 3.5s, skips on repeat visits |
| Custom spring cursor | `CustomCursor.tsx` | Desktop only, hover:hover |
| ⌘K Command menu | `CommandMenu.tsx` | Navigate, email, LinkedIn, résumé |
| Dark/Light mode | `useTheme.ts` + `ThemeToggle.tsx` | Persisted, OS-preference aware |
| Scroll progress bar | `ScrollProgress.tsx` | 2px gold bar at top |
| Animated counters | `AnimatedCounter.tsx` | Eased count-up on viewport entry |
| Scroll reveal | `RevealOnScroll.tsx` | Respects prefers-reduced-motion |
| Contact form | `ContactSection.tsx` | Real-time validation, mailto fallback |
| Thought leadership | `ThoughtLeadership.tsx` | Filterable by topic |
| Career timeline | `CareerTimeline.tsx` | Expandable accordion |
| Impact dashboard | `ImpactDashboard.tsx` | Metrics + capability bars |
| Schema.org | `StructuredData.tsx` | Person + WebSite graph |
| OpenGraph + Twitter | `layout.tsx` metadata | 1200×630 image support |
| Sitemap | `sitemap.ts` | Auto-generated |
| Custom 404 | `not-found.tsx` | On-brand error page |
| Keyboard accessible | All components | Focus rings, aria-*, sr-only |
| Reduced motion | `globals.css` | Kills all animations for accessibility |

---

## To Complete Before Launch

1. **Add résumé PDF** → `public/resume.pdf`
2. **Add OG image** → `public/images/og-image.jpg` (1200×630)
3. **Update URL** → `lib/constants.ts` → `SITE_CONFIG.url`
4. **Update LinkedIn URL** → `lib/constants.ts` → `SITE_CONFIG.linkedin`
5. **(Optional) Add email backend** → Replace mailto in `ContactSection.tsx` with fetch to API route for true form submission

---

## Lighthouse Targets
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Run locally: `npx lighthouse http://localhost:3000 --view`
