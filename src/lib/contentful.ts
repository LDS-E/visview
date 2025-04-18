import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchPosts() {
  const entries = await client.getEntries({ content_type: "post" });
  return entries.items;
}
