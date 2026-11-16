
import { motion } from "framer-motion";
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
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
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
  return (
    <section
      id="resources-content"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#B69A55]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A58B4D]">
                Explore Knowledge
              </span>
            </div>

            <p className="text-xl font-bold leading-relaxed text-[#10291D] sm:text-2xl lg:text-3xl">
              Knowledge that moves you forward.
            </p>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[#788278] sm:text-base">
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
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {resources.map((item) => {
            return (
              <motion.a
                key={item.title}
                href={item.link}
                variants={cardVariants}
                whileHover={{ y: -9 }}
                className="group relative isolate flex min-h-[340px] flex-col overflow-hidden rounded-xl border border-[#D9BC70]/30 bg-[#09251A] p-7 transition-all duration-500 hover:border-[#D9BC70] hover:shadow-[0_22px_50px_rgba(9,37,26,0.18)] sm:p-8"
              >
                {/* LEFT TO RIGHT HOVER BACKGROUND */}
                <div className="pointer-events-none absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-[#173D2D] via-[#24543D] to-[#A58B4D] transition-transform duration-700 ease-out group-hover:translate-x-0" />

                {/* CONTENT */}
                <div className="mt-auto pt-12">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D9BC70] transition-colors duration-500 group-hover:text-white">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-xs leading-7 text-white/60 transition-colors duration-500 group-hover:text-white/85">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/50 transition-colors duration-500 group-hover:text-white">
                    Explore Resource
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9BC70]/40 text-[#D9BC70] transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-[#09251A]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8EBE5] pt-7"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#879187]">
            Renewable Mirror — Knowledge Centre
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A58B4D]">
            Research. Discover. Learn.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
