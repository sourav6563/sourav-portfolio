
export function About() {
  return (
    <section id="about" className="relative">
      <div className="container py-4 md:py-16">
        <div className="mx-auto max-w-3xl space-y-6 md:space-y-10">
          <div className="space-y-2 md:space-y-3 text-center">
            <p className="text-xs md:text-sm font-medium tracking-widest text-neutral-500 uppercase">About Me</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl">
              Building software that <span className="text-white">matters</span>
            </h2>
          </div>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-400 leading-relaxed">
            <p>
              I&apos;m a Software Developer deeply in love with how software works. I focus on building robust full-stack applications while exploring the intersection of <span className="text-neutral-200 font-medium">product</span>, <span className="text-neutral-200 font-medium">business</span>, and <span className="text-neutral-200 font-medium">technology</span>.
            </p>
            <p>
              My journey isn&apos;t just about learning frameworks; it&apos;s about solving real problems. I believe in continuous learning, sharing knowledge, and improving step by step every day. Currently, I&apos;m building high-performance web applications using <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">Node.js</span>, and <span className="text-white font-medium">Modern Web Technologies</span>.
            </p>
            <p>
              I also enjoy writing about technical challenges — from browser security and custom authentication flows to deployment configurations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
