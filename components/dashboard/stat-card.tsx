import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const toneMap: Record<string, string> = {
  blue: "bg-brand-blue/12 text-brand-blue",
  green: "bg-brand-green/12 text-brand-green",
  purple: "bg-brand-purple/12 text-brand-purple",
  yellow: "bg-brand-yellow/20 text-brand-yellow-foreground",
};

export function StatCard({
  label,
  value,
  delta,
  positive = true,
  icon: Icon,
  tone = "blue",
}: {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
  icon: LucideIcon;
  tone?: keyof typeof toneMap;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", toneMap[tone])}>
          <Icon className="h-5 w-5" />
        </span>
        {delta && (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 text-xs font-medium",
              positive ? "text-brand-green" : "text-destructive",
            )}
          >
            {positive ? (
              <ArrowUpRight className="h-3.5 w-3.5" />
            ) : (
              <ArrowDownRight className="h-3.5 w-3.5" />
            )}
            {delta}
          </span>
        )}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-foreground">{value}</p>
    </Card>
  );
}

export function SignalBadge({ signal }: { signal: "Bullish" | "Bearish" | "Neutral" }) {
  const map: Record<string, string> = {
    Bullish: "bg-brand-green/12 text-brand-green",
    Bearish: "bg-destructive/12 text-destructive",
    Neutral: "bg-secondary text-secondary-foreground",
  };
  return (
    <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium", map[signal])}>
      {signal}
    </span>
  );
}
