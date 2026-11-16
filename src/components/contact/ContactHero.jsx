
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactHero() {
  return (
<section className="relative flex min-h-[calc(100svh-20px)] items-center overflow-hidden bg-[#071B13] text-white">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-[#D9BC70]/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full border border-[#D9BC70]/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#D9BC70]/[0.025] blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-[1450px] items-center px-6 py-14 sm:px-10 lg:min-h-[calc(100svh+100px)] lg:px-16 lg:py-16">

        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
      

            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9BC70]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D9BC70]">
                Let's Connect
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl xl:text-[68px]">
              Let's Start a
              <span className="mt-2 block font-serif font-medium italic text-[#D9BC70]">
                Conversation.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-base leading-8 text-white/65">
              Every meaningful partnership begins with a conversation.
              Whether you have a story to share, a business enquiry or an
              idea to explore, we're here to listen.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="mailto:neha@renewablemirror.com"
                className="group inline-flex items-center gap-5 rounded-full bg-[#D9BC70] py-2 pl-6 pr-2 text-sm font-semibold text-[#071B13] transition-all hover:bg-[#E8CE8B]"
              >
                Send an Enquiry
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071B13] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={19} />
                </span>
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#D9BC70] hover:text-[#D9BC70]"
              >
                Contact Our Team
                <ArrowDown size={16} />
              </a>
            </div>

            {/* Contact Details */}
            <div className="mt-12 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-2">

              <a
                href="mailto:neha@renewablemirror.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#D9BC70] transition-colors group-hover:bg-[#D9BC70] group-hover:text-[#071B13]">
                  <Mail size={18} />
                </span>

                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Email Us
                  </span>
                  <span className="mt-1.5 block text-sm font-semibold">
                    neha@renewablemirror.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#D9BC70]">
                  <MessageCircle size={18} />
                </span>

                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Our Focus
                  </span>
                  <span className="mt-1.5 block text-sm font-semibold">
                    Renewable Energy Industry
                  </span>
                </span>
              </div>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[720px]"
          >
            {/* Image - No Border / No White Frame */}
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src="/images/contact/contact-hero.jpg"
                alt="Renewable Mirror Contact Team"
                className="block h-auto max-h-[min(72svh,760px)] w-full object-contain"
              />

              {/* Soft Bottom Overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071B13]/45 to-transparent" />

           
        
            </div>

            {/* Image Bottom Label */}
            <div className="mt-5 flex items-center justify-between px-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D9BC70]">
                Renewable Mirror
              </span>
              <span className="text-xs text-white/40">
                Let's Connect
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
