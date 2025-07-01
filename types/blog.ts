export interface BlogPostData {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: string;
  tags: string[];
  author: {
    _id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  published: boolean;
  featured: boolean;
  views: number;
  readTime: number;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string;
  featuredImage: string;
  published: boolean;
  featured: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
  };
}

export interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  totalViews: number;
  featuredPosts: number;
}

export interface BlogListResponse {
  posts: BlogPostData[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
