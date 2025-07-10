import { fetchPosts } from "@/lib/contentful";
import Link from "next/link";

type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const { category } = params;

  const normalizedCategory = category.replace(/-/g, " ").toLowerCase();
  const posts = await fetchPosts();

  const filteredPosts = posts.filter((post: any) => {
    const postCategory = post.fields.category?.toLowerCase();
    return postCategory === normalizedCategory;
  });

  if (filteredPosts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-secondary mb-4">
          No posts found for this category.
        </h1>
        <Link href="/" className="text-primary underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-secondary mb-6 capitalize">
        Category: {normalizedCategory}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md|grid-cols-3 gap-6">
        {filteredPosts.map((post: any) => (
          <Link key={post.sys.id} href={`/blog/${post.fields.slug}`}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer">
              <h2 className="text-xl font-semibold text-primary mb-2">
                {post.fields.title}
              </h2>
              <p className="text-accent">
                {post.fields.excerpt || "No summary available."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
