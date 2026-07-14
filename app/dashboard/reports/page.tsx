"use client";

import { FileText, Download, PieChart, LineChart, Receipt, LockKeyhole } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CashFlowChart } from "@/components/dashboard/charts";
import { PremiumLockedCard } from "@/components/subscription/premium-locked-card";
import { useSubscription } from "@/components/subscription/subscription-provider";

const reports = [
  { icon: Receipt, title: "Spending report", desc: "Monthly breakdown by category", period: "July 2026", premium: false },
  { icon: LineChart, title: "Investment report", desc: "Holdings performance & returns", period: "Q2 2026", premium: true },
  { icon: PieChart, title: "Net worth report", desc: "Assets, liabilities & trend", period: "July 2026", premium: false },
  { icon: FileText, title: "Tax report", desc: "Realized gains & dividends", period: "2026 YTD", premium: true },
];

const scheduledReports = [
  { title: "Weekly spending summary", cadence: "Every Monday", premium: false },
  { title: "Monthly portfolio review", cadence: "1st of month", premium: true },
];

function ReportCard({ report: r }: { report: (typeof reports)[number] }) {
  return (
    <Card className="hover-lift">
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
  );
}

function ScheduledReportCard({ report }: { report: (typeof scheduledReports)[number] }) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between gap-4 p-5">
        <span className="text-sm font-medium text-foreground">{report.title}</span>
        <span className="shrink-0 text-xs font-medium text-brand-green">{report.cadence}</span>
      </CardContent>
    </Card>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="border-b border-border pb-3">
      <h2 className="text-lg font-bold tracking-tight text-foreground">{title}</h2>
    </div>
  );
}

export default function ReportsPage() {
  const { isPremium, upgradeToPremium } = useSubscription();
  const freeReports = reports.filter((report) => !report.premium);
  const premiumReports = reports.filter((report) => report.premium);
  const freeScheduledReports = scheduledReports.filter((report) => !report.premium);
  const premiumScheduledReports = scheduledReports.filter((report) => report.premium);

  return (
    <div className="space-y-8">
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

      <section className="space-y-6">
        <SectionHeader title="Reports" />
        <div className="grid gap-6 sm:grid-cols-2">
          {freeReports.map((report) => (
            <ReportCard key={report.title} report={report} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Premium Reports" />
        {isPremium ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {premiumReports.map((report) => (
              <ReportCard key={report.title} report={report} />
            ))}
          </div>
        ) : (
          <PremiumLockedCard
            title="Premium Reports"
            description="Unlock advanced investment reports, portfolio analysis and AI financial insights."
            icon={LockKeyhole}
            onUpgrade={upgradeToPremium}
          />
        )}
      </section>

      <section className="space-y-6">
        <SectionHeader title="Scheduled Reports" />
        <div className="grid gap-6">
          {freeScheduledReports.map((report) => (
            <ScheduledReportCard key={report.title} report={report} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Premium Scheduled Reports" />
        {isPremium ? (
          <div className="grid gap-6">
            {premiumScheduledReports.map((report) => (
              <ScheduledReportCard key={report.title} report={report} />
            ))}
          </div>
        ) : (
          <PremiumLockedCard
            title="Premium Scheduled Reports"
            description="Unlock monthly portfolio reviews and investment forecasts."
            icon={LockKeyhole}
            onUpgrade={upgradeToPremium}
          />
        )}
      </section>
    </div>
  );
}
