import { Code2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Tech = { name: string; slug: string; variant?: string; invert?: boolean };

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

const groups: { title: string; items: Tech[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextjs", invert: true },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", slug: "nodejs" },
      { name: "Express", slug: "express", invert: true },
      { name: "Socket.IO", slug: "socketio", invert: true },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Prisma", slug: "prisma", invert: true },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github", invert: true },
      { name: "Postman", slug: "postman" },
      { name: "VS Code", slug: "vscode" },
    ],
  },
];

export function Skills() {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <Code2 className="h-5 w-5 text-brand-500" aria-hidden />
        <h2 className="text-2xl font-semibold tracking-tight text-fg">
          Skills
        </h2>
      </div>

      <div className="mt-8">
        {groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05}>
            <div className="grid gap-4 border-t border-edge py-6 last:border-b sm:grid-cols-[160px_1fr] sm:gap-8">
              <h3 className="text-sm font-medium text-fg sm:pt-2">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center gap-2.5 rounded-full border border-edge bg-surface py-2 pl-3 pr-4 text-sm text-fg"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${CDN}/${tech.slug}/${tech.slug}-${tech.variant ?? "original"}.svg`}
                      alt=""
                      width={20}
                      height={20}
                      loading="lazy"
                      className={cn("h-5 w-5", tech.invert && "dark:invert")}
                    />
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}