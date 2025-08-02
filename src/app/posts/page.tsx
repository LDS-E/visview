// src/app/posts/page.tsx
import { fetchPosts } from "@/lib/contentful";
import Link from "next/link";

export const metadata = {
  title: "All Posts | VisView",
};

export default async function AllPostsPage() {
  const posts = await fetchPosts();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-secondary mb-6">All Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <Link key={post.sys.id} href={`/blog/${post.fields.slug}`}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer min-h-[250px] flex flex-col justify-evenly">
              <h2 className="text-xl font-semibold text-primary mb-2">
                {post.fields.title}
              </h2>
              <p className="text-secondary line-clamp-3">
                {post.fields.excerpt || "No summary available."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
