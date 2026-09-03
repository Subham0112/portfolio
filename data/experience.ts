export type ExperienceType = "Internship" | "Freelance";

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: ExperienceType;
  current: boolean;
  summary: string;
  responsibilities: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "internship",
    role: "Full Stack Developer Intern",
    company: "Information Care (Info Care)",
    period: "05/2026 – 08/2026",
    location: "Kathmandu, Nepal",
    type: "Internship",
    current: false,
    summary:
      "Developed and maintained full-stack web applications, including a social media platform and a restaurant management system.",
    responsibilities: [
      "Developed ConnectHub (Social Media WebApp) using React.js, Node.js, Express.js, PostgreSQL, Prisma ORM, and WebSockets",
      "Implemented authentication, posts, comments, likes, friend requests, and realtime messaging",
      "Maintained and developed features for a production-ready Restaurant Management System and Website for Syanko",
      "Diagnosed and fixed frontend/backend issues, improving application stability, responsiveness, and overall performance",
      "Collaborated with developers to translate business requirements into clean, maintainable, and scalable code",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "WebSockets",
    ],
  },
];