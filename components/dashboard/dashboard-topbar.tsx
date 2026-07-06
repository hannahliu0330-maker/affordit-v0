"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  Plus,
  LayoutDashboard,
  PieChart,
  LineChart,
  Bookmark,
  FileText,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const mobileNav = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Budgeting", href: "/dashboard/budgeting", icon: PieChart },
  { label: "Investments", href: "/dashboard/investments", icon: LineChart },
  { label: "Watchlist", href: "/dashboard/watchlist", icon: Bookmark },
  { label: "Reports", href: "/dashboard/reports", icon: FileText },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/budgeting": "Budgeting",
  "/dashboard/investments": "Investments",
  "/dashboard/watchlist": "Watchlist",
  "/dashboard/reports": "Reports",
  "/dashboard/settings": "Settings",
};

export function DashboardTopbar() {
  const pathname = usePathname();
  const title = titles[pathname] ?? "Dashboard";

  return (
    <div className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="flex items-center gap-2 lg:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              A
            </span>
          </Link>
          <h1 className="text-lg font-bold tracking-tight text-foreground">{title}</h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden sm:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search stocks..." className="w-48 rounded-full pl-9 md:w-56" />
          </div>
          <Button variant="outline" size="icon" className="rounded-full" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
          <Button className="rounded-full">
            <Plus className="h-4 w-4 sm:mr-1" />
            <span className="hidden sm:inline">Add</span>
          </Button>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
            JD
          </span>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-border px-2 py-2 lg:hidden">
        {mobileNav.map((item) => {
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
