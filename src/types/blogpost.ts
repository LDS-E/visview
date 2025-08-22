import { Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface BlogPostFields {
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  coverImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  content?: Document;
  isFeatured?: boolean;
}

export type BlogPost = Entry<BlogPostFields>;
