import { Document } from "@contentful/rich-text-types";
export interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
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
  };
}
