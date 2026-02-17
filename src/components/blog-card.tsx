import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/lib/types";



export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col h-full rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-6">
        <Badge
          variant="outline"
          className="text-[10px] uppercase tracking-wider font-medium border-white/10 text-neutral-400 bg-transparent group-hover:text-neutral-300 group-hover:border-white/20 transition-colors"
        >
          {post.url.includes("dev.to") ? "Dev.to" : "Blog"}
        </Badge>

      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-4 text-neutral-200 group-hover:text-white transition-colors leading-snug">
        {post.title}
        <ArrowUpRight className="inline ml-2 h-5 w-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-neutral-400 group-hover:text-white" />
      </h3>

      <p className="text-sm md:text-base text-neutral-400 leading-relaxed line-clamp-3 mb-6 grow">
        {post.brief}
      </p>

      <div className="flex items-center text-sm font-medium text-neutral-400 group-hover:text-white transition-colors mt-auto">
        Read Article{" "}
        <span className="ml-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </a>
  );
}
