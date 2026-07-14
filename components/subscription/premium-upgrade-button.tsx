"use client";

import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/components/subscription/subscription-provider";

export function PremiumUpgradeButton({
  children = "Upgrade to Premium",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { isPremium, upgradeToPremium } = useSubscription();

  return (
    <Button
      type="button"
      onClick={upgradeToPremium}
      disabled={isPremium}
      className={className}
    >
      <Sparkles className="mr-1 h-4 w-4" />
      {isPremium ? "Premium Active" : children}
    </Button>
  );
}
