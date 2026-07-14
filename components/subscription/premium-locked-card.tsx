"use client";

import { LockKeyhole, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PremiumLockedCard({
  title,
  description,
  buttonText = "Upgrade to Premium",
  icon: Icon = LockKeyhole,
  onUpgrade,
}: {
  title: string;
  description: string;
  buttonText?: string;
  icon?: LucideIcon;
  onUpgrade: () => void;
}) {
  return (
    <div className="rounded-2xl border border-brand-purple/30 bg-card p-8 text-center shadow-sm shadow-primary/5">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple/12 text-brand-purple">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mx-auto mt-5 max-w-md space-y-3">
        <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <Button onClick={onUpgrade} className="mt-6 rounded-full px-6">
        {buttonText}
      </Button>
    </div>
  );
}
