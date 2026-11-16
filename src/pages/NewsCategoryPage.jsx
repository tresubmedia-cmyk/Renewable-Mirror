
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Newspaper,
  Globe2,
  MapPin,
} from "lucide-react";

import NationalNews from "../components/sections/NationalNews";
import InternationalNews from "../components/sections/InternationalNews";

const categories = {
  national: {
    title: "National News",
    eyebrow: "INDIA RENEWABLE ENERGY",
    description:
      "Stay informed about the latest renewable energy developments, policies, projects and industry updates across India.",
    number: "01",
    icon: MapPin,
  },

  international: {
    title: "International News",
    eyebrow: "GLOBAL ENERGY PERSPECTIVES",
    description:
      "Explore global renewable energy developments, international projects, innovations and the people shaping the energy transition.",
    number: "02",
    icon: Globe2,
  },
};

export default function NewsCategoryPage() {
  // GET CURRENT CATEGORY FROM URL
  const location = useLocation();
  const category = location.pathname.split("/").pop();

  const data = categories[category];

  // CATEGORY NOT FOUND
  if (!data) {
    return (
      <main className="flex min-h-[65vh] flex-col items-center justify-center bg-[#F7F8F5] px-6 text-center">
        <Newspaper size={40} className="text-[#A58B4D]" />

        <h1 className="mt-6 font-serif text-3xl text-[#10291D] sm:text-4xl">
          Category Not Found
        </h1>

        <p className="mt-4 max-w-md text-sm leading-7 text-[#788278]">
          The news category you are looking for is not available.
        </p>

        <Link
          to="/news"
          className="mt-7 inline-flex items-center gap-2 bg-[#D9BC70] px-6 py-3 text-xs font-bold text-[#09251A] transition hover:bg-[#10291D] hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to News
        </Link>
      </main>
    );
  }

  const CategoryIcon = data.icon;

  return (
    <main className="min-h-screen bg-[#F7F8F5]">

      {/* CATEGORY HERO */}
      <section className="relative isolate overflow-hidden bg-[#09251A] px-6 py-20 sm:py-28 lg:py-32">

        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[520px] w-[520px] rounded-full border border-[#D9BC70]/15" />

        <div className="pointer-events-none absolute -right-8 -top-16 -z-10 h-[380px] w-[380px] rounded-full border border-white/[0.07]" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-white/10" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl"
        >

          {/* BACK TO NEWS */}
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs font-medium text-white/65 transition-colors hover:text-[#D9BC70]"
          >
            <ArrowLeft size={15} />
            Back to All News
          </Link>

          {/* EYEBROW */}
          <div className="mt-12 flex items-center gap-3">
            <span className="h-px w-9 bg-[#D9BC70]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D9BC70]">
              {data.eyebrow}
            </span>
          </div>

          {/* HEADING */}
          <div className="mt-7 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] text-[#F4F1E8] sm:text-6xl lg:text-7xl">
                {data.title}
                <span className="text-[#D9BC70]">.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
                {data.description}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                <CategoryIcon
                  size={17}
                  className="text-[#D9BC70]"
                />
                Renewable Mirror News Desk
              </div>
            </div>

            {/* CATEGORY NUMBER */}
            <div className="hidden border-l border-white/15 pl-8 lg:block">
              <span className="font-serif text-7xl text-[#D9BC70]/80">
                {data.number}
              </span>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                News Category
              </p>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="mt-16 flex items-center justify-between border-t border-white/15 pt-5">
            <p className="font-serif text-base italic text-[#D9BC70]">
              Read. Reflect. Reimagine.
            </p>

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
              {data.number} / 02
            </span>
          </div>
        </motion.div>
      </section>

      {/* NEWS CONTENT */}
      <section className="min-h-[400px]">
        {category === "national" ? (
          <NationalNews />
        ) : (
          <InternationalNews />
        )}
      </section>

      {/* EXPLORE MORE NEWS */}
      <section className="bg-white px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-[#E3E8E0] pt-8 sm:flex-row sm:items-center">

          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A58B4D]">
              Stay Informed
            </span>

            <h2 className="mt-3 font-serif text-2xl text-[#10291D] sm:text-3xl">
              Explore more industry news.
            </h2>

            <p className="mt-2 text-sm text-[#879187]">
              Discover more stories from the renewable energy industry.
            </p>
          </div>

          <Link
            to="/news"
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#A58B4D] transition-colors hover:text-[#10291D]"
          >
            Explore All News
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
}
