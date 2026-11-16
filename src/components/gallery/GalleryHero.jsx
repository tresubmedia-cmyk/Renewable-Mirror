import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight, Images, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

/* ---------- Placeholder "photographs" drawn in SVG ---------- */

function SceneTurbines({ reduce }) {
  const Turbine = ({ x, y, h, dur }) => {
    const hub = y - h;
    return (
      <g stroke="#E9EFE6" strokeWidth="2.4" strokeLinecap="round" opacity="0.92">
        <line x1={x} y1={y} x2={x} y2={hub} />
        <g>
          {[0, 120, 240].map((a) => (
            <line key={a} x1={x} y1={hub} x2={x} y2={hub - h * 0.5} transform={`rotate(${a} ${x} ${hub})`} />
          ))}
          {!reduce && (
            <animateTransform attributeName="transform" type="rotate" from={`0 ${x} ${hub}`} to={`360 ${x} ${hub}`} dur={`${dur}s`} repeatCount="indefinite" />
          )}
        </g>
      </g>
    );
  };
  return (
    <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="g-sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1F4635" />
          <stop offset="0.7" stopColor="#7FA28C" />
          <stop offset="1" stopColor="#F0D99A" />
        </linearGradient>
      </defs>
      <rect width="200" height="260" fill="url(#g-sky1)" />
      <circle cx="140" cy="190" r="26" fill="#F4E3AC" opacity="0.9" />
      <path d="M0 215 Q60 190 120 210 T200 200 V260 H0Z" fill="#17352A" />
      <Turbine x={60} y={212} h={110} dur={12} />
      <Turbine x={132} y={206} h={72} dur={16} />
    </svg>
  );
}

function SceneSolar() {
  return (
    <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="g-pv" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#173A4A" />
          <stop offset="1" stopColor="#0E2A24" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#g-pv)" />
      <g stroke="#7FA9B5" strokeOpacity="0.55" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`v${i}`} x1={20 + i * 30} y1="10" x2={i * 36 - 10} y2="130" />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <line key={`h${i}`} x1="0" y1={25 + i * 28} x2="200" y2={25 + i * 28} />
        ))}
      </g>
      <circle cx="165" cy="22" r="14" fill="#D9BC70" opacity="0.85" />
    </svg>
  );
}

function SceneHills() {
  return (
    <svg viewBox="0 0 240 140" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="g-sky2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4EFE0" />
          <stop offset="1" stopColor="#F2D78F" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#g-sky2)" />
      <circle cx="90" cy="86" r="30" fill="#D9BC70" />
      <path d="M0 100 Q70 70 140 98 T240 86 V140 H0Z" fill="#8FB09A" />
      <path d="M0 118 Q80 96 150 116 T240 108 V140 H0Z" fill="#2E5A45" />
    </svg>
  );
}

function SceneSun() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
      <rect width="100" height="100" fill="#10291D" />
      {[44, 32, 20].map((r, i) => (
        <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="#D9BC70" strokeOpacity={0.25 + i * 0.25} />
      ))}
      <circle cx="50" cy="50" r="9" fill="#D9BC70" />
    </svg>
  );
}

/* ---------- A matted print that drifts with the pointer ---------- */

function Print({ sx, sy, depth, float, radius, className, children, delay }) {
  const x = useTransform(sx, [-0.5, 0.5], [-depth * 34, depth * 34]);
  const y = useTransform(sy, [-0.5, 0.5], [-depth * 26, depth * 26]);
  return (
    <div className={`absolute ${className}`}>
      <motion.div style={{ x, y }} className="h-full w-full">
        <motion.div
          initial={float === false ? false : { opacity: 0, scale: 0.92 }}
          animate={
            float === false
              ? undefined
              : { opacity: 1, scale: 1, y: [0, -10, 0] }
          }
          transition={
            float === false
              ? undefined
              : {
                  opacity: { duration: 0.9, delay, ease: EASE },
                  scale: { duration: 0.9, delay, ease: EASE },
                  y: { duration: 7 + delay * 4, ease: "easeInOut", repeat: Infinity },
                }
          }
          className={`h-full w-full bg-[#F4F1E8] p-2 shadow-[0_30px_50px_-20px_rgba(0,0,0,0.6)] ${radius}`}
        >
          <div className={`h-full w-full overflow-hidden ${radius === "rounded-t-full rounded-b-2xl" ? "rounded-t-full rounded-b-lg" : radius === "rounded-full" ? "rounded-full" : "rounded-md"}`}>
            {children}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function GalleryHero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 });
  const sy = useSpring(my, { stiffness: 70, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const still = reduce ? false : undefined; // disables float for reduced motion

  return (
    <section
      ref={ref}
      onMouseMove={reduce ? undefined : onMove}
      onMouseLeave={onLeave}
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#0B2117] px-6 pb-8 pt-28 text-[#F4F1E8] sm:px-10 lg:px-16 lg:pt-32"
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
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#D9BC70]/[0.14] blur-[120px]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <div className="my-auto grid items-center gap-16 py-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
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
              Renewable Mirror · Visual Stories
            </p>

            <h1 className="max-w-2xl font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-[5.5rem]">
              Moments that bring our
              <span className="block text-[#D9BC70]">industry to life.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#F4F1E8]/65">
              Explore the people, events, innovations and experiences shaping
              the renewable energy landscape. A visual journey through the
              stories that inspire progress.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <a
                href="#gallery-images"
                className="group inline-flex items-center gap-4 rounded-full bg-[#D9BC70] py-1.5 pl-6 pr-1.5 text-sm font-bold text-[#0B2117] transition-all duration-300 hover:bg-[#E8CE8B] hover:shadow-[0_10px_40px_rgba(217,188,112,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70]"
              >
                Explore gallery
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2117] text-[#F4F1E8] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </a>

              <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#F4F1E8]/75">
                <li className="flex items-center gap-2.5">
                  <Images size={17} className="text-[#D9BC70]" />
                  Industry moments
                </li>
                <li className="flex items-center gap-2.5">
                  <Sparkles size={17} className="text-[#D9BC70]" />
                  Stories in frames
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT — drifting prints, each at its own depth */}
          <div aria-hidden className="relative mx-auto hidden h-[34rem] w-full max-w-[34rem] lg:block">
            {/* Tall arch */}
            <Print
              sx={sx} sy={sy} depth={1} float={still} delay={0.1}
              radius="rounded-t-full rounded-b-2xl"
              className="left-[4%] top-[6%] h-[62%] w-[42%]"
            >
              <SceneTurbines reduce={reduce} />
            </Print>

            {/* Solar panels */}
            <Print
              sx={sx} sy={sy} depth={1.6} float={still} delay={0.25}
              radius="rounded-xl"
              className="right-0 top-0 h-[30%] w-[48%]"
            >
              <SceneSolar />
            </Print>

            {/* Sunrise hills */}
            <Print
              sx={sx} sy={sy} depth={0.6} float={still} delay={0.4}
              radius="rounded-xl"
              className="bottom-[2%] right-[6%] h-[38%] w-[56%]"
            >
              <SceneHills />
            </Print>

            {/* Small sun */}
            <Print
              sx={sx} sy={sy} depth={2.2} float={still} delay={0.55}
              radius="rounded-full"
              className="bottom-[6%] left-[8%] h-[24%] w-[24%]"
            >
              <SceneSun />
            </Print>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex items-center justify-between border-t border-white/15 pt-5">
          <p className="text-sm font-medium text-[#F4F1E8]/55">
            People · Events · Innovation
          </p>
          <a
            href="#gallery-images"
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