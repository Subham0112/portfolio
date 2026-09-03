import Image from "next/image";
import {
  ArrowRight,
  Brain,
  Briefcase,
  CalendarClock,
  Code2,
  Compass,
  GraduationCap,
  Mail,
  MapPin,
  Telescope,
  User,
  Zap,
} from "lucide-react";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { site } from "@/data/site";
import { skillIcons } from "@/components/shared/icon-map";
import { SocialLinks } from "@/components/shared/social-links";
import { ContactForm } from "@/components/contact/contact-form";
import { ProjectsGrid } from "@/components/project/projects-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Hero } from "@/components/home/hero";
import { cn } from "@/lib/utils";

const stats = [
  { icon: User, label: "Experience", value: "1+ Years" },
  { icon: Briefcase, label: "Projects", value: "4+ Completed" },
];

const strengths = [
  {
    icon: Code2,
    title: "End-to-end building",
    text: "Comfortable across the whole stack — MongoDB and Postgres schemas, Express routes, React components and deployment config.",
  },
  {
    icon: Zap,
    title: "Realtime & auth",
    text: "JWT auth flows and WebSocket realtime features are my comfort zone, with security in mind from the start.",
  },
  {
    icon: Brain,
    title: "Clean, readable code",
    text: "Named things, small components, typed data. I write code the next person (and future me) can understand.",
  },
  {
    icon: Compass,
    title: "Product thinking",
    text: "I ask why a feature exists before building it, and keep UX details — states, errors, empty screens — in mind.",
  },
];

const currentlyLearning = [
  "Docker & containers",
  "AWS fundamentals",
  "GraphQL",
  "Redis",
  "CI/CD pipelines",
];

const levelTone = {
  Advanced: "brand",
  Proficient: "neutral",
  "Working knowledge": "faint",
} as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="about">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div
                className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-brand-500/30"
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-edge bg-surface-2">
                <Image
                  src="/images/mypic.jpg"
                  alt={site.name}
                  fill
                  sizes="(min-width: 1024px) 384px, 60vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.06}>
              <p className="text-base leading-relaxed text-muted">
                I&apos;m {site.name}, a full-stack developer based in{" "}
                {site.location}. I build complete web applications — JWT-secured
                APIs in Node.js and Express, paired with responsive React
                interfaces — using MongoDB, PostgreSQL and Prisma. I care about
                clean architecture, realtime features, and shipping things
                people can actually use.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-edge bg-surface p-5"
                    >
                      <Icon className="h-5 w-5 text-brand-500" aria-hidden />
                      <p className="mt-4 text-sm font-semibold tracking-tight text-fg">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm text-muted">{stat.value}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <Button href="#contact" variant="outline">
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <Reveal key={strength.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-edge bg-surface p-6 transition-all duration-300 hover:border-brand-500/40">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-brand-500">
                    <Icon className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-fg">
                    {strength.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {strength.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section id="education">
        <div className="flex items-center gap-2.5">
          <GraduationCap className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-fg">
            Education
          </h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {education.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-edge bg-surface p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight text-fg">
                    {entry.degree}
                  </h3>
                  <Badge tone={entry.kind === "Degree" ? "brand" : "neutral"}>
                    {entry.kind}
                  </Badge>
                </div>
                <p className="mt-1 font-mono text-xs text-faint">
                  {entry.institution} · {entry.location}
                </p>
                <p className="mt-3 text-sm text-muted">{entry.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-edge bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-brand-500">
                <Telescope className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-fg">
                  Currently exploring
                </h2>
                <p className="mt-1 text-sm text-muted">
                  New tools I&apos;m learning by building with them.
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2">
              {currentlyLearning.map((item) => (
                <li key={item}>
                  <Badge tone="faint">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section id="experience">
        <div className="flex items-center gap-2.5">
          <Briefcase className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-fg">
            Experience
          </h2>
        </div>
        <div className="relative mt-10 space-y-14">
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
                  <h3 className="text-xl font-semibold tracking-tight text-fg">
                    {entry.role}
                  </h3>
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

      <Section id="skills">
        <div className="flex items-center gap-2.5">
          <Code2 className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-fg">
            Skills
          </h2>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const CategoryIcon =
              skillIcons[category.icon] ?? skillIcons.layers;
            return (
              <Reveal
                key={category.id}
                delay={index * 0.06}
                className="h-full"
              >
                <div className="flex h-full flex-col rounded-2xl border border-edge bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-brand-500">
                      <CategoryIcon className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-fg">
                        {category.title}
                      </h3>
                      <p className="text-[13px] text-faint">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-1 flex-col divide-y divide-edge">
                    {category.skills.map((skill) => {
                      const SkillIcon =
                        skillIcons[skill.icon] ?? skillIcons.braces;
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
                              <Badge
                                tone={levelTone[skill.level]}
                                className="shrink-0"
                              >
                                {skill.level}
                              </Badge>
                            </div>
                            <p
                              className={cn(
                                "mt-1.5 text-[13px] leading-relaxed text-muted",
                                skill.level === "Working knowledge" &&
                                  "text-faint",
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

      <Section id="projects">
        <div className="flex items-center gap-2.5">
          <Code2 className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-fg">
            Projects
          </h2>
        </div>
        <div className="mt-8">
          <ProjectsGrid projects={projects} />
        </div>
      </Section>

      <Section id="contact">
        <div className="flex items-center gap-2.5">
          <Mail className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-fg">
            Contact
          </h2>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <div className="rounded-2xl border border-edge bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  <Mail className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 block break-all text-sm font-medium text-fg underline-offset-4 transition-colors hover:text-brand-500 hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                  Location
                </p>
                <p className="mt-3 text-sm font-medium text-fg">
                  {site.location}
                  <span className="mt-1 block font-normal text-muted">
                    Working remote-friendly across time zones.
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  <CalendarClock
                    className="h-3.5 w-3.5 text-brand-500"
                    aria-hidden
                  />
                  Availability
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <Badge tone="success">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    {site.availabilityNote}
                  </Badge>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Typically responding within a day — occasional exceptions
                  when I&apos;m heads-down on a build.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Elsewhere
                </p>
                <SocialLinks className="mt-4" />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
