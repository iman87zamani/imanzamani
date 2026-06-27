"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  useEffect(() => {
    // Detect hover capability
    const mq = window.matchMedia("(hover: hover)");
    setHasHover(mq.matches);
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Interactive elements
    const interactiveSelectors =
      "a, button, [role='button'], .cursor-large, input, textarea, label";

    const addLarge = () => setIsLarge(true);
    const removeLarge = () => setIsLarge(false);

    const attachListeners = () => {
      document.querySelectorAll<HTMLElement>(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", addLarge);
        el.addEventListener("mouseleave", removeLarge);
      });
    };

    attachListeners();

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      observer.disconnect();
    };
  }, [rawX, rawY]);

  if (!hasHover) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isLarge ? 40 : 10,
        height: isLarge ? 40 : 10,
        opacity: isVisible ? 1 : 0,
        backgroundColor: isLarge
          ? "rgba(184, 150, 106, 0.13)"
          : "transparent",
        borderColor: "rgba(184, 150, 106, 1)",
        borderWidth: 1,
        borderStyle: "solid",
      }}
      transition={{
        width: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
        height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.2 },
        backgroundColor: { duration: 0.25 },
      }}
      aria-hidden="true"
    />
  );
}
