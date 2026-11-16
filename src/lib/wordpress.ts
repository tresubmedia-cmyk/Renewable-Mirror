import type { NewsArticle } from "../types/content";
import { articles as fallbackArticles } from "../data/articles";

const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL?.replace(/\/$/, "");

type WpPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    author?: Array<{ name?: string }>;
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
    "wp:term"?: Array<Array<{ name?: string }>>;
  };
};

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export async function getArticles(): Promise<NewsArticle[]> {
  if (!WORDPRESS_URL) return fallbackArticles;

  try {
    const response = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=12&_embed=1`,
      { headers: { Accept: "application/json" } }
    );
    if (!response.ok) throw new Error(`WordPress API returned ${response.status}`);
    const posts: WpPost[] = await response.json();

    if (!posts.length) return fallbackArticles;

    return posts.map((post) => ({
      id: post.id,
      slug: post.slug,
      title: stripHtml(post.title.rendered),
      excerpt: stripHtml(post.excerpt.rendered),
      category: post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "News",
      date: new Date(post.date).toLocaleDateString("en-IN", {
        day: "numeric", month: "long", year: "numeric"
      }),
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      author: post._embedded?.author?.[0]?.name ?? "Renewable Mirror",
      readTime: "4 min read",
      content: [stripHtml(post.content.rendered)]
    }));
  } catch (error) {
    console.warn("Could not load WordPress posts. Using sample content.", error);
    return fallbackArticles;
  }
}