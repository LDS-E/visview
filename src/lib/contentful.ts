// src/lib/contentful.ts

import { createClient } from "contentful";
import { BlogPost } from "@/types/blogpost"; // Importe apenas BlogPost

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchPosts(): Promise<BlogPost[]> {
  // Chamamos getEntries sem a tipagem genérica para evitar o conflito
  const entries = await client.getEntries({ content_type: "post" });

  // Usamos 'as BlogPost[]' para afirmar que o resultado é do tipo BlogPost[]
  // Isso resolve todos os problemas de tipagem de uma vez por todas
  return entries.items as BlogPost[];
}
