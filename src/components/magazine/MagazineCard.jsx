
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, BookOpen } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const magazines = [
  {
    id: 1,
    month: "May 2026",
    title: "Renewable Mirror – May 2026",
    description:
      "Explore the latest renewable energy news, technologies, projects and industry insights.",
    cover: "/images/magazines/may-2026.jpg",
    pdf: "/magazines/renewable-mirror-may-2026.pdf",
  },
  {
    id: 2,
    month: "June 2026",
    title: "Renewable Mirror – June 2026",
    description:
      "Discover the latest developments, trends and expert insights from the renewable energy sector.",
    cover: "/images/magazines/june-2026.jpg",
    pdf: "/magazines/renewable-mirror-june-2026.pdf",
  },
  {
    id: 3,
    month: "July 2026",
    title: "Renewable Mirror – July 2026",
    description:
      "Read the latest renewable energy trends, technologies, projects and industry updates.",
    cover: "/images/magazines/july-2026.jpg",
    pdf: "/magazines/renewable-mirror-july-2026.pdf",
  },
];

function MagazineItem({ magazine, index, reduce }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: EASE,
      }}
      className="group flex min-w-0 flex-col"
    >
      {/* MAGAZINE COVER */}
      <a
        href={magazine.pdf}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read ${magazine.title}`}
        className="relative mx-auto block w-full max-w-[290px] outline-none"
        style={{ perspective: 1200 }}
      >
        {/* BOOK SHADOW */}
        <div
          aria-hidden
          className="absolute inset-x-5 -bottom-3 top-4 rounded-sm bg-black/20 blur-xl transition-all duration-500 group-hover:inset-x-3 group-hover:bg-black/30"
        />

        {/* BACK COVER LAYERS */}
        <div
          aria-hidden
          className="absolute inset-0 translate-x-2 translate-y-1 bg-[#E6B94A]/80 transition-transform duration-500 group-hover:translate-x-3"
        />

        {/* MAIN COVER */}
        <motion.div
          whileHover={reduce ? undefined : { rotateY: -5, y: -7 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="relative aspect-[3/4] overflow-hidden border border-white/25 bg-[#F2F3F4] shadow-md transition-colors duration-500 group-hover:border-[#F5A000]"
        >
          {/* FALLBACK COVER */}
          <div
            aria-hidden
            className="absolute inset-0 flex flex-col justify-between bg-[#F2F3F4] p-6 text-[#1F2937]"
          >
            <div>
              <p className="font-serif text-xl font-semibold leading-tight">
                Renewable
                <span className="block text-[#B8860B]">Mirror.</span>
              </p>

              <div className="mt-4 h-px w-full bg-[#1F2937]/20" />

              <p className="mt-5 text-[9px] font-bold tracking-[0.2em] text-[#B8860B]">
                THE ENERGY WORLD
              </p>

              <h3 className="mt-3 font-serif text-4xl leading-[1.05]">
                A new
                <span className="block text-[#B8860B]">energy</span>
                era.
              </h3>
            </div>

            <p className="text-[9px] font-semibold tracking-[0.15em] text-[#B8860B]">
              IDEAS POWERING TOMORROW
            </p>
          </div>

          {/* ACTUAL COVER */}
          {!failed && (
            <img
              src={magazine.cover}
              alt={magazine.title}
              loading="lazy"
              onError={() => setFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          {/* SPINE */}
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/20 to-transparent"
          />

          {/* COVER HOVER SHINE */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* OPEN ICON */}
          <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#111827] shadow-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#F5A000]">
            <ArrowUpRight size={18} />
          </span>
        </motion.div>
      </a>

      {/* MAGAZINE DETAILS */}
      <div className="mx-auto mt-7 w-full max-w-[290px]">

        {/* ISSUE META */}
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#E6B94A]">
          <CalendarDays size={13} />
          Magazine Edition
        </div>

        {/* TITLE */}
        <h3 className="mt-3 font-serif text-[23px] font-medium leading-tight tracking-[-0.02em] text-white sm:text-[25px]">
          {magazine.month}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 min-h-[66px] text-[13px] leading-[1.8] text-white/70">
          {magazine.description}
        </p>

        {/* DIVIDER */}
        <div className="mt-5 h-px w-full bg-white/20 transition-colors duration-500 group-hover:bg-[#F5A000]/70" />

        {/* READ BUTTON */}
        <a
          href={magazine.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="group/read mt-4 inline-flex items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 text-[12px] font-semibold text-[#111827] transition-all duration-300 hover:bg-[#F3F4F6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
        >
          <BookOpen size={14} />
          Read magazine

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5A000] text-[#111827] transition-colors duration-300 group-hover/read:bg-[#E6B94A]">
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover/read:rotate-45"
            />
          </span>
        </a>
      </div>
    </motion.article>
  );
}

export default function MagazineCard() {
  const reduce = useReducedMotion();

  return (
    <section
      id="magazine-editions"
      className="relative overflow-hidden bg-[#111827] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* SUBTLE BACKGROUND DETAILS */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#F5A000]/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1400px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 flex flex-col justify-between gap-5 border-b border-white/20 pb-7 sm:flex-row sm:items-end lg:mb-16"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F5A000]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E6B94A]">
                Renewable Mirror
              </span>
            </div>

            <p className="font-display text-[30px] font-bold leading-[1.1] tracking-[-0.04em] text-white sm:text-[38px] lg:text-[44px]">
              The Latest{" "}
              <span className="font-serif font-medium text-[#E6B94A]">
                Editions.
              </span>
            </p>
          </div>

          <p className="max-w-xs text-[13px] leading-7 text-white/70">
            Discover our latest publications, industry insights and stories
            shaping the renewable energy future.
          </p>
        </motion.div>

        {/* MAGAZINE GRID */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
          {magazines.map((magazine, index) => (
            <MagazineItem
              key={magazine.id}
              magazine={magazine}
              index={index}
              reduce={reduce}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
