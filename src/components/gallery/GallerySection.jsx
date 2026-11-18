
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Images,
  X,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const galleryImages = [
  { id: 1, title: "Industry Events", category: "Events", image: "/images/gallery/gallery-1.jpg" },
  { id: 2, title: "Renewable Energy Exhibition", category: "Exhibitions", image: "/images/gallery/gallery-2.jpg" },
  { id: 3, title: "Industry Leaders", category: "People", image: "/images/gallery/gallery-3.jpg" },
  { id: 4, title: "Solar Energy Projects", category: "Projects", image: "/images/gallery/gallery-4.jpg" },
  { id: 5, title: "Expert Conversations", category: "People", image: "/images/gallery/gallery-5.jpg" },
  { id: 6, title: "Energy Conferences", category: "Events", image: "/images/gallery/gallery-6.jpg" },
  { id: 7, title: "Industry Networking", category: "Events", image: "/images/gallery/gallery-7.jpg" },
  { id: 8, title: "Clean Energy Innovation", category: "Projects", image: "/images/gallery/gallery-8.jpg" },
  { id: 9, title: "Renewable Energy Experts", category: "People", image: "/images/gallery/gallery-9.jpg" },
];

const categories = ["All", "Events", "Exhibitions", "People", "Projects"];

const SPANS = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "lg:row-span-2",
];

const pad = (n) => String(n).padStart(2, "0");

function Placeholder({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 flex items-center justify-center bg-[#163d56] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,162,42,0.10),transparent_60%)]" />
      <Camera
        size={36}
        strokeWidth={1.2}
        className="relative text-[#d4a22a]/50"
      />
    </div>
  );
}

/* ---------------- GALLERY TILE ---------------- */

function Tile({ item, index, onOpen, reduce }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.button
      layout={!reduce}
      type="button"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index, 6) * 0.05,
        ease: EASE,
      }}
      onClick={() => onOpen(index)}
      aria-label={`View photograph: ${item.title}`}
      className={`group relative isolate min-h-0 overflow-hidden rounded-2xl bg-[#163d56] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#d4a22a] focus-visible:ring-offset-4 focus-visible:ring-offset-white ${SPANS[index % SPANS.length]}`}
    >
      <Placeholder />

      {!failed && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          draggable="false"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] motion-reduce:transition-none"
        />
      )}

      {/* Image overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#071b2a]/90 via-[#071b2a]/20 to-[#071b2a]/5 transition-opacity duration-500 group-hover:from-[#071b2a]/95"
      />

      {/* Top details */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
        <span className="rounded-full border border-white/20 bg-[#102f45]/70 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-white backdrop-blur-md">
          {pad(index + 1)}
        </span>

        <span className="rounded-full border border-white/20 bg-[#102f45]/50 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white/80 backdrop-blur-md">
          {item.category}
        </span>
      </div>

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <div>
          <span className="mb-2 block h-px w-8 bg-[#d4a22a] transition-all duration-500 group-hover:w-14" />

          <h3 className="max-w-sm font-serif text-xl leading-snug text-white sm:text-2xl">
            {item.title}
          </h3>

          <p className="mt-2 text-xs font-medium tracking-wide text-white/60">
            Explore photograph
          </p>
        </div>

        <span className="flex h-10 w-10 shrink-0 translate-y-2 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:border-[#d4a22a] group-hover:bg-[#d4a22a] group-hover:text-[#1e4e6d] group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </motion.button>
  );
}

/* ---------------- LIGHTBOX ---------------- */

