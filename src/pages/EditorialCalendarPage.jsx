import { motion } from "framer-motion";
import { ArrowUpRight, Info } from "lucide-react";
import { Link } from "react-router-dom";

/* month: 0 = Jan ... 11 = Dec  (used to highlight the current issue) */
const CALENDAR = [
  {
    label: "April-2026", year: 2026, month: 3,
    cover: ["Renewable Energy"],
    focus: ["PV Module Market", "Solar Street Light"],
    feature: ["Storage Technologies", "PV Inverter", "EV Charger & Vehicles"],
    state: "Rajasthan / Gujarat",
    events: ["RenewX 2026"],
  },
  {
    label: "May-2026", year: 2026, month: 4,
    cover: ["Roof Top & Off Grid"],
    focus: ["Wind Energy", "Distributed PV"],
    feature: ["Solar Inverter", "Renewable Energy"],
    state: "Gujarat",
    events: ["EL Asia 2026"],
  },
  {
    label: "June-2026", year: 2026, month: 5,
    cover: ["Solar Energy Storage"],
    focus: ["Solar Street Light", "Automation Effect: Solar & Wind Power"],
    feature: ["PV Modules", "Smart Grid", "Optimizing EPC Efficiency"],
    state: "Delhi/NCR",
    events: ["World Environment Expo", "SNEC China"],
  },
  {
    label: "July-2026", year: 2026, month: 6,
    cover: ["Solar Farm & Wind Turbines"],
    focus: ["Solar Panels", "Floating / PV Mount"],
    feature: ["UPS & Batteries", "EV Chargers", "PV Inverter"],
    state: "Himachal Pradesh",
    events: ["Automation Expo 2026"],
  },
  {
    label: "August-2026", year: 2026, month: 7,
    cover: ["PV Modules"],
    focus: ["Commercial & Industrial PV Storage"],
    feature: ["Green Energy", "Smart Cities", "UPS & Batteries"],
    state: "Andhra Pradesh",
    events: ["REV Expo 2026"],
  },
  {
    label: "Sept-2026", year: 2026, month: 8,
    cover: ["Golden Anniversary + REI Special Issue"],
    focus: ["All Topics"],
    feature: ["All Topics"],
    state: "Hyderabad/Gujarat",
    events: ["PowerGen India"],
    special: true,
  },
  {
    label: "October-2026", year: 2026, month: 9,
    cover: ["EPC Project Lifecycle", "Bioenergy"],
    focus: ["Roof Top", "Distributed PV"],
    feature: ["Next-Gen Solar", "Excellence Modules Efficiency"],
    state: "Uttar Pradesh/Uttarakhand",
    events: ["REI Expo 2026"],
  },
  {
    label: "Nov-2026", year: 2026, month: 10,
    cover: ["Post REI Issue", "Green Energy"],
    focus: ["Smart Cities", "Solar Automation"],
    feature: ["PV Inverter", "Floating/PV Mount"],
    state: "Rajasthan",
    events: ["MAHA Solar"],
  },
  {
    label: "Dec-2026", year: 2026, month: 11,
    cover: ["Steam Turbine"],
    focus: ["Geothermal Energy", "Photovoltaic Intelligent Charging & Storage"],
    feature: ["Technology Trends In Solar PV BoS Sector"],
    state: "Madhya Pradesh/Rajasthan",
    events: [],
  },
  {
    label: "Jan-2027", year: 2027, month: 0,
    cover: ["Smart Solar Panels", "EPC Cost Optimization"],
    focus: ["Geothermal Energy", "Wind Energy", "Automated Solar Maintenance"],
    feature: ["EV Chargers", "Solar Inverters", "Project Lifecycle"],
    state: "Rajasthan/Gujarat",
    events: ["Intersolar"],
  },
  {
    label: "Feb-2027", year: 2027, month: 1,
    cover: ["PV Inverter", "Renewable Energy"],
    focus: ["Automation", "Off Grid PV", "UPS & Batteries"],
    feature: ["EPC Project Lifecycle", "Technology Trends in Solar PV BoS"],
    state: "Gujarat",
    events: ["Elecrama 2027"],
  },
  {
    label: "March-2027", year: 2027, month: 2,
    cover: ["Smart Solar Panels", "Solar Deployment Strategies"],
    focus: ["Innovations in EPC for RE", "Roof Top PV Modules"],
    feature: ["UPS & Batteries", "Bioenergy", "Solar Inverter"],
    state: "Haryana",
    events: ["Smart Future Cities India Expo"],
  },
];

const COLUMNS = [
  { key: "cover", title: "Cover Story" },
  { key: "focus", title: "Special Focus" },
  { key: "feature", title: "Industry Feature" },
  { key: "state", title: "State Overview" },
  { key: "events", title: "Events" },
];

const now = new Date();
const isCurrent = (row) =>
  row.year === now.getFullYear() && row.month === now.getMonth();

