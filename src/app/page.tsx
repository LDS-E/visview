// src/app/page.tsx

import Image from "next/image";
import { fetchPosts } from "@/lib/contentful";
import PostCard from "../components/PostCard";
import FeaturedPost from "@/components/FeaturedPost";
import CategorySection from "@/components/CategorySection";
import { BlogPost } from "@/types/blogpost";

export default async function HomePage() {
  const posts: BlogPost[] = await fetchPosts();

  // Encontre o post em destaque, que você marcou no Contentful
  const featuredPost = posts.find((post) => post.fields.isFeatured === true);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-lightBg text-darkText py-12">
        <div className="absolute inset-0">
          <Image
            src="/images/herojpg.jpg"
            alt="Hero Image"
            fill
            className="object-cover opacity-50 rounded-md"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-secondary text-shadow-lg">
            Welcome to VisView
          </h1>
          <p className="mt-4 text-lg text-accent text-shadow-lg">
            A cozy space to explore motherhood, lifestyle, and inspiration.
          </p>
          <a
            href="/newsletter"
            className="mt-6 inline-block rounded-xl bg-secondary px-6 py-3 text-white hover:bg-opacity-80 transition text-shadow-lg"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </section>

      {/* FEATURED POST */}
      <section>
        {featuredPost && (
          <FeaturedPost
            title={featuredPost.fields.title}
            excerpt={featuredPost.fields.excerpt}
            slug={featuredPost.fields.slug}
            imageUrl={featuredPost.fields.coverImage?.fields.file.url}
          />
        )}
      </section>

      {/* RECENT POSTS */}
      <section className="bg-lightBg py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-secondary mb-12">
            Recent Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {posts.map((post) => (
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
      </section>

      {/* CATEGORY SECTION */}
      <section>
        <CategorySection />
      </section>
    </div>
  );
}
