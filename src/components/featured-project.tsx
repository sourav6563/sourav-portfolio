import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, BookOpen, Server, ArrowUpRight } from "lucide-react";
import { DemoCredentials } from "./demo-credentials";

const backendHighlights = [
  { title: "Custom Auth Flow" },
  { title: "Resend Email Integration" },
  { title: "Zod Validation" },
  { title: "MongoDB Aggregations" },
  { title: "ERD Based Design" },
  { title: "Cloudinary CDN" },
  { title: "Security Best Practices" },
  { title: "Swagger Documentation" },
  { title: "Winston & Morgan Logging" },
  { title: "System Health Checks" },
];

const frontendHighlights = [
  { title: "SEO & PWA Support" },
  { title: "Social Engagement" },
  { title: "Playlist Management" },
  { title: "Content Dashboard" },
  { title: "Enhanced Playback" },
  { title: "Global Search" },
  { title: "Seamless Scrolling" },
  { title: "Optimistic UI" },
  { title: "Server State Management" },
];

const links = [
  { href: "https://www.dancely.in", label: "Live Site", icon: ExternalLink, primary: true },
  { href: "https://docs.dancely.in", label: "Docs", icon: BookOpen },
  { href: "https://api.dancely.in/api/v1/docs", label: "API", icon: Server },
];

export function FeaturedProject() {
  return (
    <section id="featured" className="relative">
      <div className="container py-8 md:py-16 space-y-8 md:space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3">
          <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase underline underline-offset-4">Flagship Work</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="text-white">Project</span>
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
           A full-stack video platform project where I explored authentication, social features, and real-world deployment.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/8 bg-neutral-950 overflow-hidden">

          {/* Hero Image — Full Width */}
          <div className="relative w-full h-40 sm:h-52 md:h-72 overflow-hidden group">
            <Image
              src="/dancely-preview.png"
              alt="Dancely.in — Full-stack video streaming platform"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
            <div className="absolute inset-0 bg-transparent" />
          </div>

          {/* Description + Tech + Links */}
          <div className="px-4 pt-5 pb-5 md:px-6 md:pt-2 md:pb-6 space-y-4 md:space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">dancely.in</h3>
            <p className="text-neutral-400 leading-relaxed max-w-2xl">
              A high-performance video streaming platform with social networking — users discover, upload, and share dance videos while engaging through likes, comments, follows, playlists, and community posts.
            </p>

            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {["TypeScript", "Express.js", "MongoDB", "Zod", "Next.js", "React", "TanStack Query", "Tailwind CSS", "Shadcn UI", "Cloudinary", "Resend"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 text-[10px] px-2 py-0.5 md:text-xs md:px-2.5 md:py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>



            <div className="flex flex-col gap-4 mt-1">
              <div className="flex flex-wrap items-center gap-3">
                {links.map((link) => (
                  <Button
                    key={link.label}
                    asChild
                    variant={link.primary ? "default" : "outline"}
                    size="sm"
                    className={
                      link.primary
                        ? "rounded-full bg-white text-black hover:bg-neutral-200 transition-all duration-200 cursor-pointer text-xs px-3 h-8 md:text-sm md:px-4 md:h-9"
                        : "rounded-full border-white/12 text-neutral-400 hover:bg-white/8 hover:border-white/20 hover:text-white transition-all duration-200 cursor-pointer text-xs px-3 h-8 md:text-sm md:px-4 md:h-9"
                    }
                  >
                    <a href={link.href} target="_blank" rel="noreferrer" className="flex items-center">
                      <link.icon className="mr-1.5 h-3 w-3 md:h-3.5 md:w-3.5" /> {link.label}
                    </a>
                  </Button>
                ))}

                <span className="hidden sm:block h-4 w-px bg-white/10 mx-1" />

                <a href="https://github.com/sourav6563/dancely-backend" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors px-2.5 py-1.5 rounded-full hover:bg-white/5 mt-2 sm:mt-0">
                  <Github className="h-3.5 w-3.5" /> Backend
                </a>
                <a href="https://github.com/sourav6563/dancely-frontend" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors px-2.5 py-1.5 rounded-full hover:bg-white/5 mt-2 sm:mt-0">
                  <Github className="h-3.5 w-3.5" /> Frontend
                </a>
              </div>

              {/* Interactive Demo Credentials */}
              <DemoCredentials />
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 border-t border-white/5">

            {/* Backend Column */}
            <div className="p-3 md:p-6 border-r border-white/5">
              <p className="text-[10px] md:text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3 md:mb-4">Backend<span className="hidden md:inline"> Highlights</span></p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 md:gap-y-2">
                {backendHighlights.map((item, i) => (
                  <li key={i} className="flex gap-1.5 md:gap-2 text-[10px] md:text-xs leading-normal">
                    <span className="text-neutral-700 mt-px shrink-0">›</span>
                    <span className="text-neutral-400">
                      <span className="text-neutral-300 font-medium">{item.title}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-white/5 md:hidden">
                 <a href="https://app.eraser.io/workspace/HiohxqmgH1LXubmwzeWW?diagram=pvt-YmUzuW7YbJOMwJOUg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[10px] text-neutral-600 hover:text-white transition-colors">
                  ERD <ArrowUpRight className="h-2.5 w-2.5" />
                </a>
                <a href="https://stats.uptimerobot.com/cmOjvPimbc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[10px] text-neutral-600 hover:text-white transition-colors">
                  System Uptime <ArrowUpRight className="h-2.5 w-2.5" />
                </a>
              </div>
              <div className="hidden md:flex flex-wrap gap-x-4 gap-y-2 mt-6 pt-4 border-t border-white/5">
                <a
                  href="https://app.eraser.io/workspace/HiohxqmgH1LXubmwzeWW?diagram=pvt-YmUzuW7YbJOMwJOUg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-white transition-colors"
                >
                  View ERD Diagram <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href="https://stats.uptimerobot.com/cmOjvPimbc"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-white transition-colors"
                >
                  System Uptime <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Frontend Column */}
            <div className="p-3 md:p-6">
               <p className="text-[10px] md:text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3 md:mb-4">Frontend<span className="hidden md:inline"> Highlights</span></p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 md:gap-y-2">
                {frontendHighlights.map((item, i) => (
                  <li key={i} className="flex gap-1.5 md:gap-2 text-[10px] md:text-xs leading-normal">
                    <span className="text-neutral-700 mt-px shrink-0">›</span>
                    <span className="text-neutral-400">
                      <span className="text-neutral-300 font-medium">{item.title}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
