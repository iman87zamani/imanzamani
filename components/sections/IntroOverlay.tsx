"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroOverlayProps {
  onComplete: () => void;
}

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [phase, setPhase] = useState<"idle" | "line" | "name" | "sub" | "exit">("idle");
  const [done, setDone] = useState(false);

  const complete = useCallback(() => {
    setDone(true);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (sessionStorage.getItem("iz-intro")) {
      complete();
      return;
    }

    // Start sequence
    setPhase("line");
    const t1 = setTimeout(() => setPhase("name"), 1100);
    const t2 = setTimeout(() => setPhase("sub"),  1900);
    const t3 = setTimeout(() => {
      setPhase("exit");
      sessionStorage.setItem("iz-intro", "1");
      setTimeout(complete, 700);
    }, 3200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [complete]);

  if (done) return null;

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          className="fixed inset-0 z-[500] flex flex-col items-center justify-center pointer-events-none"
          style={{ background: "#08080A" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          {/* The signature gold line — draws left to right */}
          <motion.div
            className="absolute h-px"
            style={{
              background: "#B8966A",
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ width: 0 }}
            animate={{ width: "min(68vw, 820px)" }}
            transition={{ duration: 1.0, ease: [0.25, 0, 0.1, 1], delay: 0.15 }}
          />

          {/* Name — bisects the gold line */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={phase === "line" ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="font-serif font-light"
              style={{
                fontSize: "clamp(56px, 9vw, 126px)",
                lineHeight: 0.88,
                letterSpacing: "-0.026em",
                color: "#EDE5D8",
              }}
            >
              Iman Zamani
            </h1>
          </motion.div>

          {/* Descriptor — appears after name settles */}
          <motion.p
            className="relative z-10 mt-7 text-center font-sans"
            style={{
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              color: "#B8966A",
            }}
            initial={{ opacity: 0 }}
            animate={
              phase === "line" || phase === "name" ? { opacity: 0 } : { opacity: 1 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Operating Models &nbsp;·&nbsp; Transformation &nbsp;·&nbsp; Governance
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={phase === "sub" ? { opacity: 0.45 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="w-px bg-[#B8966A]"
              initial={{ height: 0 }}
              animate={phase === "sub" ? { height: 52 } : { height: 0 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
