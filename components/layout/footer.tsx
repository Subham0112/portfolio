import { site } from "@/data/site";
import { SocialLinks } from "@/components/shared/social-links";
import { Container } from "@/components/ui/container";

export function Footer() {
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
      </Container>
    </footer>
  );
}