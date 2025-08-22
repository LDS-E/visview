import { notFound } from "next/navigation";
import { fetchPosts } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { BlogPost } from "@/types/blogpost";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const posts: BlogPost[] = await fetchPosts();

  const post = posts.find((post) => post.fields?.slug === slug);

  if (!post) return notFound();

  const coverImageUrl = post.fields.coverImage?.fields?.file?.url;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-secondary mb-4">
        {post.fields.title}
      </h1>
      <p className="text-secondary mb-2">{post.fields.excerpt}</p>

      {coverImageUrl && (
        <div className="w-full max-w-4xl mx-auto aspect-[2/1] relative my-6 overflow-hidden rounded-xl shadow-md">
          <Image
            src={`https:${coverImageUrl}`}
            alt={post.fields.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg prose-slate mt-6 max-w-none prose-headings:text-secondary prose-p:text-foreground prose-a:text-primary hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md">
        {documentToReactComponents(post.fields.content)}
      </div>
    </div>
  );
}
