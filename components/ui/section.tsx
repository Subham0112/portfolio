import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 px-4 py-8 sm:px-6 sm:py-12 lg:px-8",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  actions?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "start",
  actions,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mb-10 flex flex-col gap-4 sm:mb-14",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
          <span
            className={cn(
              "h-px w-7",
              align === "center" && "mx-auto",
              "bg-brand-500/60",
            )}
          />
          {eyebrow}
        </p>
        <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
      {actions ? (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          {actions}
        </div>
      ) : null}
    </Reveal>
  );
}