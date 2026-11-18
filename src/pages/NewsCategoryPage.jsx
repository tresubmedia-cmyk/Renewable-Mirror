
import { useLocation, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import NationalNews from "../components/sections/NationalNews";
import InternationalNews from "../components/sections/InternationalNews";

export default function NewsCategoryPage() {
  const location = useLocation();
  const category = location.pathname.split("/").pop();

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* NEWS CONTENT */}
      <section className="pt-12 sm:pt-16 lg:pt-20">
        {category === "national" ? (
          <NationalNews />
        ) : category === "international" ? (
          <InternationalNews />
        ) : null}
      </section>



      {/* EXPLORE MORE NEWS */}
      <section className="bg-white px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-[#E5E7EB] pt-8 sm:flex-row sm:items-center">

     
<div className="group relative overflow-hidden rounded-2xl bg-[#111827] px-7 py-8 sm:px-10 sm:py-9">

  {/* GOLD ACCENT */}
  <div className="absolute left-0 top-0 h-full w-1 bg-[#F5A000]" />

  <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-center">

    <div className="max-w-2xl">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6B94B]">
        Stay Informed
      </span>

      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Explore more industry news.
      </h3>

      <p className="mt-3 text-[13px] leading-6 text-white/65 sm:text-sm">
        Discover more stories from the renewable energy industry.
      </p>
    </div>

    <Link
      to="/news"
      className="group/btn inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#F5A000] py-2 pl-6 pr-2 text-[12px] font-bold text-[#111827] transition-all duration-300 hover:bg-[#E6B94A]"
    >
      Explore All News

      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white transition-transform duration-300 group-hover/btn:rotate-45">
        <ArrowUpRight size={17} />
      </span>
    </Link>

  </div>
</div>


          <Link
            to="/news"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#111827] transition-colors hover:text-[#B8860B]"
          >
            Explore All News

            <ArrowUpRight
              size={17}
              className="text-[#B8860B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>



    </main>
  );
}
