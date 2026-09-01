import type { Metadata } from "next";
import { skillCategories } from "@/data/skills";
import { skillIcons } from "@/components/shared/icon-map";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of a junior full-stack developer — React, Node.js, Express, MongoDB, PostgreSQL, TypeScript and more.",
};

const levelTone = {
  Advanced: "brand",
  Proficient: "neutral",
  "Working knowledge": "faint",
} as const;

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="The stack I work with"
        description="Grouped by where I use them, with an honest sense of how deep each one goes."
      />

      <Section className="pt-0 sm:pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const CategoryIcon = skillIcons[category.icon] ?? skillIcons.layers;
            return (
              <Reveal key={category.id} delay={index * 0.06} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-edge bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-brand-500">
                      <CategoryIcon className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold tracking-tight text-fg">
                        {category.title}
                      </h2>
                      <p className="text-[13px] text-faint">{category.description}</p>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-1 flex-col divide-y divide-edge">
                    {category.skills.map((skill) => {
                      const SkillIcon = skillIcons[skill.icon] ?? skillIcons.braces;
                      return (
                        <li key={skill.name} className="flex gap-3 py-4">
                          <SkillIcon
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                            aria-hidden
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-medium text-fg">
                                {skill.name}
                              </p>
                              <Badge tone={levelTone[skill.level]} className="shrink-0">
                                {skill.level}
                              </Badge>
                            </div>
                            <p
                              className={cn(
                                "mt-1.5 text-[13px] leading-relaxed text-muted",
                                skill.level === "Working knowledge" && "text-faint",
                              )}
                            >
                              {skill.context}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}