import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectTone } from "@/data/projects";

interface ProjectVisualProps {
  name: string;
  tone: ProjectTone;
  image?: string | null;
  className?: string;
}

const tones: Record<ProjectTone, { from: string; to: string }> = {
  teal: { from: "rgba(45, 212, 191, 0.34)", to: "rgba(14, 165, 233, 0.22)" },
  indigo: { from: "rgba(129, 140, 248, 0.36)", to: "rgba(45, 212, 191, 0.2)" },
  amber: { from: "rgba(251, 191, 36, 0.32)", to: "rgba(244, 114, 182, 0.2)" },
  rose: { from: "rgba(251, 113, 133, 0.34)", to: "rgba(129, 140, 248, 0.2)" },
  sky: { from: "rgba(56, 189, 248, 0.34)", to: "rgba(129, 140, 248, 0.22)" },
};

export function ProjectVisual({
  name,
  tone,
  image,
  className,
}: ProjectVisualProps) {
  const palette = tones[tone];
  const styles: CSSProperties = {
    backgroundImage: [
      "radial-gradient(120% 90% at 20% 0%, rgba(255,255,255,0.16), transparent 55%)",
      `radial-gradient(90% 80% at 82% 12%, ${palette.from}, transparent 60%)`,
      `radial-gradient(70% 70% at 14% 88%, ${palette.to}, transparent 65%)`,
      "linear-gradient(180deg, rgba(9,9,11,0.25), rgba(9,9,11,0.62))",
    ].join(", "),
  };

  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-2xl border border-edge bg-surface-2",
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={`${name} preview`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0" style={styles} />
          <div className="bg-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        </>
      )}

      <div
        className={cn(
          "relative flex h-full w-full flex-col p-5 sm:p-7",
          image && "hidden",
        )}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="ml-3 h-2 w-24 rounded-full bg-white/15 sm:w-36" />
        </div>

        <div className="mt-6 flex flex-1 items-center gap-6 sm:mt-8">
          <span className="font-mono text-5xl font-bold tracking-tighter text-white/[0.08] sm:text-8xl">
            {name[0]?.toUpperCase()}
          </span>
          <div className="min-w-0 flex-1 space-y-2.5">
            <div className="h-2 w-3/4 rounded-full bg-white/20" />
            <div className="h-2 w-1/2 rounded-full bg-white/12" />
            <div className="mt-5 h-8 w-full rounded-lg border border-white/10 bg-white/[0.07]" />
            <div className="flex gap-2">
              <div className="h-8 w-20 rounded-lg border border-white/10 bg-white/[0.07]" />
              <div className="h-8 w-12 rounded-lg border border-white/10 bg-white/[0.07]" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex gap-2">
            <span className="h-2 w-10 rounded-full bg-white/25" />
            <span className="h-2 w-6 rounded-full bg-white/15" />
          </div>
          <span className="h-6 w-6 rounded-full border border-white/15 bg-white/[0.08]" />
        </div>
      </div>
    </div>
  );
}