import { ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/shared/social-links";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      <div className="bg-grid absolute inset-x-0 top-0 h-full opacity-30 dark:opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent_80%)]" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-brand-500/[0.10] via-transparent to-transparent dark:from-brand-500/[0.06]" />
      <div className="absolute left-1/2 top-[-15%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand-500/[0.10] blur-[120px] dark:bg-brand-500/[0.06]" />

      <Container className="relative py-32 sm:py-40">
        <Reveal>
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            {site.role}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-fg sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Subham Khatiwada</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-xl">
            Building scalable, high-performance web applications and
            software with clean architecture and a strong focus on
            solving real business problems.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              href="/resume.pdf"
              download="Subham_Resume.pdf"
              size="lg"
            >
              Download CV
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get in touch
            </Button>
            <Button href="#projects" variant="ghost" size="lg">
              View work
              <ArrowDown className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <SocialLinks className="mt-10" />
        </Reveal>
      </Container>
    </section>
  );
}