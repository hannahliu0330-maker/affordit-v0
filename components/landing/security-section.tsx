import { Lock, Link2, Eye, KeyRound, ShieldCheck } from "lucide-react";

const points = [
  { icon: Lock, title: "Bank-level encryption", desc: "Your data is encrypted in transit and at rest." },
  { icon: Link2, title: "Secure data connections", desc: "Connections use trusted, industry-standard providers." },
  { icon: Eye, title: "Read-only access", desc: "Affordit can view your accounts but never move money." },
  { icon: KeyRound, title: "You own your data", desc: "Export or delete your data whenever you want." },
];

export function SecuritySection() {
  return (
    <section id="security" className="border-t border-border bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-medium text-primary-foreground/80">
              <ShieldCheck className="h-3.5 w-3.5" />
              Data &amp; security, built in
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Security and privacy come first
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/70">
              Affordit is designed so you stay in control of your money and your data at every step —
              privacy first, always.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
