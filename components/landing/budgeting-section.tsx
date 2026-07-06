import { Receipt, PieChart, Target, CalendarClock } from "lucide-react";

const cards = [
  {
    icon: Receipt,
    title: "Transactions",
    desc: "View and auto-categorize spending",
    items: ["Auto-categorize", "View all", "Filter & search"],
  },
  {
    icon: PieChart,
    title: "Budgeting",
    desc: "Create budgets and track vs actual",
    items: ["Set categories", "Track vs actual", "Budget alerts"],
  },
  {
    icon: Target,
    title: "Goals",
    desc: "Set goals and track progress",
    items: ["Short & long term", "Set amount & deadline", "Track progress"],
  },
  {
    icon: CalendarClock,
    title: "Planning",
    desc: "Forecast cash flow and plan ahead",
    items: ["Cash flow forecast", "What-if scenarios", "Save-more plan"],
  },
];

export function BudgetingSection() {
  return (
    <section id="budgeting" className="border-t border-border bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Smart budgeting &amp; planning
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Money management that keeps up with you
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Understand where your money goes, set realistic budgets, and plan for what matters next.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="hover-lift rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/12 text-brand-blue">
                <card.icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-foreground">{card.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{card.desc}</p>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {card.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
