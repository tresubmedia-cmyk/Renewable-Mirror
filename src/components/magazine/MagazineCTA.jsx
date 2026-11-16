import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];
const RING_TEXT = "IDEAS • PERSPECTIVES • RENEWABLE MIRROR • ";

export default function MagazineCTA() {
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
                Have a story
                <span className="block text-[#D9BC70]">worth sharing?</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#F4F1E8]/65">
                Have an industry insight, innovative project or perspective on
                renewable energy? Connect with Renewable Mirror and let your
                voice reach the industry.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#D9BC70] py-1.5 pl-6 pr-1.5 text-sm font-bold text-[#10291D] transition-all duration-300 hover:bg-[#E8CE8B] hover:shadow-[0_10px_40px_rgba(217,188,112,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70]"
                >
                  Contact our team
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
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px bg-white/20"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#D9BC70] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT — rotating seal, itself a link to the contact page */}
            <Link
              to="/contact"
              aria-label="Contact our team"
              className="group relative mx-auto hidden h-52 w-52 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70] lg:flex"
            >
              <motion.svg
                viewBox="0 0 200 200"
                aria-hidden
                className="absolute inset-0 h-full w-full"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              >
                <defs>
                  <path
                    id="rm-ring"
                    d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                  />
                </defs>
                <text
                  fill="#F4F1E8"
                  fillOpacity="0.7"
                  fontSize="12.5"
                  fontWeight="600"
                >
                  <textPath href="#rm-ring" textLength="484" lengthAdjust="spacing">
                    {RING_TEXT}
                  </textPath>
                </text>
              </motion.svg>

              <span
                aria-hidden
                className="absolute inset-3 rounded-full border border-[#D9BC70]/30"
              />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#D9BC70] text-[#10291D] transition-transform duration-500 group-hover:scale-110">
                <ArrowUpRight
                  size={34}
                  strokeWidth={1.6}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </span>
            </Link>
          </div>

          <p className="relative mt-12 border-t border-white/15 pt-5 text-sm text-[#F4F1E8]/50">
            Connecting perspectives. Inspiring progress.
          </p>
        </motion.div>
      </div>
    </section>
  );
}