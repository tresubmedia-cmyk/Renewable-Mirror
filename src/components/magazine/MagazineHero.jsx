
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, BookOpen, Globe2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const THEME = {
  "--rm-bg": "#ffffff",
  "--rm-ink": "#1F2937",
};

function Turbine({ x, y, h, delay = 0, reduce }) {
  const hub = y - h;

  return (
    <g>
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={hub}
        stroke="#1F2937"
        strokeWidth="2.2"
      />

      <g stroke="#1F2937" strokeWidth="2.2" strokeLinecap="round">
        {[0, 120, 240].map((a) => (
          <line
            key={a}
            x1={x}
            y1={hub}
            x2={x}
            y2={hub - h * 0.55}
            transform={`rotate(${a} ${x} ${hub})`}
          />
        ))}

        {!reduce && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${x} ${hub}`}
            to={`360 ${x} ${hub}`}
            dur={`${14 + delay}s`}
            repeatCount="indefinite"
          />
        )}
      </g>

      <circle cx={x} cy={hub} r="2.6" fill="#F5A000" />
    </g>
  );
}

function Cover({ reduce }) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#1F2937]/15 bg-[#F4F5F6] p-5 text-[var(--rm-ink)] sm:p-6">

      {/* SPINE */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-[#1F2937]/15 to-transparent"
      />

      {/* COVER HEADER */}
      <div className="flex items-end justify-between border-b border-[#1F2937]/20 pb-3">
        <p className="font-serif text-base font-semibold leading-none tracking-tight">
          Renewable
          <span className="block text-[#B8860B]">Mirror.</span>
        </p>

        <span className="text-[9px] font-semibold tracking-[0.2em] text-[#B8860B]">
          RM
        </span>
      </div>

      {/* COVER TITLE */}
      <p className="mt-6 text-[9px] font-semibold tracking-[0.2em] text-[#B8860B]">
        THE ENERGY WORLD
      </p>

      <h2 className="mt-2 font-serif text-[1.85rem] leading-[1.02] tracking-tight sm:text-[2rem]">
        A new
        <span className="block text-[#B8860B]">energy</span>
        era.
      </h2>

      {/* COVER ART */}
      <svg
        viewBox="0 0 240 120"
        className="mt-5 w-full"
        role="img"
        aria-label="Wind turbines at sunrise"
      >
        <defs>
          <linearGradient id="rm-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E5E7EB" />
            <stop offset="1" stopColor="#F6E7BF" />
          </linearGradient>
        </defs>

        <rect width="240" height="120" fill="url(#rm-sky)" />

        <circle cx="178" cy="78" r="22" fill="#F5A000" opacity="0.9" />

        <path
          d="M0 100 Q60 82 120 96 T240 90 V120 H0Z"
          fill="#C9CDD2"
        />

        <path
          d="M0 110 Q70 98 140 108 T240 104 V120 H0Z"
          fill="#AEB6C0"
        />

        <Turbine x={52} y={104} h={52} delay={0} reduce={reduce} />
        <Turbine x={110} y={100} h={38} delay={3} reduce={reduce} />
        <Turbine x={158} y={106} h={30} delay={6} reduce={reduce} />
      </svg>

      {/* FOOTER */}
      <p className="absolute bottom-4 left-5 text-[8px] font-semibold tracking-[0.16em] text-[#B8860B]">
        IDEAS POWERING TOMORROW
      </p>
    </div>
  );
}

export default function MagazineHero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-11, 11]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const glossX = useTransform(sx, [-0.5, 0.5], ["-60%", "60%"]);

  const onMove = (e) => {
    if (!ref.current) return;

    const r = ref.current.getBoundingClientRect();

    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={ref}
      onMouseMove={reduce ? undefined : onMove}
      onMouseLeave={onLeave}
      style={THEME}
      className="relative isolate flex min-h-[90svh] overflow-hidden bg-[var(--rm-bg)] px-5 pb-7 pt-24 text-[#1F2937] sm:px-8 sm:pt-28 lg:px-14 lg:pt-28"
    >

      {/* BACKGROUND */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "radial-gradient(#1F2937 0.7px, transparent 0.7px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-[#F5A000]/10 blur-[110px]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col">

        {/* MAIN CONTENT */}
        <div className="my-auto grid items-center gap-12 py-10 lg:grid-cols-[1fr_310px] lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
          >

            {/* EYEBROW */}
            <p className="mb-6 flex items-center gap-3 text-[12px] font-semibold tracking-[0.06em] text-[#1F2937]/80 sm:text-[13px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5A000] opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F5A000]" />
              </span>

              The Renewable Mirror Publication
            </p>

            {/* MAIN HEADING */}
            <h1 className="max-w-3xl font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[52px] lg:text-[68px] xl:text-[76px]">
              Stories that shape the

              <span className="block font-normal text-[#F5A000]">
                energy future.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-lg text-[13px] leading-7 text-[#1F2937]/75 sm:text-[14px] sm:leading-8">
              Explore the latest editions of Renewable Mirror. Discover
              industry insights, inspiring innovations and the people driving
              the global energy transition.
            </p>

            {/* CTA + FEATURES */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">

              {/* BUTTON */}
              <a
                href="#magazine-editions"
                className="group inline-flex items-center gap-2 rounded-full bg-[#111827] py-2 pl-4 pr-2 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#263244] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
              >
                Explore editions

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[#F5A000] group-hover:text-[#111827]">
                  <ArrowDown
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </span>
              </a>

              {/* FEATURES */}
              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[12px] font-medium text-[#1F2937]/80">

                <li className="flex items-center gap-2">
                  <BookOpen size={15} className="text-[#F5A000]" />
                  Industry insights
                </li>

                <li className="flex items-center gap-2">
                  <Globe2 size={15} className="text-[#F5A000]" />
                  Global perspectives
                </li>

              </ul>
            </div>

          </motion.div>

          {/* RIGHT MAGAZINE COVER */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="relative mx-auto hidden w-full max-w-[290px] lg:block"
            style={{ perspective: 1200 }}
          >

            {/* EARLIER EDITIONS */}
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-[12%] -rotate-[10deg] bg-[#1F2937] ring-1 ring-[#1F2937]/10"
            />

            <div
              aria-hidden
              className="absolute inset-0 -translate-x-[6%] -rotate-[5deg] bg-[#E6B94A] ring-1 ring-[#1F2937]/10"
            />

            <motion.div
              style={
                reduce
                  ? undefined
                  : {
                      rotateX,
                      rotateY,
                      transformStyle: "preserve-3d",
                    }
              }
              className="relative"
            >

              <Cover reduce={reduce} />

              {/* LIGHT EFFECT */}
              {!reduce && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 overflow-hidden"
                >
                  <motion.div
                    style={{ x: glossX }}
                    className="absolute -top-1/4 left-1/4 h-[150%] w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </div>
              )}

            </motion.div>

            {/* FLOATING CTA */}
            <a
              href="#magazine-editions"
              className="absolute -bottom-4 -right-5 bg-[#F5A000] px-4 py-2.5 text-[#111827] shadow-lg transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
            >
              <span className="block text-[9px] font-bold tracking-[0.18em]">
                EXPLORE
              </span>

              <span className="font-serif text-base">
                Our Editions
              </span>
            </a>

          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex items-center justify-between border-t border-[#1F2937]/15 pt-4">

          <p className="font-serif text-base text-[#1F2937]/75 sm:text-lg">
            Read. Reflect. Reimagine.
          </p>

          <a
            href="#magazine-editions"
            className="group flex items-center gap-2.5 text-[12px] font-semibold text-[#1F2937]/80 transition-colors hover:text-[#B8860B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
          >
            Scroll

            <motion.span
              aria-hidden
              animate={reduce ? undefined : { y: [0, 5, 0] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1F2937]/25 text-[#B8860B]"
            >
              <ArrowDown size={15} />
            </motion.span>
          </a>

        </div>

      </div>
    </section>
  );
}
