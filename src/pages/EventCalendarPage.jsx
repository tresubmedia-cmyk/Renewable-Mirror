import { useState } from "react";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

/* end = last day of the event (month is 0-based). Used for Upcoming / Completed status. */
const EVENTS = [
  { month: "April 2026", name: "RenewX 2026", date: "22–24 April 2026", location: "Chennai Trade Centre, Chennai", end: new Date(2026, 3, 24, 23, 59) },
  { month: "May 2026", name: "EL Asia 2026", date: "14–17 May 2026", location: "Bangalore, India", end: new Date(2026, 4, 17, 23, 59) },
  { month: "June 2026", name: "World Environment Expo", date: "04–06 June 2026", location: "India Expo Centre, Greater Noida", end: new Date(2026, 5, 6, 23, 59) },
  { month: "June 2026", name: "SNEC China", date: "03–05 June 2026", location: "Shanghai", end: new Date(2026, 5, 5, 23, 59) },
  { month: "July 2026", name: "Automation Expo 2026", date: "22–25 July 2026", location: "B.E.C Goregaon, Mumbai", end: new Date(2026, 6, 25, 23, 59) },
  { month: "August 2026", name: "REV Expo 2026", date: "August 2026", location: "Lucknow, India", end: new Date(2026, 7, 31, 23, 59) },
  { month: "September 2026", name: "PowerGen India", date: "01–03 Sept 2026", location: "Yashobhoomi, New Delhi", end: new Date(2026, 8, 3, 23, 59) },
  { month: "October 2026", name: "REI Expo 2026", date: "22–24 Oct 2026", location: "India Expo Mart, Greater Noida", end: new Date(2026, 9, 24, 23, 59) },
  { month: "November 2026", name: "MAHA Solar", date: "26–28 Nov 2026", location: "Pune", end: new Date(2026, 10, 28, 23, 59) },
  { month: "February 2027", name: "Intersolar", date: "February 2027", location: "Gandhinagar, Gujarat", end: new Date(2027, 1, 28, 23, 59) },
  { month: "February 2027", name: "Elecrama 2027", date: "20–24 Feb 2027", location: "India Expo Mart, Greater Noida", end: new Date(2027, 1, 24, 23, 59) },
  { month: "March 2027", name: "Smart Future Cities India Expo", date: "23–25 March 2027", location: "Bharat Mandapam, New Delhi", end: new Date(2027, 2, 25, 23, 59) },
];

const now = new Date();
const withStatus = EVENTS.map((e) => ({ ...e, done: e.end < now }));
const nextIndex = withStatus.findIndex((e) => !e.done);

function Status({ done, next }) {
  if (next)
    return (
      <span className="bg-[#10291D] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#D9BC70]">
        Next event
      </span>
    );
  if (done)
    return (
      <span className="text-[10px] font-semibold uppercase tracking-widest text-black/70">
        Completed
      </span>
    );
  return (
    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A58B4D]">
      Upcoming
    </span>
  );
}

