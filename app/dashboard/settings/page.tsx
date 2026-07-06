import { Landmark, ShieldCheck, Bell, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const accounts = [
  { name: "Chase Checking", type: "Bank account", status: "Connected" },
  { name: "Amex Platinum", type: "Credit card", status: "Connected" },
  { name: "Fidelity Brokerage", type: "Investment", status: "Connected" },
];

const notifications = [
  { label: "Price alerts", desc: "When a watchlist stock hits your target", on: true },
  { label: "News insights", desc: "AI analysis on market-moving news", on: true },
  { label: "Budget alerts", desc: "When you're close to a budget limit", on: true },
  { label: "Weekly summary", desc: "A recap of your finances every Monday", on: false },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-4 w-4 text-brand-blue" /> Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" defaultValue="Jordan Davis" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="jordan@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="goal">Primary financial goal</Label>
            <Input id="goal" defaultValue="Build wealth" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="risk">Risk preference</Label>
            <Input id="risk" defaultValue="Moderate" />
          </div>
          <div className="sm:col-span-2">
            <Button>Save changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Landmark className="h-4 w-4 text-brand-green" /> Connected accounts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {accounts.map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between rounded-lg border border-border p-3"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{a.name}</p>
                <p className="text-xs text-muted-foreground">{a.type}</p>
              </div>
              <span className="rounded-full bg-brand-green/12 px-2.5 py-0.5 text-xs font-medium text-brand-green">
                {a.status}
              </span>
            </div>
          ))}
          <Button variant="outline">Link new account</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-brand-purple" /> Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {notifications.map((n, i) => (
            <div key={n.label}>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{n.label}</p>
                  <p className="text-xs text-muted-foreground">{n.desc}</p>
                </div>
                <Switch defaultChecked={n.on} />
              </div>
              {i < notifications.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-green" /> Data &amp; security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>Your data is protected with bank-level encryption and read-only connections.</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline">Export my data</Button>
            <Button variant="outline">Change password</Button>
            <Button variant="outline" className="text-destructive">Delete account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
