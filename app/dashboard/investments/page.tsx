import Link from "next/link";
import { LineChart, Layers, ShieldAlert, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StatCard } from "@/components/dashboard/stat-card";
import { NetWorthChart } from "@/components/dashboard/charts";
import { holdings } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const impactBreakdown = [
  { label: "Clean Energy exposure", value: 34, tone: "bg-brand-green" },
  { label: "Semiconductors exposure", value: 28, tone: "bg-brand-blue" },
  { label: "Automotive exposure", value: 18, tone: "bg-brand-purple" },
  { label: "Cash & other", value: 20, tone: "bg-brand-yellow" },
];

export default function InvestmentsPage() {
  const total = holdings.reduce((s, h) => s + h.value, 0);

  return (
    <div className="space-y-6">
      <Card className="border-brand-purple/30 bg-brand-purple/5">
        <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple/12 text-brand-purple">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Premium investment insights</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Upgrade for educational investment insights, risk level analysis, news impact
                explanations, and beginner-friendly recommendations.
              </p>
            </div>
          </div>
          <Button asChild className="w-full rounded-full sm:w-auto">
            <Link href="/pricing">
              View pricing
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Portfolio value" value={`$${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} delta="1.8%" positive icon={LineChart} tone="blue" />
        <StatCard label="Holdings" value={String(holdings.length)} icon={Layers} tone="purple" />
        <StatCard label="Risk exposure" value="Moderate" icon={ShieldAlert} tone="yellow" />
        <StatCard label="Health score" value="82 / 100" delta="Good" positive icon={HeartPulse} tone="green" />
      </div>

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Portfolio performance</CardTitle>
          <span className="text-sm font-medium text-brand-green">+$860 this week</span>
        </CardHeader>
        <CardContent>
          <NetWorthChart />
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Your holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs text-muted-foreground">
                    <th className="pb-2 font-medium">Asset</th>
                    <th className="pb-2 font-medium">Shares</th>
                    <th className="pb-2 font-medium">Price</th>
                    <th className="pb-2 text-right font-medium">Value</th>
                    <th className="pb-2 text-right font-medium">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((h) => (
                    <tr key={h.ticker} className="border-b border-border/60 last:border-0">
                      <td className="py-3">
                        <p className="font-semibold text-foreground">{h.ticker}</p>
                        <p className="text-xs text-muted-foreground">{h.name}</p>
                      </td>
                      <td className="py-3 text-muted-foreground">{h.shares}</td>
                      <td className="py-3 text-muted-foreground">${h.price.toFixed(2)}</td>
                      <td className="py-3 text-right font-medium text-foreground">
                        ${h.value.toLocaleString()}
                      </td>
                      <td
                        className={cn(
                          "py-3 text-right font-medium",
                          h.change >= 0 ? "text-brand-green" : "text-destructive",
                        )}
                      >
                        {h.change >= 0 ? "+" : ""}
                        {h.change}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Portfolio impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              How recent news maps onto your current holdings.
            </p>
            {impactBreakdown.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground">{item.label}</span>
                  <span className="font-medium text-muted-foreground">{item.value}%</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className={cn("h-full rounded-full", item.tone)}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
              Diversification tip: your portfolio is slightly concentrated in tech. Consider
              broadening across sectors.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
