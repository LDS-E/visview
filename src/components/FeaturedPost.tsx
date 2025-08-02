"use client";

import Link from "next/link";
import Image from "next/image";

type FeaturedPostProps = {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
};

export default function FeaturedPost({
  title,
  excerpt,
  imageUrl,
  slug,
}: FeaturedPostProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-12 shadow-lg rounded-2xl overflow-hidden bg-white">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-72 md:h-auto">
          <Image
            src="/images/motherhood.webp"
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-secondary mb-2">{title}</h2>
          <p className="text-secondary mb-4">{excerpt}</p>
          <Link href={`/blog/${slug}`}>
            <span className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition">
              Read more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
