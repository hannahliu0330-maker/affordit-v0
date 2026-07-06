import { Layers, ShieldAlert, GitBranch, HeartPulse } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "Current holdings impact",
    desc: "See how a news event maps onto the stocks and funds you already own.",
  },
  {
    icon: ShieldAlert,
    title: "Risk exposure analysis",
    desc: "Understand how much of your portfolio is exposed to a given sector or theme.",
  },
  {
    icon: GitBranch,
    title: "Diversification insights",
    desc: "Spot concentration and find where your portfolio could be more balanced.",
  },
  {
    icon: HeartPulse,
    title: "Financial health score",
    desc: "A single, easy-to-read score that summarizes your overall financial position.",
  },
];

export function PortfolioImpactSection() {
  return (
    <section className="border-t border-border bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-yellow-foreground">
            Portfolio impact
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See how the news affects your money
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Every insight is connected back to your actual holdings, so you always know what it
            means for you.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="hover-lift flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/20 text-brand-yellow-foreground">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
