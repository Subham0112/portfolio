import type { Metadata } from "next";
import { CalendarClock, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SocialLinks } from "@/components/shared/social-links";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with a junior full-stack developer — open to roles, freelance work and collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Open to junior full-stack roles, freelance projects and interesting collaborations. The form below is the fastest way to reach me."
      />

      <Section className="pt-0 sm:pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <div className="rounded-2xl border border-edge bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  <Mail className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 block break-all text-sm font-medium text-fg underline-offset-4 transition-colors hover:text-brand-500 hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                  Location
                </p>
                <p className="mt-3 text-sm font-medium text-fg">
                  {site.location}
                  <span className="mt-1 block font-normal text-muted">
                    Working remote-friendly across time zones.
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  <CalendarClock className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                  Availability
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <Badge tone="success">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    {site.availabilityNote}
                  </Badge>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Typically responding within a day — occasional exceptions when
                  I&apos;m heads-down on a build.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Elsewhere
                </p>
                <SocialLinks className="mt-4" />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}