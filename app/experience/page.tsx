import type { Metadata } from "next";
import { Briefcase, FileText } from "lucide-react";
import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internship and freelance experience of a junior full-stack developer.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Work & internships"
        description="The roles where I've built real features, learned from real codebases, and shipped things that got used."
        actions={
          <Button href="/resume" variant="secondary">
            <FileText className="h-4 w-4" aria-hidden />
            View résumé
          </Button>
        }
      />

      <Section className="pt-0 sm:pt-0">
        <div className="relative space-y-14">
          <span
            className="absolute bottom-2 left-[9px] top-2 w-px bg-gradient-to-b from-brand-500/50 via-edge to-transparent"
            aria-hidden
          />
          {experience.map((entry, index) => (
            <article key={entry.id} className="relative pl-12 sm:pl-16">
              <span
                className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-brand-500/40 bg-surface"
                aria-hidden
              >
                <Briefcase className="h-2.5 w-2.5 text-brand-500" />
              </span>

              <Reveal delay={index * 0.05}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h2 className="text-xl font-semibold tracking-tight text-fg">
                    {entry.role}
                  </h2>
                  <Badge tone={entry.current ? "success" : "brand"}>
                    {entry.current ? "Current" : entry.type}
                  </Badge>
                </div>
                <p className="mt-1.5 font-mono text-xs text-faint">
                  {entry.company} · {entry.location} · {entry.period}
                </p>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <p className="text-pretty text-base leading-7 text-muted">
                      {entry.summary}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {entry.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex gap-3 text-pretty text-[15px] leading-relaxed text-muted"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500"
                            aria-hidden
                          />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:pt-8">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                      Stack
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {entry.stack.map((tech) => (
                        <li key={tech}>
                          <Badge>{tech}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}