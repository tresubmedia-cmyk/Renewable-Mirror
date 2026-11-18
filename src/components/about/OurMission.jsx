
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const items = [
  {
    id: "mission",
    word: "Mission",
    description:
      "To deliver meaningful renewable energy news, insights and industry perspectives that keep our readers informed and connected.",
  },
  {
    id: "vision",
    word: "Vision",
    description:
      "To become a trusted media platform that brings greater visibility to the people, ideas and innovations shaping clean energy.",
  },
  {
    id: "purpose",
    word: "Purpose",
    description:
      "To connect the renewable energy ecosystem through credible information, engaging stories and knowledge sharing.",
  },
];

function Word({ text, reduce }) {
  const wrap = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.05 } },
    exit: { transition: { staggerChildren: reduce ? 0 : 0.025 } },
  };

  const letter = {
    hidden: { y: reduce ? 0 : "110%" },
    show: {
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: EASE },
    },
    exit: {
      y: reduce ? 0 : "110%",
      transition: { duration: reduce ? 0 : 0.3, ease: EASE },
    },
  };

  return (
    <div className="h-[0.84em] overflow-hidden leading-none">
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          variants={wrap}
          initial="hidden"
          animate="show"
          exit="exit"
          className="inline-block whitespace-nowrap"
        >
          {[...text].map((ch, i) => (
            <motion.span key={i} variants={letter} className="inline-block">
              {ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function OurMission() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = items[active];

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setActive((a) => (a + 1) % items.length);
    }
    if (e.key === "ArrowLeft") {
      setActive((a) => (a - 1 + items.length) % items.length);
    }
  };

  return (
    <section
      id="our-mission"
      className="relative overflow-hidden bg-[#111827] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28"
    >
      {/* RIPPLE FILTER */}
      <svg aria-hidden className="absolute h-0 w-0">
        <defs>
          <filter id="mm-ripple" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.004 0.04"
              numOctaves="2"
              seed="4"
              result="noise"
            >
              {!reduce && (
                <animate
                  attributeName="baseFrequency"
                  dur="9s"
                  repeatCount="indefinite"
                  values="0.004 0.04;0.012 0.06;0.004 0.04"
                />
              )}
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="22"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* GOLD AMBIENT GLOW */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#F5A000]/[0.045] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* TOP ROW */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Mission.
              <span className="font-serif font-medium text-[#E6B94A]">
                {" "}Our Direction.
              </span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-white/65 sm:text-[14px]">
              The principles that guide our work and shape the perspective we
              bring to the renewable energy industry.
            </p>
          </div>

          {/* TABS */}
          <div
            role="tablist"
            aria-label="What drives us"
            onKeyDown={onKeyDown}
            className="flex gap-7"
          >
            {items.map((item, i) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={active === i}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                className={`relative pb-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A] ${
                  active === i
                    ? "text-[#E6B94A]"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {item.word}

                {active === i && (
                  <motion.span
                    layoutId="mm-tab"
                    transition={{
                      duration: reduce ? 0 : 0.4,
                      ease: EASE,
                    }}
                    className="absolute inset-x-0 bottom-0 h-px bg-[#F5A000]"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* STAGE */}
        <div className="mt-14 grid items-end gap-10 lg:mt-20 lg:grid-cols-[1fr_21rem] lg:gap-16">

          <div
            aria-hidden
            className="select-none font-serif font-medium tracking-tight text-[#E6B94A]"
            style={{ fontSize: "clamp(4rem, 14vw, 11rem)" }}
          >
            <Word text={current.word} reduce={reduce} />

            {/* WATERLINE */}
            <div className="h-px bg-gradient-to-r from-[#F5A000] via-[#F5A000]/40 to-transparent" />

            {/* REFLECTION */}
            <div
              className="opacity-30"
              style={{
                filter: "url(#mm-ripple)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, transparent 85%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, transparent 85%)",
              }}
            >
              <div style={{ transform: "scaleY(-1)" }}>
                <Word text={current.word} reduce={reduce} />
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="lg:pb-3" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="border-l border-[#F5A000]/70 pl-6 text-base leading-7 text-white/80"
              >
                <span className="sr-only">{current.word}: </span>
                {current.description}
              </motion.p>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
