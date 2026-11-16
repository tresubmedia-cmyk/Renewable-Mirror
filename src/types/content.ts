export type NewsArticle = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
  readTime: string;
  content: string[];
};

export type Interview = {
  name: string;
  role: string;
  company: string;
  image: string;
  slug: string;
};