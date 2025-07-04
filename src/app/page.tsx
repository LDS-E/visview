import Link from "next/link";
import Image from "next/image";
import { fetchPosts } from "@/lib/contentful";
import PostCard from "../components/PostCard";
import FeaturedPost from "@/components/FeaturedPost";
import CategorySection from "@/components/CategorySection";

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div>
      <section className="relative bg-lightBg text-darkText py-12">
        <div className="absolute inset-0">
          <Image
            src="/images/herojpg.jpg"
            alt="Hero Image"
            fill
            className="object-cover opacity-50"
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
            href="/newsletter"
            className="mt-6 inline-block rounded-xl bg-secondary px-6 py-3 text-white hover:bg-opacity-80 transition"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
      <section>
        <FeaturedPost
          title="featured post"
          excerpt="Important post of the month"
          slug="first-steps-into-motherhood"
          imageUrl="/images/sample1.jpg"
        />
      </section>

      <section className="bg-lightBg py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-secondary mb-12">
            Recent Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {posts.map((post: any) => (
              <Link key={post.sys.id} href={`/blog/${post.fields.slug}`}>
                <PostCard
                  title={post.fields.title}
                  excerpt={post.fields.excerpt}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section>
        <CategorySection />
      </section>
    </div>
  );
}
