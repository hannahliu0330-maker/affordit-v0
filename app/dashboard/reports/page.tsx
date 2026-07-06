import { FileText, Download, PieChart, LineChart, Receipt } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CashFlowChart } from "@/components/dashboard/charts";

const reports = [
  { icon: Receipt, title: "Spending report", desc: "Monthly breakdown by category", period: "July 2026" },
  { icon: LineChart, title: "Investment report", desc: "Holdings performance & returns", period: "Q2 2026" },
  { icon: PieChart, title: "Net worth report", desc: "Assets, liabilities & trend", period: "July 2026" },
  { icon: FileText, title: "Tax report", desc: "Realized gains & dividends", period: "2026 YTD" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Income vs expenses</CardTitle>
          <Button size="sm" variant="outline">
            <Download className="mr-1 h-4 w-4" /> Export CSV
          </Button>
        </CardHeader>
        <CardContent>
          <CashFlowChart />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        {reports.map((r) => (
          <Card key={r.title} className="hover-lift">
            <CardContent className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/12 text-brand-blue">
                  <r.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.title}</p>
                  <p className="text-xs text-muted-foreground">{r.desc}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">{r.period}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" variant="outline">
                  <Download className="mr-1 h-3.5 w-3.5" /> PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Scheduled reports</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-lg border border-border p-3">
            <span className="text-foreground">Weekly spending summary</span>
            <span className="text-xs font-medium text-brand-green">Every Monday</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border p-3">
            <span className="text-foreground">Monthly portfolio review</span>
            <span className="text-xs font-medium text-brand-green">1st of month</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
