
import { Badge } from "@/components/ui/badge";

const skills = [
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Docker",
  "Linux",
  "Git",
  "Figma",
  "PostgreSQL",
  "Prisma",
  "Zod",
  "Authentication"
];

export function Skills() {
  return (
    <section id="skills" className="container py-10 md:py-16">
      <div className="mx-auto max-w-3xl text-center space-y-3 mb-10">
        <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase">Skills</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies I <span className="text-white">use</span>
        </h2>
        <p className="text-neutral-500">The tools and technologies I build with every day.</p>
      </div>
      <div className="mx-auto max-w-3xl flex flex-wrap justify-center gap-2.5">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="text-sm py-2 px-5 rounded-full border border-white/8 bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white hover:border-white/15 transition-all duration-200 cursor-default"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
