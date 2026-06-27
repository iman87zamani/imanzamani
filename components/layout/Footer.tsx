"use client";
import Link from "next/link";
import { Linkedin, Mail, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--line)", background: "var(--void)" }}
      role="contentinfo"
    >
      {/* Closing statement */}
      <div
        className="border-b"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6 py-16 max-lg:py-12">
          <div className="grid grid-cols-[1fr_auto] gap-12 items-end max-md:grid-cols-1 max-md:gap-8">
            <p
              className="font-serif italic font-light"
              style={{ fontSize: "clamp(20px,2.2vw,30px)", lineHeight: 1.45, color: "var(--cream)", maxWidth: "620px" }}
            >
              "The organizations that will lead the next decade are not the ones that deployed the most technology. They are the ones that built the operating models that made their technology work."
            </p>
            <div className="shrink-0 text-right max-md:text-left">
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1.5" style={{ color: "var(--gold)" }}>
                Iman Zamani
              </p>
              <p className="text-[11px]" style={{ color: "var(--muted)" }}>
                Dallasâ€“Fort Worth, Texas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6 py-8">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <span className="font-serif text-[19px] font-light tracking-[0.04em]" style={{ color: "var(--gold)" }}>
            Iman Zamani
          </span>
          <p className="text-[11px] tracking-[0.05em]" style={{ color: "var(--muted)" }}>
            Â© {year} Iman Zamani &nbsp;Â·&nbsp; Dallasâ€“Fort Worth, TX
          </p>
          <div className="flex items-center gap-5">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 cursor-large"
              style={{ color: "var(--muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              aria-label="LinkedIn profile"
            >
              <Linkedin size={15} strokeWidth={1.5} />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="transition-colors duration-200 cursor-large"
              style={{ color: "var(--muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              aria-label="Send email"
            >
              <Mail size={15} strokeWidth={1.5} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 cursor-large"
              style={{ color: "var(--muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              aria-label="Download rÃ©sumÃ© PDF"
            >
              RÃ©sumÃ©
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

