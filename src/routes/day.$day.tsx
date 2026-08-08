import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, CheckCircle2, Clock, PartyPopper, Signal, Trophy } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Checklist } from "@/components/Checklist";
import { ProofCard } from "@/components/ProofCard";
import { Badge, Button, Card, PageContainer, ProgressBar, SectionTitle } from "@/components/ui/primitives";
import { challenge, student } from "@/data/mock";

export const Route = createFileRoute("/day/$day")({
  head: () => ({
    meta: [
      { title: `Day ${challenge.day}: ${challenge.title} | ABTalks` },
      {
        name: "description",
        content:
          "Day 12 of the ABTalks 60-day challenge: build a responsive weather app and submit your GitHub and LinkedIn proof.",
      },
      { property: "og:title", content: `Day ${challenge.day}: ${challenge.title} | ABTalks` },
      {
        property: "og:description",
        content: "Complete today's mission and add it to your 60-day proof of work.",
      },
    ],
  }),
  component: DayPage,
});

function DayPage() {
  const { day } = Route.useParams();
  const dayNumber = Number(day) || challenge.day;

  const [checked, setChecked] = useState<boolean[]>(challenge.requirements.map(() => false));
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [githubDone, setGithubDone] = useState(false);
  const [linkedinDone, setLinkedinDone] = useState(false);
  const [complete, setComplete] = useState(false);

  const canComplete = github.trim().length > 0 && linkedin.trim().length > 0;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[480px] px-5 py-3">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
            <Link
              to="/dashboard"
              aria-label="Back to dashboard"
              className="grid size-10 shrink-0 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-5" />
            </Link>
            <p className="truncate text-center font-display text-sm font-bold tracking-[0.16em] uppercase">
              Day {dayNumber} / {student.totalDays}
            </p>
            <span className="w-10 shrink-0" />
          </div>
          <ProgressBar className="mt-3" value={dayNumber} max={student.totalDays} />
        </div>
      </header>

      <PageContainer withNav className="pt-6">
        {complete ? (
          <CompletionScreen day={dayNumber} />
        ) : (
          <div className="flex flex-col gap-6">
            <section className="animate-rise">
              <Badge tone="flame">Today&apos;s Mission</Badge>
              <h1 className="mt-3 text-3xl leading-tight font-bold">{challenge.title}</h1>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-elevated px-2.5 py-1.5">
                  <Signal className="size-3.5 text-primary" /> {challenge.difficulty}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-elevated px-2.5 py-1.5">
                  <Clock className="size-3.5 text-primary" /> {challenge.estimatedTime}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {challenge.description}
              </p>
            </section>

            <section>
              <SectionTitle
                action={
                  <span className="text-xs text-muted-foreground">
                    {checked.filter(Boolean).length}/{checked.length}
                  </span>
                }
              >
                What you need to build
              </SectionTitle>
              <Checklist
                items={challenge.requirements}
                checked={checked}
                onToggle={(i) =>
                  setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
                }
              />
            </section>

            <section>
              <SectionTitle>Success criteria</SectionTitle>
              <Card className="flex flex-col gap-3 p-4">
                {challenge.successCriteria.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <p className="min-w-0 text-sm text-muted-foreground">{c}</p>
                  </div>
                ))}
              </Card>
            </section>

            <section>
              <SectionTitle>Submit your proof</SectionTitle>
              <div className="flex flex-col gap-3">
                <ProofCard
                  kind="github"
                  value={github}
                  onChange={setGithub}
                  submitted={githubDone && github.trim().length > 0}
                  onSubmit={() => setGithubDone(true)}
                />
                <ProofCard
                  kind="linkedin"
                  value={linkedin}
                  onChange={setLinkedin}
                  submitted={linkedinDone && linkedin.trim().length > 0}
                  onSubmit={() => setLinkedinDone(true)}
                />
              </div>
            </section>

            <section>
              <Button size="lg" disabled={!canComplete} onClick={() => setComplete(true)}>
                <Trophy className="size-4" /> Complete Day {dayNumber}
              </Button>
              {!canComplete && (
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Add both your GitHub and LinkedIn links to unlock.
                </p>
              )}
            </section>
          </div>
        )}
      </PageContainer>

      <BottomNavigation />
    </div>
  );
}

function CompletionScreen({ day }: { day: number }) {
  return (
    <div className="flex flex-col gap-5 py-4">
      <Card className="animate-pop relative overflow-hidden border-primary/40 text-center">
        <div className="grid-dots pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative py-4">
          <span className="animate-pulse-ring mx-auto grid size-16 place-items-center rounded-full bg-primary text-primary-foreground">
            <PartyPopper className="size-7" />
          </span>
          <h1 className="mt-4 font-display text-2xl font-bold">🎉 DAY {day} COMPLETE</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your work is now part of your 60-day journey.
          </p>
        </div>
      </Card>

      <div className="flex flex-col gap-2">
        {["GitHub proof submitted", "LinkedIn proof submitted"].map((t, i) => (
          <div
            key={t}
            className="animate-rise flex items-center gap-3 rounded-xl border border-primary/25 bg-primary/10 px-4 py-3"
            style={{ animationDelay: `${120 + i * 90}ms` }}
          >
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            <span className="text-sm font-medium">{t}</span>
          </div>
        ))}
      </div>

      <Card className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold">Streak extended</p>
          <p className="mt-1 text-xs text-muted-foreground">Come back tomorrow for Day {day + 1}.</p>
        </div>
        <span className="font-display text-2xl font-bold text-flame">🔥 12</span>
      </Card>

      <Link to="/dashboard">
        <Button size="lg">Back to dashboard</Button>
      </Link>
    </div>
  );
}
