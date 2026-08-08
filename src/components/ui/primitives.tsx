import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageContainer({
  children,
  className,
  withNav = false,
}: {
  children: ReactNode;
  className?: string;
  withNav?: boolean;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[480px] px-5", withNav && "pb-28", className)}>
      {children}
    </div>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40",
        size === "lg" ? "min-h-14 px-6 text-base" : "min-h-12 px-5 text-sm",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110",
        variant === "secondary" && "bg-elevated text-foreground hover:bg-elevated/70",
        variant === "outline" && "border border-border bg-transparent text-foreground hover:bg-elevated",
        variant === "ghost" && "bg-transparent text-muted-foreground hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("surface rounded-2xl p-5", className)} {...props} />;
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "flame" | "info";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase",
        tone === "neutral" && "bg-elevated text-muted-foreground",
        tone === "accent" && "bg-primary/15 text-primary",
        tone === "flame" && "bg-flame/15 text-flame",
        tone === "info" && "bg-info/15 text-info",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ProgressBar({
  value,
  max,
  className,
  tone = "accent",
}: {
  value: number;
  max: number;
  className?: string;
  tone?: "accent" | "flame";
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      className={cn("h-2.5 w-full overflow-hidden rounded-full bg-elevated", className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-700 ease-out",
          tone === "accent" ? "bg-primary" : "bg-flame",
        )}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase">
        {children}
      </h2>
      {action}
    </div>
  );
}
