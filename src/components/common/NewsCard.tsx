import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { NewsArticle } from "../../types/content";

export function NewsCard({ article, featured = false }: { article: NewsArticle; featured?: boolean }) {
  return (
    <article className={`news-card ${featured ? "news-card-featured" : ""}`}>
      <Link to={`/news/${article.slug}`} className="news-image-wrap">
        <img src={article.image} alt="" className="news-image" loading="lazy" />
        <span className="image-arrow"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="news-card-body">
        <div className="meta-row"><span className="category-label">{article.category}</span><span>{article.date}</span></div>
        <h3><Link to={`/news/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <div className="card-bottom"><span><Clock3 size={14} /> {article.readTime}</span><Link to={`/news/${article.slug}`}>Read story <ArrowUpRight size={15} /></Link></div>
      </div>
    </article>
  );
}