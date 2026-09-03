export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  kind: "Degree" | "Higher Secondary";
}

export const education: EducationEntry[] = [
  {
    id: "bca",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Mahendra Morang Adarsha Multiple Campus",
    period: "2079 – Present",
    location: "Biratnagar, Nepal",
    kind: "Degree",
  },
  {
    id: "plus2",
    degree: "+2 Management (Computer)",
    institution: "Orchid Secondary School",
    period: "Completed",
    location: "Biratnagar, Nepal",
    kind: "Higher Secondary",
  },
];