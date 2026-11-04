import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

interface PageHeaderProps {
  eyebrow: string;
  title?: ReactNode;
  description?: string;
  actions?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <header className="px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-28 lg:px-8">
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col gap-5">
        <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400 sm:text-sm">
          <span className="h-px w-7 bg-brand-500/60" />
          {eyebrow}
        </p>
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-fg sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-pretty text-sm leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
        {actions ? (
          <div className="mt-2 flex flex-wrap items-center gap-3">{actions}</div>
        ) : null}
      </Reveal>
    </header>
  );
}