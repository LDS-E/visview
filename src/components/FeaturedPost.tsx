"use client";

import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  excerpt?: string;
  slug: string;
  imageUrl?: string;
}

export default function PostCard({
  title,
  excerpt,
  slug,
  imageUrl,
}: PostCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer overflow-hidden">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl.startsWith("http") ? imageUrl : `https:${imageUrl}`}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between h-full">
        <h2 className="text-xl font-semibold text-primary mb-2">{title}</h2>
        <p className="text-secondary mb-4 line-clamp-3">
          {excerpt || "No summary available."}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="mt-auto text-sm text-primary font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
