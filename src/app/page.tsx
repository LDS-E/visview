import Link from "next/link";
import PostCard from "../components/PostCard";
import Image from "next/image";

export default function HomePage() {
  const posts = [
    {
      title: "Exploring Motherhood",
      date: "April 8, 2025",
      description: "A deep dive into the joys and challenges of motherhood...",
      slug: "exploring-motherhood",
    },
    {
      title: "Living a Balanced Life",
      date: "March 25, 2025",
      description: "How to juggle career, personal life, and motherhood...",
      slug: "living-a-balanced-life",
    },
    {
      title: "Self-Care for Busy Moms",
      date: "March 15, 2025",
      description: "Tips and strategies for prioritizing self-care...",
      slug: "self-care-for-busy-moms",
    },
  ];

  return (
    <div>
      <section className="relative bg-lightBg text-darkText py-12">
        <div className="absolute inset-0">
          <Image
            src="/images/herojpg.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-secondary">
            Welcome to VisView
          </h1>
          <p className="mt-4 text-lg text-accent">
            A cozy space to explore motherhood, lifestyle, and inspiration.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-block rounded-xl bg-secondary px-6 py-3 text-white hover:bg-opacity-80 transition"
          >
            Explore Blog
          </Link>
        </div>
      </section>

      <section className="bg-lightBg py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-secondary mb-12">
            Recent Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <PostCard
                  title={post.title}
                  date={post.date}
                  description={post.description}
                  slug={post.slug}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
