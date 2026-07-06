"use client";

import { useState } from "react";
import Link from "next/link";
import { Upload, Sparkles, Loader2, ImageIcon, Link2, FileText, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { SignalBadge } from "@/components/dashboard/stat-card";

type Result = {
  summary: string;
  sentiment: "Bullish" | "Bearish" | "Neutral";
  confidence: number;
  sectors: string[];
  stocks: { ticker: string; signal: "Bullish" | "Bearish" | "Neutral"; opportunity: number }[];
};

const mockResult: Result = {
  summary:
    "The article describes new government incentives for electric vehicles. This is likely to increase demand for EV makers and their upstream battery and chip suppliers over the next 2-3 quarters, while pressuring traditional fuel-dependent names.",
  sentiment: "Bullish",
  confidence: 81,
  sectors: ["Clean Energy", "Semiconductors", "Automotive"],
  stocks: [
    { ticker: "ENPH", signal: "Bullish", opportunity: 82 },
    { ticker: "NVDA", signal: "Bullish", opportunity: 74 },
    { ticker: "F", signal: "Neutral", opportunity: 48 },
  ],
};

export function NewsAnalyzer() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  function analyze() {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(mockResult);
      setLoading(false);
    }, 1100);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-brand-purple" />
          AI News Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-xl border border-brand-purple/30 bg-brand-purple/5 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-muted-foreground">
              News impact explanations and beginner-friendly investment recommendations are Premium
              educational insights.
            </p>
            <Button asChild size="sm" variant="outline" className="shrink-0 rounded-full">
              <Link href="/pricing">
                View pricing
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a news article, tweet, or headline here — or describe what you read..."
          className="min-h-28 resize-none"
        />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted" aria-label="Upload image">
              <ImageIcon className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted" aria-label="Add link">
              <Link2 className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted" aria-label="Upload PDF">
              <FileText className="h-4 w-4" />
            </button>
          </div>
          <Button onClick={analyze} disabled={loading || !text.trim()}>
            {loading ? (
              <>
                <Loader2 className="mr-1 h-4 w-4 animate-spin" /> Analyzing...
              </>
            ) : (
              <>
                <Upload className="mr-1 h-4 w-4" /> Analyze news
              </>
            )}
          </Button>
        </div>

        {result && (
          <div className="space-y-4 rounded-xl border border-border bg-secondary/40 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">Analysis result</p>
              <SignalBadge signal={result.sentiment} />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{result.summary}</p>

            <div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Confidence score</span>
                <span className="font-medium text-foreground">{result.confidence}%</span>
              </div>
              <Progress value={result.confidence} className="mt-1 h-1.5" />
            </div>

            <div className="flex flex-wrap gap-2">
              {result.sectors.map((s) => (
                <span key={s} className="rounded-md bg-card px-2.5 py-1 text-xs font-medium text-foreground">
                  {s}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Most impacted stocks</p>
              {result.stocks.map((stock) => (
                <div
                  key={stock.ticker}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2"
                >
                  <span className="text-sm font-semibold text-foreground">{stock.ticker}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">
                      Opportunity {stock.opportunity}
                    </span>
                    <SignalBadge signal={stock.signal} />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              This is educational market analysis, not guaranteed financial advice.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
