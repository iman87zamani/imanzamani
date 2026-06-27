import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Iman Zamani",
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--void)", color: "var(--parch)" }}
    >
      <p className="text-[10px] font-semibold tracking-[0.28em] uppercase mb-6" style={{ color: "var(--gold)" }}>
        404 — Page Not Found
      </p>
      <div className="h-px w-12 mb-8 mx-auto" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
      <h1
        className="font-serif font-light mb-6"
        style={{ fontSize: "clamp(48px,6vw,80px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--parch)" }}
      >
        This page doesn&apos;t<br />
        <em className="italic" style={{ color: "var(--gold)" }}>exist yet.</em>
      </h1>
      <p className="mb-12 max-w-[420px]" style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted)" }}>
        Some of the best operating models start from a blank page. Let&apos;s find what you were looking for.
      </p>
      <Link
        href="/"
        className="text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 transition-opacity duration-200 hover:opacity-85"
        style={{ background: "var(--gold)", color: "var(--void)" }}
      >
        Return Home
      </Link>
    </main>
  );
}
