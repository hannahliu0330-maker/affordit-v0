import { SecuritySection } from "@/components/landing/security-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNav } from "@/components/landing/site-nav";

export default function SecurityPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <SecuritySection />
      <SiteFooter />
    </main>
  );
}
