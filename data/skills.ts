export type SkillLevel = "Advanced" | "Proficient" | "Working knowledge";

export interface Skill {
  name: string;
  icon: string;
  level: SkillLevel;
  context: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    description:
      "Building responsive, accessible interfaces with component-driven React.",
    skills: [
      {
        name: "React",
        icon: "atom",
        level: "Advanced",
        context:
          "Hooks, context, performance patterns — used across all three major projects.",
      },
      {
        name: "Next.js",
        icon: "layers",
        level: "Proficient",
        context:
          "App router, Server Components, routing and metadata for this portfolio.",
      },
      {
        name: "TypeScript",
        icon: "braces",
        level: "Proficient",
        context:
          "Typed props, API contracts and shared types shared frontend to backend.",
      },
      {
        name: "JavaScript (ES6+)",
        icon: "file-code",
        level: "Advanced",
        context: "Core language for all client and server work since 2022.",
      },
      {
        name: "Tailwind CSS",
        icon: "palette",
        level: "Advanced",
        context: "Design-system-driven styling — dark mode, tokens, responsive grids.",
      },
      {
        name: "Responsive & Accessible UI",
        icon: "monitor",
        level: "Advanced",
        context: "Mobile-first layouts with keyboard navigation and semantic HTML.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    description:
      "Designing REST APIs with clean validation, auth and realtime layers.",
    skills: [
      {
        name: "Node.js",
        icon: "server",
        level: "Advanced",
        context: "Async workflows, middleware design and server architecture.",
      },
      {
        name: "Express",
        icon: "route",
        level: "Proficient",
        context: "Routing, error middleware, and structured API layering.",
      },
      {
        name: "REST API Design",
        icon: "cable",
        level: "Advanced",
        context: "Resource modelling, status codes and consistent error shapes.",
      },
      {
        name: "JWT Authentication",
        icon: "shield-check",
        level: "Proficient",
        context: "Access/refresh flows, HTTP-only cookies, role-based access control.",
      },
      {
        name: "Socket.IO",
        icon: "radio",
        level: "Proficient",
        context: "Realtime chat, presence and live trip tracking in ConnectHub/DriveMe.",
      },
      {
        name: "Prisma",
        icon: "boxes",
        level: "Working knowledge",
        context: "Schema-driven models and migrations for PostgreSQL projects.",
      },
    ],
  },
  {
    id: "data",
    title: "Databases & Tools",
    icon: "database",
    description:
      "Data modelling, querying and the tooling that keeps projects shippable.",
    skills: [
      {
        name: "MongoDB",
        icon: "database",
        level: "Advanced",
        context: "Schema design, indexing and aggregation pipelines via Mongoose.",
      },
      {
        name: "PostgreSQL",
        icon: "table-2",
        level: "Proficient",
        context: "Relational modelling, joins and SQL for transactional apps.",
      },
      {
        name: "Git & GitHub",
        icon: "git-branch",
        level: "Advanced",
        context: "Feature branches, pull requests and clean commit history.",
      },
      {
        name: "Postman",
        icon: "send",
        level: "Advanced",
        context: "API testing, collections and auth flows during development.",
      },
      {
        name: "Docker",
        icon: "container",
        level: "Working knowledge",
        context: "Containerised dev environments and Compose for local services.",
      },
      {
        name: "Deployment",
        icon: "rocket",
        level: "Proficient",
        context: "Vercel, Render and MongoDB Atlas — env config and CI basics.",
      },
    ],
  },
];

export function getAllSkills(): Skill[] {
  return skillCategories.flatMap((category) => category.skills);
}