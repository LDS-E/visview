import { notFound } from "next/navigation";
import { fetchPosts } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const posts = await fetchPosts();

  const post = posts.find((post: any) => post.fields.slug === params.slug);

  if (!post) return notFound();

  const coverImageUrl = post.fields.coverImage?.fields?.file?.url;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-secondary mb-4">
        {post.fields.title}
      </h1>
      <p className="text-accent mb-2">{post.fields.excerpt}</p>

      {coverImageUrl && (
        <div className="my-6">
          <Image
            src={`https:${coverImageUrl}`}
            alt={post.fields.title}
            width={800}
            height={400}
            layout="responsive"
          />
        </div>
      )}

      <div className="prose prose-lg mt-6">
        {documentToReactComponents(post.fields.content)}
      </div>
    </div>
  );
}
