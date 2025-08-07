// src/types/blogpost.ts
import { Asset } from "contentful";

export interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    coverImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    content: any; // Você pode tipar o RichText, mas 'any' é aceitável aqui se for difícil
  };
}
