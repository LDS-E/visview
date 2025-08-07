export interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt?: string;
    category?: string;
  };
}
