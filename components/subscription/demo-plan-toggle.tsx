"use client";

import { Sparkles } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useSubscription } from "@/components/subscription/subscription-provider";

export function DemoPlanToggle() {
  const { isPremium, upgradeToPremium, downgradeToFree } = useSubscription();

  return (
    <div className="rounded-xl border border-dashed border-border bg-secondary/30 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple/12 text-brand-purple">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <Label htmlFor="demo-plan-toggle" className="text-sm font-semibold">
              Demo plan toggle
            </Label>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Presentation-only control. This changes frontend state only.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-muted-foreground">Free</span>
          <Switch
            id="demo-plan-toggle"
            checked={isPremium}
            onCheckedChange={(checked) =>
              checked ? upgradeToPremium() : downgradeToFree()
            }
          />
          <span className="text-xs font-semibold text-brand-purple">Premium</span>
        </div>
      </div>
    </div>
  );
}
