import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ResumeDocument } from "@/components/resume/resume-document";
import { PrintButton } from "@/components/resume/print-button";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of a junior full-stack developer — experience, projects, skills and education, ready to download as a PDF.",
};

export default function ResumePage() {
  return (
    <>
      <div className="print-hidden">
        <PageHeader
          eyebrow="Résumé"
          title="My résumé"
          description="A one-page summary of experience, projects, skills and education. Download as PDF via the browser's print dialog."
          actions={<PrintButton />}
        />
      </div>

      <Section className="pt-0 sm:pt-0">
        <Reveal>
          <ResumeDocument />
          <p className="print-hidden mt-6 text-center font-mono text-xs text-faint">
            Template content — update experience, education and links in{" "}
            <code className="rounded bg-surface-2 px-1.5 py-0.5 text-brand-600 dark:text-brand-400">
              data/
            </code>{" "}
            before applying. See README.md.
          </p>
        </Reveal>
      </Section>

      <Section className="print-hidden pt-0 sm:pt-0">
        <Reveal>
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-edge bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-fg">
                Prefer to meet? Let&apos;s talk.
              </h2>
              <p className="mt-1 text-sm text-muted">
                Happy to walk through my work in a 20-minute call — or just{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-brand-600 underline-offset-2 hover:underline dark:text-brand-400"
                >
                  drop me an email
                </a>
                .
              </p>
            </div>
            <PrintButton />
          </div>
        </Reveal>
      </Section>
    </>
  );
}