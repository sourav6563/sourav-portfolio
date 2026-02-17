import { BlogCarousel } from "@/components/blog-carousel";
import { BlogCard } from "@/components/blog-card";
import { BlogPost } from "@/lib/types";

const posts: BlogPost[] = [
  {
    title: "Understanding custom auth flow and its implementation",
    brief: "Recently I rebuilt my custom auth system to truly understand the implementation details. I focused on proper flow, structure, and error handling using Zod and Resend. The biggest challenge wasn't syntax, but mapping out the business workflow and handling edge cases like token expiration and storage security.",
    url: "https://blog.souravmahato.in/understanding-custom-auth-flow-and-its-implementation",
  },
  {
    title: "Docker solved my pain point on My Linux desktop",
    brief: "I started exploring Docker to understand how it works behind the scenes and why it's consistent across environments. It solved my production pain points on Linux, specifically with PostgreSQL dependencies on openSUSE, proving that stability matters most.",
    url: "https://blog.souravmahato.in/docker-solved-my-pain-point-on-my-linux-desktop",
  },
  {
    title: "Thoughts changed as a dev",
    brief: "I used to think development was just about learning languages and tools, but my perspective has shifted to realizing it's about system thinking. Now I spend more time understanding workflows, business logic, and edge..",
    url: "https://dev.to/sourav_mahato_3900/thoughts-changed-as-a-dev-3hk",
  },
  {
    title: "My DualBoot Experience How I Broke My Laptop",
    brief: "When I bought my first laptop, I felt limited by Windows bloatware and decided to try dual-booting Linux. It was a chaotic journey involving corrupted partitions and BitLocker lockouts, but failing repeatedly taught me how OS bootloaders and file systems actually work.",
    url: "https://dev.to/sourav_mahato_3900/my-dualboot-experience-how-i-broke-my-laptop-f83",
  },
];

export async function BlogSection() {
  return (
    <section id="blog" className="relative">
      <div className="container py-8 md:py-16">
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-8 md:mb-14">
          <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase underline underline-offset-4">
            Blogs
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Latest <span className="text-white">Thoughts</span>
          </h2>
          <p className="text-neutral-500">
            Writing about technology, learning, and building.
          </p>
        </div>

        {/* Mobile: Carousel */}
        <BlogCarousel posts={posts} />

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {posts.map((post, index) => (
             <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
