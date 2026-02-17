"use client";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BlogPost } from "@/lib/types";

import { BlogCard } from "@/components/blog-card";

export function BlogCarousel({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="block md:hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {posts.map((post, index) => (
            <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-1/2">
              <div className="h-full">
                <BlogCard post={post} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          {/* Optional: Add custom dots or just rely on swipe */}
        </div>
        <div className="hidden sm:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
