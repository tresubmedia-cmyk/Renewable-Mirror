
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

// DUMMY DATA: Baad mein original magazine covers add karna.
// Images folder: public/images/magazines/

const defaultMagazines = [
  {
    id: 1,
    title: "Renewable Mirror",
    issue: "February 2026",
    edition: "Volume 08 | Issue 01",
    image: "/images/magazines/magazine-01.jpg",
    slug: "/magazines/february-2026",
  },
  {
    id: 2,
    title: "Renewable Mirror",
    issue: "April 2025",
    edition: "Volume 07 | Issue 02",
    image: "/images/magazines/magazine-02.jpg",
    slug: "/magazines/april-2025",
  },
  {
    id: 3,
    title: "Renewable Mirror",
    issue: "September 2024",
    edition: "Volume 06 | Issue 04",
    image: "/images/magazines/magazine-03.jpg",
    slug: "/magazines/september-2024",
  },
  {
    id: 4,
    title: "Renewable Mirror",
    issue: "November 2024",
    edition: "Volume 06 | Issue 05",
    image: "/images/magazines/magazine-04.jpg",
    slug: "/magazines/november-2024",
  },

];

const EASE = [0.22, 1, 0.36, 1];

export default function MagazineSection({
  magazines = defaultMagazines,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();

  if (!magazines || magazines.length === 0) return null;

  const visibleCount = 4;

  const visibleMagazines = Array.from(
    { length: Math.min(visibleCount, magazines.length) },
    (_, index) => magazines[(activeIndex + index) % magazines.length]
  );

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % magazines.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + magazines.length) % magazines.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#0B1912] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

      {/* SUBTLE BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full border border-[#D8BD76]/10" />
      <div className="pointer-events-none absolute -right-24 top-16 h-[320px] w-[320px] rounded-full border border-[#D8BD76]/10" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#1B3A29]/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#D8BD76]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8BD76]">
                The Renewable Energy Journal
              </span>
            </div>

            <h2 className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[50px]">
              Our{" "}
              <span className="font-semibold  text-[#D8BD76]">
                Magazines.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-[13px] leading-7 text-[#A6B2A8] sm:text-[14px]">
              Explore our latest editions featuring industry insights,
              exclusive interviews and the future of renewable energy.
            </p>
          </div>

          <Link
            to="/magazines"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] py-2 pl-5 pr-2 text-white transition-all duration-300 hover:border-[#D8BD76]/60 hover:bg-white/[0.08]"
          >
            <span className="text-[11px] font-bold">
              View All Magazines
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D8BD76] text-[#172D21]">
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </Link>
        </motion.div>

        {/* MAGAZINE CAROUSEL */}
        <div className="relative">

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-7 lg:grid-cols-4 lg:gap-x-10">

            <AnimatePresence mode="popLayout">
              {visibleMagazines.map((magazine, index) => (
                <motion.article
                  key={magazine.id}
                  layout
                  initial={reduce ? false : { opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{
                    duration: reduce ? 0 : 0.5,
                    delay: reduce ? 0 : index * 0.07,
                    ease: EASE,
                  }}
                  className="group min-w-0"
                >
                  <Link
                    to={magazine.slug || "/magazines"}
                    className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8BD76]"
                  >

                    {/* MAGAZINE COVER */}
                    <div className="relative mx-auto max-w-[270px] overflow-hidden rounded-sm border border-[#D8BD76]/25 bg-[#101E17] p-2 shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#D8BD76]/70 group-hover:shadow-[0_25px_45px_rgba(0,0,0,0.5)]">

                      {/* Fixed portrait stage, full image visible */}
                      <div className="relative flex aspect-[3/4.1] items-center justify-center overflow-hidden bg-[#08120D]">

                        <img
                          src={magazine.image}
                          alt={`${magazine.title} - ${magazine.issue}`}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                        />

                        <div className="pointer-events-none absolute inset-0 border border-white/10" />

                        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#D8BD76] text-[#172D21] opacity-0 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100">
                          <ArrowUpRight size={17} />
                        </span>
                      </div>
                    </div>

                    {/* MAGAZINE DETAILS */}
                    <div className="mx-auto mt-5 max-w-[270px] text-center">

                      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#D8BD76] sm:text-[10px]">
                        {magazine.edition}
                      </span>

                      <h3 className="mt-2 font-display text-[14px] font-extrabold text-white sm:text-[16px]">
                        {magazine.title}
                      </h3>

                      <p className="mt-2 flex items-center justify-center gap-2 text-[10px] text-[#A5B0A7] sm:text-[11px]">
                        <CalendarDays size={13} className="text-[#D8BD76]" />
                        {magazine.issue}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-[#D8BD76] sm:text-[11px]">
                        Explore Edition

                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>

                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>

          </div>

          {/* CAROUSEL CONTROLS */}
          {magazines.length > visibleCount && (
            <div className="mt-12 flex items-center justify-center gap-5">

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous magazines"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#D8BD76] hover:bg-[#D8BD76] hover:text-[#172D21]"
              >
                <ArrowLeft size={18} />
              </button>

              <span className="text-[11px] font-bold tabular-nums tracking-wider text-[#D8BD76]">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="mx-2 text-white/30">/</span>
                {String(magazines.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next magazines"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#D8BD76] hover:bg-[#D8BD76] hover:text-[#172D21]"
              >
                <ArrowRight size={18} />
              </button>

            </div>
          )}

        </div>

        {/* BOTTOM EDITORIAL STRIP */}
        <div className="mt-14 flex items-center gap-4 border-t border-white/10 pt-6">
          <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.2em] text-[#A5B0A7]">
            Read · Discover · Explore
          </span>

          <span className="h-px flex-1 bg-white/10" />

          <BookOpen size={17} className="text-[#D8BD76]" />
        </div>

      </div>
    </section>
  );
}