export default function EventCalendarPage() {
  const [filter, setFilter] = useState("all");

  const rows = withStatus
    .map((e, i) => ({ ...e, next: i === nextIndex }))
    .filter((e) => (filter === "upcoming" ? !e.done : true));

  return (
    <main className="min-h-screen bg-white">
      {/* CALENDAR */}
      <section className="px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A58B4D]">
                April 2026 – March 2027
              </span>
              <h2 className="mt-3 font-serif text-3xl text-[#10291D] sm:text-4xl">
                Event Calendar 2026–27
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#788278]">
                Stay connected with important developments and gatherings
                across the renewable energy industry.
              </p>
            </div>

            <div className="inline-flex self-start border border-[#E2E7DF] bg-white p-1 text-xs font-semibold">
              {[
                ["all", "All events"],
                ["upcoming", "Upcoming"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 transition-colors ${
                    filter === key
                      ? "bg-[#10291D] text-[#D9BC70]"
                      : "text-[#788278] hover:text-[#10291D]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* DESKTOP TABLE */}
          <div className="mt-10 hidden overflow-hidden border border-[#E2E7DF] bg-white shadow-[0_10px_40px_-20px_rgba(16,41,29,0.3)] md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#10291D] text-white">
                  <th className="px-6 py-5 text-xs font-bold tracking-wide">Month</th>
                  <th className="border-l border-white/10 px-6 py-5 text-xs font-bold tracking-wide">Event</th>
                  <th className="border-l border-white/10 px-6 py-5 text-xs font-bold tracking-wide">Date</th>
                  <th className="border-l border-white/10 px-6 py-5 text-xs font-bold tracking-wide">Location</th>
                  <th className="border-l border-white/10 px-6 py-5 text-xs font-bold tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((e) => (
                  <tr
                    key={e.name}
                    className={`border-t border-[#E9EDE6] text-sm text-black transition-colors ${
                      e.next ? "bg-[#FBF6E6]" : "hover:bg-[#F7F8F5]"
                    }`}
                  >
                    <td
                      className={`px-6 py-5 font-serif text-base font-semibold text-[#A58B4D] ${
                        e.next ? "border-l-4 border-[#D9BC70]" : "border-l-4 border-transparent"
                      }`}
                    >
                      {e.month}
                    </td>
                    <td className="border-l border-[#EEF1EB] px-6 py-5 font-medium text-black">
                      {e.name}
                    </td>
                    <td className="border-l border-[#EEF1EB] px-6 py-5">{e.date}</td>
                    <td className="border-l border-[#EEF1EB] px-6 py-5">
                      <span className="flex items-center gap-2">
                        <MapPin size={14} className="shrink-0 text-[#A58B4D]" />
                        {e.location}
                      </span>
                    </td>
                    <td className="border-l border-[#EEF1EB] px-6 py-5">
                      <Status done={e.done} next={e.next} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARDS */}
          <div className="mt-10 space-y-4 md:hidden">
            {rows.map((e) => (
              <article
                key={e.name}
                className={`border bg-white ${
                  e.next ? "border-[#D9BC70]" : "border-[#E2E7DF]"
                }`}
              >
                <header className="flex items-center justify-between bg-[#10291D] px-5 py-3">
                  <span className="font-serif text-base text-[#D9BC70]">{e.month}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/80">
                    {e.next ? "Next event" : e.done ? "Completed" : "Upcoming"}
                  </span>
                </header>
                <div className="space-y-2 px-5 py-4 text-sm text-black">
                  <h3 className="font-serif text-lg text-black">{e.name}</h3>
                  <p className="flex items-center gap-2">
                    <CalendarDays size={14} className="shrink-0 text-[#A58B4D]" />
                    {e.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="shrink-0 text-[#A58B4D]" />
                    {e.location}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {rows.length === 0 && (
            <p className="mt-10 border-l-4 border-[#D9BC70] bg-white p-5 text-sm text-[#788278]">
              No upcoming events right now. New dates will be added here.
            </p>
          )}
        </div>
      </section>

  
{/* CTA */}
<section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
  <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-[#111827] px-8 py-12 sm:px-14 sm:py-16 md:flex-row md:items-center">

    <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#F5A000]/20" />
    <div className="pointer-events-none absolute -bottom-24 right-40 h-60 w-60 rounded-full border border-white/10" />

    <div className="relative max-w-xl">
      <h2 className="font-serif text-3xl text-white sm:text-4xl">
        Hosting an industry event?
      </h2>

      <p className="mt-3 text-sm leading-7 text-[#D1D5DB]/65">
        Share your event details with Renewable Mirror.
      </p>
    </div>

    <Link
      to="/contact"
      className="relative inline-flex shrink-0 items-center gap-3 rounded-full bg-[#F5A000] px-7 py-4 text-xs font-bold text-[#111827] transition-colors hover:bg-[#E6B94A]"
    >
      Share Event Details
      <ArrowUpRight size={16} />
    </Link>

  </div>
</section>

    </main>
  );
}