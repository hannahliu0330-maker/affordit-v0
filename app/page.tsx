import { SiteNav } from "@/components/landing/site-nav";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { BudgetingSection } from "@/components/landing/budgeting-section";
import { AiInsightsSection } from "@/components/landing/ai-insights-section";
import { PortfolioImpactSection } from "@/components/landing/portfolio-impact-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { SecuritySection } from "@/components/landing/security-section";
import { OutcomeSection } from "@/components/landing/outcome-section";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <HeroSection />
      <HowItWorksSection />
      <BudgetingSection />
      <AiInsightsSection />
      <PortfolioImpactSection />
      <FeaturesSection />
      <SecuritySection />
      <OutcomeSection />
      <SiteFooter />
    </main>
  );
}
