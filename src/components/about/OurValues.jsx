
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Lightbulb, Network, BookOpen } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const values = [
  {
    title: "Credibility",
    description:
      "We believe in responsible storytelling and sharing information that helps readers understand the industry.",
    icon: ShieldCheck,
  },
  {
    title: "Clarity",
    description:
      "We make complex renewable energy developments easier to understand through clear and relevant perspectives.",
    icon: BookOpen,
  },
  {
    title: "Innovation",
    description:
      "We highlight new ideas, technologies and developments contributing to the changing energy landscape.",
    icon: Lightbulb,
  },
  {
    title: "Connection",
    description:
      "We bring together professionals, businesses and innovators across the renewable energy ecosystem.",
    icon: Network,
  },
];

export default function OurValues() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 flex flex-col justify-between gap-5 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#F5A000]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B8860B]">
                What Defines Us
              </span>
            </div>

            <p className="text-[clamp(30px,3.5vw,48px)] font-bold leading-[1.12] tracking-[-0.045em] text-[#111827]">
              The Values Behind
              <span className="block font-serif font-medium text-[#B8860B]">
                Our Perspective.
              </span>
            </p>
          </div>

          <p className="max-w-sm text-[13px] leading-[1.9] text-[#6B7280] sm:text-[14px]">
            The principles that influence how we create, communicate and
            connect with the renewable energy community.
          </p>
        </motion.div>

        {/* VALUE CARDS */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="flex flex-col gap-3 lg:h-[29rem] lg:flex-row"
        >
          {values.map((item, i) => {
            const isActive = active === i;
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                tabIndex={0}
                role="group"
                aria-label={item.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`relative min-w-0 cursor-pointer overflow-hidden rounded-[1.4rem] border p-6 outline-none transition-[flex-grow,background-color,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-[#F5A000] focus-visible:ring-offset-2 motion-reduce:transition-none sm:p-7 ${
                  isActive
                    ? "border-[#F5A000]/40 bg-[#111827] lg:flex-[4_1_0%]"
                    : "border-[#111827]/10 bg-white lg:flex-[1_1_0%]"
                }`}
              >
                {/* Light sweep */}
                {!reduce && (
                  <motion.span
                    aria-hidden
                    initial={false}
                    animate={{ x: isActive ? ["-130%", "130%"] : "-130%" }}
                    transition={{
                      duration: isActive ? 1.2 : 0,
                      ease: EASE,
                    }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.09] to-transparent"
                  />
                )}

                {/* Watermark icon */}
                <Icon
                  aria-hidden
                  strokeWidth={0.6}
                  className={`pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 text-[#F5A000] transition-opacity duration-700 ${
                    isActive ? "opacity-[0.12]" : "opacity-0"
                  }`}
                />

                <div className="relative flex h-full flex-col">

                  {/* Icon */}
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                      isActive
                        ? "border-[#F5A000]/50 bg-white/[0.04] text-[#F5A000]"
                        : "border-[#111827]/15 bg-[#F8FAFC] text-[#B8860B]"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.6} />
                  </span>

                  {/* Collapsed title */}
                  <span
                    aria-hidden
                    className={`absolute bottom-0 left-1 hidden whitespace-nowrap text-lg font-bold tracking-tight text-[#111827] transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180 lg:block ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Expanded content */}
                  <div
                    className={`mt-9 transition-all duration-500 lg:mt-auto lg:min-w-[19rem] ${
                      isActive
                        ? "lg:translate-y-0 lg:opacity-100 lg:delay-200"
                        : "lg:pointer-events-none lg:translate-y-3 lg:opacity-0"
                    }`}
                  >
                    <h3
                      className={`font-serif text-3xl font-medium tracking-tight sm:text-4xl ${
                        isActive
                          ? "text-white"
                          : "text-[#111827] lg:text-white"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <span className="mt-4 block h-px w-10 bg-[#F5A000]" />

                    <p
                      className={`mt-4 max-w-sm text-[13px] leading-[1.85] sm:text-[14px] ${
                        isActive
                          ? "text-white/75"
                          : "text-[#6B7280] lg:text-white/75"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
