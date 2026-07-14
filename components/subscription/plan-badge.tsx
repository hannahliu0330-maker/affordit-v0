"use client";

import { Badge } from "@/components/ui/badge";
import { useSubscription } from "@/components/subscription/subscription-provider";

export function PlanBadge() {
  const { isPremium } = useSubscription();

  return (
    <div className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm sm:flex">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Current Plan
      </span>
      <Badge
        variant={isPremium ? "default" : "secondary"}
        className={
          isPremium
            ? "rounded-full bg-brand-purple text-brand-purple-foreground"
            : "rounded-full"
        }
      >
        {isPremium ? "Premium ⭐" : "Free"}
      </Badge>
    </div>
  );
}
