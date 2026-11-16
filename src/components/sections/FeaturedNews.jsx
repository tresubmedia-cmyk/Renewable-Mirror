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

// Featured news yahan aayegi. API/backend se "featured" stories ka array
// <FeaturedNews stories={data} /> me pass karo. Har story me:
// { id, category, date, title, description?, image, link? }
// Pehli story lead banti hai, agle 3 side me aate hain.
export default function FeaturedNews({ stories = defaultStories }) {
  const reduce = useReducedMotion();
  if (!stories || stories.length === 0) return null;
  const [lead, ...restAll] = stories;
  const rest = restAll.slice(0, 3);

  // One orchestrated reveal: header first, then the lead story, then the list.
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
    visible: { transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.25 } },
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
    <section className="relative overflow-hidden bg-[#0A1A12] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      {/* soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#1F4A33]/35 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-32 h-[480px] w-[480px] rounded-full bg-[#B99A4B]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          {...reveal(0)}
          className="mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:mb-12 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#B99A4B]" />
              <span className="text-[12px] font-semibold tracking-[0.04em] text-[#8FB59A]">
                Renewable Mirror
              </span>
            </div>

            <h2 className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[42px] lg:text-[50px]">
              Stories that matter
            </h2>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#9DB2A3]">
              A closer look at the ideas, innovations and industry developments
              moving the clean energy world forward.
            </p>
          </div>

          <Link
            to="/news"
            className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/15 bg-white/[0.03] py-2 pl-6 pr-2 transition-all duration-300 hover:border-[#D8BD76]/70 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A4B]"
          >
            <span className="text-[13px] font-semibold text-white">
              Explore all stories
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D8BD76] text-[#0A1A12] transition-colors duration-300 group-hover:bg-white">
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
              className="relative flex min-h-[440px] h-full overflow-hidden rounded-2xl border border-white/10 bg-[#10251B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A4B] sm:min-h-[520px]"
            >
              <img
                src={lead.image}
                alt={lead.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B13]/90 via-[#0B1B13]/35 to-transparent" />

              <div className="relative mt-auto w-full p-6 sm:p-9 lg:p-10">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] font-medium text-white/80">
                  <span className="text-[#E2C987]">{lead.category}</span>
                  <span className="h-3 w-px bg-white/30" />
                  <span className="flex items-center gap-2">
                    <CalendarDays size={13} />
                    {lead.date}
                  </span>
                </div>

                <h3 className="mt-4 max-w-2xl font-display text-[24px] font-bold leading-[1.3] tracking-[-0.03em] text-white sm:text-[30px] lg:text-[34px]">
                  {lead.title}
                </h3>

                <p className="mt-4 max-w-xl text-[14px] leading-7 text-white/75">
                  {lead.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-3 text-[13px] font-semibold text-white">
                  <span className="relative">
                    Read story
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-[0.3] bg-[#E2C987] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#172D21] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#E2C987]">
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
                  className="flex h-full items-stretch gap-4 rounded-2xl border border-white/10 bg-[#0F2318] p-3 transition-all duration-500 ease-out hover:scale-[1.02] hover:border-[#D8BD76]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A4B] sm:gap-5"
                >
                  <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl bg-[#16301F] sm:w-40 lg:w-36 xl:w-40">
                    <img
                      src={story.image}
                      alt={story.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between py-1 pr-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-[#81978A]">
                        <span className="text-[#D8BD76]">{story.category}</span>
                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={12} />
                          {story.date}
                        </span>
                      </div>

                      <h3 className="mt-3 line-clamp-3 font-display text-[15px] font-bold leading-[1.5] tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#E9D79F] sm:text-[16px]">
                        {story.title}
                      </h3>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-[12px] font-semibold text-[#8FB59A] transition-colors duration-300 group-hover:text-[#D8BD76]">
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