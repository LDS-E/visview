import { fetchPosts } from "@/lib/contentful";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const posts = await fetchPosts();

  const filtered = posts.filter(
    (post: any) =>
      post.fields.category?.toLowerCase().replace(/\s+/g, "-") ===
      params.category
  );

  if (filtered.length === 0) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-secondary mb-6">
        Categoria: {params.category.replace("-", " ")}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((post: any) => (
          <Link key={post.sys.id} href={`/blog/${post.fields.slug}`}>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-primary mb-2">
                {post.fields.title}
              </h2>
              <p className="text-accent">{post.fields.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
