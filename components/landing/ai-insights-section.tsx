import { Upload, BrainCircuit, BarChart3, Bookmark, LineChart, Info } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload News",
    desc: "Upload or paste a news article, screenshot, tweet, or PDF.",
    items: ["Articles & links", "Images & screenshots", "PDF & social posts"],
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    desc: "Get a structured read on what the news actually means.",
    items: ["Event summary", "Affected industries", "Market sentiment", "Confidence score"],
  },
  {
    icon: BarChart3,
    title: "Most Impacted Stocks",
    desc: "See which companies could move and why.",
    items: ["Bullish / bearish / neutral", "Impact timeline", "Reason & data", "Opportunity score"],
  },
  {
    icon: Bookmark,
    title: "Save & Watchlist",
    desc: "Keep track of ideas worth watching.",
    items: ["Save stocks", "Add notes", "Set price alerts"],
  },
  {
    icon: LineChart,
    title: "Track Performance",
    desc: "Follow how the story develops over time.",
    items: ["Real-time price", "% change", "News updates", "Historical comparison"],
  },
];

export function AiInsightsSection() {
  return (
    <section id="ai-insights" className="border-t border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-purple">
            AI News → Investment Insights
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Turn headlines into educational market analysis
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Affordit reads the news with you and explains the potential market impact in plain
            language.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="hover-lift rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/12 text-brand-purple">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-brand-purple/40 bg-brand-purple/5 p-6">
            <Info className="h-6 w-6 text-brand-purple" />
            <p className="mt-3 text-sm font-semibold text-foreground">Educational, not advice</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Stock insights are presented as educational market analysis to help you learn — not
              guaranteed financial advice. Always do your own research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
