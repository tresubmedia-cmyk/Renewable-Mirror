
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function ArticlePage() {
  const { slug } = useParams();

  return (
    <main className="min-h-screen bg-white px-5 py-32 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/news"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#315D45]"
        >
          <ArrowLeft size={18} />
          Back to News
        </Link>

        <p className="text-xs font-bold uppercase tracking-widest text-[#B99A4B]">
          Renewable Mirror
        </p>

        <h1 className="mt-5 text-4xl font-bold text-[#17291F]">
          Article Details
        </h1>

        <p className="mt-5 text-gray-500">
          Article slug: {slug}
        </p>

        <p className="mt-5 text-sm text-gray-500">
          Article content will be added here later.
        </p>
      </div>
    </main>
  );
}
