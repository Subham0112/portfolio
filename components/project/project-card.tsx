import { FolderGit2, Globe } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project/project-visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40">
      <div className="p-3 pb-0">
        <ProjectVisual
          name={project.name}
          tone={project.tone}
          image={project.image}
          className="aspect-[16/10]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
        
        </div>

        <h3 className="mt-3 text-base font-semibold tracking-tight text-fg sm:text-lg">
          {project.name}
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
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

        <div className="mt-auto flex items-center gap-2 pt-5">
          {project.liveUrl ? (
            <Button
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="flex-1"
            >
              <Globe className="h-3.5 w-3.5" aria-hidden />
              Live demo
            </Button>
          ) : (
            <Button
              size="sm"
              disabled
              title={project.placeholderNote}
              className="flex-1"
            >
              <Globe className="h-3.5 w-3.5" aria-hidden />
              Live demo
            </Button>
          )}
          <Button
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            className="flex-1"
          >
            <FolderGit2 className="h-3.5 w-3.5" aria-hidden />
            Source
          </Button>
        </div>
      </div>
    </article>
  );
}
