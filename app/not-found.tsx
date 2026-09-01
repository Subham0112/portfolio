import type { Metadata } from "next";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="flex min-h-dvh flex-col items-center justify-center py-32 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-500">
        <FileQuestion className="h-7 w-7" aria-hidden />
      </span>
      <p className="mt-6 font-mono text-sm text-faint">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
        The link may be broken, or the page may have moved. Either way, the
        homepage has everything you need.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back home
        </Button>
        <Button href="/projects" variant="outline">
          View projects
        </Button>
      </div>
    </Container>
  );
}