function List({ items }) {
  if (!items || items.length === 0)
    return <span className="text-black">—</span>;
  return (
    <ul className="space-y-1.5">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#D9BC70]" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function MonthBadge({ row }) {
  const current = isCurrent(row);
  return (
    <div className="flex flex-col items-start gap-2">
      <span className="font-serif text-lg font-semibold text-[#A58B4D]">
        {row.label}
      </span>
      {current && (
        <span className="bg-[#10291D] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#D9BC70]">
          Current issue
        </span>
      )}
      {row.special && !current && (
        <span className="bg-[#D9BC70]/25 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#7A6529]">
          Special issue
        </span>
      )}
    </div>
  );
}

export default function EditorialCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* CALENDAR */}
      <section className="px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A58B4D]">
              April 2026 – March 2027
            </span>
            <h2 className="mt-3 font-serif text-3xl text-[#10291D] sm:text-5xl">
              Editorial Calendar 2026–27
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#788278]">
              Month-wise cover stories, special focus areas, industry features,
              state overviews and the events we will be covering.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden overflow-hidden border border-[#E2E7DF] bg-white shadow-[0_10px_40px_-20px_rgba(8,43,80,0.25)] md:block"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#10291D] text-white">
                    <th className="px-5 py-5 text-xs font-bold tracking-wide">
                      Issue Date
                    </th>
                    {COLUMNS.map((c) => (
                      <th
                        key={c.key}
                        className="border-l border-white/10 px-5 py-5 text-xs font-bold tracking-wide"
                      >
                        {c.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CALENDAR.map((row) => {
                    const current = isCurrent(row);
                    return (
                      <tr
                        key={row.label}
                        className={`border-t border-[#E9EDE6] align-top text-sm leading-6 text-black transition-colors ${
                          current
                            ? "bg-[#FBF6E6]"
                            : row.special
                            ? "bg-[#EEF4EF]"
                            : "bg-white hover:bg-[#F7F8F5]"
                        }`}
                      >
                        <td
                          className={`px-5 py-5 ${
                            current ? "border-l-4 border-[#D9BC70]" : "border-l-4 border-transparent"
                          }`}
                        >
                          <MonthBadge row={row} />
                        </td>
                        <td className="border-l border-[#EEF1EB] px-5 py-5 font-medium text-black">
                          <List items={row.cover} />
                        </td>
                        <td className="border-l border-[#EEF1EB] px-5 py-5">
                          <List items={row.focus} />
                        </td>
                        <td className="border-l border-[#EEF1EB] px-5 py-5">
                          <List items={row.feature} />
                        </td>
                        <td className="border-l border-[#EEF1EB] px-5 py-5">
                          {row.state}
                        </td>
                        <td className="border-l border-[#EEF1EB] px-5 py-5">
                          <List items={row.events} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* MOBILE CARDS */}
          <div className="space-y-4 md:hidden">
            {CALENDAR.map((row) => {
              const current = isCurrent(row);
              return (
                <article
                  key={row.label}
                  className={`border bg-white ${
                    current ? "border-[#D9BC70]" : "border-[#E2E7DF]"
                  }`}
                >
                  <header className="flex items-center justify-between bg-[#10291D] px-5 py-3">
                    <span className="font-serif text-lg text-[#D9BC70]">
                      {row.label}
                    </span>
                    {(current || row.special) && (
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/80">
                        {current ? "Current issue" : "Special issue"}
                      </span>
                    )}
                  </header>
                  <dl className="divide-y divide-[#EEF1EB] text-sm leading-6 text-black">
                    {COLUMNS.map((c) => (
                      <div key={c.key} className="px-5 py-3">
                        <dt className="mb-1 text-[11px] font-bold tracking-wide text-[#A58B4D]">
                          {c.title}
                        </dt>
                        <dd>
                          {Array.isArray(row[c.key]) ? (
                            <List items={row[c.key]} />
                          ) : (
                            row[c.key]
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              );
            })}
          </div>

          {/* NOTE */}
          <div className="mt-8 flex items-center gap-3 border-l-4 border-[#D9BC70] bg-[#FFF8DC] px-5 py-4 text-sm text-[#5C4B14]">
            <Info size={18} className="shrink-0" />
            Schedule may change subject to market conditions.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1F4030] via-[#143222] to-[#0C2016] px-8 py-12 sm:px-14 sm:py-16 md:flex-row md:items-center">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#D9BC70]/20" />
          <div className="pointer-events-none absolute -bottom-24 right-40 h-60 w-60 rounded-full border border-white/10" />

          <div className="relative max-w-xl">
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              Have an editorial idea?
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Connect with our editorial team.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative inline-flex shrink-0 items-center gap-3 rounded-full bg-[#D9BC70] px-7 py-4 text-xs font-bold text-[#10291D] transition-colors hover:bg-white"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}