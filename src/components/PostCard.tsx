"use client";

import Link from "next/link";
import Image from "next/image";

type PostCardProps = {
  title: string;
  excerpt?: string;
  slug: string;
  imageUrl?: string;
};

export default function PostCard({
  title,
  excerpt,
  slug,
  imageUrl,
}: PostCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col">
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
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-secondary flex-grow">
          {excerpt || "No summary available."}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="mt-4 text-primary font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
