import { BudgetingSection } from "@/components/landing/budgeting-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNav } from "@/components/landing/site-nav";

export default function BudgetingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <BudgetingSection />
      <SiteFooter />
    </main>
  );
}
