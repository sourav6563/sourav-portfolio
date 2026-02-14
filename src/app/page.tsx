
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { FeaturedProject } from "@/components/featured-project";
import { BlogSection } from "@/components/blog-section";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <BlogSection />
      <Contact />
    </main>
  );
}
