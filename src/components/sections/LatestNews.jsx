
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  CalendarDays,
  Bookmark,
} from "lucide-react";
import { Link } from "react-router-dom";

import AdvertisementSidebar from "../advertisements/AdvertisementSidebar";

const featuredStory = {
  category: "SOLAR ENERGY",
  date: "November 13, 2026",
  title:
    "Annu Projects Limited Signs MoU with GEIE Solar Products India for Supply of Materials for 8,000 Rooftop Solar Systems Under PM-Surya Ghar Scheme",
  description:
    "Annu Projects Limited, an established diversified infrastructure EPC company, strengthens its renewable energy portfolio through a major rooftop solar initiative.",
  image:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=90",
};

export default function FeaturedNews() {
  return (
    <section className="bg-white px-5 py-16 text-[#19271D] sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">

        {/* EDITORIAL HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 border-b border-[#E9ECE6] pb-9 sm:mb-14 sm:pb-11"
        >
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div className="max-w-4xl">

              {/* EYEBROW */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#B99A4B]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#17271D]">
                  Renewable Mirror
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.20em] text-[#B99A4B]">
                  Latest News
                </span>
              </div>

              {/* MAIN HEADING */}
              <p className="font-display text-[25px] font-extrabold leading-tight tracking-[-0.04em] text-[#17271D] sm:text-[32px] lg:text-[38px]">
                The latest stories shaping clean energy.
              </p>

              {/* DESCRIPTION */}
              <div className="mt-5 flex items-start gap-4">
                <span className="mt-1 h-10 w-[2px] shrink-0 bg-[#C3A65B]" />

                <p className="max-w-[490px] text-[13px] leading-[1.9] text-[#7C867D] sm:text-sm">
                  Stay informed with the latest industry developments,
                  groundbreaking projects and insights shaping the
                  global renewable energy transition.
                </p>
              </div>

            </div>


       
{/* PREMIUM EXPLORE CTA */}
<Link
  to="/news"
  className="
    group relative inline-flex w-fit shrink-0
    items-center gap-4
    rounded-full
    bg-[#111827]
    py-2 pl-6 pr-2
    shadow-[0_5px_18px_rgba(17,24,39,0.10)]
    transition-shadow duration-300
    hover:shadow-[0_8px_24px_rgba(17,24,39,0.18)]
    lg:mb-2
  "
>
  <span className="
    text-[11px] font-bold tracking-[0.025em]
    text-white
  ">
    Explore Latest News
  </span>

  <span className="
    flex h-10 w-10 shrink-0
    items-center justify-center
    rounded-full
    bg-[#F5A000]
    text-[#111827]
    transition-transform duration-300 ease-out
    group-hover:rotate-45
  ">
    <ArrowUpRight size={19} strokeWidth={2} />
  </span>
</Link>


          </div>
        </motion.div>

        {/* MAIN NEWS + ADVERTISEMENT */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-9 xl:gap-11">

          {/* FEATURED NEWS CARD */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="group min-w-0 overflow-hidden bg-white shadow-[0_8px_35px_rgba(24,39,28,0.045)]"
          >

            {/* IMAGE */}
            <Link
              to="/news"
              aria-label="Read featured solar energy story"
              className="relative block aspect-[16/9] overflow-hidden bg-[#F0F1EB]"
            >

              <img
                src={featuredStory.image}
                alt="Solar panels installed at a renewable energy project"
                loading="eager"
                className="
                  h-full w-full object-cover
                  transition-transform duration-1000
                  ease-out group-hover:scale-[1.045]
                "
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130B]/45 via-transparent to-[#07130B]/5" />



              {/* IMAGE BOTTOM LABEL */}
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  Renewable Energy · India
                </span>
              </div>

              {/* IMAGE ARROW */}
              <span
                className="
                  absolute bottom-5 right-5
                  flex h-11 w-11 items-center justify-center
                  rounded-full bg-white text-[#19271D]
                  shadow-lg transition-transform duration-300
                  group-hover:rotate-45
                  sm:bottom-7 sm:right-7
                "
              >
                <ArrowUpRight size={20} />
              </span>

            </Link>

            {/* ARTICLE CONTENT */}
            <div className="px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-8">

              {/* CATEGORY AND DATE */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3">

                <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#71875D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B99A4B]" />
                  {featuredStory.category}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#D1C39A]" />

                <span className="inline-flex items-center gap-2 text-[10px] font-medium text-[#899087]">
                  <CalendarDays size={13} />
                  {featuredStory.date}
                </span>

              </div>

              {/* HEADLINE - NO HOVER COLOR CHANGE */}
              <h3 className="
                mt-5 max-w-[850px]
                font-display text-[23px] font-extrabold
                leading-[1.34] tracking-[-0.045em]
                text-[#17271D]
                sm:text-[27px] lg:text-[30px]
              ">
                <Link
                  to="/news"
                  className="text-[#17271D] no-underline"
                >
                  {featuredStory.title}
                </Link>
              </h3>

              {/* GOLD ACCENT */}
              <div className="mt-5 flex items-center gap-2">
                <span className="h-[2px] w-8 bg-[#B99A4B]" />
                <span className="h-px w-12 bg-[#E9E8DF]" />
              </div>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-[690px] text-[13px] leading-[1.9] text-[#7B857B] sm:text-sm">
                {featuredStory.description}
              </p>

              {/* ARTICLE FOOTER */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#ECEDE7] pt-5">

                <div className="flex items-center gap-5">

                  <span className="inline-flex items-center gap-2 text-[10px] font-medium text-[#879087]">
                    <Clock3 size={14} />
                    5 min read
                  </span>

                  <span className="hidden h-4 w-px bg-[#E7E8E1] sm:block" />

                  <span className="hidden items-center gap-2 text-[10px] font-medium text-[#879087] sm:inline-flex">
                    <Bookmark size={13} />
                    Top Story
                  </span>

                </div>

                {/* READ STORY */}
                <Link
                  to="/news"
                  className="group/read inline-flex items-center gap-2 text-[11px] font-extrabold text-[#263D2B]"
                >
                  Read Full Story

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F1F2EC] transition-transform duration-300 group-hover/read:rotate-45">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>

              </div>
            </div>
          </motion.article>

          {/* ADVERTISEMENT SIDEBAR */}
          <div className="min-w-0">
            <AdvertisementSidebar />
          </div>

        </div>
      </div>
    </section>
  );
}
