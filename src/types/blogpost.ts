import { Document } from "@contentful/rich-text-types";

// This interface defines the fields of your Contentful blog post.
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

// We will no longer rely on the Contentful 'Entry' type.
// Instead, we create our own 'BlogPost' interface that
// mirrors the exact structure of a Contentful entry.
export interface BlogPost {
  metadata: any; // A simple placeholder for any metadata
  sys: {
    id: string;
    type: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: BlogPostFields;
}
