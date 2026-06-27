"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useCommandMenu } from "@/hooks/useCommandMenu";

export function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setOpen: openCmd } = useCommandMenu();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
  };

  return (
    <>
      <motion.header
        role="banner"
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          background:     scrolled ? "rgba(8,8,10,0.95)"          : "transparent",
          backdropFilter: scrolled ? "blur(28px) saturate(180%)"  : "none",
          WebkitBackdropFilter: scrolled ? "blur(28px) saturate(180%)" : "none",
          borderBottom:   scrolled ? "1px solid var(--line-md)"   : "1px solid transparent",
          transition: "background 0.45s ease, border-color 0.45s ease",
        }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 3.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6">
          <div className="flex items-center justify-between h-[66px]">

            {/* Signature — appears on scroll */}
            <motion.div
              animate={{ opacity: scrolled ? 1 : 0, x: scrolled ? 0 : -6 }}
              transition={{ duration: 0.28 }}
            >
              <button
                onClick={() => scrollTo("#home")}
                className="font-serif text-[18px] font-light tracking-[0.05em] cursor-large"
                style={{ color: "var(--gold)" }}
                aria-label="Return to top"
              >
                Iman Zamani
              </button>
            </motion.div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-200 cursor-large"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--parch)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => openCmd(true)}
                className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.16em] transition-all duration-200 cursor-large px-2.5 py-1.5 border"
                style={{ color: "var(--muted)", borderColor: "var(--line)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold-rule)"; e.currentTarget.style.color = "var(--gold)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)";      e.currentTarget.style.color = "var(--muted)"; }}
                aria-label="Open command menu (⌘K)"
              >
                <Command size={10} aria-hidden="true" /> K
              </button>
              <ThemeToggle />
              <button
                onClick={() => scrollTo("#contact")}
                className="text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-2.5 border transition-all duration-200 cursor-large"
                style={{ color: "var(--gold)", borderColor: "var(--gold-rule)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--void)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                className="p-2 cursor-large"
                style={{ color: "var(--parch)" }}
                onClick={() => setMobileOpen(v => !v)}
                aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="fixed inset-0 z-[99] flex flex-col"
            style={{ background: "rgba(8,8,10,0.97)", backdropFilter: "blur(24px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div
              className="flex items-center justify-between px-6 h-[66px] border-b"
              style={{ borderColor: "var(--line)" }}
            >
              <span className="font-serif text-[18px]" style={{ color: "var(--gold)" }}>Iman Zamani</span>
              <button
                className="p-2 cursor-large"
                style={{ color: "var(--parch)" }}
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col px-8 py-6 flex-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left py-5 border-b font-serif text-[28px] font-light cursor-large transition-colors duration-200"
                  style={{ borderColor: "var(--line)", color: "var(--parch)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--parch)")}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.08, ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="p-8 border-t" style={{ borderColor: "var(--line)" }}>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="block w-full text-center text-[11px] font-bold tracking-[0.2em] uppercase py-4 cursor-large transition-opacity duration-200 hover:opacity-85"
                style={{ background: "var(--gold)", color: "var(--void)" }}
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
