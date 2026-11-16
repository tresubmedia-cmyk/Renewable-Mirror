import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Newspaper, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

/* Navbar ki height (approx). Hero = screen height - navbar, minimum 820px */
const HEADER_H = "96px";

/* Heading line: halka mask reveal */
function Line({ children, delay = 0, className = "" }) {
  return (
    <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE },
});

export default function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{ "--header-h": HEADER_H }}
      className="relative flex min-h-[max(920px,calc(100svh-var(--header-h)))] items-center overflow-hidden bg-[#071B13] text-white"
    >
      {/* ---------- Background (static, subtle) ---------- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-[#D9BC70]/[0.05] blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#1F5A40]/25 blur-[110px]" />
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-[#D9BC70]/10" />
        <div className="absolute -right-16 -top-16 h-[360px] w-[360px] rounded-full border border-[#D9BC70]/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1450px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
       

        {/* ---------- Main Grid ---------- */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* ===== LEFT ===== */}
          <div className="relative z-10 max-w-[620px]">
            <motion.div {...fade(0.15)} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9BC70]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9BC70]">
                Who We Are
              </span>
            </motion.div>

            <h1 className="text-[clamp(44px,4.8vw,72px)] font-bold leading-[1.08] tracking-[-0.045em]">
              <Line delay={0.25}>Powering</Line>
              <Line
                delay={0.37}
                className="font-serif font-medium  tracking-[-0.03em] text-[#E3C77A]"
              >
                Perspectives.
              </Line>
              <Line delay={0.49} className="whitespace-nowrap">
                Shaping Tomorrow.
              </Line>
            </h1>

            <motion.p
              {...fade(0.75)}
              className="mt-8 max-w-[520px] text-base leading-8 text-white/70"
            >
              Renewable Mirror brings together the stories, insights and
              developments shaping the renewable energy industry. We connect
              people with the ideas driving a cleaner future.
            </motion.p>

            <motion.div {...fade(0.9)}>
              <a
                href="#about-intro"
                className="group mt-9 inline-flex items-center gap-5 rounded-full bg-[#D9BC70] py-2 pl-7 pr-2 text-sm font-bold text-[#071B13] transition-colors duration-300 hover:bg-[#E8CE8B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70]"
              >
                Discover Our Story
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071B13] text-white transition-transform duration-300 group-hover:translate-y-0.5">
                  <ArrowDown size={18} />
                </span>
              </a>
            </motion.div>

            <motion.div
              {...fade(1.0)}
              className="mt-12 grid max-w-[520px] grid-cols-2 gap-5 border-t border-white/10 pt-7"
            >
              {[
                { icon: Newspaper, label: "Our Focus", value: "Industry Stories" },
                { icon: Zap, label: "Our Industry", value: "Renewable Energy" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#D9BC70]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ===== RIGHT ===== */}
          <div className="relative mx-auto w-full max-w-[740px] lg:ml-auto">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[22px] border border-[#D9BC70]/20 bg-[#10291D] shadow-2xl shadow-black/40">
                <motion.img
                  src="/images/about/about-hero.jpg"
                  alt="Renewable Mirror editorial office and workspace"
                  initial={reduce ? false : { scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
                  className="block aspect-[4/3.6] w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B13]/30 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#071B13]/70 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#D9BC70]" />
                  Renewable Mirror
                </div>
              </div>
            </motion.div>

            {/* Caption card */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
              className="absolute -bottom-6 left-4 z-10 rounded-xl border border-[#D9BC70]/35 bg-[#0C2A1E] px-6 py-4 shadow-2xl shadow-black/50 sm:-left-6 sm:px-7 sm:py-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D9BC70]">
                Our Perspective
              </p>
              <p className="mt-1.5 text-base font-semibold text-white sm:text-lg">
                A Cleaner Energy Future
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}