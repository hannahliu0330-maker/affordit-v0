import Link from "next/link";
import { Wallet } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["How it works", "Budgeting", "AI Insights", "Security"],
  },
  {
    title: "Resources",
    links: ["Learn", "Glossary", "Blog", "Help center"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Privacy", "Terms"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Wallet className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold tracking-tight text-foreground">Affordit</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Spend smarter, invest better. A smart finance platform for young adults.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-foreground">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Affordit. All rights reserved.
          </p>
          <p className="max-w-md text-xs text-muted-foreground">
            Affordit provides educational market analysis, not financial advice. Investing involves
            risk, including the possible loss of principal.
          </p>
        </div>
      </div>
    </footer>
  );
}
