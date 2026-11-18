
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

export default function GalleryCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white px-5 pb-16 pt-6 sm:px-8 sm:pb-20 lg:px-14 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-2xl bg-[#111827] px-6 py-8 text-white sm:px-9 sm:py-9 lg:px-11 lg:py-10"
        >
          {/* GOLDEN AMBIENT LIGHT */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#F5A000]/[0.09] blur-[100px]"
          />

          <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-center lg:gap-10">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#F5A000]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E6B94A] sm:text-[11px]">
                  Be Part of Our Story
                </span>
              </div>

              <h2 className="font-serif text-[26px] font-medium leading-[1.15] tracking-tight sm:text-[31px] lg:text-[36px]">
                Have a story{" "}
                <span className="text-[#E6B94A]">
                  worth sharing?
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/70 sm:text-sm sm:leading-7">
                Share your industry events, project photographs and
                renewable energy stories with Renewable Mirror.
                Let's bring inspiring moments into the spotlight.
              </p>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex shrink-0 flex-wrap items-center gap-4 lg:flex-col lg:items-start">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F5A000] py-1.5 pl-5 pr-1.5 text-[12px] font-bold text-[#111827] transition-all duration-300 hover:bg-[#E6B94A] hover:shadow-[0_10px_30px_rgba(245,160,0,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
              >
                Share Your Story

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </Link>

              <a
                href="mailto:info@renewablemirror.com"
                className="group inline-flex items-center gap-2 text-[12px] font-medium text-white/75 transition-colors duration-300 hover:text-[#E6B94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
              >
                <Mail size={15} className="text-[#E6B94A]" />
                info@renewablemirror.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
