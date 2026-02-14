
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Technical",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "Zod",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "AWS",
      "Docker",
      "Linux",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Professional",
    skills: [
      "Problem Solving",
      "Effective Communication",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="container py-8 md:py-16">
      <div className="mx-auto max-w-3xl text-center space-y-3 mb-8 md:mb-10">
        <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase underline underline-offset-4">
          Skills
        </p>
      </div>
      <div className="mx-auto max-w-3xl space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-lg font-medium text-neutral-400 text-center mb-4">
              -- {category.title} --
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-xs md:text-sm py-1.5 px-3 md:py-2 md:px-5 rounded-full border border-white/8 bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white hover:border-white/15 transition-all duration-200 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
