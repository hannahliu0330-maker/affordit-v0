import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles, TrendingUp, PiggyBank, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-6rem] h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-64 w-64 rounded-full bg-brand-purple/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
            Turn real-world news into smarter money decisions
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
            Spend Smarter. <span className="text-brand-blue">Invest Better.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Affordit helps young adults manage money, understand market news, and turn financial
            decisions into smarter opportunities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full rounded-full px-7 sm:w-auto">
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full rounded-full px-7 sm:w-auto">
              <Link href="/dashboard">
                <PlayCircle className="mr-1 h-4 w-4" />
                View Demo
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-green" /> Bank-level encryption
            </span>
            <span className="inline-flex items-center gap-1.5">
              <PiggyBank className="h-4 w-4 text-brand-blue" /> Read-only access
            </span>
            <span className="inline-flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-brand-purple" /> No card required
            </span>
          </div>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="mx-auto mt-14 max-w-4xl">
      <div className="rounded-3xl border border-border bg-card p-2 shadow-xl shadow-primary/5">
        <div className="rounded-2xl border border-border bg-secondary/40 p-4 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard label="Net worth" value="$48,920" delta="+4.2%" tone="blue" />
            <StatCard label="Monthly budget left" value="$1,240" delta="62% used" tone="green" />
            <StatCard label="Portfolio impact" value="+$860" delta="This week" tone="purple" />
          </div>

          <div className="mt-4 rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">AI News Insight</p>
              <span className="rounded-full bg-brand-green/12 px-2.5 py-0.5 text-xs font-medium text-brand-green">
                Bullish
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              New EV subsidy bill could benefit battery suppliers. 3 stocks in your watchlist are
              likely impacted over the next quarter.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Semiconductors", "Clean Energy", "Automotive"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const toneMap = {
  blue: "text-brand-blue",
  green: "text-brand-green",
  purple: "text-brand-purple",
} as const;

function StatCard({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone: keyof typeof toneMap;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1.5 text-2xl font-bold tracking-tight text-foreground">{value}</p>
      <p className={`mt-1 text-xs font-medium ${toneMap[tone]}`}>{delta}</p>
    </div>
  );
}
