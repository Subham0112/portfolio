import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Briefcase,
  CalendarClock,
  Code2,
  Compass,
  GraduationCap,
  Mail,
  MapPin,
  User,
  Zap,
} from "lucide-react";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { socialIcons } from "@/components/shared/social-icons";
import { ProjectsGrid } from "@/components/project/projects-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";

const stats = [
  { icon: User, label: "Experience", value: "6 Months Professional" },
  { icon: Briefcase, label: "Projects", value: "4+ Completed" },
];

const contactDescriptions = {
  github: "Explore my code and shipped projects",
  linkedin: "Connect with me professionally",
  email: "Send me a message directly",
} as const;

const strengths = [
  {
    icon: Code2,
    title: "End to end building",
    text: "I'm comfortable across the whole stack, from MongoDB and Postgres schemas to Express routes, React components and deployment config.",
  },
  {
    icon: Zap,
    title: "Realtime and auth",
    text: "JWT login flows and WebSocket features are where I feel most at home, and I think about security from the first commit.",
  },
  {
    icon: Brain,
    title: "Clean, readable code",
    text: "Clear names, small components and typed data. I try to write code that the next person can understand without asking me.",
  },
  {
    icon: Compass,
    title: "Product thinking",
    text: "I ask why a feature exists before I build it, and I care about loading states, error messages and empty screens.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About */}
      <Section id="about">
       
        <div className="mt-8 grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-xs pb-4 pr-4 sm:max-w-sm lg:mx-0">
              <div
                className="absolute bottom-0 right-0 h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-2xl border-2 border-brand-500/30"
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-edge bg-surface-2">
                <Image
                  src="/images/mypic.jpg"
                  alt={site.name}
                  fill
                  sizes="(min-width: 1024px) 384px, 70vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
          <div className="flex items-center gap-2.5">
          <User className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="text-lg font-semibold tracking-tight text-fg sm:text-2xl">
            About
          </h2>
        </div>
            <Reveal delay={0.06}>
         
              <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
  <p>
   Full Stack Developer with hands on experience in developing responsive web applications and contributing to real world software projects. Skilled in building user friendly interfaces, integrating backend services, developing RESTful APIs, and working with databases. 
  </p>
  <p>
    My core stack is React, Next.js and TypeScript on the frontend, with Node.js and Express on the backend. I work with both MongoDB and PostgreSQL through Prisma, and I&apos;m comfortable with JWT authentication, role based access and WebSocket powered realtime features.
  </p>
</div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid gap-4 sm:grid-cols-2">
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

      {/* Education */}
      <Section id="education">
        <div className="flex items-center gap-2.5">
          <GraduationCap className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="text-lg font-semibold tracking-tight text-fg sm:text-2xl">
            Education
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2">
          {education.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-edge bg-surface p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight text-fg">
                    {entry.degree}
                  </h3>
                  <Badge
                    tone={entry.kind === "Degree" ? "brand" : "neutral"}
                    className="shrink-0"
                  >
                    {entry.kind}
                  </Badge>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-faint ">
                  {entry.institution} · {entry.location}
                </p>
                <p className="mt-3 text-sm text-muted">{entry.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <div className="flex items-center gap-2.5">
          <Briefcase className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="text-lg font-semibold tracking-tight text-fg sm:text-2xl">
            Experience
          </h2>
        </div>

        <div className="relative mt-10 space-y-14">
          <span
            className="absolute bottom-2 left-[9px] top-2 w-px bg-gradient-to-b from-brand-500/50 via-edge to-transparent"
            aria-hidden
          />
          {experience.map((entry, index) => (
            <article key={entry.id} className="relative pl-9 sm:pl-14">
              <span
                className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-brand-500/40 bg-surface"
                aria-hidden
              >
                <Briefcase className="h-2.5 w-2.5 text-brand-500" />
              </span>

              <Reveal delay={index * 0.05}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-base font-semibold tracking-tight text-fg sm:text-xl">
                    {entry.role}
                  </h3>
                  <Badge tone={entry.current ? "success" : "brand"}>
                    {entry.current ? "Current" : entry.type} 
                  </Badge>
                  <p className=" text-sm leading-relaxed text-faint ">{entry.period}</p>
                   
                </div>

                <p className="mt-1.5 text-xs leading-relaxed text-faint ">
                  {entry.company} · {entry.location} 
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {entry.stack.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 max-w-3xl text-pretty text-sm leading-relaxed text-muted sm:text-base sm:leading-7">
                  {entry.summary}
                </p>
                <ul className="mt-5 max-w-3xl space-y-3">
                  {entry.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-pretty text-sm leading-relaxed text-muted sm:text-[15px]"
                    >
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand-500"
                        aria-hidden
                      />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <Skills />
      </Section>

      {/* Projects */}
      <Section id="projects">
        <div className="flex items-center gap-2.5">
          <Code2 className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="text-lg font-semibold tracking-tight text-fg sm:text-2xl">
            Projects
          </h2>
        </div>
        <div className="mt-8">
          <ProjectsGrid projects={projects} />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="flex items-center gap-2.5">
          <Mail className="h-5 w-5 text-brand-500" aria-hidden />
          <h2 className="text-lg font-semibold tracking-tight text-fg sm:text-2xl">
            Contact
          </h2>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal className="min-w-0">
            <div className="rounded-2xl border border-edge bg-surface p-5 sm:p-8">
              <h3 className="text-base font-semibold tracking-tight text-fg sm:text-lg">
                Let&apos;s work together
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                Have a role, project or idea in mind? Reach out directly through
                any of the channels below. I usually reply within a day.
              </p>
              <ul className="mt-6 space-y-3">
                {site.socials.map((social) => {
                  const Icon = socialIcons[social.key];
                  const isEmail = social.href.startsWith("mailto:");
                  return (
                    <li key={social.key}>
                      <a
                        href={social.href}
                        target={isEmail ? undefined : "_blank"}
                        rel={isEmail ? undefined : "noopener noreferrer"}
                        className="group flex items-center gap-4 rounded-xl border border-edge bg-surface-2 p-4 transition-colors hover:border-brand-500/40"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-edge bg-surface text-brand-500">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-fg">
                            {social.label}
                          </span>
                          <span className="mt-0.5 block truncate text-xs text-muted">
                            {isEmail ? site.email : contactDescriptions[social.key]}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500"
                          aria-hidden
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <div className="min-w-0 space-y-4 sm:space-y-5">
            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                  Location
                </p>
                <p className="mt-3 text-sm font-medium text-fg">
                  {site.location}
                  <span className="mt-1 block font-normal text-muted">
                    Open to remote work across time zones.
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  <Mail
                    className="h-3.5 w-3.5 text-brand-500"
                    aria-hidden
                  />
                  Email
                </p>
                <p className="mt-3 text-sm font-medium text-fg">
                 
                    {site.email}
                 
                </p>
                   <span className="mt-1 block text-sm opacity-55 text-muted">
                    Contact me on this email for any queries or collaborations.
                  </span>
              </div>
            </Reveal>

          </div>
        </div>
      </Section>
    </>
  );
}