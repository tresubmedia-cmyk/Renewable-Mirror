
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ArticleDetail from "../components/details/ArticleDetail";
import { articles } from "../data/articles";

export default function ArticleDetailPage() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  const section = parts[0];
  const slug = parts[parts.length - 1];

  const article = articles.find(
    (item) =>
      item.slug === slug &&
      item.section === section
  );

  if (!article) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#F7F8F5] px-6 text-center">
        <h1 className="font-serif text-3xl text-[#10291D]">
          Article Not Found
        </h1>

        <p className="mt-3 text-sm text-[#788278]">
          The article you are looking for is unavailable.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A58B4D]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </main>
    );
  }

  return <ArticleDetail article={article} />;
}
