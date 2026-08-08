import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Checklist({
  items,
  checked,
  onToggle,
}: {
  items: string[];
  checked: boolean[];
  onToggle: (index: number) => void;
}) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li key={item}>
          <button
            type="button"
            onClick={() => onToggle(i)}
            aria-pressed={checked[i]}
            className={cn(
              "flex min-h-12 w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all active:scale-[0.99]",
              checked[i] ? "border-primary/30 bg-primary/10" : "border-border bg-card",
            )}
          >
            <span
              className={cn(
                "grid size-6 shrink-0 place-items-center rounded-md border transition-colors",
                checked[i]
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input bg-elevated",
              )}
            >
              {checked[i] && <Check className="animate-pop size-4" strokeWidth={3} />}
            </span>
            <span
              className={cn(
                "min-w-0 text-sm",
                checked[i] ? "text-foreground line-through decoration-primary/60" : "text-muted-foreground",
              )}
            >
              {item}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
