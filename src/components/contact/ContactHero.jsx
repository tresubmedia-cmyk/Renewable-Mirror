
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function ContactHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100svh-20px)] items-center overflow-hidden bg-[#111827] text-white">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-[#F5A000]/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full border border-[#F5A000]/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#F5A000]/[0.025] blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-[1400px] items-center px-6 py-12 sm:px-10 lg:min-h-[calc(100svh-20px)] lg:px-14 lg:py-14">

        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-xl"
          >

            {/* LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#F5A000]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E6B94A]">
                Let's Connect
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-[40px] font-bold leading-[1.08] tracking-tight sm:text-[50px] xl:text-[60px]">
              Let's Start a
              <span className="mt-1.5 block font-serif font-medium text-[#E6B94A]">
                Conversation.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-md text-[14px] leading-7 text-white/65">
              Every meaningful partnership begins with a conversation.
              Whether you have a story to share, a business enquiry or an
              idea to explore, we're here to listen.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="mailto:neha@renewablemirror.com"
                className="group inline-flex items-center gap-4 rounded-full bg-[#F5A000] py-1.5 pl-5 pr-1.5 text-[13px] font-semibold text-[#111827] transition-all duration-300 hover:bg-[#E6B94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
              >
                Send an Enquiry

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:border-[#F5A000] hover:text-[#E6B94A]"
              >
                Contact Our Team
                <ArrowDown size={14} />
              </a>
            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-9 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">

              <a
                href="mailto:neha@renewablemirror.com"
                className="group flex items-center gap-3.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#E6B94A] transition-colors duration-300 group-hover:bg-[#F5A000] group-hover:text-[#111827]">
                  <Mail size={17} />
                </span>

                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                    Email Us
                  </span>
                  <span className="mt-1 block text-[12px] font-semibold">
                    neha@renewablemirror.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#E6B94A]">
                  <MessageCircle size={17} />
                </span>

                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                    Our Focus
                  </span>
                  <span className="mt-1 block text-[12px] font-semibold">
                    Renewable Energy Industry
                  </span>
                </span>
              </div>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="relative mx-auto w-full max-w-[650px]"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src="/images/contact/contact-hero.jpg"
                alt="Renewable Mirror Contact Team"
                className="block h-auto max-h-[min(68svh,680px)] w-full object-contain"
              />

              {/* SOFT BOTTOM OVERLAY */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111827]/45 to-transparent" />
            </div>

            {/* IMAGE BOTTOM LABEL */}
            <div className="mt-4 flex items-center justify-between px-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#E6B94A]">
                Renewable Mirror
              </span>

              <span className="text-[11px] text-white/40">
                Let's Connect
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
