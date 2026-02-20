import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container flex min-h-[calc(100svh-3.5rem)] md:min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col items-center justify-center space-y-4 md:space-y-8 pt-20 pb-12 md:py-16 text-center">
        <div className="space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-400 mb-6">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </div>

          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-2 border-white/10 mb-6">
            <Image
              src="/profile.png"
              alt="Sourav Mahato"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-white">Sourav</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-500 font-medium">
            Full-Stack Developer
          </p>
          
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-neutral-400 sm:text-xl pt-4">
            Love how software works and its potential to change lives
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button asChild size="lg" className="rounded-full px-8 bg-white text-black hover:bg-neutral-200 transition-all duration-200 cursor-pointer">
            <a href="#featured" className="flex items-center">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white/15 bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white hover:border-white/25 transition-all duration-200 cursor-pointer">
            <a href="/Sourav_Mahato_Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 pt-10">
          <a href="https://github.com/sourav6563" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-200 p-2.5 rounded-full hover:bg-white/5">
            <Github className="h-5.5 w-5.5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/sourav3900" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-200 p-2.5 rounded-full hover:bg-white/5">
            <Linkedin className="h-5.5 w-5.5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:souravmahato6563@gmail.com" className="text-neutral-400 hover:text-white transition-colors duration-200 p-2.5 rounded-full hover:bg-white/5">
            <Mail className="h-5.5 w-5.5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
