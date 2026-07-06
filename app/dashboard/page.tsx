import Link from "next/link";
import {
  Wallet,
  TrendingUp,
  PiggyBank,
  Sparkles,
  ArrowRight,
  Upload,
  MessageSquare,
  Plus,
  Search,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StatCard, SignalBadge } from "@/components/dashboard/stat-card";
import { NetWorthChart, SpendingDonut } from "@/components/dashboard/charts";
import { transactions, newsInsights, spendingByCategory } from "@/lib/mock-data";

const quickActions = [
  { label: "Upload news", icon: Upload },
  { label: "Ask AI", icon: MessageSquare },
  { label: "Add transaction", icon: Plus },
  { label: "Search stocks", icon: Search },
];

export default function DashboardPage() {
  const totalSpend = spendingByCategory.reduce((s, c) => s + c.value, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Welcome back, Jordan</p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Here&apos;s your financial overview
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Net worth" value="$48,920" delta="4.2%" positive icon={Wallet} tone="blue" />
        <StatCard label="Cash flow (Jul)" value="+$1,250" delta="8.1%" positive icon={TrendingUp} tone="green" />
        <StatCard label="Budget left" value="$1,240" delta="62% used" positive icon={PiggyBank} tone="purple" />
        <StatCard label="Portfolio impact" value="+$860" delta="This week" positive icon={Sparkles} tone="yellow" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Net worth trend</CardTitle>
            <span className="text-sm font-medium text-brand-green">+$10.7k YTD</span>
          </CardHeader>
          <CardContent>
            <NetWorthChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spending this month</CardTitle>
          </CardHeader>
          <CardContent>
            <SpendingDonut />
            <p className="mt-2 text-center text-sm text-muted-foreground">
              ${totalSpend.toLocaleString()} spent across {spendingByCategory.length} categories
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className="hover-lift flex flex-col items-center gap-2 rounded-xl border border-border bg-secondary/40 p-4 text-center transition-colors hover:bg-secondary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/12 text-brand-blue">
                  <action.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-foreground">{action.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Recent transactions</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/budgeting">
                View all <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-1">
            {transactions.slice(0, 5).map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between rounded-lg px-2 py-2.5 hover:bg-muted"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.category} · {t.date}
                  </p>
                </div>
                <span
                  className={`text-sm font-semibold ${t.amount > 0 ? "text-brand-green" : "text-foreground"}`}
                >
                  {t.amount > 0 ? "+" : "-"}${Math.abs(t.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Latest AI news insights</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/watchlist">
                More <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {newsInsights.map((n) => (
              <div key={n.id} className="rounded-xl border border-border p-3">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-foreground">{n.title}</p>
                  <SignalBadge signal={n.sentiment} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {n.source} · {n.time}
                </p>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Confidence</span>
                    <span className="font-medium text-foreground">{n.confidence}%</span>
                  </div>
                  <Progress value={n.confidence} className="mt-1 h-1.5" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Insights are educational market analysis, not guaranteed financial advice.
      </p>
    </div>
  );
}
