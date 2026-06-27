import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ─── COLOR SYSTEM ────────────────────────────────────────────
      colors: {
        void: {
          DEFAULT: "#08080A",
          2: "#0E0E11",
          3: "#141418",
          4: "#1A1A1F",
        },
        gold: {
          DEFAULT: "#B8966A",
          hi: "#D4B483",
          lo: "rgba(184,150,106,0.12)",
          rule: "rgba(184,150,106,0.28)",
        },
        parchment: {
          DEFAULT: "#EDE5D8",
          cream: "#C8BBA8",
          muted: "#7A7068",
        },
        line: {
          DEFAULT: "rgba(237,229,216,0.07)",
          md: "rgba(237,229,216,0.13)",
        },
      },

      // ─── TYPOGRAPHY ──────────────────────────────────────────────
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(68px,8vw,116px)", { lineHeight: "0.87", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(48px,5.5vw,80px)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(38px,4.2vw,62px)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(28px,3vw,40px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading":    ["clamp(22px,2.2vw,28px)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "label":      ["10px", { lineHeight: "1", letterSpacing: "0.28em" }],
        "body-lg":    ["17px", { lineHeight: "1.82" }],
        "body":       ["15px", { lineHeight: "1.75" }],
        "body-sm":    ["13px", { lineHeight: "1.75" }],
        "caption":    ["11px", { lineHeight: "1.6", letterSpacing: "0.06em" }],
      },

      // ─── SPACING ─────────────────────────────────────────────────
      spacing: {
        "section": "128px",
        "section-sm": "88px",
        "18": "72px",
        "22": "88px",
        "26": "104px",
      },

      // ─── ANIMATION ───────────────────────────────────────────────
      transitionTimingFunction: {
        "expo": "cubic-bezier(0.16,1,0.3,1)",
        "smooth": "cubic-bezier(0.4,0,0.2,1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },

      // ─── BACKGROUND IMAGE ─────────────────────────────────────────
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4B483 0%, #B8966A 100%)",
        "gold-h": "linear-gradient(90deg, #B8966A, transparent)",
        "grid-pattern":
          "linear-gradient(rgba(237,229,216,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(237,229,216,0.025) 1px, transparent 1px)",
        "hero-overlay":
          "linear-gradient(270deg, transparent 25%, #08080A 85%), linear-gradient(0deg, #08080A 0%, transparent 20%)",
        "thesis-overlay":
          "linear-gradient(270deg, transparent 40%, #0E0E11 100%)",
      },
      backgroundSize: {
        "grid": "64px 64px",
      },

      // ─── MAX WIDTH ────────────────────────────────────────────────
      maxWidth: {
        "site": "1200px",
      },

      // ─── KEYFRAMES ────────────────────────────────────────────────
      keyframes: {
        "line-draw": {
          "0%": { width: "0" },
          "100%": { width: "min(72vw, 880px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(184,150,106,0.4)" },
          "50%": { boxShadow: "0 0 0 6px rgba(184,150,106,0)" },
        },
      },
      animation: {
        "line-draw": "line-draw 1.2s cubic-bezier(0.4,0,0.2,1) forwards",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
