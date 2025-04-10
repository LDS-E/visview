import { notFound } from "next/navigation";

const posts = [
  {
    slug: "exploring-motherhood",
    title: "Exploring Motherhood",
    date: "April 8, 2025",
    content: "A deep dive into the joys and challenges of motherhood...",
  },
  {
    slug: "living-a-balanced-life",
    title: "Living a Balanced Life",
    date: "March 25, 2025",
    content: "How to juggle career, personal life, and motherhood...",
  },
  {
    slug: "self-care-for-busy-moms",
    title: "Self-Care for Busy Moms",
    date: "March 15, 2025",
    content: "Tips and strategies for prioritizing self-care...",
  },
];

type Post = {
  title: string;
  date: string;
  content: string;
  slug: string;
};

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-secondary">{post.title}</h1>
      <p className="text-xl text-accent">{post.date}</p>
      <div className="mt-6">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
