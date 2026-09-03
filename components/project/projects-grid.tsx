"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectCategory } from "@/data/projects";
import { projectCategories } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((project) => project.category === active)),
    [active, projects],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap items-center gap-2"
      >
        {projectCategories.map((category) => {
          const isActive = active === category.value;
          return (
            <button
              key={category.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(category.value)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200",
                isActive
                  ? "border-brand-500/40 bg-brand-500/10 text-brand-600 dark:text-brand-300"
                  : "border-edge bg-surface text-muted hover:border-edge-strong hover:text-fg",
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <motion.ul
          layout={reduceMotion ? false : true}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project) => (
              <motion.li
                key={project.slug}
                layout={reduceMotion ? false : true}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-edge-strong bg-surface p-12 text-center">
          <p className="text-sm font-medium text-fg">No projects in this category yet</p>
          <p className="mt-1.5 text-sm text-muted">
            The category exists in the data model — add a project in{" "}
            <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs text-brand-600 dark:text-brand-400">
              data/projects.ts
            </code>
            .
          </p>
        </div>
      )}

      <a
        href="#contact"
        className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-edge-strong bg-surface/60 p-6 transition-colors duration-300 hover:border-brand-500/40 sm:flex-row sm:items-center"
      >
        <div>
          <p className="text-sm font-semibold text-fg">Have a project in mind?</p>
          <p className="mt-1 text-sm text-muted">
            The next project on this grid could be yours — let&apos;s talk about it.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
          Start a conversation
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </a>
    </div>
  );
}