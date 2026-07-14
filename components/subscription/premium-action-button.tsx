"use client";

import { useState, type ComponentType } from "react";
import { LockKeyhole, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSubscription } from "@/components/subscription/subscription-provider";

export function PremiumActionButton({
  label,
  icon: Icon,
}: {
  label: string;
  icon: ComponentType<{ className?: string }>;
}) {
  const [open, setOpen] = useState(false);
  const { isPremium, upgradeToPremium } = useSubscription();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (!isPremium) {
            setOpen(true);
            return;
          }
        }}
        className="hover-lift relative flex flex-col items-center gap-2 rounded-xl border border-border bg-secondary/40 p-4 text-center transition-colors hover:bg-secondary"
      >
        {!isPremium && (
          <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-purple/12 text-brand-purple">
            <LockKeyhole className="h-3.5 w-3.5" />
          </span>
        )}
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/12 text-brand-blue">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-sm font-medium text-foreground">{label}</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-purple" />
              Upgrade to Premium
            </DialogTitle>
            <DialogDescription>
              Unlock AI-powered investment recommendations, advanced portfolio analysis, and
              premium financial insights.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={() => {
                upgradeToPremium();
                setOpen(false);
              }}
              className="rounded-full"
            >
              Upgrade Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
