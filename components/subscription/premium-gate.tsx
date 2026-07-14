"use client";

import { LockKeyhole, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSubscription } from "@/components/subscription/subscription-provider";

type PremiumGateProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  title?: string;
  description?: string;
};

export function PremiumGate({
  children,
  className,
  contentClassName,
  title = "Premium Feature",
  description = "Unlock personalized AI investment recommendations, advanced market analysis, portfolio insights, and smarter investing tools.",
}: PremiumGateProps) {
  const { isPremium, upgradeToPremium } = useSubscription();

  return (
    <div className={cn("relative transition-all duration-500", className)}>
      <div
        className={cn(
          "transition-all duration-500 ease-out",
          !isPremium && "pointer-events-none select-none opacity-45 blur-[3px]",
          contentClassName,
        )}
        aria-hidden={!isPremium}
      >
        {children}
      </div>

      {!isPremium && (
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4 animate-in fade-in-0 zoom-in-95 duration-300">
          <div className="max-w-sm rounded-2xl border border-brand-purple/30 bg-background/85 p-5 text-center shadow-2xl shadow-primary/10 backdrop-blur-xl">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-purple/12 text-brand-purple">
              <LockKeyhole className="h-5 w-5" />
            </span>
            <p className="mt-4 text-sm font-bold text-foreground">{title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
            <Button onClick={upgradeToPremium} className="mt-5 rounded-full">
              <Sparkles className="mr-1 h-4 w-4" />
              Upgrade to Premium
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
