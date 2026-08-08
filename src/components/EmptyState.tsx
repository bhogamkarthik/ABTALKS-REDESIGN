import type { ReactNode } from "react";
import { Card } from "@/components/ui/primitives";

export function EmptyState({
  icon,
  title,
  body,
  action,
}: {
  icon?: ReactNode;
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <Card className="animate-rise text-center">
      {icon && (
        <span className="mx-auto mb-3 grid size-12 place-items-center rounded-2xl bg-elevated text-primary">
          {icon}
        </span>
      )}
      <h3 className="text-base font-bold">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
      {action && <div className="mt-4">{action}</div>}
    </Card>
  );
}