function Lightbox({ items, index, setIndex, onClose, reduce }) {
  const item = items[index];
  const [failed, setFailed] = useState(false);
  const closeRef = useRef(null);

  const go = useCallback(
    (direction) => {
      setIndex((current) => (current + direction + items.length) % items.length);
    },
    [items.length, setIndex]
  );

  useEffect(() => {
    setFailed(false);
  }, [item.id]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }

      if (e.key === "Tab") {
        const focusable = document.querySelectorAll(
          '[data-gallery-lightbox] button:not([disabled])'
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [go, onClose]);

  const navBtn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:border-[#d4a22a] hover:bg-[#d4a22a] hover:text-[#1e4e6d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6b94a] sm:h-12 sm:w-12";

  return (
    <motion.div
      data-gallery-lightbox
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${item.title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex flex-col bg-[#071b2a]/95 p-4 backdrop-blur-xl sm:p-7"
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="font-serif text-xl text-white sm:text-2xl">
            {pad(index + 1)}
            <span className="text-white/35"> / {pad(items.length)}</span>
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e6b94a]">
            Renewable Mirror Gallery
          </p>
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className={navBtn}
        >
          <X size={20} />
        </button>
      </div>

      {/* Main image */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center py-5"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={item.id}
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex max-h-full w-full flex-col items-center"
          >
            {failed ? (
              <div className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-2xl">
                <Placeholder />
              </div>
            ) : (
              <img
                src={item.image}
                alt={item.title}
                draggable="false"
                onError={() => setFailed(true)}
                className="max-h-[68vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
            )}

            <figcaption className="mt-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e6b94a]">
                {item.category}
              </p>
              <p className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                {item.title}
              </p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div
        className="flex items-center justify-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photograph"
          className={navBtn}
        >
          <ArrowLeft size={19} />
        </button>

        <span className="text-xs font-medium tracking-widest text-white/45">
          {pad(index + 1)} / {pad(items.length)}
        </span>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photograph"
          className={navBtn}
        >
          <ArrowRight size={19} />
        </button>
      </div>
    </motion.div>
  );
}

/* ---------------- GALLERY SECTION ---------------- */

export default function GallerySection() {
  const reduce = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeCategory);

  const countFor = (category) =>
    category === "All"
      ? galleryImages.length
      : galleryImages.filter((item) => item.category === category).length;

  const closeLightbox = useCallback(() => {
    setOpenIndex(null);
  }, []);

  return (
    <>
      <section
        id="gallery-images"
        className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
      >
        {/* Subtle section decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#d4a22a]/[0.045] blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">

          {/* Header */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-12"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#d4a22a]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#bd9134] sm:text-xs">
                  Moments & Memories
                </p>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#1e4e6d] sm:text-5xl lg:text-[56px]">
                Explore Our{" "}
                <span className="text-[#bd9134]">Gallery.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#647783] sm:text-base sm:leading-8">
                A visual journey through the people, events, projects and
                experiences shaping the renewable energy industry.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm font-medium text-[#647783]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e4e6d]/[0.07] text-[#bd9134]">
                <Images size={19} />
              </span>
              <span>
                <strong className="text-[#1e4e6d]">
                  {pad(filtered.length)}
                </strong>{" "}
                photographs
              </span>
            </div>
          </motion.div>

          {/* Category filters */}
          <div className="mb-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-[#1e4e6d]/10">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCategory(category)}
                  className={`relative pb-4 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a22a] ${
                    active
                      ? "text-[#1e4e6d]"
                      : "text-[#71818a] hover:text-[#1e4e6d]"
                  }`}
                >
                  {category}

                  <sup className="ml-1.5 text-[10px] font-medium text-[#bd9134]">
                    {pad(countFor(category))}
                  </sup>

                  {active && (
                    <motion.span
                      layoutId="gallery-tab"
                      transition={{
                        duration: reduce ? 0 : 0.35,
                        ease: EASE,
                      }}
                      className="absolute inset-x-0 -bottom-px h-[2px] bg-[#d4a22a]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Gallery mosaic */}
          <motion.div
            layout={!reduce}
            className="grid auto-rows-[15rem] grid-cols-1 gap-4 [grid-auto-flow:dense] sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-cols-4 lg:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <Tile
                  key={item.id}
                  item={item}
                  index={index}
                  onOpen={setOpenIndex}
                  reduce={reduce}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <Camera size={36} className="mx-auto text-[#bd9134]" />

              <p className="mt-4 font-serif text-xl text-[#1e4e6d]">
                No photographs found
              </p>

              <p className="mt-2 text-sm text-[#647783]">
                Try selecting another category.
              </p>
            </div>
          )}

          {/* Bottom note */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#1e4e6d]/10 pt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#71818a] sm:text-xs">
              Capturing progress. Sharing perspectives.
            </p>

            <p className="text-xs font-medium text-[#bd9134]">
              Renewable Mirror
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && filtered[openIndex] && (
          <Lightbox
            items={filtered}
            index={openIndex}
            setIndex={setOpenIndex}
            onClose={closeLightbox}
            reduce={reduce}
          />
        )}
      </AnimatePresence>
    </>
  );
}
