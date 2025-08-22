// src/lib/contentful.ts

import { createClient, Entry } from "contentful";
import { BlogPost, BlogPostFields } from "@/types/blogpost";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchPosts(): Promise<BlogPost[]> {
  const entries = await client.getEntries<BlogPostFields>({
    content_type: "post",
  });

  // O filtro abaixo garante que apenas entradas válidas sejam retornadas.
  // Isso resolve o erro de tipagem no seu código principal.
  const validPosts = entries.items.filter(
    (item): item is BlogPost => !!(item as Entry<BlogPostFields>).fields?.slug
  );

  return validPosts;
}
