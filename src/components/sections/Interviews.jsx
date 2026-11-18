import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

// DUMMY DATA: jab interview posts ready ho jayein, <Interviews interviews={data} />
// me pass kar dena. Har interview me:
// { id, name, designation, company, category, date, title, image, slug }
const defaultInterviews = [
  {
    id: 1,
    name: "Mr. Visat Patel",
    designation: "Co-founder & CEO",
    company: "Ubidge Technology Pvt. Ltd.",
    category: "Exclusive Interview",
    date: "November 13, 2026",
    title:
      "Mr. Visat Patel, Co-founder & CEO, Ubidge Technology Pvt. Ltd.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
    slug: "/interviews/visat-patel",
  },
  {
    id: 2,
    name: "Mr. Vineet Mittal",
    designation: "Founder & Director",
    company: "Navitas Solar",
    category: "Exclusive Interview",
    date: "November 12, 2026",
    title: "Mr. Vineet Mittal, Founder & Director, Navitas Solar",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=85",
    slug: "/interviews/vineet-mittal",
  },
  {
    id: 3,
    name: "Mr. Kamlesh Kumar D. Patel",
    designation: "Promoter and MD",
    company: "GRE Renew Enertech",
    category: "Exclusive Interview",
    date: "November 11, 2026",
    title:
      "Renewable Projects Must Be Viable Without Subsidies, Says Mr. Kamlesh Kumar D. Patel",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    slug: "/interviews/kamlesh-patel",
  },
  {
    id: 4,
    name: "Mr. Shivam Sisodiya",
    designation: "Co-Founder and CEO",
    company: "Bijliride",
    category: "Exclusive Interview",
    date: "November 10, 2026",
    title:
      "Upgraded Batteries, Telematics and Service-First Operations Are Driving EV Adoption: Bijliride CEO",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    slug: "/interviews/shivam-sisodiya",
  },
];

const EASE = [0.22, 1, 0.36, 1];

const initialsOf = (name = "") =>
  name
    .replace(/^(mr|mrs|ms|dr)\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

// Photo load na ho to initials dikhte hain, layout kharab nahi hota.
function Portrait({ src, alt, name }) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center bg-[#E8EEE6] font-display text-5xl font-extrabold text-[#9FB3A4]">
        {initialsOf(name)}
      </div>

      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
      )}
    </>
  );
}

export default function Interviews({ interviews = defaultInterviews }) {
  const reduce = useReducedMotion();
  if (!interviews || interviews.length === 0) return null;
  const items = interviews.slice(0, 4);

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
      transition: { staggerChildren: reduce ? 0 : 0.13, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 44 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: EASE },
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
                Voices of the industry
              </span>
            </div>

            <p className="font-display text-[24px] font-bold leading-[1.1] tracking-[-0.04em] text-[#17291F] sm:text-[32px] lg:text-[40px]">
              Industry interviews
            </p>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#6F7B6F]">
              Conversations with the leaders, innovators and decision-makers
              shaping the future of renewable energy.
            </p>
          </div>

<Link
  to="/interviews"
  className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#111827] py-2 pl-4 pr-2 transition-all duration-300 hover:bg-[#1F2937]"
>
  <span className="text-[12px] font-semibold text-white">
    Explore all interviews
  </span>

  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5A000] text-[#111827] transition-all duration-300 group-hover:bg-[#E6B94A]">
    <ArrowUpRight
      size={15}
      className="transition-transform duration-300 group-hover:rotate-45"
    />
  </span>
</Link>
        </motion.div>

        {/* INTERVIEW CARDS */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4"
        >
          {items.map((interview) => (
            <motion.article
              key={interview.id}
              variants={cardVariants}
              className="group min-w-0"
            >
              <Link
                to={interview.slug || "/interviews"}
                className="flex h-full flex-col rounded-2xl border border-[#e6eae3] bg-white p-3 transition-all duration-500 ease-out hover:scale-[1.02] hover:border-[#cfd8c9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A4B]"
              >
                {/* PORTRAIT */}
                <div className="relative aspect-[4/4.4] overflow-hidden rounded-xl bg-[#E8EEE6]">
                  <Portrait
                    src={interview.image}
                    alt={interview.name}
                    name={interview.name}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B13]/45 via-transparent to-transparent" />

                  <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#172D21] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#D8BD76]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                {/* DETAILS */}
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-[#8A9487]">
                    <span className="text-[#9A7E34]">{interview.category}</span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={12} />
                      {interview.date}
                    </span>
                  </div>

                  <h3 className="mt-3 line-clamp-4 font-display text-[16px] font-bold leading-[1.5] tracking-[-0.02em] text-[#192C21] transition-colors duration-300 group-hover:text-[#2F5A3E]">
                    {interview.title}
                  </h3>

                  <div className="mt-auto pt-5">
                    <div className="border-t border-[#edf0eb] pt-4">
                      <p className="text-[13px] font-bold text-[#263D2D]">
                        {interview.name}
                      </p>
                      <p className="mt-1 text-[12px] leading-5 text-[#7D887D]">
                        {interview.designation}, {interview.company}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-[#526D55]">
                      Read interview
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
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