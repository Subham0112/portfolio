import { AtSign, FolderGit2, Mail, Send } from "lucide-react";
import type { SocialKey } from "@/data/site";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const socialIcons: Record<SocialKey, typeof AtSign> = {
  github: FolderGit2,
  linkedin: AtSign,
  x: Send,
  email: Mail,
};

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md";
}

export function SocialLinks({ className, size = "md" }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {site.socials.map((social) => {
        const Icon = socialIcons[social.key];
        return (
          <li key={social.key}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className={cn(
                "flex items-center justify-center rounded-full border border-edge bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/40 hover:text-brand-500",
                size === "sm" ? "h-8 w-8" : "h-10 w-10",
              )}
            >
              <Icon className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}