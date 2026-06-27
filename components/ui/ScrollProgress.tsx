"use client";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  useScrollProgress();
  return (
    <div
      id="scroll-progress"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ width: "0%" }}
    />
  );
}
