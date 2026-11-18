
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const defaultStories = [
  {
    id: 1,
    category: "Solar Energy",
    date: "November 13, 2026",
    title:
      "India's Renewable Energy Sector Enters a New Era of Growth and Innovation",
    description:
      "Discover the projects, investments and technological developments shaping India's clean energy transition.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: 2,
    category: "Wind Energy",
    date: "November 12, 2026",
    title:
      "The Next Chapter of Wind Energy: Innovation Driving a Sustainable Future",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    category: "Energy Storage",
    date: "November 11, 2026",
    title:
      "Battery Storage Technology Transforming the Renewable Energy Landscape",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    category: "Clean Energy",
    date: "November 10, 2026",
    title:
      "Renewable Energy Investments Accelerate India's Clean Energy Transition",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=700&q=85",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function FeaturedNews({ stories = defaultStories }) {
  const reduce = useReducedMotion();

  if (!stories || stories.length === 0) return null;

  const [lead, ...restAll] = stories;
  const rest = restAll.slice(0, 3);

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.8, ease: EASE, delay },
        };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.14,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, x: 28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#111827] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

      <div className="relative mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          {...reveal(0)}
          className="mb-10 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:mb-12 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#F5A000]" />
              <span className="text-[12px] font-semibold tracking-[0.04em] text-[#E6B94A]">
                Renewable Mirror
              </span>
            </div>

            <p className="font-display text-[24px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[32px] lg:text-[40px]">
              Stories That <span className="text-[#F5A000]">Matter.</span>
            </p>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-white/75">
              A closer look at the ideas, innovations and industry developments
              moving the clean energy world forward.
            </p>
          </div>
<Link
  to="/news"
  className="group inline-flex w-fit items-center gap-4 rounded-full border border-gray-300 bg-white py-2 pl-6 pr-2 transition-all duration-300 hover:border-[#F5A000] hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
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

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">

          {/* LEAD STORY */}
          <motion.article
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 40, scale: 0.98 },
                  whileInView: { opacity: 1, y: 0, scale: 1 },
                  viewport: { once: true, amount: 0.15 },
                  transition: { duration: 0.95, ease: EASE, delay: 0.1 },
                })}
            className="group lg:col-span-7"
          >
            <Link
              to={lead.link || "/news"}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-2 ring-transparent transition-all duration-500 hover:ring-[#F5A000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
            >
              <div className="relative min-h-[260px] flex-1 overflow-hidden bg-[#263244] sm:min-h-[320px]">
                <img
                  src={lead.image}
                  alt={lead.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />

                <span className="absolute left-5 top-5 rounded-full bg-[#F5A000] px-3.5 py-1.5 text-[11.5px] font-semibold text-[#111827]">
                  {lead.category}
                </span>
              </div>

              <div className="border-t-4 border-[#F5A000] p-6 sm:p-8">
                <span className="flex items-center gap-2 text-[12px] font-medium text-slate-500">
                  <CalendarDays size={13} className="text-[#B8860B]" />
                  {lead.date}
                </span>

                <h3 className="mt-3 max-w-2xl font-display text-[22px] font-bold leading-[1.3] tracking-[-0.03em] text-[#111827] sm:text-[28px]">
                  {lead.title}
                </h3>

                {lead.description && (
                  <p className="mt-3 max-w-xl text-[14px] leading-7 text-slate-600">
                    {lead.description}
                  </p>
                )}

                <div className="mt-6 inline-flex items-center gap-3 text-[13px] font-semibold text-[#111827]">
                  <span className="relative">
                    Read story
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-[0.3] bg-[#F5A000] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#F5A000] group-hover:text-[#111827]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* SIDE STORIES */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 lg:col-span-5 lg:grid-rows-3 lg:gap-6"
          >
            {rest.map((story) => (
              <motion.article
                key={story.id}
                variants={itemVariants}
                className="group min-w-0"
              >
                <Link
                  to={story.link || "/news"}
                  className="flex h-full items-stretch gap-4 rounded-2xl bg-white p-3 ring-2 ring-transparent transition-all duration-500 ease-out hover:scale-[1.02] hover:ring-[#F5A000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A] sm:gap-5"
                >
                  <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl bg-[#263244] sm:w-40 lg:w-36 xl:w-40">
                    <img
                      src={story.image}
                      alt={story.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between py-1 pr-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-slate-500">
                        <span className="font-semibold text-[#B8860B]">
                          {story.category}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={12} />
                          {story.date}
                        </span>
                      </div>

                      <h3 className="mt-3 line-clamp-3 font-display text-[15px] font-bold leading-[1.5] tracking-[-0.02em] text-[#111827] transition-colors duration-300 group-hover:text-[#B8860B] sm:text-[16px]">
                        {story.title}
                      </h3>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-[12px] font-semibold text-[#111827] transition-colors duration-300 group-hover:text-[#B8860B]">
                      Read story
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
