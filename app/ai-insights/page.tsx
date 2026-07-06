import { AiInsightsSection } from "@/components/landing/ai-insights-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNav } from "@/components/landing/site-nav";

export default function AiInsightsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <AiInsightsSection />
      <SiteFooter />
    </main>
  );
}
