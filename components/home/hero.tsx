import { Download, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { getAllSkills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/shared/social-links";

function TerminalCard() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-edge bg-[#0b1010] shadow-[0_24px_80px_-24px_rgba(45,212,191,0.25)]">
        <div className="flex items-center gap-1.5 border-b border-white/[0.07] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[11px] text-white/40">
            api/trips.js
          </span>
        </div>
        <div className="space-y-2.5 px-5 py-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
          <p>
            <span className="text-[#5eead4]">const</span>{" "}
            <span className="text-white/90">trips</span>{" "}
            <span className="text-white/40">=</span>{" "}
            <span className="text-white/90">await</span>{" "}
            <span className="text-[#82aaff]">Trip</span>
            <span className="text-white/40">.</span>
            <span className="text-[#c792ea]">find</span>
            <span className="text-white/40">{"{ "}</span>
            <span className="text-[#82aaff]">status</span>
            <span className="text-white/40">:</span>{" "}
            <span className="text-[#ffcb6b]">{"\"active\""}</span>
            <span className="text-white/40">{" }"}</span>
          </p>
          <p>
            <span className="text-white/40">{"// broadcast to riders nearby"}</span>
          </p>
          <p>
            <span className="text-[#c792ea]">io</span>
            <span className="text-white/40">.</span>
            <span className="text-[#c792ea]">to</span>
            <span className="text-white/40">(</span>
            <span className="text-[#ffcb6b]">{"\"riders\""}</span>
            <span className="text-white/40">).</span>
            <span className="text-[#c792ea]">emit</span>
            <span className="text-white/40">(</span>
            <span className="text-[#ffcb6b]">{"\"trip:new\""}</span>
            <span className="text-white/40">, trips);</span>
          </p>
          <p>
            <span className="text-[#5eead4]">return</span>{" "}
            <span className="text-[#82aaff]">res</span>
            <span className="text-white/40">.</span>
            <span className="text-[#c792ea]">json</span>
            <span className="text-white/40">{"({ trips });"}</span>
          </p>
          <p className="flex items-center gap-1.5 pt-1">
            <span className="text-[#5eead4]">✓</span>
            <span className="text-white/50">200 OK · 42ms · mongo@atlas</span>
          </p>
        </div>
      </div>

      <div className="absolute -right-3 -top-4 hidden rotate-6 rounded-xl border border-edge bg-surface px-3 py-2 shadow-lg sm:block">
        <p className="font-mono text-xs font-semibold text-brand-500">MERN</p>
      </div>
      <div className="absolute -bottom-4 -left-3 hidden -rotate-3 rounded-xl border border-edge bg-surface px-3 py-2 shadow-lg sm:block">
        <p className="font-mono text-xs text-muted">
          mongodb <span className="text-brand-500">•</span> express{" "}
          <span className="text-brand-500">•</span> react{" "}
          <span className="text-brand-500">•</span> node
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  const skills = getAllSkills().slice(0, 14);

  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="bg-grid absolute inset-x-0 top-0 h-[560px] opacity-60 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent_75%)]" />
      <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-brand-500/[0.07] via-transparent to-transparent" />
      <div className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-500/[0.08]" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <Badge tone="success" className="gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                {site.availabilityNote}
              </Badge>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-[3.5rem]">
                Hi, I&apos;m <span className="text-gradient">{site.name}</span>.
                <br />
                I build <span className="text-gradient">full-stack</span> web
                apps, end to end.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {site.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/resume" size="lg">
                  <Download className="h-4 w-4" aria-hidden />
                  Download résumé
                </Button>
                <Button href="/projects" variant="outline" size="lg">
                  View my work
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <SocialLinks className="mt-8" />
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-10 grid gap-4 border-t border-edge pt-6 sm:grid-cols-[auto_1fr] sm:gap-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Skills
                </p>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-full border border-edge bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:border-brand-500/40 hover:text-fg"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hidden lg:block">
            <TerminalCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}