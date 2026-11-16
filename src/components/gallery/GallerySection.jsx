import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, Images, X } from "lucide-react";

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

/* Mosaic rhythm: a big tile, small ones, a wide one, a tall one, then repeat */
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
      aria-hidden
      className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#234433] to-[#10291D] ${className}`}
    >
      <Camera size={34} strokeWidth={1.2} className="text-[#D9BC70]/35" />
    </div>
  );
}

function Tile({ item, index, onOpen, reduce }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.button
      layout={!reduce}
      type="button"
      initial={reduce ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.6, delay: Math.min(index, 6) * 0.06, ease: EASE }}
      onClick={() => onOpen(index)}
      aria-label={`Open ${item.title}`}
      className={`group relative overflow-hidden rounded-2xl bg-[#10291D] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#A58B4D] focus-visible:ring-offset-2 ${SPANS[index % SPANS.length]}`}
    >
      <Placeholder />
      {!failed && (
        <img
          src={item.image}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07] motion-reduce:transition-none"
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#07140D]/85 via-[#07140D]/10 to-transparent transition-opacity duration-500 group-hover:opacity-90"
      />

      {/* Number tag */}
      <span className="absolute left-5 top-5 rounded-full bg-[#F4F1E8]/90 px-3 py-1 text-xs font-semibold text-[#10291D]">
        {pad(index + 1)}
      </span>

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <div>
          <p className="text-sm font-medium text-[#D9BC70]">{item.category}</p>
          <h3 className="mt-1 font-serif text-xl leading-snug text-[#F4F1E8] sm:text-2xl">
            {item.title}
          </h3>
        </div>
        <span className="flex h-11 w-11 shrink-0 translate-y-1 items-center justify-center rounded-full border border-white/40 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:border-[#D9BC70] group-hover:bg-[#D9BC70] group-hover:text-[#10291D] group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </motion.button>
  );
}

function Lightbox({ items, index, setIndex, onClose, reduce }) {
  const item = items[index];
  const [failed, setFailed] = useState(false);
  const closeRef = useRef(null);

  const go = useCallback(
    (d) => setIndex((i) => (i + d + items.length) % items.length),
    [items.length, setIndex]
  );

  useEffect(() => setFailed(false), [item.id]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [go, onClose]);

  const navBtn =
    "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-[#D9BC70] hover:text-[#10291D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D9BC70]";

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex flex-col bg-[#050F0A]/95 p-5 backdrop-blur-md sm:p-8"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between text-[#F4F1E8]" onClick={(e) => e.stopPropagation()}>
        <p className="font-serif text-xl">
          {pad(index + 1)}
          <span className="text-[#F4F1E8]/40"> / {pad(items.length)}</span>
        </p>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className={navBtn}>
          <X size={20} />
        </button>
      </div>

      {/* Image */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center py-6" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={item.id}
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex max-h-full w-full max-w-5xl flex-col items-center"
          >
            {failed ? (
              <div className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-xl">
                <Placeholder />
              </div>
            ) : (
              <img
                src={item.image}
                alt={item.title}
                onError={() => setFailed(true)}
                className="max-h-[68vh] w-auto max-w-full rounded-xl object-contain"
              />
            )}
            <figcaption className="mt-6 text-center">
              <p className="text-sm font-medium text-[#D9BC70]">{item.category}</p>
              <p className="mt-1 font-serif text-2xl text-[#F4F1E8]">{item.title}</p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Prev / next */}
      <div className="flex justify-center gap-4" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={() => go(-1)} aria-label="Previous photograph" className={navBtn}>
          <ArrowLeft size={20} />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next photograph" className={navBtn}>
          <ArrowRight size={20} />
        </button>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const reduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((i) => i.category === activeCategory);

  const countFor = (c) =>
    c === "All" ? galleryImages.length : galleryImages.filter((i) => i.category === c).length;

  return (
    <section id="gallery-images" className="bg-[#F7F8F5] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#10291D] sm:text-5xl lg:text-6xl">
              Explore Our
              <span className="block font-serif font-medium text-[#A58B4D]">Gallery.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5F6E63]">
              A visual journey through the people, events, projects and
              experiences shaping the renewable energy industry.
            </p>
          </div>

          <p className="flex items-center gap-3 text-sm font-medium text-[#5F6E63]">
            <Images size={19} className="text-[#A58B4D]" />
            {pad(filtered.length)} photographs
          </p>
        </motion.div>

        {/* Filters */}
        <div role="tablist" aria-label="Filter gallery" className="mb-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-[#E3E8E0]">
          {categories.map((c) => {
            const active = activeCategory === c;
            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveCategory(c)}
                className={`relative pb-4 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A58B4D] ${
                  active ? "text-[#10291D]" : "text-[#5F6E63] hover:text-[#10291D]"
                }`}
              >
                {c}
                <sup className="ml-1.5 text-xs font-medium text-[#A58B4D]">{pad(countFor(c))}</sup>
                {active && (
                  <motion.span
                    layoutId="gallery-tab"
                    transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-[#A58B4D]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mosaic */}
        <div className="grid auto-rows-[16rem] grid-cols-1 gap-4 [grid-auto-flow:dense] sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <Tile key={item.id} item={item} index={index} onOpen={setOpenIndex} reduce={reduce} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <Camera size={35} className="mx-auto text-[#A58B4D]" />
            <p className="mt-4 font-serif text-xl text-[#10291D]">No photographs found</p>
            <p className="mt-2 text-sm text-[#5F6E63]">Try selecting another category.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            items={filtered}
            index={openIndex}
            setIndex={setOpenIndex}
            onClose={() => setOpenIndex(null)}
            reduce={reduce}
          />
        )}
      </AnimatePresence>
    </section>
  );
}