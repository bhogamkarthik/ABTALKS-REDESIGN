import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Signal } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui/primitives";
import type { Challenge } from "@/data/mock";

export function MissionCard({ challenge }: { challenge: Challenge }) {
  return (
    <Card className="animate-rise border-primary/30 bg-[linear-gradient(160deg,color-mix(in_oklab,var(--primary)_10%,var(--card)),var(--card))] p-5">
      <div className="flex items-center gap-2">
        <Badge tone="flame">🔥 Today&apos;s Mission</Badge>
        <Badge tone="accent">Day {challenge.day}</Badge>
      </div>

      <h2 className="mt-3 text-2xl leading-tight font-bold">{challenge.title}</h2>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-elevated px-2.5 py-1.5">
          <Signal className="size-3.5 text-primary" /> {challenge.difficulty}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-elevated px-2.5 py-1.5">
          <Clock className="size-3.5 text-primary" /> {challenge.estimatedTime}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{challenge.description}</p>

      <Link to="/day/$day" params={{ day: String(challenge.day) }} className="mt-5 block">
        <Button size="lg">
          Continue Mission <ArrowRight className="size-4" />
        </Button>
      </Link>
    </Card>
  );
}
