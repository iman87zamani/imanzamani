"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Linkedin, Mail, ArrowRight, X } from "lucide-react";
import { useCommandMenu } from "@/hooks/useCommandMenu";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, COMMAND_SECTIONS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ReactNode> = {
  "Send an Email":    <Mail size={13} />,
  "LinkedIn Profile": <Linkedin size={13} />,
  "Download Résumé":  <FileText size={13} />,
};

export function CommandMenu() {
  const { open, setOpen } = useCommandMenu();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  const allItems = COMMAND_SECTIONS.flatMap(g => g.items);
  const filtered = query
    ? allItems.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))
    : allItems;

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex(i => Math.min(i + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp")   { e.preventDefault(); setSelectedIndex(i => Math.max(i - 1, 0)); }
      if (e.key === "Enter") {
        e.preventDefault();
        const item = filtered[selectedIndex];
        if (!item) return;
        if (item.href.startsWith("http") || item.href.startsWith("mailto")) {
          window.open(item.href, item.href.startsWith("http") ? "_blank" : undefined);
        } else {
          document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, selectedIndex, setOpen]);

  const groupedFiltered = COMMAND_SECTIONS.map(g => ({
    ...g,
    items: g.items.filter(i => filtered.includes(i as typeof filtered[0])),
  })).filter(g => g.items.length > 0);

  let flatIdx = 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[800]"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            className="fixed top-[20vh] left-1/2 z-[900] w-full max-w-[540px] -translate-x-1/2 px-4"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                background: "var(--void-2)",
                border: "1px solid var(--line-md)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.6),0 0 0 1px rgba(184,150,106,0.08)",
              }}
            >
              {/* Search */}
              <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: "1px solid var(--line)" }}>
                <Search size={14} style={{ color: "var(--muted)", flexShrink: 0 }} aria-hidden="true" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => { setQuery(e.target.value); setSelectedIndex(0); }}
                  placeholder="Search commands…"
                  className="flex-1 bg-transparent text-[14px] outline-none"
                  style={{ color: "var(--parch)", fontFamily: "var(--font-sans)" }}
                  aria-label="Search commands"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="cursor-large transition-colors duration-150"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--parch)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                  aria-label="Close"
                >
                  <X size={13} />
                </button>
              </div>

              {/* Results */}
              <div className="py-2 max-h-[360px] overflow-y-auto" role="listbox">
                {groupedFiltered.length === 0 ? (
                  <p className="px-5 py-8 text-center font-serif italic text-[14px]" style={{ color: "var(--muted)" }}>
                    No commands found
                  </p>
                ) : (
                  groupedFiltered.map(group => (
                    <div key={group.group} className="mb-1">
                      <p className="px-5 py-2 text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>
                        {group.group}
                      </p>
                      {group.items.map(item => {
                        const idx = flatIdx++;
                        const isSelected = idx === selectedIndex;
                        const isExternal = item.href.startsWith("http") || item.href.startsWith("mailto");
                        return (
                          <button
                            key={item.label}
                            role="option"
                            aria-selected={isSelected}
                            className={cn(
                              "w-full flex items-center gap-3 px-5 py-3 text-[13px] text-left transition-colors duration-100 cursor-large"
                            )}
                            style={{
                              background: isSelected ? "var(--gold-lo)" : "transparent",
                              color: isSelected ? "var(--parch)" : "var(--cream)",
                            }}
                            onClick={() => {
                              if (isExternal) window.open(item.href, item.href.startsWith("http") ? "_blank" : undefined);
                              else document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                              setOpen(false);
                            }}
                            onMouseEnter={() => setSelectedIndex(idx)}
                          >
                            <span style={{ color: "var(--gold)", flexShrink: 0 }}>
                              {ICON_MAP[item.label] ?? <ArrowRight size={13} />}
                            </span>
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 px-5 py-3" style={{ borderTop: "1px solid var(--line)" }}>
                <span className="text-[10px]" style={{ color: "var(--muted)" }}><kbd>↑↓</kbd> navigate</span>
                <span className="text-[10px]" style={{ color: "var(--muted)" }}><kbd>↵</kbd> select</span>
                <span className="text-[10px]" style={{ color: "var(--muted)" }}><kbd>esc</kbd> close</span>
                <span className="ml-auto text-[10px] font-bold tracking-[0.14em] uppercase" style={{ color: "var(--gold)" }}>⌘K</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
