import { UserPlus, Landmark, LayoutDashboard, Zap, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    tone: "purple",
    title: "User Onboarding",
    items: ["Sign up / Log in", "Basic profile", "Financial goals", "Risk preference"],
  },
  {
    icon: Landmark,
    tone: "blue",
    title: "Connect Accounts",
    items: ["Link bank accounts", "Credit cards", "Investment accounts", "Sync transactions"],
  },
  {
    icon: LayoutDashboard,
    tone: "green",
    title: "Dashboard Overview",
    items: ["Net worth", "Cash flow summary", "Budget progress", "Watchlist & alerts"],
  },
  {
    icon: Zap,
    tone: "yellow",
    title: "Quick Actions",
    items: ["Upload news / image", "Ask AI (Chat)", "Add transaction & goal", "Search stocks"],
  },
];

const toneClasses: Record<string, string> = {
  purple: "bg-brand-purple/12 text-brand-purple",
  blue: "bg-brand-blue/12 text-brand-blue",
  green: "bg-brand-green/12 text-brand-green",
  yellow: "bg-brand-yellow/20 text-brand-yellow-foreground",
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">How it works</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From sign up to smarter decisions
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            A guided flow that connects your money to intelligent, news-driven insights.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="hover-lift h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${toneClasses[step.tone]}`}
                  >
                    <step.icon className="h-6 w-6" />
                  </span>
                </span>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs font-semibold text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <ul className="mt-3 space-y-2">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {i < steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-muted-foreground lg:flex">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
