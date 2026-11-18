
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

export default function MagazineCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-2xl bg-[#111827] px-6 py-7 text-white sm:px-9 sm:py-8 lg:px-11 lg:py-9"
        >
          {/* GOLDEN LIGHT */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#F5A000]/10 blur-3xl"
          />

          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center md:gap-10">

            {/* LEFT CONTENT */}
            <div className="max-w-[580px]">
              <p className="font-serif text-[26px] font-medium leading-[1.15] tracking-tight sm:text-[30px] lg:text-[34px]">
                Have a story{" "}
                <span className="text-[#E6B94A]">worth sharing?</span>
              </p>

              <p className="mt-3 max-w-[520px] text-[13px] leading-6 text-white/70 sm:text-sm">
                Have an industry insight, innovative project or perspective on
                renewable energy? Connect with Renewable Mirror and let your
                voice reach the industry.
              </p>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex shrink-0 flex-wrap items-center gap-4 sm:gap-5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F5A000] py-1.5 pl-5 pr-1.5 text-[12px] font-bold text-[#111827] transition-colors duration-300 hover:bg-[#E6B94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
              >
                Contact our team

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              <a
                href="mailto:info@renewablemirror.com"
                className="group inline-flex items-center gap-2 text-[12px] font-medium text-white/75 transition-colors duration-300 hover:text-[#E6B94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
              >
                <Mail size={15} />
                <span>Get in touch</span>
              </a>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="relative mt-6 border-t border-white/15 pt-3">
            <p className="text-[11px] tracking-wide text-white/50">
              Connecting perspectives. Inspiring progress.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
