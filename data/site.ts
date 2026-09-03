export type SocialKey = "github" | "linkedin" | "x" | "email";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export const site = {
  name: "Subham",
  role: "Full-Stack Developer",
  tagline:
    "I design and build complete web applications — from database schema to polished, responsive interfaces.",
  shortBio:
    "Full-stack developer focused on clean, working software, web applications — realtime features, REST APIs, and carefully-built interfaces.",
  email: "khatiwadasubham1@gmail.com",
  location: "Biratnagar, Nepal",
  available: true,
  availabilityNote: "Open to full-stack developer roles",
  socials: [
    {
      key: "github",
      label: "GitHub",
      href: "https://github.com/Subham0112/",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    },
    {
      key: "x",
      label: "X (Twitter)",
      href: "https://x.com/YOUR_X_HANDLE",
    },
    {
      key: "email",
      label: "Email",
      href: "mailto:YOUR_EMAIL@example.com",
    },
  ] satisfies SocialLink[],
};

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];