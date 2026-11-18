
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Aperture,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function GalleryHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[88svh] overflow-hidden bg-[#111827] px-6 pb-7 pt-28 text-white sm:px-10 lg:min-h-[92svh] lg:px-14 lg:pt-32">

      {/* BACKGROUND DESIGN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Fine texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gold ambient light */}
        <div className="absolute -right-40 -top-40 h-[580px] w-[580px] rounded-full bg-[#F5A000]/[0.09] blur-[160px]" />

        {/* Charcoal ambient light */}
        <div className="absolute -bottom-72 -left-40 h-[520px] w-[520px] rounded-full bg-[#263244]/50 blur-[150px]" />

        {/* Right editorial circles */}
        <div className="absolute -right-32 top-[15%] hidden h-[580px] w-[580px] rounded-full border border-white/[0.045] lg:block" />

        <div className="absolute -right-16 top-[21%] hidden h-[450px] w-[450px] rounded-full border border-[#F5A000]/[0.10] lg:block" />

        <div className="absolute right-24 top-[34%] hidden h-3 w-3 rounded-full bg-[#F5A000]/70 lg:block" />

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col">

        {/* MAIN CONTENT */}
        <div className="my-auto max-w-5xl py-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >

            {/* EYEBROW */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#F5A000]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E6B94A] sm:text-[11px]">
                Renewable Mirror / Gallery
              </span>
            </div>

            {/* HEADING */}
            <h1 className="max-w-4xl font-serif text-[clamp(38px,5.5vw,70px)] font-medium leading-[1.1] tracking-[-0.04em]">
              Moments that bring our

              <span className="mt-1.5 block text-[#E6B94A]">
                industry to life.
              </span>
            </h1>

            {/* DECORATIVE RULE */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-[3px] w-10 rounded-full bg-[#F5A000]" />
              <span className="h-px w-14 bg-white/20" />
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-lg text-[13px] leading-7 text-white/65 sm:text-[14px] sm:leading-7">
              Explore the people, events, innovations and experiences
              shaping the renewable energy landscape. A visual journey
              through the stories that inspire progress.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">

              <a
                href="#gallery-images"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F5A000] py-1.5 pl-5 pr-1.5 text-[12px] font-bold text-[#111827] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E6B94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
              >
                Explore Gallery

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </a>

              <span className="text-[11px] font-medium tracking-wide text-white/55 sm:text-xs">
                People
                <span className="mx-2 text-[#E6B94A]">·</span>
                Events
                <span className="mx-2 text-[#E6B94A]">·</span>
                Innovation
              </span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM EDITORIAL BAR */}
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/15 pt-5">

          <div className="flex items-center gap-3">
            <Aperture
              size={16}
              strokeWidth={1.5}
              className="text-[#F5A000]"
            />

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-[11px]">
              Renewable Energy Stories
            </p>
          </div>

          <a
            href="#gallery-images"
            className="group flex items-center gap-3 text-[11px] font-medium tracking-wide text-white/70 transition-colors hover:text-[#E6B94A] sm:text-xs"
          >
            Scroll to explore

            <motion.span
              animate={reduce ? undefined : { y: [0, 5, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[#E6B94A] transition-all duration-300 group-hover:border-[#F5A000] group-hover:bg-[#F5A000]/10"
            >
              <ArrowDown size={15} />
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
