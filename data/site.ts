export type SocialKey = "github" | "linkedin" | "email";

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
  socials: [
    {
      key: "github",
      label: "GitHub",
      href: "https://github.com/Subham0112/",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/subham-khatiwada-ba6a152a1",
    },
    {
      key: "email",
      label: "Email",
      href: "mailto:khatiwadasubham1@gmail.com",
    },
  ] satisfies SocialLink[],
};

export const navLinks: NavLink[] = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];