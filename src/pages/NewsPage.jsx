
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function NewsPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-32 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-widest text-[#B99A4B]">
          Renewable Mirror
        </p>

        <h1 className="mt-5 text-4xl font-extrabold text-[#17291F] sm:text-6xl">
          Latest News
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
          Explore the latest updates from the renewable energy industry.
        </p>

        <div className="mt-12 rounded-xl border border-gray-200 bg-[#F8FAF7] p-8">
          <h2 className="text-xl font-bold text-[#17291F]">
            News articles coming soon
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Our news articles will appear here.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#172D21] px-5 py-3 text-sm font-semibold text-white"
          >
            Back to Home
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
