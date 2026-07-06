import { Bell, GraduationCap, Sparkles, Bot, Calculator, FileText } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Alerts",
    items: ["Price alerts", "News alerts", "Earnings alerts", "Market alerts"],
  },
  {
    icon: GraduationCap,
    title: "Learn",
    items: ["Investing for beginners", "Glossary", "How markets work", "Strategy guides"],
  },
  {
    icon: Sparkles,
    title: "AI Insights",
    items: ["Weekly market summary", "Top opportunities", "Sector trends", "Analyst updates"],
  },
  {
    icon: Bot,
    title: "AI Assistant",
    items: ["Ask about money", "Personalized answers", "Explain like I'm 18", "Always available"],
  },
  {
    icon: Calculator,
    title: "Simulator",
    items: ["What-if scenarios", "Retirement calculator", "Investment simulator", "Compare outcomes"],
  },
  {
    icon: FileText,
    title: "Reports",
    items: ["Spending reports", "Investment reports", "Tax reports", "Export PDF / CSV"],
  },
];

export function FeaturesSection() {
  return (
    <section className="border-t border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Everything in one place
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            More tools to build financial confidence
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="hover-lift rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/12 text-brand-green">
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                {feature.items.map((item) => (
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
