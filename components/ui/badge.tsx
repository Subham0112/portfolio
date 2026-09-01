import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "brand" | "neutral" | "success" | "faint";

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const tones: Record<Tone, string> = {
  brand:
    "border-brand-500/25 bg-brand-500/10 text-brand-600 dark:text-brand-300",
  neutral: "border-edge bg-surface-2 text-muted",
  success:
    "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  faint: "border-edge bg-transparent text-faint",
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium leading-5",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}