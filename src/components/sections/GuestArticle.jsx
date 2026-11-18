
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

// DUMMY DATA: Baad mein WordPress API se guest articles aayenge.
// Har item: { id, category, date, title, image, slug, author }

const defaultArticles = [
  {
    id: 1,
    author: "Industry Contributor",
    category: "SOLAR INFRASTRUCTURE",
    date: "November 13, 2026",
    title:
      "Can Solar Infrastructure Truly Be Sustainable If Its Earthing Needs Water for Maintenance?",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
    slug: "/guest-articles/solar-infrastructure-sustainability",
  },
  {
    id: 2,
    author: "Technology Contributor",
    category: "ENERGY TECHNOLOGY",
    date: "November 12, 2026",
    title:
      "Powering India's AI Compute: Why 300kW Racks Need a New Design",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    slug: "/guest-articles/ai-compute-energy",
  },
  {
    id: 3,
    author: "Renewable Energy Expert",
    category: "SMART GRIDS",
    date: "November 11, 2026",
    title:
      "Solar Energy and Smart Grids: How Modern Technology Is Shaping the Future of Energy Distribution",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    slug: "/guest-articles/solar-energy-smart-grids",
  },
  {
    id: 4,
    author: "Industry Expert",
    category: "ENERGY STORAGE",
    date: "November 10, 2026",
    title:
      "India's Renewable Energy Growth Story Needs a Storage Revolution",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    slug: "/guest-articles/renewable-energy-storage",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function GuestArticle({ articles = defaultArticles }) {
  const reduce = useReducedMotion();

  if (!articles || articles.length === 0) return null;

  const items = articles.slice(0, 4);

  const headerMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.7, ease: EASE },
      };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADER */}
        <motion.div
          {...headerMotion}
          className="mb-8 flex flex-col justify-between gap-5 border-b border-[#e9ede6] pb-7 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#B99A4B]" />

              <span className="text-[12px] font-semibold tracking-[0.04em] text-[#667C65]">
                Voices from the industry
              </span>
            </div>

            <p className="font-display text-[34px] font-bold leading-[1.1] tracking-[-0.04em] text-[#17291F] sm:text-[32px] lg:text-[40px]">
              Guest articles
            </p>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#6F7B6F]">
              Expert perspectives, industry insights and ideas from
              professionals shaping the renewable energy sector.
            </p>
          </div>

<Link
  to="/guest-articles"
  className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#111827] py-2 pl-4 pr-2 transition-all duration-300 hover:bg-[#1F2937] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
>
  <span className="text-[12px] font-semibold text-white">
    View all guest articles
  </span>

  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5A000] text-[#111827] transition-all duration-300 group-hover:bg-[#E6B94A]">
    <ArrowRight
      size={15}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </span>
</Link>
        </motion.div>

        {/* GUEST ARTICLE CARDS */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((article, index) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              className={`group min-w-0 ${
                index !== 0
                  ? "sm:border-l sm:border-[#edf0eb] sm:pl-4 lg:pl-5"
                  : ""
              }`}
            >
              <Link
                to={article.slug || "/guest-articles"}
                className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A4B]"
              >

                {/* AUTHOR IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#E9EDE7]">
                  <motion.img
                    src={article.image}
                    alt={article.author || article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10291f]/45 via-transparent to-transparent opacity-80" />

                  <span className="absolute bottom-4 left-4 rounded-md bg-white/95 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#263D2D]">
                    Guest Contributor
                  </span>
                </div>

                {/* ARTICLE DETAILS */}
                <div className="flex flex-1 flex-col pt-4">

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9A7E34]">
                    <span>{article.category}</span>
                  </div>

                  <h3 className="mt-3 line-clamp-4 font-display text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#17291F]">
                    {article.title}
                  </h3>

                  <div className="mt-auto pt-5">
                    <div className="h-px w-full bg-[#e6eae3] transition-colors duration-500 group-hover:bg-[#B99A4B]" />

                    <div className="mt-4 flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-[10px] text-[#7D887D]">
                        <CalendarDays size={13} />
                        {article.date}
                      </span>

                      <ArrowRight
                        size={16}
                        className="shrink-0 text-[#B99A4B] transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </div>
                  </div>
                </div>

              </Link>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
