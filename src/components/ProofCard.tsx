import { Check, Github, Linkedin } from "lucide-react";
import { Button, Card } from "@/components/ui/primitives";

export function ProofCard({
  kind,
  value,
  onChange,
  submitted,
  onSubmit,
}: {
  kind: "github" | "linkedin";
  value: string;
  onChange: (v: string) => void;
  submitted: boolean;
  onSubmit: () => void;
}) {
  const isGithub = kind === "github";
  const Icon = isGithub ? Github : Linkedin;

  return (
    <Card className={submitted ? "border-primary/35" : undefined}>
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-elevated text-foreground">
          <Icon className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">
            {isGithub ? "GitHub Repository / Commit" : "LinkedIn Post"}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {submitted ? "Proof submitted" : "Required to complete the day"}
          </p>
        </div>
        {submitted && (
          <span className="animate-pop grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-4" strokeWidth={3} />
          </span>
        )}
      </div>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode="url"
        aria-label={isGithub ? "GitHub URL" : "LinkedIn post URL"}
        placeholder={isGithub ? "Paste your GitHub URL" : "Paste your LinkedIn post URL"}
        className="mt-4 min-h-12 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
      />

      <Button
        variant={submitted ? "outline" : "secondary"}
        className="mt-3"
        disabled={!value.trim()}
        onClick={onSubmit}
      >
        {submitted ? "Update proof" : isGithub ? "Submit GitHub Proof" : "Submit LinkedIn Proof"}
      </Button>
    </Card>
  );
}
