import Link from "next/link";
import { ArrowRight, Check, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free Plan",
    audience: "Budgeting-only for students",
    price: "$0",
    period: "/month",
    icon: GraduationCap,
    tone: "blue",
    cta: "Start free",
    features: [
      "Monthly budgeting",
      "Manual income and expense tracking",
      "Spending categories",
      "Savings goals",
      "Basic reports",
      "Student spending alerts",
    ],
  },
  {
    name: "AffordIt Premium",
    audience: "Investment education and personalized insights",
    price: "$6.99",
    period: "/month",
    yearly: "$59/year",
    icon: Sparkles,
    tone: "purple",
    cta: "Upgrade to Premium",
    featured: true,
    features: [
      "Everything in Free",
      "AI investment education",
      "Portfolio/watchlist insights",
      "Risk level analysis",
      "News impact explanations",
      "Beginner-friendly investment recommendations",
      "Financial health score",
      "Advanced reports",
    ],
  },
];

const toneClasses = {
  blue: "bg-brand-blue/12 text-brand-blue",
  purple: "bg-brand-purple/12 text-brand-purple",
} as const;

export function PricingSection() {
  return (
    <section className="border-t border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Simple pricing
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Choose the plan that fits your money goals
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground">
            Keep student budgeting free, then upgrade when you want educational investment insights
            and beginner-friendly recommendations.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "relative rounded-2xl border border-brand-purple/40 bg-card p-6 shadow-lg shadow-primary/5"
                  : "rounded-2xl border border-border bg-card p-6 shadow-sm"
              }
            >
              {plan.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-brand-purple/12 px-3 py-1 text-xs font-semibold text-brand-purple">
                  Best for investing
                </span>
              )}
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${toneClasses[plan.tone as keyof typeof toneClasses]}`}
              >
                <plan.icon className="h-5 w-5" />
              </span>
              <div className="mt-5">
                <h2 className="text-xl font-bold text-foreground">{plan.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{plan.audience}</p>
              </div>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm font-medium text-muted-foreground">
                  {plan.period}
                </span>
              </div>
              {plan.yearly && (
                <p className="mt-1 text-sm font-semibold text-brand-green">{plan.yearly}</p>
              )}
              <Button asChild className="mt-6 w-full rounded-full">
                <Link href="/dashboard">
                  {plan.cta}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          AffordIt provides educational insights, not professional financial advice.
        </p>
      </div>
    </section>
  );
}
