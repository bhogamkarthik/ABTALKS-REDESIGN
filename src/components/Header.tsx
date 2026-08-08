import { Link } from "@tanstack/react-router";
import { Menu, Terminal } from "lucide-react";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
        <Terminal className="size-4" strokeWidth={2.6} />
      </span>
      {!compact && (
        <span className="font-display text-lg font-bold tracking-tight">
          AB<span className="text-primary">Talks</span>
        </span>
      )}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[480px] items-center justify-between px-5">
        <Wordmark />
        <button
          aria-label="Open menu"
          className="grid size-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  );
}
