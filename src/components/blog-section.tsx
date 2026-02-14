import { getLatestPosts } from "@/lib/hashnode";
import { BlogCarousel } from "@/components/blog-carousel";
import { BlogCard } from "@/components/blog-card";

export async function BlogSection() {
  const posts = await getLatestPosts();

  if (!posts || posts.length === 0) {
    return null;
  }

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
