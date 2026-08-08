import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button, Card } from "@/components/ui/primitives";

export function StreakRescue({ onResume }: { onResume?: () => void }) {
  return (
    <Card className="animate-rise border-flame/35 bg-[linear-gradient(160deg,color-mix(in_oklab,var(--flame)_12%,var(--card)),var(--card))]">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-flame/15 text-flame">
          <AlertTriangle className="size-5" />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-bold">You missed a day.</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Your previous progress still counts. Don&apos;t quit now — one build today puts you back
            on track.
          </p>
        </div>
      </div>
      <Button className="mt-4" onClick={onResume}>
        <RotateCcw className="size-4" /> Resume Challenge
      </Button>
    </Card>
  );
}
