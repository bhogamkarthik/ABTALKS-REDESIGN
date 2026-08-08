import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Github, Linkedin, Rocket, UserPlus } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { AchievementCard } from "@/components/AchievementCard";
import { EmptyState } from "@/components/EmptyState";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { MissionCard } from "@/components/MissionCard";
import { StreakCard } from "@/components/StreakCard";
import { StreakRescue } from "@/components/StreakRescue";
import { Badge, Button, Card, PageContainer, SectionTitle } from "@/components/ui/primitives";
import { Wordmark } from "@/components/Header";
import {
  achievements,
  challenge,
  proofStats,
  student as baseStudent,
  type StudentState,
} from "@/data/mock";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Your 60-Day Streak | ABTalks" },
      {
        name: "description",
        content:
          "Track your streak, see today's mission and submit your daily proof of work in the ABTalks 60-day challenge.",
      },
      { property: "og:title", content: "Dashboard — Your 60-Day Streak | ABTalks" },
      {
        property: "og:description",
        content: "See your streak, today's mission and your proof of work at a glance.",
      },
    ],
  }),
  component: Dashboard,
});

const STATES: { key: StudentState; label: string }[] = [
  { key: "active", label: "Active" },
  { key: "missed", label: "Missed day" },
  { key: "first-day", label: "Day 1" },
  { key: "empty-profile", label: "No profile" },
];

function Dashboard() {
  const [state, setState] = useState<StudentState>("active");

  const student =
    state === "first-day"
      ? { ...baseStudent, currentDay: 1, streak: 0, completedDays: 0 }
      : state === "missed"
        ? { ...baseStudent, streak: 0 }
        : state === "empty-profile"
          ? { ...baseStudent, name: "" }
          : baseStudent;

  const todayChallenge =
    state === "first-day"
      ? {
          ...challenge,
          day: 1,
          title: "Ship Your First Page",
          description:
            "Build and publish a simple personal page. Small is fine — the point is to start today.",
        }
      : challenge;

  const greeting = student.name ? `Good evening, ${student.name} 👋` : "Welcome, Builder 👋";
  const subtitle =
    state === "first-day"
      ? "Welcome to Day 1 — let's start the streak."
      : state === "missed"
        ? "One missed day doesn't end the journey."
        : student.name
          ? "Ready to keep your streak alive?"
          : "Add your details to personalise your journey.";

  return (
    <div className="min-h-screen bg-background">
      <header
        id="profile"
        className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md"
      >
        <div className="mx-auto grid h-16 w-full max-w-[480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5">
          <Wordmark />
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-sm font-bold text-primary">
            {student.name ? student.name[0] : "B"}
          </span>
        </div>
      </header>

      <PageContainer withNav className="pt-6">
        <div className="animate-rise">
          <h1 className="text-2xl font-bold">{greeting}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-3">
            <Badge tone="neutral">{student.track}</Badge>
          </div>
        </div>

        {/* demo state switcher (mock data driven) */}
        <div className="-mx-5 mt-4 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-2">
            {STATES.map((s) => (
              <button
                key={s.key}
                onClick={() => setState(s.key)}
                className={`min-h-9 rounded-full border px-3 text-xs font-semibold transition-colors ${
                  state === s.key
                    ? "border-primary/50 bg-primary/15 text-primary"
                    : "border-border text-muted-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5">
          {state === "missed" && <StreakRescue onResume={() => setState("active")} />}

          {state === "empty-profile" && (
            <EmptyState
              icon={<UserPlus className="size-5" />}
              title="Complete your profile"
              body="Add your name and college so your proof of work is credited to you."
              action={<Button variant="secondary">Add your details</Button>}
            />
          )}

          <StreakCard
            streak={student.streak}
            currentDay={student.currentDay}
            totalDays={student.totalDays}
            completedDays={student.completedDays}
          />

          <MissionCard challenge={todayChallenge} />

          <section>
            <SectionTitle
              action={
                <Link to="/day/$day" params={{ day: "12" }} className="text-xs font-semibold text-primary">
                  View day
                </Link>
              }
            >
              Your journey
            </SectionTitle>
            {state === "first-day" ? (
              <EmptyState
                icon={<Rocket className="size-5" />}
                title="Your journey starts here"
                body="No completed days yet. Finish today's mission and Day 1 turns green."
              />
            ) : (
              <JourneyTimeline
                currentDay={student.currentDay}
                completedDays={student.completedDays}
              />
            )}
          </section>

          <section id="achievements" className="scroll-mt-20">
            <SectionTitle>Achievements</SectionTitle>
            {state === "first-day" ? (
              <EmptyState
                icon={<Compass className="size-5" />}
                title="No badges yet"
                body="Complete your first mission to unlock the First Project badge."
              />
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((a) => (
                  <AchievementCard key={a.id} achievement={a} />
                ))}
              </div>
            )}
          </section>

          <section>
            <SectionTitle>Your proof</SectionTitle>
            <Card>
              <div className="grid grid-cols-3 gap-2 text-center">
                {proofStats.map((s) => (
                  <div key={s.label} className="min-w-0 rounded-xl bg-elevated px-2 py-3">
                    <p className="font-display text-xl font-bold text-primary">
                      {state === "first-day" ? 0 : s.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Every day you complete becomes part of your public portfolio.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-elevated px-2.5 py-1.5 text-xs text-muted-foreground">
                  <Github className="size-3.5" /> GitHub
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-elevated px-2.5 py-1.5 text-xs text-muted-foreground">
                  <Linkedin className="size-3.5" /> LinkedIn
                </span>
              </div>
            </Card>
          </section>
        </div>
      </PageContainer>

      <BottomNavigation />
    </div>
  );
}
