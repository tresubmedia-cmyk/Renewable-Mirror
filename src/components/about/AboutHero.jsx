
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Newspaper, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

const COLORS = {
  bg: "#111827",
  gold: "#F5A000",
  goldLight: "#E6B94A",
};

const fade = (delay = 0, reduce = false) => ({
  initial: reduce ? false : { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: reduce ? 0 : delay, ease: EASE },
});

function RevealLine({ children, delay = 0, className = "", reduce }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className={`block ${className}`}
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 0.9,
          delay: reduce ? 0 : delay,
          ease: EASE,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function AboutHero() {
  const reduce = useReducedMotion();

  const highlights = [
    {
      icon: Newspaper,
      label: "Our Focus",
      value: "Industry Stories",
    },
    {
      icon: Zap,
      label: "Our Industry",
      value: "Renewable Energy",
    },
  ];

  return (
    <section className="relative flex min-h-[780px] items-center overflow-hidden bg-[#111827] text-white sm:min-h-[820px] lg:min-h-[calc(100svh-96px)]">

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full border border-[#F5A000]/[0.09]" />

        <div className="absolute -right-20 top-32 h-[360px] w-[360px] rounded-full border border-[#F5A000]/[0.08]" />

        <div className="absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full bg-[#F5A000]/[0.05] blur-[110px]" />

        <div className="absolute right-[38%] top-[15%] h-72 w-72 rounded-full bg-white/[0.025] blur-[100px]" />

      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="relative z-10 mx-auto w-full max-w-[640px] pt-10 lg:mx-0 lg:pt-24">

            {/* EYEBROW */}
            <motion.div
              {...fade(0.1, reduce)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#F5A000]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E6B94A] sm:text-[11px]">
                About Renewable Mirror
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <h1 className="mt-4 font-sans text-[clamp(40px,4.5vw,68px)] font-bold leading-[1.09] tracking-[-0.055em]">

              <RevealLine delay={0.2} reduce={reduce}>
                Powering
              </RevealLine>

              <RevealLine
                delay={0.34}
                reduce={reduce}
                className="font-serif font-medium  tracking-[-0.035em] text-[#E6B94A]"
              >
                Perspectives.
              </RevealLine>

              <RevealLine delay={0.48} reduce={reduce}>
                <span className="whitespace-nowrap">
                  Shaping Tomorrow.
                </span>
              </RevealLine> 

            </h1>

            {/* DESCRIPTION */}
            <motion.p
              {...fade(0.65, reduce)}
              className="mt-7 max-w-[490px] text-[14px] leading-[1.9] text-white/75 sm:text-[15px]"
            >
              Renewable Mirror brings together the stories, insights and
              developments shaping the renewable energy industry. We connect
              people with the ideas, innovations and perspectives driving a
              cleaner future.
            </motion.p>

            {/* CTA */}
            <motion.div
              {...fade(0.8, reduce)}
              className="mt-8"
            >
              <a
                href="#about-intro"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F5A000] py-1.5 pl-5 pr-1.5 text-[12px] font-bold text-[#111827] transition-colors duration-300 hover:bg-[#E6B94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
              >
                <span>Discover Our Story</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white transition-transform duration-300 group-hover:translate-y-0.5">
                  <ArrowDown size={16} />
                </span>
              </a>
            </motion.div>

            {/* HIGHLIGHTS */}
            <motion.div
              {...fade(0.95, reduce)}
              className="mt-11 grid max-w-[490px] grid-cols-2 gap-5 border-t border-white/15 pt-6"
            >
              {highlights.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F5A000]/40 bg-white/[0.04] text-[#E6B94A]">
                    <Icon size={17} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/50">
                      {label}
                    </p>

                    <p className="mt-1 text-[12px] font-semibold text-white sm:text-[13px]">
                      {value}
                    </p>
                  </div>

                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[690px] lg:ml-auto">

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: reduce ? 0 : 0.25,
                ease: EASE,
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#111827] shadow-2xl shadow-black/30">

                <motion.img
                  src="/images/about/about-hero.jpg"
                  alt="Renewable Mirror editorial office and workspace"
                  initial={reduce ? false : { scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: reduce ? 0 : 0.2,
                    ease: EASE,
                  }}
                  className="block aspect-[4/3.35] w-full object-cover object-center"
                />

                {/* IMAGE OVERLAY */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111827]/50 via-transparent to-transparent" />

                {/* BRAND LABEL */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#111827]/85 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5A000]" />
                  Renewable Mirror
                </div>

                {/* IMAGE BOTTOM TEXT */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">
                    Informing the Industry
                  </p>

                  <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                    The Energy of Tomorrow
                  </p>
                </div>

              </div>
            </motion.div>

            {/* FLOATING CAPTION */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: reduce ? 0 : 0.9,
                ease: EASE,
              }}
              className="absolute -bottom-7 left-4 z-10 flex items-center gap-3 rounded-xl border border-[#F5A000]/30 bg-white px-5 py-4 shadow-xl shadow-black/20 sm:-left-7 sm:gap-4 sm:px-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111827] text-[#F5A000]">
                <Zap size={19} />
              </span>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#A87A0C]">
                  Our Perspective
                </p>

                <p className="mt-1 text-[13px] font-bold text-[#111827] sm:text-sm">
                  A Cleaner Energy Future
                </p>
              </div>

              <Link
                to="/contact"
                aria-label="Contact Renewable Mirror"
                className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111827]/[0.07] text-[#111827] transition-all duration-300 hover:bg-[#F5A000] hover:text-[#111827]"
              >
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>

            {/* GOLD DECORATION */}
            <div className="absolute -right-3 -top-3 -z-0 hidden h-24 w-24 border-r border-t border-[#F5A000]/60 sm:block" />

          </div>
        </div>
      </div>
    </section>
  );
}
