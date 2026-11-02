import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { projectCategoryLabel } from "@/lib/project-helpers";
import { ProjectVisual } from "@/components/project/project-visual";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_20px_60px_-20px_rgba(20,184,166,0.3)]"
    >
      <div className="p-3 pb-0">
        <ProjectVisual
          name={project.name}
          tone={project.tone}
          image={project.image}
          className="aspect-[16/10]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-brand-600 dark:text-brand-400">
            {projectCategoryLabel(project.category)}
          </p>
        </div>
        <h3 className="mt-3 flex items-center gap-1.5 text-lg font-semibold tracking-tight text-fg">
          {project.name}
          <ArrowUpRight
            className="h-4 w-4 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500"
            aria-hidden
          />
        </h3>
        <p className="mt-2 line-clamp-2 text-pretty text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-edge bg-surface-2 px-2.5 py-0.5 text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 ? (
            <span className="px-1 py-0.5 text-[11px] text-faint">
              +{project.stack.length - 4}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}