import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

/* A camera viewfinder: corner brackets, rule-of-thirds grid and a focus square.
   On hover the brackets close in, like the camera locking focus. */
function Viewfinder({ reduce }) {
  const bracket =
    "absolute h-9 w-9 border-[#D9BC70] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

  return (
    <Link
      to="/contact"
      aria-label="Share your story with Renewable Mirror"
      className="group relative mx-auto hidden h-60 w-80 shrink-0 rounded-md bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70] lg:block"
    >
      {/* Rule of thirds */}
      <span aria-hidden className="absolute inset-y-0 left-1/3 w-px bg-white/10" />
      <span aria-hidden className="absolute inset-y-0 left-2/3 w-px bg-white/10" />
      <span aria-hidden className="absolute inset-x-0 top-1/3 h-px bg-white/10" />
      <span aria-hidden className="absolute inset-x-0 top-2/3 h-px bg-white/10" />

      {/* Corner brackets */}
      <span aria-hidden className={`${bracket} left-3 top-3 border-l-2 border-t-2 group-hover:left-6 group-hover:top-6`} />
      <span aria-hidden className={`${bracket} right-3 top-3 border-r-2 border-t-2 group-hover:right-6 group-hover:top-6`} />
      <span aria-hidden className={`${bracket} bottom-3 left-3 border-b-2 border-l-2 group-hover:bottom-6 group-hover:left-6`} />
      <span aria-hidden className={`${bracket} bottom-3 right-3 border-b-2 border-r-2 group-hover:bottom-6 group-hover:right-6`} />

      {/* Focus square */}
      <motion.span
        aria-hidden
        animate={reduce ? undefined : { scale: [1.3, 1, 1, 1.3], opacity: [0.4, 1, 1, 0.4] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 border border-[#D9BC70]"
      />
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9BC70]"
      />

      {/* Caption + arrow */}
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
        <p className="font-serif text-lg leading-tight text-[#F4F1E8]">
          Every frame.
          <span className="block text-[#D9BC70]">A story.</span>
        </p>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9BC70] text-[#10291D] transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight size={18} />
        </span>
      </div>

      {/* Quick flash on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-md bg-white opacity-0 transition-opacity duration-150 group-hover:opacity-[0.06]"
      />
    </Link>
  );
}

export default function GalleryCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#F7F8F5] px-6 pb-20 pt-4 sm:px-10 lg:px-16 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative overflow-hidden rounded-3xl bg-[#10291D] px-7 py-12 text-[#F4F1E8] sm:px-12 sm:py-14 lg:px-16"
        >
          {/* Soft golden light */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#D9BC70]/[0.09] blur-3xl"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            {/* LEFT */}
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                Have a moment
                <span className="block text-[#D9BC70]">worth capturing?</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#F4F1E8]/65">
                Share your industry events, project photographs and renewable
                energy stories with Renewable Mirror. Let's bring inspiring
                moments into the spotlight.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#D9BC70] py-1.5 pl-6 pr-1.5 text-sm font-bold text-[#10291D] transition-all duration-300 hover:bg-[#E8CE8B] hover:shadow-[0_10px_40px_rgba(217,188,112,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70]"
                >
                  Share your story
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10291D] text-[#F4F1E8] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>

                <a
                  href="mailto:info@renewablemirror.com"
                  className="group relative inline-flex items-center gap-2.5 pb-1.5 text-sm font-medium text-[#F4F1E8]/80 transition-colors hover:text-[#D9BC70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70]"
                >
                  <Mail size={17} />
                  info@renewablemirror.com
                  <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-white/20" />
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#D9BC70] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT — viewfinder */}
            <Viewfinder reduce={reduce} />
          </div>

          <p className="relative mt-12 border-t border-white/15 pt-5 text-sm text-[#F4F1E8]/50">
            Connecting perspectives. Inspiring progress.
          </p>
        </motion.div>
      </div>
    </section>
  );
}