import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ProjectsGrid } from "@/components/project/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack projects by a junior full-stack developer — a social platform with realtime chat, a ride-booking app and an e-commerce store.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="Every project here was built from scratch — database schema, API, auth, realtime layers and the UI. Filter by category to find what you're looking for."
      />
      <Section className="pt-0 sm:pt-0">
        <ProjectsGrid projects={projects} />
      </Section>
    </>
  );
}