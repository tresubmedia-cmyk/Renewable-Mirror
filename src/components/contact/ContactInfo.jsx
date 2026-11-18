
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Globe2,
  MessageCircle,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "neha@renewablemirror.com",
    href: "mailto:neha@renewablemirror.com",
  },
  {
    icon: Globe2,
    label: "Visit Our Website",
    value: "www.renewablemirror.com",
    href: "https://www.renewablemirror.com",
  },
];

export default function ContactInfo() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative flex h-full flex-col justify-between overflow-hidden bg-[#111827] px-6 py-8 text-white sm:px-8 sm:py-9 lg:px-10 lg:py-10"
    >
      {/* BACKGROUND DETAILS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#F5A000]/15"
      />

      <div className="relative">

        {/* BRAND */}
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F5A000] font-serif text-xl font-bold text-[#111827]">
            R
          </span>

          <span className="text-base font-bold tracking-tight">
            Renewable <span className="text-[#E6B94A]">Mirror</span>
          </span>
        </div>

        {/* HEADING */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6B94A]">
            Let's Connect
          </span>

          <h2 className="mt-3 font-display text-[23px] font-bold leading-tight tracking-tight sm:text-[27px]">
            Contact Information
          </h2>

          <p className="mt-3 max-w-sm text-[12px] leading-6 text-white/70">
            Have a question, business enquiry or an industry story
            to share? Get in touch with our team. We'd love to hear
            from you.
          </p>
        </div>

        {/* CONTACT DETAILS */}
        <div className="mt-8 space-y-5">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: EASE,
                }}
                className="group flex items-center gap-3.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#E6B94A] transition-all duration-300 group-hover:border-[#F5A000] group-hover:bg-[#F5A000] group-hover:text-[#111827]">
                  <Icon size={17} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                    {item.label}
                  </span>

                  <span className="mt-1 block break-all text-[12px] font-medium text-white transition-colors group-hover:text-[#E6B94A]">
                    {item.value}
                  </span>
                </span>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-[#E6B94A] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.a>
            );
          })}

          {/* INDUSTRY FOCUS */}
          <div className="flex items-center gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#E6B94A]">
              <MessageCircle size={17} />
            </span>

            <span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                Our Focus
              </span>

              <span className="mt-1 block text-[12px] font-medium text-white">
                Renewable Energy Industry
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* ADVERTISING SECTION */}
      <div className="relative mt-9 border-t border-white/15 pt-5">
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#E6B94A]">
          Business & Partnerships
        </span>

        <h3 className="mt-2 text-[17px] font-bold leading-snug">
          Want to promote your brand?
        </h3>

        <p className="mt-2 max-w-sm text-[12px] leading-6 text-white/65">
          Reach businesses, industry professionals and key decision-makers
          across the renewable energy sector.
        </p>

        <a
          href="mailto:neha@renewablemirror.com?subject=Advertising%20Enquiry"
          className="group mt-3 inline-flex items-center gap-2 text-[11px] font-bold text-[#E6B94A] transition-colors duration-300 hover:text-white"
        >
          Discuss Advertising

          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.div>
  );
}
