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
  // "In focus" = the milestone is crossing the middle band of the screen
  const inFocus = useInView(ref, { margin: "-42% 0px -42% 0px" });

  useEffect(() => {
    if (inFocus) onEnter(index);
  }, [inFocus, index, onEnter]);

  return (
    <li ref={ref} className="relative pb-24 last:pb-10">
      {/* Node on the line: lights up once the current reaches it */}
      <span
        aria-hidden
        className={`absolute -left-12 top-2 h-4 w-4 rounded-full border-2 transition-all duration-700 sm:-left-16 ${
          lit
            ? "border-[#D9BC70] bg-[#D9BC70] shadow-[0_0_0_6px_rgba(217,188,112,0.15),0_0_24px_rgba(217,188,112,0.5)]"
            : "border-white/25 bg-[#10291D]"
        }`}
      />

      <div className={`transition-opacity duration-700 ${lit ? "opacity-100" : "opacity-35"}`}>
        <p className="font-serif text-lg italic text-[#D9BC70]">{item.stage}</p>
        <h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {item.title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-8 text-[#F4F1E8]/65">
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

  // The "current" fills the line as the reader scrolls
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 65%", "end 60%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const progress = reduce ? scrollYProgress : smooth;
  const sparkTop = useTransform(progress, (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`);

  return (
    <section className="relative overflow-hidden bg-[#10291D] px-6 py-24 text-[#F4F1E8] sm:px-10 lg:px-16 lg:py-32">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* LEFT — heading + live chapter counter */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Every Step Has
              <span className="block font-serif font-medium  text-[#D9BC70]">
                A Purpose.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-[#F4F1E8]/60">
              Our journey reflects a commitment to bringing the renewable
              energy industry closer through information, perspectives and
              meaningful connections.
            </p>

            <div aria-hidden className="mt-14 hidden lg:block">
              <div className="flex items-baseline gap-3 font-serif">
                <div className="h-[6.5rem] overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={active}
                      initial={reduce ? false : { y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={reduce ? undefined : { y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="block text-[7rem] leading-none text-[#D9BC70]"
                    >
                      {String(active + 1).padStart(2, "0")}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-2xl text-[#F4F1E8]/30">
                  / {String(milestones.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 text-base text-[#F4F1E8]/60">{milestones[active].stage}</p>
            </div>
          </motion.div>

          {/* RIGHT — the line and its milestones */}
          <div className="pl-12 sm:pl-16">
           <div className="relative">
            {/* Track */}
            <div className="absolute bottom-0 -left-10 top-0 sm:-left-14 w-px -translate-x-1/2 bg-white/15" />
            {/* Current that fills as you scroll */}
            <motion.div
              aria-hidden
              style={{ scaleY: progress }}
              className="absolute bottom-0 -left-10 top-0 sm:-left-14 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-[#D9BC70]/60 to-[#D9BC70]"
            />
            {/* Spark at the head of the current */}
            <div aria-hidden className="absolute bottom-0 -left-10 top-0 sm:-left-14 w-0">
              <motion.span
                style={{ top: sparkTop }}
                className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4F1E8] shadow-[0_0_18px_6px_rgba(217,188,112,0.55)]"
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

            <p className="font-serif text-2xl italic text-[#D9BC70]">
              Connecting perspectives. Inspiring progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}