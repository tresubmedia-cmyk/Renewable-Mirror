
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  FileText,
  Newspaper,
  Sparkles,
  Leaf,
} from "lucide-react";

const resources = [
  { icon: BookOpen, title: "Industry Reports", number: "01" },
  { icon: FileText, title: "Research & Guides", number: "02" },
  { icon: Newspaper, title: "Industry Insights", number: "03" },
];

const EASE = [0.22, 1, 0.36, 1];

export default function ResourcesHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[780px] items-center overflow-hidden bg-[#111827] px-5 py-20 sm:px-8 lg:min-h-[820px] lg:py-24">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[650px] w-[650px] rounded-full border border-[#F5A000]/10" />
        <div className="absolute -right-16 top-24 h-[500px] w-[500px] rounded-full border border-white/[0.06]" />
        <div className="absolute -left-32 bottom-0 h-[450px] w-[450px] rounded-full bg-[#F5A000]/[0.035] blur-[110px]" />

        <div className="absolute left-[48%] top-0 h-full w-px bg-white/[0.025]" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />

        <span className="absolute -bottom-16 -left-8 select-none font-serif text-[220px] font-bold leading-none text-white/[0.018]">
          RM
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1400px]">

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">

          {/* LEFT CONTENT */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
            className="relative z-10"
          >

            {/* MAIN HEADING */}
            <h1 className="max-w-[720px] text-[42px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[60px] xl:text-[64px]">
              Knowledge.
              <br />
              Research.
              <br />
              <span className="text-[#E6B94A]">
                New possibilities.
              </span>
            </h1>

            <div className="mt-7 h-[2px] w-16 bg-[#F5A000]" />

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[490px] text-[13px] leading-7 text-[#D1D5DB]/75 sm:text-[14px] sm:leading-8">
              Discover a world of industry knowledge, in-depth
              research, expert perspectives and valuable
              publications shaping the future of renewable energy.
            </p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap items-center gap-6">

              <a
                href="#resources-content"
                className="group inline-flex items-center gap-4 rounded-full bg-[#F5A000] py-1.5 pl-5 pr-1.5 text-[12px] font-bold text-[#111827] transition-all duration-300 hover:bg-[#E6B94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6B94A]"
              >
                Explore Resources

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-[#E6B94A] transition-transform duration-300 group-hover:rotate-[-45deg]">
                  <ArrowDown size={17} />
                </span>
              </a>

              <div className="flex items-center gap-3">
                <BookOpen size={17} className="text-[#E6B94A]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  Research & Knowledge
                </span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="relative mx-auto w-full max-w-[540px] py-10"
          >

            {/* BACK LAYERS */}
            <div className="absolute right-0 top-5 h-[540px] w-[88%] border border-[#F5A000]/25" />

            <div className="absolute right-5 top-10 h-[520px] w-[88%] border border-white/10" />

            {/* MAIN CARD */}
            <div className="relative z-10 mx-auto w-[86%] max-w-[420px] border border-[#E6B94A]/40 bg-[#F5F4F0] p-4 shadow-2xl shadow-black/40 sm:p-5">

              {/* HEADER */}
              <div className="flex items-center justify-between border-b border-[#D5D2C8] px-2 pb-4">
                <div>
                  <p className="font-serif text-[23px] font-bold leading-none text-[#111827]">
                    RENEWABLE
                    <br />
                    <span className="text-[#B8860B]">
                      MIRROR.
                    </span>
                  </p>

                  <p className="mt-2 text-[7px] font-bold tracking-[0.2em] text-[#6B7280]">
                    KNOWLEDGE & RESEARCH
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8860B]/50">
                  <Leaf size={19} className="text-[#B8860B]" />
                </div>
              </div>

              {/* FEATURE IMAGE */}
              <div className="relative mt-4 h-[200px] overflow-hidden bg-[#111827] sm:h-[225px]">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85"
                  alt="Renewable energy wind turbines"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#111827]/30" />

                <div className="absolute bottom-0 left-0 right-0 bg-[#111827]/85 p-4">
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E6B94A]">
                    The Knowledge Collection
                  </p>

                  <h2 className="mt-2 font-serif text-[27px] font-bold leading-tight text-white sm:text-[32px]">
                    EXPLORE
                    <br />
                    WHAT'S NEXT.
                  </h2>
                </div>
              </div>

              {/* RESOURCE LIST */}
              <div className="mt-5">
                {resources.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center justify-between border-b border-[#DAD8CF] py-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <Icon size={17} className="text-[#B8860B]" />

                        <span className="text-[11px] font-bold text-[#1F2937]">
                          {item.title}
                        </span>
                      </div>

                      <span className="font-serif text-[13px] text-[#B8860B]">
                        {item.number}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between px-1 pt-5">
                <span className="text-[7px] font-bold tracking-[0.17em] text-[#B8860B]">
                  IDEAS POWERING TOMORROW
                </span>

                <Sparkles size={15} className="text-[#B8860B]" />
              </div>
            </div>

            {/* FLOATING BOTTOM LABEL */}
            <motion.div
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-1 -right-1 z-20 border border-white/10 bg-[#263244] px-4 py-3.5 shadow-xl sm:-right-4"
            >
              <div className="flex items-center gap-3">
                <Sparkles size={17} className="text-[#E6B94A]" />

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/45">
                    Knowledge for
                  </p>

                  <p className="mt-1 font-serif text-[14px] text-[#E6B94A]">
                    A Better Future
                  </p>
                </div>

                <ArrowUpRight size={16} className="text-[#E6B94A]" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
