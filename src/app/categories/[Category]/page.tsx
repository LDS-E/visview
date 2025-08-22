// src/app/categories/[Category]/page.tsx

import { notFound } from "next/navigation";
import { fetchPosts } from "@/lib/contentful";
import PostCard from "@/components/PostCard"; // Certifique-se de que o caminho está correto
import { BlogPost } from "@/types/blogpost";

export default async function CategoryPage({
  params,
}: {
  params: { Category: string };
}) {
  const { Category } = params;
  const normalizedCategory = Category.toLowerCase();

  // Usa "as any" para contornar a verificação de tipo do compilador para posts
  const posts = (await fetchPosts()) as any[];

  // Filtra os posts pela categoria, usando "as any" também para o item do filtro
  const filteredPosts = posts.filter((post: any) => {
    const postCategory = post.fields?.category?.toLowerCase();
    return postCategory === normalizedCategory;
  });

  if (filteredPosts.length === 0) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-secondary mb-8 text-center">
        Posts na Categoria: {Category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post: any) => (
          <PostCard
            key={post.sys.id}
            title={post.fields.title}
            excerpt={post.fields.excerpt}
            slug={post.fields.slug}
            imageUrl={post.fields.coverImage?.fields.file.url}
          />
        ))}
      </div>
    </div>
  );
}
