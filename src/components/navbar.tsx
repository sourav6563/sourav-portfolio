"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#featured", label: "Projects" },
  { href: "https://blog.souravmahato.in", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Update URL hash without triggering navigation
      window.history.pushState(null, "", href);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-2xl">
      <div className="flex h-16 w-full items-center justify-between px-6 md:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <span className="text-xl font-bold tracking-tight text-white">
              Sourav Mahato
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-neutral-500 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            )
          )}
          <Button asChild size="sm" className="rounded-full px-5 bg-white text-black hover:bg-neutral-200 transition-all duration-200 cursor-pointer">
            <a href="https://github.com/sourav6563" target="_blank" rel="noreferrer" className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden cursor-pointer"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0 bg-black/95 backdrop-blur-xl border-l border-white/10">
                <div className="flex flex-col space-y-4 mt-6 px-4">
                  {navLinks.map((link) =>
                    link.href.startsWith("http") ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg text-neutral-400 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => { scrollToSection(e, link.href); setIsOpen(false); }}
                        className="text-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    )
                  )}
                  <a
                      href="https://github.com/sourav6563"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
