"use client";

import { useState } from "react";
import { IntroOverlay } from "./IntroOverlay";
import { Hero } from "./Hero";

export function PageOrchestrator() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <>
      <IntroOverlay onComplete={() => setHeroReady(true)} />
      <Hero isReady={heroReady} />
    </>
  );
}
