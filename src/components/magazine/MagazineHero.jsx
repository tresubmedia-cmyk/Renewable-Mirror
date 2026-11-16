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

/* Brand colours in one place. For the old navy look, set --rm-bg to #082B50. */
const THEME = { "--rm-bg": "#0B2117", "--rm-ink": "#10291D" };

function Turbine({ x, y, h, delay = 0, reduce }) {
  const hub = y - h;
  return (
    <g>
      <line x1={x} y1={y} x2={x} y2={hub} stroke="#2F5A45" strokeWidth="2.2" />
      <g stroke="#2F5A45" strokeWidth="2.2" strokeLinecap="round">
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
      <circle cx={x} cy={hub} r="2.6" fill="#A58B4D" />
    </g>
  );
}

function Cover({ reduce }) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F7F5EE] p-5 text-[var(--rm-ink)]">
      {/* Spine shade */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/15 to-transparent"
      />

      <div className="flex items-end justify-between border-b border-[var(--rm-ink)]/20 pb-3">
        <p className="font-serif text-lg font-semibold leading-none tracking-tight">
          Renewable
          <span className="block text-[#A58B4D]">Mirror.</span>
        </p>
        <span className="text-[9px] font-semibold tracking-widest text-[#A58B4D]">
          RM
        </span>
      </div>

      <p className="mt-6 text-[10px] font-semibold tracking-[0.2em] text-[#A58B4D]">
        THE ENERGY WORLD
      </p>
      <h2 className="mt-2 font-serif text-[2.1rem] leading-[0.98] tracking-tight">
        A new
        <span className="block text-[#A58B4D]">energy</span>
        era.
      </h2>

      <svg
        viewBox="0 0 240 120"
        className="mt-5 w-full"
        role="img"
        aria-label="Wind turbines at sunrise"
      >
        <defs>
          <linearGradient id="rm-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E7EEE9" />
            <stop offset="1" stopColor="#F6E7BF" />
          </linearGradient>
        </defs>
        <rect width="240" height="120" fill="url(#rm-sky)" />
        <circle cx="178" cy="78" r="22" fill="#D9BC70" opacity="0.9" />
        <path d="M0 100 Q60 82 120 96 T240 90 V120 H0Z" fill="#CFDBCF" />
        <path d="M0 110 Q70 98 140 108 T240 104 V120 H0Z" fill="#B7C9B9" />
        <Turbine x={52} y={104} h={52} delay={0} reduce={reduce} />
        <Turbine x={110} y={100} h={38} delay={3} reduce={reduce} />
        <Turbine x={158} y={106} h={30} delay={6} reduce={reduce} />
      </svg>

      <p className="absolute bottom-4 left-5 text-[8px] font-semibold tracking-[0.18em] text-[#A58B4D]">
        IDEAS POWERING TOMORROW
      </p>
    </div>
  );
}

export default function MagazineHero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  // Pointer position drives a gentle 3D tilt of the cover
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-13, 13]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const glossX = useTransform(sx, [-0.5, 0.5], ["-60%", "60%"]);

  const onMove = (e) => {
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
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-[var(--rm-bg)] px-6 pb-8 pt-28 text-[#F4F1E8] sm:px-10 lg:px-16 lg:pt-32"
    >
      {/* Background: faint dots + golden light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-[#D9BC70]/15 blur-[110px]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <div className="my-auto grid items-center gap-16 py-10 lg:grid-cols-[1fr_340px] lg:gap-24">
          {/* LEFT */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="mb-7 flex items-center gap-3 text-sm font-medium text-[#F4F1E8]/65">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9BC70] opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D9BC70]" />
              </span>
              The Renewable Mirror Publication
            </p>

            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-[6.25rem]">
              Stories that shape the
              <span className="block font-normal text-[#D9BC70]">
                energy future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#F4F1E8]/65">
              Explore the latest editions of Renewable Mirror. Discover
              industry insights, inspiring innovations and the people driving
              the global energy transition.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <a
                href="#magazine-editions"
                className="group inline-flex items-center gap-4 rounded-full bg-[#D9BC70] py-1.5 pl-6 pr-1.5 text-sm font-bold text-[#0B2117] transition-all duration-300 hover:bg-[#E8CE8B] hover:shadow-[0_10px_40px_rgba(217,188,112,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70]"
              >
                Explore editions
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2117] text-[#F4F1E8]">
                  <ArrowDown
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </span>
              </a>

              <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#F4F1E8]/75">
                <li className="flex items-center gap-2.5">
                  <BookOpen size={17} className="text-[#D9BC70]" />
                  Industry insights
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe2 size={17} className="text-[#D9BC70]" />
                  Global perspectives
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT — tilting cover with earlier editions fanned behind */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="relative mx-auto hidden w-full max-w-[330px] lg:block"
            style={{ perspective: 1200 }}
          >
            {/* Earlier editions */}
            <div
              aria-hidden
              className="absolute inset-0 -rotate-[11deg] translate-x-[-14%] bg-[#1C3A2B] ring-1 ring-white/10"
            />
            <div
              aria-hidden
              className="absolute inset-0 -rotate-[5deg] translate-x-[-7%] bg-[#E4D4A3] ring-1 ring-white/10"
            />

            <motion.div
              style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.65)]"
            >
              <Cover reduce={reduce} />

              {/* Light that slides across the cover with the pointer */}
              {!reduce && (
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                  <motion.div
                    style={{ x: glossX }}
                    className="absolute -top-1/4 left-1/4 h-[150%] w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </div>
              )}
            </motion.div>

            <a
              href="#magazine-editions"
              className="absolute -bottom-5 -right-8 bg-[#D9BC70] px-5 py-3 text-[#0B2117] shadow-xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70]"
            >
              <span className="block text-[10px] font-bold tracking-[0.2em]">EXPLORE</span>
              <span className="font-serif text-lg">Our Editions</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="flex items-center justify-between border-t border-white/15 pt-5">
          <p className="font-serif text-lg text-[#F4F1E8]/60">
            Read. Reflect. Reimagine.
          </p>
          <a
            href="#magazine-editions"
            className="group flex items-center gap-3 text-sm font-medium text-[#F4F1E8]/70 transition-colors hover:text-[#D9BC70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70]"
          >
            Scroll
            <motion.span
              aria-hidden
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[#D9BC70]"
            >
              <ArrowDown size={16} />
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}