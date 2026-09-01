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
    role: "Full-Stack Developer Intern",
    company: "[Company Name]",
    period: "Jun 2025 – Aug 2025",
    location: "[City, Country]",
    type: "Internship",
    current: false,
    summary:
      "Worked on the company's web platform end to end — building REST APIs and UI features on the MERN stack, and shipping improvements to authentication and data flows.",
    responsibilities: [
      "Built and shipped REST API endpoints (Node.js + Express) for core resources with input validation and consistent error handling",
      "Implemented JWT-based authentication and role-based access control on top of the existing Express + MongoDB backend",
      "Developed reusable React components with Tailwind CSS, keeping layouts consistent and responsive across the platform",
      "Modelled data with Mongoose schemas and wrote aggregation pipelines for report-style queries",
      "Collaborated on a sprint workflow — Git feature branches, code reviews, and pull requests",
    ],
    stack: [
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    period: "2024 – Present",
    location: "Remote",
    type: "Freelance",
    current: true,
    summary:
      "Design and build complete web applications for clients and personal projects — from requirements and data modelling through to deployment.",
    responsibilities: [
      "Designed and built full-stack applications on the MERN stack: REST APIs, JWT authentication, and MongoDB data modelling",
      "Built realtime features — chat, presence and live notifications — with Socket.IO",
      "Translated UI mockups into responsive, accessible React + Tailwind interfaces",
      "Handled deployment and iterative client feedback (Vercel, Render, MongoDB Atlas)",
    ],
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Socket.IO",
      "JWT",
      "Vercel",
    ],
  },
];