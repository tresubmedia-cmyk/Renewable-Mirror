
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Newspaper,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const resources = [
  {
    title: "Industry Reports",
    description:
      "Explore reports and research covering renewable energy markets and industry developments.",
    category: "RESEARCH",
    number: "01",
    icon: BarChart3,
    link: "#",
  },
  {
    title: "Publications",
    description:
      "Discover publications, articles and informative material from the renewable energy sector.",
    category: "PUBLICATIONS",
    number: "02",
    icon: BookOpen,
    link: "/magazine",
  },
  {
    title: "News & Insights",
    description:
      "Stay informed with important updates, analysis and perspectives from the energy industry.",
    category: "INDUSTRY NEWS",
    number: "03",
    icon: Newspaper,
    link: "/news",
  },
  {
    title: "Documents & Guides",
    description:
      "A dedicated space for useful documents, reference material and industry guides.",
    category: "KNOWLEDGE",
    number: "04",
    icon: FileText,
    link: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ResourcesSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="resources-content"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#F5A000]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#B8860B]">
                Explore Knowledge
              </span>
            </div>

            <h2 className="text-[22px] font-bold leading-relaxed tracking-tight text-[#111827] sm:text-[26px] lg:text-[29px]">
              Knowledge that moves you forward.
            </h2>

            <p className="mt-3 max-w-xl text-[13px] leading-7 text-[#6B7280] sm:text-sm">
              Explore industry reports, publications and essential
              resources to understand the evolving renewable
              energy landscape.
            </p>
          </div>
        </motion.div>

        {/* RESOURCE CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {resources.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.link}
                variants={cardVariants}
                whileHover={reduce ? undefined : { y: -6 }}
                className="group relative isolate flex min-h-[290px] flex-col overflow-hidden rounded-xl border border-[#F5A000]/20 bg-[#111827] p-6 transition-all duration-500 hover:border-[#F5A000]/60 hover:shadow-[0_18px_40px_rgba(17,24,39,0.15)] sm:p-6"
              >
                {/* GOLD HOVER BACKGROUND */}
                <div className="pointer-events-none absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-[#1F2937] via-[#263244] to-[#8A6A25] transition-transform duration-700 ease-out group-hover:translate-x-0" />

                {/* TOP */}
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#F5A000]/25 bg-[#F5A000]/[0.08] text-[#E6B94A] transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10">
                    <Icon size={19} strokeWidth={1.7} />
                  </span>

                  <span className="font-serif text-[13px] text-[#E6B94A]/75">
                    {item.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="mt-auto pt-9">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E6B94A] transition-colors duration-500 group-hover:text-white">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-[19px] font-bold leading-snug tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-[1.8] text-white/60 transition-colors duration-500 group-hover:text-white/85">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/50 transition-colors duration-500 group-hover:text-white">
                    Explore Resource
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F5A000]/40 text-[#E6B94A] transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-[#F5A000] group-hover:text-[#111827]">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E7EB] pt-6"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#9CA3AF]">
            Renewable Mirror — Knowledge Centre
          </p>

          <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#B8860B]">
            Research. Discover. Learn.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
