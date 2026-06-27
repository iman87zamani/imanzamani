import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageOrchestrator } from "@/components/sections/PageOrchestrator";
import { BoardBrief } from "@/components/sections/BoardBrief";
import { ExecutivePOV } from "@/components/sections/ExecutivePOV";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ExecutiveStory } from "@/components/sections/ExecutiveStory";

import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:text-sm"
          style={{ background: "var(--gold)", color: "var(--void)" }}
        >
          Skip to main content
        </a>

        <PageOrchestrator />
        <BoardBrief />
        <ExecutivePOV />
        <CaseStudies />
        <ExecutiveStory />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

