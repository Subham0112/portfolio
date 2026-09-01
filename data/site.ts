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
    "Junior full-stack developer focused on the MERN stack. I enjoy turning product ideas into clean, working software — realtime features, REST APIs, and carefully-built interfaces.",
  email: "YOUR_EMAIL@example.com",
  location: "[City, Country]",
  available: true,
  availabilityNote: "Open to junior full-stack developer roles",
  socials: [
    {
      key: "github",
      label: "GitHub",
      href: "https://github.com/YOUR_GITHUB_USERNAME",
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
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];