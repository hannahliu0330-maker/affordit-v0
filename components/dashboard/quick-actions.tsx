"use client";

import { MessageSquare, Plus, Search, Upload } from "lucide-react";
import { PremiumActionButton } from "@/components/subscription/premium-action-button";

const quickActions = [
  { label: "Upload news", icon: Upload, premium: true },
  { label: "Ask AI", icon: MessageSquare, premium: true },
  { label: "Add transaction", icon: Plus, premium: false },
  { label: "Search stocks", icon: Search, premium: true },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {quickActions.map((action) =>
        action.premium ? (
          <PremiumActionButton key={action.label} label={action.label} icon={action.icon} />
        ) : (
          <button
            key={action.label}
            type="button"
            className="hover-lift flex flex-col items-center gap-2 rounded-xl border border-border bg-secondary/40 p-4 text-center transition-colors hover:bg-secondary"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/12 text-brand-blue">
              <action.icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium text-foreground">{action.label}</span>
          </button>
        ),
      )}
    </div>
  );
}
