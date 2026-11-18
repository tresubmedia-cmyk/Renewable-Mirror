
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const milestones = [
  {
    stage: "Our Beginning",
    title: "A Vision for Clean Energy",
    description:
      "Renewable Mirror was envisioned as a platform to bring the renewable energy industry into sharper focus through news, stories and meaningful insights.",
  },
  {
    stage: "Building Connections",
    title: "Bringing Industry Voices Together",
    description:
      "Creating opportunities to connect businesses, professionals and innovators through interviews, editorial stories and industry conversations.",
  },
  {
    stage: "Expanding Perspectives",
    title: "Covering a Changing Industry",
    description:
      "Exploring developments across solar, wind, energy storage and emerging technologies shaping the renewable energy landscape.",
  },
  {
    stage: "The Road Ahead",
    title: "Looking Towards Tomorrow",
    description:
      "Continuing to share valuable perspectives, highlight innovation and strengthen connections across the renewable energy ecosystem.",
  },
];

function Milestone({ item, index, lit, onEnter }) {
  const ref = useRef(null);
  const inFocus = useInView(ref, { margin: "-42% 0px -42% 0px" });

  useEffect(() => {
    if (inFocus) onEnter(index);
  }, [inFocus, index, onEnter]);

  return (
    <li ref={ref} className="relative pb-20 last:pb-10">

      {/* Timeline node */}
      <span
        aria-hidden
        className={`absolute -left-12 top-2 h-3.5 w-3.5 rounded-full border-2 transition-all duration-700 sm:-left-16 ${
          lit
            ? "border-[#E6B94A] bg-[#E6B94A] shadow-[0_0_0_6px_rgba(230,185,74,0.15),0_0_24px_rgba(230,185,74,0.4)]"
            : "border-white/25 bg-[#111827]"
        }`}
      />

      <div
        className={`transition-opacity duration-700 ${
          lit ? "opacity-100" : "opacity-35"
        }`}
      >
        <p className="font-serif text-base text-[#E6B94A] sm:text-[17px]">
          {item.stage}
        </p>

        <h3 className="mt-3 text-[25px] font-bold leading-tight tracking-tight text-white sm:text-[30px]">
          {item.title}
        </h3>

        <p className="mt-4 max-w-lg text-[13px] leading-[1.9] text-white/65 sm:text-[14px]">
          {item.description}
        </p>
      </div>
    </li>
  );
}

export default function OurJourney() {
  const reduce = useReducedMotion();
  const listRef = useRef(null);
  const [active, setActive] = useState(0);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 65%", "end 60%"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const progress = reduce ? scrollYProgress : smooth;

  const sparkTop = useTransform(
    progress,
    (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`
  );

  return (
    <section className="relative overflow-hidden bg-[#111827] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">

      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#F5A000]/[0.045] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* LEFT — heading + chapter counter */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#F5A000]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E6B94A]">
                Our Journey
              </span>
            </div>

            <h2 className="text-[clamp(34px,3.8vw,50px)] font-bold leading-[1.1] tracking-[-0.04em]">
              Every Step Has
              <span className="block font-serif font-medium text-[#E6B94A]">
                A Purpose.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-[13px] leading-[1.9] text-white/65 sm:text-[14px]">
              Our journey reflects a commitment to bringing the renewable
              energy industry closer through information, perspectives and
              meaningful connections.
            </p>

            {/* Chapter counter */}
            <div aria-hidden className="mt-12 hidden lg:block">
              <div className="flex items-baseline gap-3 font-serif">
                <div className="h-[5.5rem] overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={active}
                      initial={reduce ? false : { y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={reduce ? undefined : { y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="block text-[6rem] leading-none text-[#E6B94A]"
                    >
                      {String(active + 1).padStart(2, "0")}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <span className="text-xl text-white/35">
                  / {String(milestones.length).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-3 text-[13px] text-white/60">
                {milestones[active].stage}
              </p>
            </div>
          </motion.div>

          {/* RIGHT — timeline */}
          <div className="pl-12 sm:pl-16">
            <div className="relative">

              {/* Track */}
              <div className="absolute bottom-0 -left-10 top-0 w-px -translate-x-1/2 bg-white/15 sm:-left-14" />

              {/* Scroll progress */}
              <motion.div
                aria-hidden
                style={{ scaleY: progress }}
                className="absolute bottom-0 -left-10 top-0 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-[#E6B94A]/60 to-[#F5A000] sm:-left-14"
              />

              {/* Progress spark */}
              <div
                aria-hidden
                className="absolute bottom-0 -left-10 top-0 w-0 sm:-left-14"
              >
                <motion.span
                  style={{ top: sparkTop }}
                  className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_6px_rgba(245,160,0,0.5)]"
                />
              </div>

              <ol ref={listRef} className="relative">
                {milestones.map((item, i) => (
                  <Milestone
                    key={item.stage}
                    item={item}
                    index={i}
                    lit={i <= active}
                    onEnter={setActive}
                  />
                ))}
              </ol>
            </div>

            <p className="font-serif text-xl italic text-[#E6B94A] sm:text-[22px]">
              Connecting perspectives. Inspiring progress.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
