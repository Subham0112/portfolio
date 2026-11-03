import { ArrowUp, Heart } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { SocialLinks } from "@/components/shared/social-links";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="print-hidden border-t border-edge py-12">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-sm font-semibold tracking-tight text-fg sm:text-base">
              {site.name} <span className="text-brand-500">·</span>{" "}
              <span className="text-muted">{site.role}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
            <SocialLinks className="mt-5" />
          </div>

          <nav aria-label="Footer" className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                Pages
              </p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-2.5">
                {site.socials.map((social) => (
                  <li key={social.key}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-edge pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-faint">
            © {year} {site.name}. Built with Next.js, Tailwind CSS & Framer
            Motion. <span className="inline-flex items-center gap-1"><Heart className="h-3 w-3 text-brand-500" aria-hidden />{" "}Let&apos;s ship it.</span>
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </Container>
    </footer>
  );
}