
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoverStoryCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white px-5 pb-14 pt-2 sm:px-8 lg:px-16">

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-[#F5A000]/20 bg-[#111827] px-6 py-9 text-center sm:px-10 sm:py-11"
      >
        {/* SUBTLE BACKGROUND DETAIL */}
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-[#F5A000]/[0.08]" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full border border-white/[0.05]" />

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">

          {/* LABEL */}
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E6B94A]">
            Tell Your Story
          </span>

          {/* HEADING */}
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[34px]">
            Have a story{" "}
            <span className="text-[#F5A000]">
              worth featuring?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-3 max-w-xl text-xs leading-6 text-[#D1D5DB] sm:text-[13px]">
            Share your ideas, achievements and innovations
            with Renewable Mirror. Let's bring important
            industry stories to a wider audience.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-[#F5A000] px-5 py-3 text-[10px] font-bold text-[#111827] transition-all duration-300 hover:bg-[#E6B94A]"
            >
              Pitch Your Story
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <a
              href="mailto:info@renewablemirror.com"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-[10px] font-bold text-white transition-all duration-300 hover:border-[#F5A000] hover:text-[#F5A000]"
            >
              <Mail size={13} />
              Email Us
            </a>

          </div>

          {/* BOTTOM CAPTION */}
          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-7 bg-[#F5A000]/50" />
            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Renewable Mirror — Industry Stories
            </span>
            <span className="h-px w-7 bg-[#F5A000]/50" />
          </div>

        </div>
      </motion.div>

    </section>
  );
}
