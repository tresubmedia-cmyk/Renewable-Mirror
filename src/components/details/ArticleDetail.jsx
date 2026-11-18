import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  Check,
  Clock3,
  Link2,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import CommentSection from "./CommentSection";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A4B] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const shareBtn =
  "inline-flex items-center gap-2 rounded-full border border-[#DCE3D9] bg-white px-5 py-2.5 text-xs font-semibold text-[#365A40] transition hover:border-[#10291D] hover:bg-[#10291D] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A4B] focus-visible:ring-offset-2";

export default function ArticleDetail({ article }) {
  const reduceMotion = useReducedMotion();
  const bodyRef = useRef(null);

  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeId, setActiveId] = useState(null);

  // Reading progress (tracks the article body only)
  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ["start 85%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  // Headings -> table of contents
  const headings = useMemo(
    () =>
      (article?.content || [])
        .map((block, index) => ({ block, index }))
        .filter(({ block }) => block.type === "heading")
        .map(({ block, index }) => ({
          id: `section-${index}`,
          text: block.text,
        })),
    [article]
  );

  useEffect(() => {
    if (headings.length < 2) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  if (!article) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-white px-6 text-center">
        <h2 className="font-serif text-3xl text-[#10291D]">
          Article not found
        </h2>
        <p className="max-w-md text-sm leading-7 text-[#59665C]">
          This story may have been moved or removed. Head back to the news page
          to find something else to read.
        </p>
        <Link
          to="/news"
          className="inline-flex items-center gap-2 rounded-full bg-[#10291D] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#183C2C]"
        >
          <ArrowLeft size={15} />
          Back to News
        </Link>
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `${article.title} ${shareUrl}`;
  const authorName = article.author || "Editorial Team";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch {
      window.prompt("Copy this link", shareUrl);
    }
  };

  const scrollToSection = (id) => (event) => {
    event.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  // Index of the first plain paragraph (gets the drop cap)
  const firstParagraphIndex = (article.content || []).findIndex(
    (b) => !b.type || b.type === "paragraph"
  );

  return (
    <main className="w-full overflow-x-clip bg-white">
      {/* READING PROGRESS */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#10291D] via-[#B99A4B] to-[#D9BC70]"
      />

      {/* HERO */}
      <header className="relative overflow-hidden bg-white px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
        {/* Soft decoration */}
        <div className="pointer-events-none absolute -right-40 -top-48 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(217,188,112,0.18),transparent_65%)]" />
        <div className="pointer-events-none absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full border border-[#B99A4B]/20" />
        <div className="pointer-events-none absolute -right-16 -top-24 h-[400px] w-[400px] rounded-full border border-[#B99A4B]/20" />

        <div className="relative mx-auto max-w-[1500px]">
          <Link
            to="/news"
            className={`inline-flex items-center gap-2 rounded-full text-xs font-medium text-[#59665C] transition hover:text-[#10291D] ${focusRing}`}
          >
            <ArrowLeft size={15} />
            Back to News
          </Link>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 lg:mt-16"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#B99A4B]" />
              <span className="text-xs font-semibold tracking-[0.12em] text-[#8A6D2B]">
                {article.category || "Renewable Mirror"}
              </span>
            </div>

            <h1 className="mt-7 max-w-[1200px] text-balance font-sans text-4xl font-bold leading-[1.12] tracking-tight text-[#09251A] sm:text-5xl lg:text-6xl xl:text-[66px]">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="mt-7 max-w-3xl text-base leading-8 text-[#59665C] sm:text-lg">
                {article.excerpt}
              </p>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#E1E7DF] pt-6 text-sm text-[#59665C]">
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#10291D] font-serif text-base font-bold text-[#D9BC70]"
                >
                  {authorName.charAt(0).toUpperCase()}
                </span>
                <span>
                  <span className="block text-[11px] text-[#8A948B]">
                    Written by
                  </span>
                  <span className="font-medium text-[#10291D]">
                    {authorName}
                  </span>
                </span>
              </span>

              <span className="flex items-center gap-2">
                <CalendarDays size={16} className="text-[#B99A4B]" />
                {article.date}
              </span>

              {article.readTime && (
                <span className="flex items-center gap-2">
                  <Clock3 size={16} className="text-[#B99A4B]" />
                  {article.readTime}
                </span>
              )}
            </div>
          </motion.div>

          {/* ARTICLE IMAGE */}
          {article.image && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-12 overflow-hidden rounded-2xl bg-[#EFF2EC] shadow-[0_30px_70px_-25px_rgba(9,37,26,0.35)] ring-1 ring-black/5 lg:mt-14"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-[280px] w-full object-cover sm:h-[440px] lg:h-[min(66vh,720px)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B12]/25 via-transparent to-transparent" />

              <button
                type="button"
                aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
                aria-pressed={bookmarked}
                onClick={() => setBookmarked((v) => !v)}
                className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md transition sm:right-5 sm:top-5 ${focusRing} ${
                  bookmarked
                    ? "bg-[#D9BC70] text-[#09251A]"
                    : "bg-black/40 text-white hover:bg-[#D9BC70] hover:text-[#09251A]"
                }`}
              >
                <Bookmark
                  size={19}
                  fill={bookmarked ? "currentColor" : "none"}
                />
              </button>
            </motion.div>
          )}
        </div>
      </header>

      {/* ARTICLE BODY */}
      <section className="px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
          {/* CONTENT */}
          <div className="min-w-0">
            <div ref={bodyRef} className="max-w-[44rem]">
              {article.content?.length > 0 ? (
                article.content.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        id={`section-${index}`}
                        className="mb-5 mt-14 scroll-mt-28 text-balance font-serif text-2xl font-bold leading-snug text-[#10291D] sm:text-[32px]"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "image") {
                    const caption = block.caption || block.alt;
                    return (
                      <figure key={index} className="my-12 lg:-mx-10">
                        <img
                          src={block.src}
                          alt={block.alt || article.title}
                          loading="lazy"
                          className="w-full rounded-xl object-cover ring-1 ring-black/5"
                        />
                        {caption && (
                          <figcaption className="mt-3 border-l-2 border-[#B99A4B] pl-3 text-sm leading-6 text-[#6B776D]">
                            {caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }

                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={index}
                        className="relative my-12 border-l-4 border-[#B99A4B] bg-[#FAFAF6] py-8 pl-8 pr-6 sm:pl-10 sm:pr-10"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -top-2 left-5 font-serif text-7xl leading-none text-[#B99A4B]/30"
                        >
                          “
                        </span>
                        <p className="relative text-balance font-serif text-xl italic leading-relaxed text-[#1F3A2A] sm:text-[26px] sm:leading-[1.5]">
                          {block.text}
                        </p>
                      </blockquote>
                    );
                  }

                  const isLead = index === firstParagraphIndex;

                  return (
                    <p
                      key={index}
                      className={
                        isLead
                          ? "mb-7 font-serif text-xl leading-[1.85] text-[#25382C] first-letter:float-left first-letter:mr-3 first-letter:mt-1.5 first-letter:font-serif first-letter:text-[78px] first-letter:font-bold first-letter:leading-[0.8] first-letter:text-[#B99A4B] sm:text-[22px]"
                          : "mb-6 text-[17px] leading-[1.95] text-[#3F4C43]"
                      }
                    >
                      {block.text}
                    </p>
                  );
                })
              ) : (
                <p className="text-lg leading-8 text-[#59665C]">
                  {article.excerpt || "The full story will be available soon."}
                </p>
              )}
            </div>

            {/* END MARK */}
            {article.content?.length > 0 && (
              <div className="mt-10 flex items-center gap-3" aria-hidden="true">
                <span className="h-px w-10 bg-[#B99A4B]" />
                <span className="h-2 w-2 rotate-45 bg-[#B99A4B]" />
              </div>
            )}

            {/* SHARE */}
            <div className="mt-12 max-w-[44rem] rounded-2xl border border-[#E1E7DF] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(9,37,26,0.25)] sm:p-7">
              <p className="font-serif text-xl font-bold text-[#10291D]">
                Found this useful?
              </p>
              <p className="mt-1 text-sm text-[#59665C]">
                Send it to someone who follows the energy transition.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={shareBtn}
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className={shareBtn}
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>

                <button type="button" onClick={handleCopy} className={shareBtn}>
                  {copied ? <Check size={15} /> : <Link2 size={15} />}
                  {copied ? "Link copied" : "Copy link"}
                </button>
                <span role="status" aria-live="polite" className="sr-only">
                  {copied ? "Link copied to clipboard" : ""}
                </span>
              </div>
            </div>

            {/* COMMENTS */}
            <div className="mt-14 max-w-[44rem]">
              <CommentSection articleId={article.id} />
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {headings.length >= 2 && (
              <nav
                aria-label="In this article"
                className="mb-6 hidden rounded-2xl border border-[#E1E7DF] bg-white p-6 lg:block"
              >
                <p className="font-serif text-lg font-bold text-[#10291D]">
                  In this article
                </p>
                <ul className="mt-4 space-y-1">
                  {headings.map(({ id, text }) => {
                    const active = activeId === id;
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          onClick={scrollToSection(id)}
                          aria-current={active ? "true" : undefined}
                          className={`block border-l-2 py-1.5 pl-4 text-sm leading-snug transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A4B] ${
                            active
                              ? "border-[#B99A4B] font-semibold text-[#10291D]"
                              : "border-[#E1E7DF] text-[#6B776D] hover:border-[#B99A4B]/60 hover:text-[#10291D]"
                          }`}
                        >
                          {text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}

            <div className="relative overflow-hidden rounded-2xl border border-[#E1E7DF] border-t-[3px] border-t-[#B99A4B] bg-white p-7 shadow-[0_8px_30px_-18px_rgba(9,37,26,0.25)]">
              <p className="text-xs font-semibold tracking-[0.12em] text-[#8A6D2B]">
                Renewable Mirror
              </p>

              <h3 className="mt-4 font-serif text-2xl leading-snug text-[#10291D]">
                Stories that shape the energy future.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#59665C]">
                More industry news, analysis and developments from the
                renewable and green energy sector.
              </p>

              <Link
                to="/news"
                className={`group mt-7 inline-flex items-center gap-2 rounded-full bg-[#10291D] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#183C2C] ${focusRing}`}
              >
                Explore more stories
                <ArrowUpRight
                  size={15}
                  className="text-[#D9BC70] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="mt-6 border-t border-[#E1E7DF] pt-6">
              <p className="font-serif text-xl  text-[#526B55]">
                Read. Reflect. Reimagine.
              </p>
              <p className="mt-2 text-xs leading-5 text-[#7A857B]">
                An outlook of renewable &amp; green energy
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}