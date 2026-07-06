import { SiteNav } from "@/components/landing/site-nav";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { OutcomeSection } from "@/components/landing/outcome-section";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <HeroSection />
      <HowItWorksSection />
      <OutcomeSection />
      <SiteFooter />
    </main>
  );
}
