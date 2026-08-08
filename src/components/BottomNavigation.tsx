import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Swords, Trophy, User } from "lucide-react";
import { cn } from "@/lib/utils";

const itemClass = (active: boolean) =>
  cn(
    "flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-medium transition-colors",
    active ? "text-primary" : "text-muted-foreground hover:text-foreground",
  );

export function BottomNavigation() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/dashboard";
  const onDay = pathname.startsWith("/day");

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md">
      <ul className="mx-auto flex w-full max-w-[480px] items-stretch justify-between px-3 py-2">
        <li className="flex-1">
          <Link to="/dashboard" className={itemClass(onHome)}>
            <Home className="size-5" strokeWidth={onHome ? 2.6 : 2} />
            Home
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/day/$day" params={{ day: "12" }} className={itemClass(onDay)}>
            <Swords className="size-5" strokeWidth={onDay ? 2.6 : 2} />
            Challenge
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/dashboard" hash="achievements" className={itemClass(false)}>
            <Trophy className="size-5" />
            Achievements
          </Link>
        </li>
        <li className="flex-1">
          <Link to="/dashboard" hash="profile" className={itemClass(false)}>
            <User className="size-5" />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
