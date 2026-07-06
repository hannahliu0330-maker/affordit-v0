export const netWorthTrend = [
  { month: "Jan", value: 38200 },
  { month: "Feb", value: 39800 },
  { month: "Mar", value: 41100 },
  { month: "Apr", value: 40500 },
  { month: "May", value: 43600 },
  { month: "Jun", value: 45900 },
  { month: "Jul", value: 48920 },
];

export const spendingByCategory = [
  { category: "Housing", value: 1250, fill: "var(--color-chart-1)" },
  { category: "Food", value: 520, fill: "var(--color-chart-2)" },
  { category: "Transport", value: 240, fill: "var(--color-chart-3)" },
  { category: "Shopping", value: 310, fill: "var(--color-chart-4)" },
  { category: "Other", value: 180, fill: "var(--color-chart-5)" },
];

export const cashFlow = [
  { month: "Feb", income: 3800, expenses: 2600 },
  { month: "Mar", income: 3900, expenses: 2800 },
  { month: "Apr", income: 3850, expenses: 3100 },
  { month: "May", income: 4200, expenses: 2900 },
  { month: "Jun", income: 4100, expenses: 2700 },
  { month: "Jul", income: 4300, expenses: 3050 },
];

export type Transaction = {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
};

export const transactions: Transaction[] = [
  { id: "t1", name: "Whole Foods Market", category: "Food", date: "Jul 3", amount: -86.4 },
  { id: "t2", name: "Monthly Salary", category: "Income", date: "Jul 1", amount: 4300 },
  { id: "t3", name: "Spotify Premium", category: "Subscriptions", date: "Jun 30", amount: -11.99 },
  { id: "t4", name: "Uber", category: "Transport", date: "Jun 29", amount: -18.2 },
  { id: "t5", name: "Rent", category: "Housing", date: "Jun 28", amount: -1250 },
  { id: "t6", name: "Amazon", category: "Shopping", date: "Jun 27", amount: -64.5 },
  { id: "t7", name: "Freelance Project", category: "Income", date: "Jun 25", amount: 620 },
  { id: "t8", name: "Electric Bill", category: "Utilities", date: "Jun 24", amount: -92.3 },
];

export type Budget = {
  category: string;
  spent: number;
  limit: number;
};

export const budgets: Budget[] = [
  { category: "Housing", spent: 1250, limit: 1300 },
  { category: "Food & Dining", spent: 520, limit: 600 },
  { category: "Transport", spent: 240, limit: 300 },
  { category: "Shopping", spent: 310, limit: 250 },
  { category: "Entertainment", spent: 95, limit: 150 },
  { category: "Utilities", spent: 185, limit: 200 },
];

export type Goal = {
  name: string;
  saved: number;
  target: number;
  deadline: string;
};

export const goals: Goal[] = [
  { name: "Emergency Fund", saved: 6200, target: 10000, deadline: "Dec 2026" },
  { name: "New Laptop", saved: 900, target: 1800, deadline: "Sep 2026" },
  { name: "Travel — Japan", saved: 2400, target: 5000, deadline: "May 2027" },
];

export type Holding = {
  ticker: string;
  name: string;
  shares: number;
  price: number;
  change: number;
  value: number;
};

export const holdings: Holding[] = [
  { ticker: "AAPL", name: "Apple Inc.", shares: 12, price: 224.3, change: 1.4, value: 2691.6 },
  { ticker: "NVDA", name: "NVIDIA Corp.", shares: 8, price: 132.9, change: 3.2, value: 1063.2 },
  { ticker: "VOO", name: "Vanguard S&P 500", shares: 6, price: 512.1, change: 0.6, value: 3072.6 },
  { ticker: "TSLA", name: "Tesla Inc.", shares: 5, price: 248.5, change: -2.1, value: 1242.5 },
  { ticker: "MSFT", name: "Microsoft Corp.", shares: 4, price: 438.2, change: 0.9, value: 1752.8 },
];

export type WatchItem = {
  ticker: string;
  name: string;
  price: number;
  change: number;
  signal: "Bullish" | "Bearish" | "Neutral";
  opportunity: number;
};

export const watchlist: WatchItem[] = [
  { ticker: "AMD", name: "Advanced Micro Devices", price: 168.4, change: 2.3, signal: "Bullish", opportunity: 78 },
  { ticker: "PLTR", name: "Palantir Technologies", price: 41.2, change: -1.1, signal: "Neutral", opportunity: 54 },
  { ticker: "ENPH", name: "Enphase Energy", price: 96.7, change: 4.5, signal: "Bullish", opportunity: 82 },
  { ticker: "F", name: "Ford Motor Co.", price: 11.9, change: -0.8, signal: "Bearish", opportunity: 33 },
  { ticker: "GOOGL", name: "Alphabet Inc.", price: 178.6, change: 1.0, signal: "Bullish", opportunity: 71 },
];

export type NewsInsight = {
  id: string;
  title: string;
  source: string;
  time: string;
  sentiment: "Bullish" | "Bearish" | "Neutral";
  confidence: number;
  summary: string;
  sectors: string[];
};

export const newsInsights: NewsInsight[] = [
  {
    id: "n1",
    title: "New EV subsidy bill advances in Senate",
    source: "Reuters",
    time: "2h ago",
    sentiment: "Bullish",
    confidence: 82,
    summary:
      "Proposed subsidies could increase demand for EVs and benefit battery suppliers and chipmakers over the next 2-3 quarters.",
    sectors: ["Clean Energy", "Semiconductors", "Automotive"],
  },
  {
    id: "n2",
    title: "Fed signals rates may stay higher for longer",
    source: "Bloomberg",
    time: "5h ago",
    sentiment: "Bearish",
    confidence: 67,
    summary:
      "Extended high rates may pressure growth stocks and rate-sensitive sectors like real estate and small caps.",
    sectors: ["Real Estate", "Tech Growth", "Banking"],
  },
  {
    id: "n3",
    title: "Major cloud provider reports record AI demand",
    source: "CNBC",
    time: "1d ago",
    sentiment: "Bullish",
    confidence: 74,
    summary:
      "Strong AI infrastructure spending could support data-center chip makers and cloud software names.",
    sectors: ["Semiconductors", "Cloud", "AI"],
  },
];
