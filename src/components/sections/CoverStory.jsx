
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

// DUMMY DATA: Future mein WordPress API se Cover Stories aayengi.
// Fields: id, category, date, title, image, slug

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
          className="mb-9 flex flex-col justify-between gap-5 border-b border-[#e9ede6] pb-7 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#B99A4B]" />

              <span className="text-[12px] font-semibold tracking-[0.04em] text-[#667C65]">
                Stories that matter
              </span>
            </div>

            <h2 className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#17291F] sm:text-[42px] lg:text-[50px]">
              Cover <span className="font-semibold  text-[#A28E5B]">Stories.</span>
            </h2>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#6F7B6F]">
              In-depth stories, industry perspectives and important
              developments shaping the renewable energy landscape.
            </p>
          </div>

          <Link
            to="/cover-stories"
            className="group inline-flex w-fit items-center gap-4 rounded-full border border-[#dce3da] bg-white py-2 pl-6 pr-2 transition-all duration-300 hover:border-[#172D21] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A4B]"
          >
            <span className="text-[13px] font-semibold text-[#243C2D]">
              Explore all stories
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#172D21] text-white transition-colors duration-300 group-hover:bg-[#B99A4B]">
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
                  ? "sm:border-l sm:border-[#edf0eb] sm:pl-4 lg:pl-5"
                  : ""
              }`}
            >
              <Link
                to={story.slug || "/cover-stories"}
                className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A4B]"
              >

                {/* STORY IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#E9EDE7]">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10291f]/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#172D21] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#D8BD76]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                {/* STORY DETAILS */}
                <div className="flex flex-1 flex-col pt-5">

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#9A7E34]">
                      {story.category}
                    </span>
                  </div>

                  <h3 className="mt-3 line-clamp-4 font-display text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#17291F]">
                    {story.title}
                  </h3>

                  <div className="mt-auto pt-5">
                    <div className="h-px w-full bg-[#e6eae3] transition-colors duration-500 group-hover:bg-[#B99A4B]" />

                    <div className="mt-4 flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-[10px] text-[#7D887D]">
                        <CalendarDays size={13} />
                        {story.date}
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

        {/* SHOW MORE */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/cover-stories"
            className="group inline-flex items-center gap-3 rounded-full border border-[#e1e7df] px-7 py-3.5 text-[12px] font-bold text-[#263D2D] transition-all duration-300 hover:border-[#172D21] hover:bg-[#172D21] hover:text-white"
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
