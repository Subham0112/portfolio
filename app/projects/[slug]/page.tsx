import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  FolderGit2,
  Globe,
} from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { projectCategoryLabel } from "@/lib/project-helpers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProjectVisual } from "@/components/project/project-visual";
import { ProjectCard } from "@/components/project/project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((entry) => entry.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter((entry) => entry.slug !== project.slug).slice(0, 2);

  return (
    <>
      <Container className="pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All projects
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="brand">{projectCategoryLabel(project.category)}</Badge>
                <Badge
                  tone={project.status === "In development" ? "faint" : "success"}
                >
                  {project.status}
                </Badge>
                <Badge>{project.year}</Badge>
              </div>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {project.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.liveUrl ? (
                  <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" aria-hidden />
                    Live demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                ) : (
                  <Button disabled>
                    <Globe className="h-4 w-4" aria-hidden />
                    Live demo
                  </Button>
                )}
                <Button href={project.sourceUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                  <FolderGit2 className="h-4 w-4" aria-hidden />
                  Source code
                </Button>
              </div>
              {!project.liveUrl ? (
                <p className="mt-3 font-mono text-xs text-faint">
                  {project.placeholderNote}
                </p>
              ) : null}
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ProjectVisual
              name={project.name}
              tone={project.tone}
              className="aspect-[16/10]"
            />
          </Reveal>
        </div>
      </Container>

      <Section className="pt-0 sm:pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-fg">
                About the project
              </h2>
              <div className="mt-5 space-y-5">
                {project.about.map((paragraph, paragraphIndex) => (
                  <Reveal key={paragraphIndex} delay={paragraphIndex * 0.05}>
                    <p className="text-pretty text-base leading-7 text-muted">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight text-fg">
                Key features
              </h2>
              <ul className="mt-5 space-y-3.5">
                {project.features.map((feature, featureIndex) => (
                  <Reveal key={feature} delay={featureIndex * 0.04}>
                    <li className="flex gap-3 text-base leading-7 text-muted">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-500">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      {feature}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <Reveal delay={0.1}>
              <aside className="rounded-2xl border border-edge bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Built with
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-3 border-t border-edge pt-6">
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-edge bg-surface-2 px-4 py-3 text-sm font-medium text-fg transition-colors hover:border-edge-strong"
                  >
                    View source
                    <ExternalLink
                      className="h-4 w-4 text-muted transition-colors group-hover:text-brand-500"
                      aria-hidden
                    />
                  </a>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <nav aria-label="Project navigation" className="mb-10 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <a
              href={`/projects/${prev.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-edge bg-surface p-5 transition-all duration-300 hover:border-brand-500/40"
            >
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  Previous project
                </span>
                <span className="mt-1.5 block text-sm font-semibold text-fg">
                  {prev.name}
                </span>
              </span>
              <ArrowLeft
                className="h-5 w-5 text-muted transition-all duration-200 group-hover:-translate-x-0.5 group-hover:text-brand-500"
                aria-hidden
              />
            </a>
          </Reveal>
          <Reveal delay={0.05}>
            <a
              href={`/projects/${next.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-edge bg-surface p-5 text-right transition-all duration-300 hover:border-brand-500/40"
            >
              <ArrowRight
                className="h-5 w-5 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-500"
                aria-hidden
              />
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  Next project
                </span>
                <span className="mt-1.5 block text-sm font-semibold text-fg">
                  {next.name}
                </span>
              </span>
            </a>
          </Reveal>
        </nav>

        <Reveal>
          <h2 className="text-xl font-semibold tracking-tight text-fg">
            More projects
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {related.map((entry, relatedIndex) => (
            <Reveal key={entry.slug} delay={relatedIndex * 0.06} className="h-full">
              <ProjectCard project={entry} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}