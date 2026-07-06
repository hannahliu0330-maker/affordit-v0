import { Target, Wallet, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/stat-card";
import { CashFlowChart } from "@/components/dashboard/charts";
import { budgets, goals, transactions } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function BudgetingPage() {
  const totalSpent = budgets.reduce((s, b) => s + b.spent, 0);
  const totalLimit = budgets.reduce((s, b) => s + b.limit, 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total budget" value={`$${totalLimit.toLocaleString()}`} icon={Wallet} tone="blue" />
        <StatCard label="Spent so far" value={`$${totalSpent.toLocaleString()}`} delta="62%" positive icon={TrendingDown} tone="purple" />
        <StatCard label="Active goals" value={String(goals.length)} icon={Target} tone="green" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Budget vs actual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {budgets.map((b) => {
              const pct = Math.round((b.spent / b.limit) * 100);
              const over = b.spent > b.limit;
              return (
                <div key={b.category}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{b.category}</span>
                    <span className={cn("font-medium", over ? "text-destructive" : "text-muted-foreground")}>
                      ${b.spent} / ${b.limit}
                    </span>
                  </div>
                  <Progress
                    value={Math.min(pct, 100)}
                    className={cn("mt-2 h-2", over && "[&>div]:bg-destructive")}
                  />
                  {over && (
                    <p className="mt-1 text-xs text-destructive">Over budget by ${b.spent - b.limit}</p>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cash flow forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <CashFlowChart />
            <p className="mt-3 text-sm text-muted-foreground">
              Based on your trend, you&apos;re projected to save about{" "}
              <span className="font-semibold text-foreground">$1,250</span> next month.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Savings goals</CardTitle>
          <Button size="sm" variant="outline">Add goal</Button>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3">
          {goals.map((g) => {
            const pct = Math.round((g.saved / g.target) * 100);
            return (
              <div key={g.name} className="rounded-xl border border-border p-4">
                <p className="text-sm font-semibold text-foreground">{g.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">Target {g.deadline}</p>
                <p className="mt-3 text-lg font-bold text-foreground">
                  ${g.saved.toLocaleString()}
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    / ${g.target.toLocaleString()}
                  </span>
                </p>
                <Progress value={pct} className="mt-2 h-2" />
                <p className="mt-1 text-xs font-medium text-brand-green">{pct}% complete</p>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {transactions.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between rounded-lg px-2 py-2.5 hover:bg-muted"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.category} · {t.date}
                  </p>
                </div>
              </div>
              <span
                className={cn(
                  "text-sm font-semibold",
                  t.amount > 0 ? "text-brand-green" : "text-foreground",
                )}
              >
                {t.amount > 0 ? "+" : "-"}${Math.abs(t.amount).toLocaleString()}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
