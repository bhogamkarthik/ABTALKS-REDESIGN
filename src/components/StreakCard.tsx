import { Flame } from "lucide-react";
import { Card, ProgressBar } from "@/components/ui/primitives";

export function StreakCard({
  streak,
  currentDay,
  totalDays,
  completedDays,
}: {
  streak: number;
  currentDay: number;
  totalDays: number;
  completedDays: number;
}) {
  return (
    <Card className="animate-rise relative overflow-hidden">
      <div className="grid-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Flame className="size-6 shrink-0 text-flame" strokeWidth={2.4} />
              <span className="font-display text-4xl leading-none font-bold">{streak}</span>
              <span className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                day streak
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Day <span className="font-semibold text-foreground">{currentDay}</span> of {totalDays}
            </p>
          </div>
          <div className="animate-pulse-ring grid size-14 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10">
            <span className="font-display text-base font-bold text-primary">
              {Math.round((completedDays / totalDays) * 100)}%
            </span>
          </div>
        </div>

        <div className="mt-4">
          <ProgressBar value={completedDays} max={totalDays} />
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {completedDays} / {totalDays} completed
            </span>
            <span>{totalDays - completedDays} days left</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
