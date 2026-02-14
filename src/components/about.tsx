
export function About() {
  return (
    <section id="about" className="relative">
      <div className="container py-4 md:py-16">
        <div className="mx-auto max-w-3xl space-y-6 md:space-y-10">
          <div className="space-y-2 md:space-y-3 text-center">
            <p className="text-xs md:text-sm font-medium tracking-widest text-neutral-500 uppercase underline underline-offset-4">About Me</p>
            {/* <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl">
              Driven by <span className="text-white">Curiosity & Impact</span>
            </h2> */}
          </div>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-400 leading-relaxed">
            <p>
              Hi, I&apos;m <span className="text-white font-medium">Sourav Mahato</span>, a software developer from India with a genuine interest in technology, gadgets, and how software can positively impact people&apos;s lives. I&apos;ve always enjoyed exploring new tools, experimenting with different software, and understanding how technology shapes everyday experiences.
            </p>
            <p>
              Currently, I focus on the <span className="text-neutral-200 font-medium">JavaScript</span> ecosystem, building both frontend and backend applications. I believe in learning continuously, strengthening fundamentals, and building practical solutions rather than just writing code.
            </p>
            <p>
              I&apos;m also a <span className="text-neutral-200 font-medium">Linux</span> enthusiast and use <span className="text-neutral-200 font-medium">openSUSE</span> as my daily driver, which has helped me better understand development environments, systems, and workflows. Overall, I&apos;m passionate about growing as a developer and contributing to meaningful projects that create real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
