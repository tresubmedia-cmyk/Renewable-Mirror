
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Megaphone,
} from "lucide-react";

import { Link } from "react-router-dom";
import advertisements from "../../data/advertisements";
import AdvertisementBanner from "./AdvertisementBanner";

export default function AdvertisementSidebar() {
  return (
    <aside className="w-full min-w-0 bg-white">

      {/* EDITORIAL HEADER */}
      <div className="mb-4">

  

        <div className="mt-3 flex items-end justify-between gap-3">

          <div>
            <h3 className="text-[22px] font-bold tracking-[-0.045em] text-[#17271D]">
              Advertising Partners
            </h3>

            <p className="mt-1.5 text-[11px] leading-5 text-[#858C83]">
              Connecting brands with the renewable energy industry.
            </p>
          </div>

          <Link
            to="/contact"
            className="group mb-1 inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold text-[#A18443] transition-colors hover:text-[#17271D]"
          >
            Advertise
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

        <div className="mt-5 h-px bg-[#EDEBE3]" />

      </div>

      {/* ORIGINAL ADVERTISEMENT BANNERS */}
      <div className="flex flex-col gap-5">

        {advertisements.map((ad, index) => (
          <AdvertisementBanner
            key={ad.id}
            ad={ad}
            index={index}
          />
        ))}

      </div>






{/* PREMIUM ADVERTISING CTA */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    group relative mt-8 overflow-hidden
    bg-[#111827]
    px-6 py-7 sm:px-7 sm:py-8
  "
>
  {/* Decorative Background */}
  <div className="
    pointer-events-none absolute -right-12 -top-16
    h-48 w-48 rounded-full
    border border-white/[0.09]
  " />

  <div className="
    pointer-events-none absolute -right-5 -top-9
    h-32 w-32 rounded-full
    border border-[#F5A000]/20
  " />

  <div className="
    pointer-events-none absolute bottom-0 right-20
    h-24 w-24 rounded-full
    bg-[#F5A000]/10 blur-3xl
  " />

  {/* CONTENT */}
  <div className="relative z-10">

    {/* EYEBROW */}
    <div className="mb-5 flex items-center gap-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#F5A000]/40 bg-[#F5A000]/10">
        <Megaphone size={13} className="text-[#F5A000]" />
      </span>

      <span className="
        text-[9px] font-bold uppercase
        tracking-[0.2em] text-[#F5A000]
      ">
        Grow Your Brand
      </span>

      <span className="h-px w-8 bg-[#F5A000]/50" />
    </div>

    {/* MAIN CONTENT */}
    <div className="flex items-center justify-between gap-4">

      <div className="min-w-0">
        <p className="
          font-display text-[17px] font-bold
          leading-snug tracking-[-0.035em]
          text-white sm:text-[20px]
        ">
          Make Your Brand{" "}
          <span className="font-serif italic text-[#F5A000]">
            Stand Out.
          </span>
        </p>

        <p className="
          mt-2 text-[11px] font-semibold
          leading-relaxed text-[#D1D5DB]/75
        ">
          Connect with decision-makers across the renewable energy sector.
        </p>
      </div>

      <Link
        to="/contact"
        aria-label="Contact us for advertising"
        className="
          flex h-12 w-12 shrink-0 items-center
          justify-center rounded-full
          bg-[#F5A000] text-[#111827]
          transition-transform duration-300
          group-hover:rotate-45
        "
      >
        <ArrowUpRight size={21} />
      </Link>

    </div>

    {/* BOTTOM INFORMATION */}
    <div className="
      mt-7 flex items-center justify-between
      border-t border-white/15 pt-4
    ">
      <span className="
        text-[8px] font-semibold uppercase
        tracking-[0.16em] text-white/60
      ">
        Renewable Mirror
      </span>

      <span className="
        text-[8px] font-semibold uppercase
        tracking-[0.14em] text-[#F5A000]
      ">
        Partner With Us ↗
      </span>
    </div>

  </div>
</motion.div>

    </aside>
  );
}
