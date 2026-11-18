
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const COVER_STORY_ROUTE = "/cover-story";

const defaultStories = [
  {
    id: 1,
    category: "SOLAR TECHNOLOGY",
    date: "November 13, 2026",
    title:
      "The Digital Revolution in Solar PV Technology: Advancements, Efficiency, and Integration for a Sustainable Clean Energy Future",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
    slug: "/cover-story/digital-revolution-solar-pv",
  },
  {
    id: 2,
    category: "SUSTAINABILITY",
    date: "November 12, 2026",
    title:
      "Solar Panel Waste Management: Building a Sustainable Future for the Solar Industry",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
    slug: "/cover-story/solar-panel-waste-management",
  },
  {
    id: 3,
    category: "SOLAR ENERGY",
    date: "November 11, 2026",
    title:
      "The Growth in India's Solar Capacity: Understanding the Role of Imported PV Modules",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85",
    slug: "/cover-story/india-solar-capacity",
  },
  {
    id: 4,
    category: "ENERGY STORAGE",
    date: "November 10, 2026",
    title:
      "The India Solar Inverter Market: Emerging Opportunities and Future Growth",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=85",
    slug: "/cover-story/india-solar-inverter-market",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function CoverStory({ stories = defaultStories }) {
  const reduce = useReducedMotion();

  if (!stories || stories.length === 0) return null;

  const items = stories.slice(0, 4);

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
      },
    },
  };

  const cardVariants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: EASE,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADER */}
        <motion.div
          {...headerMotion}
          className="mb-9 flex flex-col justify-between gap-5 border-b border-[#E5E7EB] pb-7 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#F5A000]" />

              <span className="text-[12px] font-semibold tracking-[0.04em] text-[#B8860B]">
                Stories that matter
              </span>
            </div>

            <p className="font-display text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#111827] sm:text-[32px] lg:text-[40px]">
              Cover{" "}
              <span className="font-semibold text-[#B8860B]">
                Stories.
              </span>
            </p>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#6B7280]">
              In-depth stories, industry perspectives and important
              developments shaping the renewable energy landscape.
            </p>
          </div>

          {/* EXPLORE ALL STORIES */}
          <Link
            to={COVER_STORY_ROUTE}
            className="group inline-flex w-fit items-center gap-4 rounded-full border border-gray-200 bg-white py-2 pl-6 pr-2 transition-all duration-300 hover:border-[#F5A000] hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
          >
            <span className="text-[13px] font-semibold text-[#111827]">
              Explore all stories
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A000] text-[#111827] transition-colors duration-300 group-hover:bg-[#E6B94A]">
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </Link>
        </motion.div>

        {/* COVER STORY CARDS */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((story, index) => (
            <motion.article
              key={story.id}
              variants={cardVariants}
              className={`group min-w-0 ${
                index !== 0
                  ? "sm:border-l sm:border-[#E5E7EB] sm:pl-4 lg:pl-5"
                  : ""
              }`}
            >
              <Link
                to={story.slug || COVER_STORY_ROUTE}
                className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
              >

                {/* STORY IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#F8FAFC]">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#111827] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#F5A000]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                {/* STORY DETAILS */}
                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#B8860B]">
                      {story.category}
                    </span>
                  </div>

                  <h3 className="mt-3 line-clamp-4 font-display text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#111827]">
                    {story.title}
                  </h3>

                  <div className="mt-auto pt-5">
                    <div className="h-px w-full bg-[#E5E7EB] transition-colors duration-500 group-hover:bg-[#F5A000]" />

                    <div className="mt-4 flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-[10px] text-[#6B7280]">
                        <CalendarDays size={13} />
                        {story.date}
                      </span>

                      <ArrowRight
                        size={16}
                        className="shrink-0 text-[#B8860B] transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </div>
                  </div>
                </div>

              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* SHOW MORE */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to={COVER_STORY_ROUTE}
            className="group inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-[12px] font-bold text-[#111827] transition-all duration-300 hover:border-[#F5A000] hover:bg-[#111827] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
          >
            <BookOpen size={15} />
            Show More

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
