import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.14, ease: EASE }}
      className="group flex flex-col"
    >
      {/* The issue sits on a shelf and is pulled forward on hover */}
      <a
        href={magazine.pdf}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read ${magazine.title}`}
        className="relative mx-auto block w-full max-w-[300px] outline-none"
        style={{ perspective: 1000 }}
      >
        {/* Floor shadow */}
        <span
          aria-hidden
          className="absolute -bottom-4 left-6 right-6 h-5 rounded-full bg-[#0B2117]/30 blur-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:left-10 group-hover:right-10 group-hover:bg-[#0B2117]/20 motion-reduce:transition-none"
        />

        <div className="relative aspect-[3/4] overflow-hidden bg-[#10291D] shadow-[0_24px_40px_-18px_rgba(11,33,23,0.55)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within:[transform:perspective(1000px)_rotateY(-7deg)_translateY(-14px)] group-hover:[transform:perspective(1000px)_rotateY(-7deg)_translateY(-14px)] motion-reduce:transition-none motion-reduce:group-hover:[transform:none]">
          {/* Fallback until the cover image exists */}
          <div
            aria-hidden
            className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-[#234433] to-[#10291D] p-6"
          >
            <p className="font-serif text-lg leading-tight text-[#F4F1E8]">
              Renewable
              <span className="block  text-[#D9BC70]">Mirror.</span>
            </p>
            <p className="font-serif text-3xl italic text-[#D9BC70]">
              {magazine.month}
            </p>
          </div>

          {!failed && (
            <img
              src={magazine.cover}
              alt={magazine.title}
              loading="lazy"
              onError={() => setFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          {/* Spine shade */}
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/30 to-transparent"
          />
        </div>
      </a>

      {/* Details */}
      <div className="mx-auto mt-12 w-full max-w-[300px]">
        <h3 className="font-serif text-3xl font-medium tracking-tight text-[#17291F]">
          {magazine.month}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#5F6E63]">
          {magazine.description}
        </p>

        <a
          href={magazine.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-5 inline-flex items-center gap-2 pb-1.5 text-sm font-semibold text-[#17291F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A58B4D]"
        >
          Read magazine
          <ArrowUpRight
            size={16}
            className="text-[#A58B4D] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-[#DCE3D9]"
          />
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#A58B4D] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none"
          />
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
      className="bg-[#F7F8F5] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 flex flex-col justify-between gap-5 sm:flex-row sm:items-end lg:mb-24"
        >
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#17291F] sm:text-5xl">
            The Latest
            <span className="ml-3 font-serif font-medium  text-[#A58B4D]">
              Editions.
            </span>
          </h2>
          <p className="max-w-xs text-base leading-7 text-[#5F6E63]">
            Pick an edition and start reading.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
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