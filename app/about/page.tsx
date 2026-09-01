import type { Metadata } from "next";
import { ArrowRight, Brain, Code2, Compass, GraduationCap, Telescope, Zap } from "lucide-react";
import { education } from "@/data/education";
import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, developer journey and strengths of a junior full-stack developer.",
};

const strengths = [
  {
    icon: Code2,
    title: "End-to-end building",
    text: "Comfortable across the whole stack — MongoDB schemas, Express routes, React components and deployment config.",
  },
  {
    icon: Zap,
    title: "Realtime & auth",
    text: "JWT auth flows and Socket.IO realtime features are my comfort zone, with security in mind from the start.",
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

const currentlyLearning = ["Docker & containers", "AWS fundamentals", "GraphQL", "Redis", "CI/CD pipelines"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A full-stack developer who likes <span className="text-gradient">shipping things</span>
          </>
        }
        description="The short version: I started with HTML and CSS, fell for JavaScript, and never really left the web platform."
      />

      <Section className="pt-0 sm:pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-muted">
            <Reveal>
              <p>
                I&apos;m {site.name}, a full-stack developer based in{" "}
                {site.location}. I started with hand-written HTML and CSS, then
                JavaScript for small interactions — and that curiosity grew
                into building complete applications: React frontends, Node.js
                APIs, and databases that hold real things.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p>
                What I enjoy most is the middle ground — wiring an API response
                to the right UI state, designing auth flows that are safe and
                simple, and making realtime features feel instant. I&apos;ve
                built three applications end to end: a social platform with
                realtime chat, a ride-booking system with live trip tracking,
                and an e-commerce store with a full admin panel.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-fg">
                I&apos;m looking for a team where I can contribute to real
                products, get honest feedback, and keep growing as a developer.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Button href="/contact" variant="outline">
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-sm font-semibold tracking-tight text-fg">
                  My developer journey
                </h2>
                <ol className="mt-4 space-y-4 border-l border-edge pl-5">
                  {[
                    ["2022", "Learned HTML, CSS and JavaScript — built my first static sites."],
                    ["2023", "Discovered React and Node.js — started building small MERN apps."],
                    ["2024", "Went deep on auth, databases and deployment. Built TechHub end to end."],
                    ["2025", "Added realtime with Socket.IO (ConnectHub, DriveMe) and interned as a full-stack developer."],
                  ].map(([year, text]) => (
                    <li key={year} className="relative">
                      <span className="absolute -left-[23px] top-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                      <p className="font-mono text-xs font-medium text-brand-600 dark:text-brand-400">{year}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                    </li>
                  ))}
                </ol>
              </div>
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

      <Section>
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
                  {entry.institution} · {entry.period}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {entry.coursework.map((course) => (
                    <li
                      key={course}
                      className="rounded-full border border-edge bg-surface-2 px-2.5 py-0.5 text-[11px] text-muted"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
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
    </>
  );
}