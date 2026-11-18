
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

export default function ResourcesCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:px-14">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[#F5A000]/20 bg-[#111827] px-6 py-8 sm:px-9 sm:py-9 lg:px-11 lg:py-10"
      >
        {/* GOLDEN AMBIENT LIGHT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#F5A000]/10 blur-[90px]"
        />

        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-[#E6B94A]/[0.05] blur-[80px]" />

        <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-center lg:gap-10">

          {/* CONTENT */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#F5A000]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6B94A]">
                Connect With Us
              </span>
            </div>

            <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-tight text-white sm:text-[30px] lg:text-[34px]">
              Looking for more{" "}
              <span className="text-[#E6B94A]">
                information?
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-[12px] leading-6 text-white/65 sm:text-[13px] sm:leading-7">
              Connect with our team for industry information,
              publications and resource-related enquiries.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#F5A000] px-5 py-3 text-[11px] font-bold text-[#111827] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E6B94A] hover:shadow-lg hover:shadow-[#F5A000]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
            >
              Contact Us

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <a
              href="mailto:info@renewablemirror.com"
              className="group inline-flex items-center gap-2.5 rounded-lg border border-white/20 px-5 py-3 text-[11px] font-bold text-white/85 transition-all duration-300 hover:border-[#F5A000] hover:bg-white/[0.04] hover:text-[#E6B94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
            >
              <Mail
                size={15}
                className="text-[#E6B94A]"
              />
              Email Us
            </a>
          </div>
        </div>

        {/* BOTTOM ACCENT */}
        <div className="relative mt-7 flex items-center gap-2 border-t border-white/10 pt-4">
          <span className="h-1 w-1 rounded-full bg-[#F5A000]" />
          <p className="text-[9px] font-medium tracking-[0.12em] text-white/40">
            RENEWABLE MIRROR — KNOWLEDGE & INDUSTRY INSIGHTS
          </p>
        </div>
      </motion.div>
    </section>
  );
}
