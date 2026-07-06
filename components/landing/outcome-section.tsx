import Link from "next/link";
import { TrendingDown, TrendingUp, Target, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const outcomes = [
  { icon: TrendingDown, label: "Reduce Debt", tone: "blue" },
  { icon: TrendingUp, label: "Build Wealth", tone: "green" },
  { icon: Target, label: "Reach Goals", tone: "purple" },
  { icon: Sparkles, label: "Financial Freedom", tone: "yellow" },
];

const toneClasses: Record<string, string> = {
  blue: "bg-brand-blue/12 text-brand-blue",
  green: "bg-brand-green/12 text-brand-green",
  purple: "bg-brand-purple/12 text-brand-purple",
  yellow: "bg-brand-yellow/20 text-brand-yellow-foreground",
};

export function OutcomeSection() {
  return (
    <section className="border-t border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Better Financial Decisions
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Save smarter. Invest smarter. Grow wealth.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {outcomes.map((outcome) => (
            <div
              key={outcome.label}
              className="hover-lift rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${toneClasses[outcome.tone]}`}
              >
                <outcome.icon className="h-6 w-6" />
              </span>
              <p className="mt-3 text-sm font-semibold text-foreground">{outcome.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-secondary/50 p-8 sm:p-12">
          <h3 className="text-balance text-2xl font-bold text-foreground">
            Make investing simple and accessible
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            Our mission is to turn real-world news into actionable insights and combine smart money
            management with intelligent investing.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full px-7">
            <Link href="/dashboard">
              Get Started
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
