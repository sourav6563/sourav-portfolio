import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";



function DevToIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4 19h16V5H4z" />
      <text 
        x="12" 
        y="14" 
        fontSize="6.5" 
        fontWeight="bold" 
        fontFamily="Arial, sans-serif" 
        textAnchor="middle" 
        fill="currentColor" 
        stroke="none"
      >
        DEV
      </text>
    </svg>
  );
}

function BlogIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

const socials = [
  { href: "https://github.com/sourav6563", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/sourav3900", label: "LinkedIn", icon: Linkedin },
  { href: "https://dev.to/sourav_mahato_3900", label: "Dev.to", icon: DevToIcon },
  { href: "https://blog.souravmahato.in", label: "Blog", icon: BlogIcon },
];

export function Contact() {
  return (
    <footer id="contact" className="relative">
      <div className="container py-8 md:py-16">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase">Contact</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s <span className="text-white">connect</span>
            </h2>
            <p className="text-neutral-500 text-lg max-w-lg mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>

          {/* Email */}
          <a
            href="mailto:souravmahato6563@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-neutral-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200"
          >
            <Mail className="h-4 w-4" />
            <span>souravmahato6563@gmail.com</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600" />
          </a>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/8 bg-white/2 px-5 py-2.5 text-sm text-neutral-500 hover:text-white hover:border-white/15 hover:bg-white/5 transition-all duration-200"
              >
                {social.icon && <social.icon className="h-4 w-4" />}
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} Sourav Mahato 
        </div>
      </div>
    </footer>
  );
}
