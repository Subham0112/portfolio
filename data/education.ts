export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  coursework: string[];
  kind: "Degree" | "Self-directed";
}

export const education: EducationEntry[] = [
  {
    id: "degree",
    degree: "B.Tech — Computer Science & Engineering",
    institution: "[University Name]",
    period: "2021 – 2025",
    location: "[City, Country]",
    kind: "Degree",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
    ],
  },
  {
    id: "self-directed",
    degree: "Self-directed learning",
    institution: "Online platforms & official docs",
    period: "2022 – Present",
    location: "Remote",
    kind: "Self-directed",
    coursework: [
      "Full-stack web development (MERN)",
      "TypeScript",
      "Realtime applications with Socket.IO",
      "REST API design & authentication",
    ],
  },
];