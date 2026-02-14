import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { getLatestPosts } from "@/lib/hashnode";

// Helper for date formatting if date-fns not available or to keep it simple
function formatDate(isoString: string) {
  return new Date(isoString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function BlogSection() {
  const posts = await getLatestPosts();

  // Fallback to empty state or static posts if API fails? 
  // Ideally, if fetch fails, return null or empty to avoid breaking build.
  // But let's assume it works or returns empty.
  
  if (!posts || posts.length === 0) {
    return null; // Or return a "Coming Soon" placeholder
  }

  return (
    <section id="blog" className="relative">
      <div className="container py-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-14">
          <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase">Blog</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Latest <span className="text-white">Thoughts</span>
          </h2>
          <p className="text-neutral-500">Writing about technology, learning, and building.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-white/8 bg-white/[0.02] p-6 hover:bg-white/5 hover:border-white/15 transition-all duration-200"
            >
              <div className="flex justify-between items-center mb-4">
                <Badge variant="outline" className="text-xs border-white/10 text-neutral-500 bg-transparent">
                  Blog
                </Badge>
                <span className="text-xs text-neutral-600">{formatDate(post.publishedAt)}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-200 group-hover:text-white transition-colors line-clamp-2">
                {post.title}
                <ArrowUpRight className="inline ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3">
                {post.brief}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
