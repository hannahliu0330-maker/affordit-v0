"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { netWorthTrend, cashFlow, spendingByCategory } from "@/lib/mock-data";

const netWorthConfig = {
  value: { label: "Net worth", color: "var(--brand-blue)" },
} satisfies ChartConfig;

export function NetWorthChart() {
  return (
    <ChartContainer config={netWorthConfig} className="aspect-[16/7] w-full">
      <AreaChart data={netWorthTrend} margin={{ left: 4, right: 4, top: 8 }}>
        <defs>
          <linearGradient id="nwFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity={0.35} />
            <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="value"
          type="monotone"
          stroke="var(--brand-blue)"
          strokeWidth={2.5}
          fill="url(#nwFill)"
        />
      </AreaChart>
    </ChartContainer>
  );
}

const cashFlowConfig = {
  income: { label: "Income", color: "var(--brand-green)" },
  expenses: { label: "Expenses", color: "var(--brand-purple)" },
} satisfies ChartConfig;

export function CashFlowChart() {
  return (
    <ChartContainer config={cashFlowConfig} className="aspect-[16/8] w-full">
      <BarChart data={cashFlow} margin={{ left: 4, right: 4, top: 8 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="income" fill="var(--brand-green)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" fill="var(--brand-purple)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}

const spendingConfig = {
  value: { label: "Spent" },
  Housing: { label: "Housing", color: "var(--chart-1)" },
  Food: { label: "Food", color: "var(--chart-2)" },
  Transport: { label: "Transport", color: "var(--chart-3)" },
  Shopping: { label: "Shopping", color: "var(--chart-4)" },
  Other: { label: "Other", color: "var(--chart-5)" },
} satisfies ChartConfig;

export function SpendingDonut() {
  return (
    <ChartContainer config={spendingConfig} className="mx-auto aspect-square max-h-[220px]">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="category" />} />
        <Pie
          data={spendingByCategory}
          dataKey="value"
          nameKey="category"
          innerRadius={55}
          outerRadius={85}
          strokeWidth={2}
        >
          {spendingByCategory.map((entry) => (
            <Cell key={entry.category} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
