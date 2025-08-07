import { fetchPosts } from "@/lib/contentful";
import Link from "next/link";
import { BlogPost } from "@/types/blogpost";
import { notFound } from "next/navigation"; //


type Props = {
  params: {
    Category: string; 
};

export default async function CategoryPage({ params }: Props) {
  
  const { Category } = params; 

  if (!Category) {
    return notFound();
  }

  console.log("Categoria da URL válida:", Category);

  if (!Category) {
    return notFound();
  }

  const normalizedCategory = Category.replace(/-/g, " ").toLowerCase();
  const posts: BlogPost[] = await fetchPosts();

  const filteredPosts = posts.filter((post) => {
    const postCategory = post.fields.category?.toLowerCase();
    return postCategory === normalizedCategory;
  });

  console.log("Número de posts filtrados:", filteredPosts.length); // LOG 4

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
        {filteredPosts.map(
          (
            post 
          ) => (
            <Link key={post.sys.id} href={`/blog/${post.fields.slug}`}>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {post.fields.title}
                </h2>
                <p className="text-secondary">
                  {post.fields.excerpt || "No summary available."}
                </p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
