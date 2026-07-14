import { Bell, Bookmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NewsAnalyzer } from "@/components/dashboard/news-analyzer";
import { SignalBadge } from "@/components/dashboard/stat-card";
import { PremiumGate } from "@/components/subscription/premium-gate";
import { watchlist } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function WatchlistPage() {
  return (
    <PremiumGate>
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <NewsAnalyzer />
        </div>

        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bookmark className="h-4 w-4 text-brand-blue" />
                Watchlist
              </CardTitle>
              <Button size="sm" variant="outline">Add stock</Button>
            </CardHeader>
            <CardContent className="space-y-2">
              {watchlist.map((w) => (
                <div
                  key={w.ticker}
                  className="flex items-center justify-between rounded-xl border border-border p-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-foreground">{w.ticker}</p>
                      <SignalBadge signal={w.signal} />
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{w.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">${w.price.toFixed(2)}</p>
                    <p
                      className={cn(
                        "text-xs font-medium",
                        w.change >= 0 ? "text-brand-green" : "text-destructive",
                      )}
                    >
                      {w.change >= 0 ? "+" : ""}
                      {w.change}%
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-3 flex items-center gap-2 rounded-xl bg-secondary/50 p-3 text-xs text-muted-foreground">
                <Bell className="h-4 w-4 text-brand-purple" />
                Price alerts are on for 3 of your saved stocks.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PremiumGate>
  );
}
