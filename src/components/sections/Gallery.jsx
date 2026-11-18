
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const defaultItems = [
  {
    id: 1,
    category: "Industry Events",
    title: "Connecting Leaders. Creating Opportunities.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: 2,
    category: "Solar Energy",
    title: "Exploring the Future of Clean Energy",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    category: "Wind Energy",
    title: "Innovation Powering a Sustainable Future",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    category: "Conferences",
    title: "Ideas That Move the Industry Forward",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    category: "Industry Moments",
    title: "Moments Beyond the Headlines",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Gallery({ items = defaultItems }) {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(null);
  const direction = useRef(1);
  const closeRef = useRef(null);
  const lastTrigger = useRef(null);

  const total = items?.length || 0;
  const isOpen = activeIndex !== null;

  const close = useCallback(() => {
    setActiveIndex(null);
    lastTrigger.current?.focus?.();
  }, []);

  const next = useCallback(() => {
    direction.current = 1;
    setActiveIndex((i) => (i === null ? i : (i + 1) % total));
  }, [total]);

  const prev = useCallback(() => {
    direction.current = -1;
    setActiveIndex((i) => (i === null ? i : (i - 1 + total) % total));
  }, [total]);

  const jumpTo = (index) => {
    direction.current = index > activeIndex ? 1 : -1;
    setActiveIndex(index);
  };

  // Keyboard controls + background scroll lock while lightbox is open
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, next, prev]);

  if (total === 0) return null;

  const active = isOpen ? items[activeIndex] : null;

  const headerMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: EASE },
      };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.11, delayChildren: 0.1 },
    },
  };

  const tileVariants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: EASE },
    },
  };

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: reduce ? 0 : dir * 70 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: reduce ? 0 : dir * -70 }),
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#111827] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-[1400px]">
          {/* HEADER */}
          <motion.div
            {...headerMotion}
            className="mb-10 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:mb-12 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#F5A000]" />
                <span className="text-[12px] font-semibold tracking-[0.04em] text-[#E6B94A]">
                  Beyond the headlines
                </span>
              </div>

              <p className="font-display text-[34px] font-bold leading-[1.1] tracking-[-0.04em] text-white sm:text-[32px] lg:text-[40px]">
                Moments In <span className="text-[#E6B94A]">Focus.</span>
              </p>

              <p className="mt-4 max-w-xl text-[14px] leading-7 text-white/75">
                A visual journey through the people, events and experiences
                shaping the renewable energy industry.
              </p>
            </div>

            <Link
              to="/gallery"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 transition-all duration-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
            >
              <span className="text-[12px] font-semibold text-[#111827]">
                Explore full gallery
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A000] text-[#111827] transition-colors duration-300 group-hover:bg-[#E6B94A]">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </Link>
          </motion.div>

          {/* BENTO GRID */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[300px] lg:grid-cols-4 lg:auto-rows-[340px] lg:gap-5"
          >
            {items.map((item, index) => {
              const isLead = index === 0;

              return (
                <motion.button
                  key={item.id}
                  variants={tileVariants}
                  type="button"
                  onClick={(e) => {
                    lastTrigger.current = e.currentTarget;
                    direction.current = 1;
                    setActiveIndex(index);
                  }}
                  aria-label={`Open photo: ${item.title}`}
                  className={`group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition-colors duration-500 hover:border-[#F5A000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000] ${
                    isLead ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F8FAFC] sm:aspect-auto sm:min-h-0 sm:flex-1">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                    />

                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#111827] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F5A000]">
                      <Maximize2 size={16} />
                    </span>
                  </div>

                  <div className="border-t-4 border-[#F5A000] p-4 sm:p-5">
                    <p className="inline-block rounded-full bg-[#111827] px-3 py-1 text-[11px] font-semibold text-white">
                      {item.category}
                    </p>

                    <h3
                      className={`mt-3 font-display font-bold leading-snug tracking-[-0.02em] text-[#111827] ${
                        isLead
                          ? "max-w-md text-[20px] sm:text-[26px]"
                          : "line-clamp-2 text-[15px] sm:text-[16px]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#111827]/95 backdrop-blur-md"
            onClick={close}
          >
            {/* TOP BAR */}
            <div className="flex items-center justify-end p-4 sm:p-6">
              <button
                ref={closeRef}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                aria-label="Close gallery"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-[#F5A000] hover:text-[#111827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A000]"
              >
                <X size={21} />
              </button>
            </div>

            {/* STAGE */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-[#F5A000] hover:text-[#111827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A000] sm:left-8 sm:h-12 sm:w-12"
              >
                <ChevronLeft size={24} />
              </button>

              <AnimatePresence mode="wait" custom={direction.current}>
                <motion.figure
                  key={active.id}
                  custom={direction.current}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: EASE }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex max-h-full w-full max-w-5xl flex-col items-center"
                >
                  <img
                    src={active.image}
                    alt={active.title}
                    className="max-h-[62vh] w-full rounded-xl object-contain"
                  />

                  <figcaption className="mt-5 text-center">
                    <p className="inline-block rounded-full bg-[#F5A000] px-3 py-1 text-[11px] font-semibold text-[#111827]">
                      {active.category}
                    </p>

                    <h3 className="mt-3 font-display text-lg font-bold text-white sm:text-2xl">
                      {active.title}
                    </h3>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-[#F5A000] hover:text-[#111827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A000] sm:right-8 sm:h-12 sm:w-12"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* THUMBNAILS */}
            <div
              className="flex justify-center gap-2 overflow-x-auto p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => jumpTo(index)}
                  aria-label={`Show photo: ${item.title}`}
                  aria-current={index === activeIndex}
                  className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A000] ${
                    index === activeIndex
                      ? "border-[#F5A000] opacity-100"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
