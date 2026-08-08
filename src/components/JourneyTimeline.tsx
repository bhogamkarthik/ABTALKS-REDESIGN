import { Check, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export function JourneyTimeline({
  currentDay,
  completedDays,
  window: windowSize = 7,
}: {
  currentDay: number;
  completedDays: number;
  window?: number;
}) {
  const start = Math.max(1, currentDay - (windowSize - 3));
  const days = Array.from({ length: windowSize }, (_, i) => start + i);

  return (
    <div className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ol className="flex min-w-max items-stretch gap-2">
        {days.map((day) => {
          const done = day <= completedDays;
          const current = day === currentDay;
          return (
            <li
              key={day}
              className={cn(
                "flex w-[62px] shrink-0 flex-col items-center gap-2 rounded-2xl border px-2 py-3 transition-colors",
                done && "border-primary/25 bg-primary/10",
                current && "border-flame/40 bg-flame/10",
                !done && !current && "border-border bg-card",
              )}
            >
              <span
                className={cn(
                  "grid size-8 place-items-center rounded-full text-xs font-bold",
                  done && "bg-primary text-primary-foreground",
                  current && "bg-flame/20 text-flame",
                  !done && !current && "bg-elevated text-muted-foreground",
                )}
              >
                {done ? (
                  <Check className="size-4" strokeWidth={3} />
                ) : current ? (
                  <Flame className="size-4" strokeWidth={2.6} />
                ) : (
                  "○"
                )}
              </span>
              <span
                className={cn(
                  "text-[11px] font-semibold",
                  current ? "text-flame" : done ? "text-foreground" : "text-muted-foreground",
                )}
              >
                Day {day}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
