import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

// DUMMY DATA: real posts ke liye <NationalNews news={data} /> pass karo.
// Har item: { id, category, date, title, image, slug }
const defaultNews = [
  {
    id: 1,
    category: "Solar Energy",
    date: "November 13, 2026",
    title:
      "Rayzon Solar's Research and Development Laboratory Earns Prestigious NABL Accreditation",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    slug: "/news/national/rayzon-solar",
  },
  {
    id: 2,
    category: "Solar Projects",
    date: "November 12, 2026",
    title:
      "NTPC REL Invites Bids for 1,000 MW Solar Projects in Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
    slug: "/news/national/ntpc-rel-solar-projects",
  },
  {
    id: 3,
    category: "Rooftop Solar",
    date: "November 11, 2026",
    title:
      "Uttar Pradesh Records Strong Rooftop Solar Growth Under PM Surya Ghar Scheme",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85",
    slug: "/news/national/up-rooftop-solar",
  },
  {
    id: 4,
    category: "Renewable Energy",
    date: "November 10, 2026",
    title:
      "India Accelerates Its Clean Energy Transition With New Solar Installations",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=85",
    slug: "/news/national/india-clean-energy",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function NationalNews({ news = defaultNews }) {
  const reduce = useReducedMotion();
  if (!news || news.length === 0) return null;
  const items = news.slice(0, 4);

  const headerMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: EASE },
      };

  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: EASE },
    },
  };

  // Image settle: reveal ke time image thodi zoom-out hoke ruk jaati hai
  const imageVariants = {
    hidden: reduce ? { scale: 1 } : { scale: 1.18 },
    visible: {
      scale: 1,
      transition: { duration: 1.5, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          {...headerMotion}
          className="mb-10 flex flex-col justify-between gap-6 border-b border-[#e9ede6] pb-8 md:mb-12 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#B99A4B]" />
              <span className="text-[12px] font-semibold tracking-[0.04em] text-[#667C65]">
                India updates
              </span>
            </div>

            <h2 className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#17291F] sm:text-[42px] lg:text-[50px]">
              National news
            </h2>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#6F7B6F]">
              The latest developments, projects and policy updates from India's
              renewable energy sector.
            </p>
          </div>

          <Link
            to="/news/national"
            className="group inline-flex w-fit items-center gap-4 rounded-full border border-[#dce3da] bg-white py-2 pl-6 pr-2 transition-all duration-300 hover:border-[#172D21] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A4B]"
          >
            <span className="text-[13px] font-semibold text-[#243C2D]">
              View all national news
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#172D21] text-white transition-colors duration-300 group-hover:bg-[#B99A4B]">
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </Link>
        </motion.div>

        {/* NEWS CARDS */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              className="group min-w-0"
            >
              <Link
                to={item.slug || "/news/national"}
                className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A4B]"
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#E8EEE6]">
                  <div className="h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-110">
                    <motion.img
                      variants={imageVariants}
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1B13]/40 via-transparent to-transparent" />

                  <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#172D21] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#D8BD76]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                {/* TEXT */}
                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] font-medium text-[#7D887D]">
                    <span className="text-[#9A7E34]">{item.category}</span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="mt-3 line-clamp-4 font-display text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#17291F] transition-colors duration-300 group-hover:text-[#2F5A3E]">
                    {item.title}
                  </h3>

                  <div className="mt-auto pt-6">
                    {/* divider: hover par gold line left se fill hoti hai */}
                    <div className="relative h-px w-full bg-[#e6eae3]">
                      <span className="absolute left-0 top-0 h-px w-0 bg-[#B99A4B] transition-all duration-700 ease-out group-hover:w-full" />
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[13px] font-semibold text-[#526D55] transition-colors duration-300 group-hover:text-[#17291F]">
                      Read full story
                      <ArrowRight
                        size={16}
                        className="text-[#B99A4B] transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}