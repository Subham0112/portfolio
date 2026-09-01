import type { ReactNode } from "react";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { skillCategories } from "@/data/skills";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-7 border-b border-zinc-300 pb-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-zinc-800 first:mt-0">
      {children}
    </h2>
  );
}

function ItemTitle({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-[12.5px] font-semibold text-zinc-900">{children}</p>;
}

function ItemMeta({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-medium text-zinc-500">{children}</p>;
}

function ItemText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mt-1 text-[11.5px] leading-relaxed text-zinc-700 ${className}`}>{children}</p>;
}

export function ResumeDocument() {
  return (
    <div className="print-sheet mx-auto w-full max-w-3xl rounded-2xl bg-white px-6 py-10 text-zinc-900 shadow-[0_32px_96px_-32px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
          {site.name}
        </h1>
        <p className="mt-1 text-[13px] font-semibold text-teal-700">
          {site.role}
        </p>
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-zinc-500">
          <span>{site.email}</span>
          <span aria-hidden>·</span>
          <span>{site.location}</span>
          <span aria-hidden>·</span>
          <span>
            github.com/
            {site.socials.find((social) => social.key === "github")?.href
              .replace("https://github.com/", "")
              .replace(/\/$/, "")}
          </span>
          <span aria-hidden>·</span>
          <span>open to junior full-stack roles</span>
        </p>
      </header>

      <SectionTitle>Summary</SectionTitle>
      <ItemText>
        Junior full-stack developer with hands-on experience building complete
        web applications — React, Node.js, Express and MongoDB. Comfortable
        owning features end to end: REST APIs with JWT authentication,
        realtime features with Socket.IO, data modelling, and responsive,
        accessible UI. Currently open to full-stack developer roles.
      </ItemText>

      <SectionTitle>Experience</SectionTitle>
      {experience.map((entry) => (
        <div key={entry.id}>
          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <ItemTitle>{entry.role}</ItemTitle>
            <ItemMeta>{entry.period}</ItemMeta>
          </div>
          <ItemMeta>
            {entry.company} · {entry.location}
          </ItemMeta>
          <ul className="mt-2 list-disc space-y-1 pl-4 marker:text-zinc-400">
            {entry.responsibilities.map((responsibility) => (
              <li key={responsibility} className="text-[11.5px] leading-relaxed text-zinc-700">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <SectionTitle>Projects</SectionTitle>
      {projects.map((project) => (
        <div key={project.slug}>
          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <ItemTitle>{project.name}</ItemTitle>
            <ItemMeta>{project.year}</ItemMeta>
          </div>
          <ItemText>{project.description}</ItemText>
          <ItemText className="text-teal-800">
            {project.stack.join(" · ")}
          </ItemText>
        </div>
      ))}

      <SectionTitle>Technical Skills</SectionTitle>
      <div className="mt-3 space-y-2.5">
        {skillCategories.map((category) => (
          <div key={category.id} className="flex flex-wrap gap-x-2 gap-y-0.5 text-[11.5px] leading-relaxed text-zinc-700">
            <span className="w-24 shrink-0 font-semibold text-zinc-900">
              {category.title}:
            </span>
            <span>{category.skills.map((skill) => skill.name).join(", ")}</span>
          </div>
        ))}
      </div>

      <SectionTitle>Education</SectionTitle>
      {education.map((entry) => (
        <div key={entry.id}>
          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <ItemTitle>{entry.degree}</ItemTitle>
            <ItemMeta>{entry.period}</ItemMeta>
          </div>
          <ItemMeta>
            {entry.institution} · {entry.location}
          </ItemMeta>
          <ItemText>Coursework: {entry.coursework.join(", ")}</ItemText>
        </div>
      ))}
    </div>
  );
}