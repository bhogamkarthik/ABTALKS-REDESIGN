import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Flame,
  Github,
  Linkedin,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { SiteHeader } from "@/components/Header";
import { Badge, Button, Card, PageContainer, SectionTitle } from "@/components/ui/primitives";
import { howItWorks, journeyMilestones } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABTalks — 60 Days. Build. Learn. Get Seen." },
      {
        name: "description",
        content:
          "A 60-day coding challenge for Indian college students. Build daily, keep your streak, and turn your work into public proof on GitHub and LinkedIn.",
      },
      { property: "og:title", content: "ABTalks — 60 Days. Build. Learn. Get Seen." },
      {
        property: "og:description",
        content: "Turn 60 days of coding into a public record of your growth.",
      },
    ],
  }),
  component: Landing,
});

function DayGrid() {
  return (
    <div className="grid grid-cols-10 gap-1.5">
      {Array.from({ length: 60 }, (_, i) => {
        const filled = i < 11;
        const today = i === 11;
        return (
          <span
            key={i}
            className={`aspect-square rounded-[5px] ${
              filled ? "bg-primary" : today ? "bg-flame animate-pulse-ring" : "bg-elevated"
            }`}
          />
        );
      })}
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <PageContainer className="pt-10 pb-20">
        {/* HERO */}
        <section className="animate-rise">
          <Badge tone="accent">
            <Sparkles className="size-3" /> 60-day coding challenge
          </Badge>
          <h1 className="mt-4 font-display text-[2.6rem] leading-[1.05] font-bold">
            60 DAYS.
            <br />
            BUILD. LEARN.
            <br />
            <span className="text-primary">GET SEEN.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Turn 60 days of coding into a public record of your growth.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link to="/dashboard">
              <Button size="lg">
                Start Your 60-Day Journey <ArrowRight className="size-4" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="ghost">See how it works</Button>
            </a>
          </div>

          <Card className="mt-8">
            <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-semibold tracking-wide uppercase">Your 60 days</span>
              <span className="inline-flex items-center gap-1 text-flame">
                <Flame className="size-3.5" /> Day 12
              </span>
            </div>
            <DayGrid />
            <div className="mt-3 flex items-center gap-3 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2.5 rounded-[3px] bg-primary" /> Shipped
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2.5 rounded-[3px] bg-flame" /> Today
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2.5 rounded-[3px] bg-elevated" /> Ahead
              </span>
            </div>
          </Card>
        </section>

        {/* VALUE PROP */}
        <section className="mt-16">
          <h2 className="font-display text-3xl leading-tight font-bold">
            Build proof,
            <br />
            not just projects.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Most students learn quietly and have nothing to show for it. ABTalks turns your daily
            coding practice into visible, verifiable proof — a repo you can link, a post people can
            read, and a streak that shows you actually keep going.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Card className="p-4">
              <Github className="size-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Real commits</p>
              <p className="mt-1 text-xs text-muted-foreground">Code, not certificates.</p>
            </Card>
            <Card className="p-4">
              <Linkedin className="size-5 text-info" />
              <p className="mt-2 text-sm font-semibold">Public progress</p>
              <p className="mt-1 text-xs text-muted-foreground">People see you build.</p>
            </Card>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="mt-16 scroll-mt-20">
          <SectionTitle>How it works</SectionTitle>
          <div className="flex flex-col gap-3">
            {howItWorks.map((s) => (
              <Card key={s.step} className="flex items-start gap-4 p-4">
                <span className="font-display text-2xl font-bold text-primary/70">{s.step}</span>
                <div className="min-w-0">
                  <p className="text-base font-semibold">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* JOURNEY */}
        <section className="mt-16">
          <SectionTitle>The 60-day journey</SectionTitle>
          <ol className="relative ml-3 border-l border-border pl-6">
            {journeyMilestones.map((m, i) => (
              <li key={m.day} className={i === journeyMilestones.length - 1 ? "" : "pb-7"}>
                <span
                  className={`absolute -left-[9px] grid size-[18px] place-items-center rounded-full border-2 border-background ${
                    i === 0 ? "bg-primary" : "bg-elevated"
                  }`}
                  style={{ marginTop: 4 }}
                />
                <p className="text-xs font-bold tracking-widest text-primary uppercase">
                  Day {m.day}
                </p>
                <p className="mt-1 text-base font-semibold">{m.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.body}</p>
              </li>
            ))}
          </ol>
          <Card className="mt-6 flex items-center gap-3 p-4">
            <TrendingUp className="size-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              One small build a day. Sixty days later it&apos;s a portfolio.
            </p>
          </Card>
        </section>

        {/* PORTFOLIO */}
        <section className="mt-16">
          <h2 className="font-display text-3xl leading-tight font-bold">
            Your work becomes
            <br />
            your portfolio.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Every completed day adds a project, a GitHub proof and a LinkedIn post to your public
            history. By day 60 you don&apos;t have to describe your skills — you can link to them.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            {["12 projects shipped", "11 GitHub proofs", "11 LinkedIn posts"].map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-xl bg-card px-4 py-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-16">
          <Card className="relative overflow-hidden border-primary/30 text-center">
            <div className="grid-dots pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative py-4">
              <Target className="mx-auto size-7 text-primary" />
              <h2 className="mt-3 font-display text-2xl font-bold">Ready to build for 60 days?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Pick a track tonight. Ship something tomorrow.
              </p>
              <Link to="/dashboard" className="mt-5 block">
                <Button size="lg">Start Challenge</Button>
              </Link>
            </div>
          </Card>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            ABTalks · 60 Days. Build. Learn. Get Seen.
          </p>
        </section>
      </PageContainer>
    </div>
  );
}
