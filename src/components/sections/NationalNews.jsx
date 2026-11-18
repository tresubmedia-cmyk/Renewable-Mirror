
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const defaultNews = [
  {
    id: 1,
    category: "Solar Energy",
    date: "November 13, 2026",
    title:
      "Rayzon Solar's Research and Development Laboratory Earns Prestigious NABL Accreditation",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    slug: "/news/national/rayzon-solar",
  },
  {
    id: 2,
    category: "Solar Projects",
    date: "November 12, 2026",
    title:
      "NTPC REL Invites Bids for 1,000 MW Solar Projects in Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
    slug: "/news/national/ntpc-rel-solar-projects",
  },
  {
    id: 3,
    category: "Rooftop Solar",
    date: "November 11, 2026",
    title:
      "Uttar Pradesh Records Strong Rooftop Solar Growth Under PM Surya Ghar Scheme",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85",
    slug: "/news/national/up-rooftop-solar",
  },
  {
    id: 4,
    category: "Renewable Energy",
    date: "November 10, 2026",
    title:
      "India Accelerates Its Clean Energy Transition With New Solar Installations",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=85",
    slug: "/news/national/india-clean-energy",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function NationalNews({ news = defaultNews }) {
  const reduce = useReducedMotion();

  if (!news || news.length === 0) return null;

  const items = news.slice(0, 4);

  const headerMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: EASE },
      };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: EASE },
    },
  };

  const imageVariants = {
    hidden: reduce ? { scale: 1 } : { scale: 1.18 },
    visible: {
      scale: 1,
      transition: { duration: 1.5, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#111827] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="relative mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          {...headerMotion}
          className="mb-10 flex flex-col justify-between gap-6 border-b border-white/20 pb-8 md:mb-12 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#F5A000]" />

              <span className="text-[12px] font-semibold tracking-[0.08em] text-[#E6B94A]">
                INDIA UPDATES
              </span>
            </div>

            <h2 className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[42px] lg:text-[50px]">
              National News
            </h2>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-white/75">
              The latest developments, projects and policy updates from India's
              renewable energy sector.
            </p>
          </div>

          {/* VIEW ALL BUTTON */}
          <Link
            to="/news/national"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 transition-all duration-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
          >
            <span className="text-[12px] font-semibold text-[#111827]">
              View all national news
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5A000] text-[#111827] transition-all duration-300 group-hover:bg-[#E6B94A]">
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </Link>
        </motion.div>

        {/* NEWS CARDS */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              className="group min-w-0"
            >
              <Link
                to={item.slug || "/news/national"}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#F5A000] hover:shadow-lg hover:shadow-black/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F8FAFC]">
                  <motion.img
                    variants={imageVariants}
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111827]/35 via-transparent to-transparent" />

                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111827] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#F5A000]">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium text-[#6B7280]">
                    <span className="font-semibold text-[#B8860B]">
                      {item.category}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={12} />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="mt-3 line-clamp-4 font-display text-[16px] font-bold leading-[1.5] tracking-[-0.02em] text-[#111827] transition-colors duration-300 group-hover:text-[#B8860B]">
                    {item.title}
                  </h3>

                  <div className="mt-auto pt-6">
                    {/* DIVIDER */}
                    <div className="relative h-px w-full bg-[#E5E7EB]">
                      <span className="absolute left-0 top-0 h-px w-0 bg-[#F5A000] transition-all duration-700 group-hover:w-full" />
                    </div>

                    {/* READ STORY */}
                    <div className="mt-4 flex items-center justify-between text-[12px] font-semibold text-[#111827]">
                      Read full story

                      <ArrowRight
                        size={16}
                        className="text-[#B8860B] transition-transform duration-300 group-hover:translate-x-1.5"
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
