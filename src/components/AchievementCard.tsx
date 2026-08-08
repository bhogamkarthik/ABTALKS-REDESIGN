import { cn } from "@/lib/utils";
import type { Achievement } from "@/data/mock";

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div
      className={cn(
        "surface flex min-w-0 flex-col gap-1 rounded-2xl p-3.5 transition-transform active:scale-[0.98]",
        achievement.unlocked ? "border-primary/25" : "opacity-55",
      )}
    >
      <span className="text-xl">{achievement.emoji}</span>
      <span className="truncate text-sm font-semibold">{achievement.title}</span>
      <span className="truncate text-[11px] text-muted-foreground">{achievement.caption}</span>
    </div>
  );
}
