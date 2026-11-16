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
    <section className="bg-[#F7F8F5] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 flex flex-col justify-between gap-6 lg:mb-20 lg:flex-row lg:items-end"
        >
       <p className="text-4xl font-bold leading-[1.08] tracking-tight text-[#17291F] sm:text-5xl lg:text-6xl">
  The Values Behind
  <span className="block font-serif font-medium text-[#A58B4D]">
    Our Perspective.
  </span>
</p>

          <p className="max-w-sm text-base leading-8 text-[#5F6E63]">
            The principles that influence how we create, communicate and
            connect with the renewable energy community.
          </p>
        </motion.div>

        {/* Mirror panels: the one you look at opens up and catches the light */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="flex flex-col gap-3 lg:h-[32rem] lg:flex-row"
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
                className={`relative min-w-0 cursor-pointer overflow-hidden rounded-[1.75rem] border p-7 outline-none transition-[flex-grow,background-color,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-[#A58B4D] focus-visible:ring-offset-2 motion-reduce:transition-none sm:p-9 ${
                  isActive
                    ? "border-[#D9BC70]/40 bg-[#17291F] lg:flex-[4_1_0%]"
                    : "border-[#E3E8E0] bg-white lg:flex-[1_1_0%]"
                }`}
              >
                {/* Light sweep across the glass when a panel opens */}
                {!reduce && (
                  <motion.span
                    aria-hidden
                    initial={false}
                    animate={{ x: isActive ? ["-130%", "130%"] : "-130%" }}
                    transition={{ duration: isActive ? 1.2 : 0, ease: EASE }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.09] to-transparent"
                  />
                )}

                {/* Watermark icon */}
                <Icon
                  aria-hidden
                  strokeWidth={0.6}
                  className={`pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 text-[#D9BC70] transition-opacity duration-700 ${
                    isActive ? "opacity-[0.12]" : "opacity-0"
                  }`}
                />

                <div className="relative flex h-full flex-col">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                      isActive
                        ? "border-[#D9BC70]/50 text-[#D9BC70]"
                        : "border-[#E3E8E0] text-[#A58B4D]"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </span>

                  {/* Collapsed: title stands upright along the panel (desktop only) */}
                  <span
                    aria-hidden
                    className={`absolute bottom-0 left-1 hidden whitespace-nowrap text-xl font-bold tracking-tight text-[#17291F] transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180 lg:block ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Open: title + description (always visible on mobile) */}
                  <div
                    className={`mt-10 transition-all duration-500 lg:mt-auto lg:min-w-[21rem] ${
                      isActive
                        ? "lg:translate-y-0 lg:opacity-100 lg:delay-200"
                        : "lg:pointer-events-none lg:translate-y-3 lg:opacity-0"
                    }`}
                  >
                    <h3
                      className={`font-serif text-4xl font-medium tracking-tight sm:text-5xl ${
                        isActive ? "text-[#F4F1E8]" : "text-[#17291F] lg:text-[#F4F1E8]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span className="mt-5 block h-px w-12 bg-[#D9BC70]" />
                    <p
                      className={`mt-5 max-w-sm text-base leading-8 ${
                        isActive ? "text-[#F4F1E8]/70" : "text-[#5F6E63] lg:text-[#F4F1E8]/70"
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