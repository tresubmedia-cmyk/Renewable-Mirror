
import { motion, useReducedMotion } from "framer-motion";

// CLIENT DATA
// Baad mein original logo add karne ke liye:
// logo: "/images/clients/client-01.png"

const clients = [
  { id: 1, name: "Credence", subtitle: "Solar Panels" },
  { id: 2, name: "Solis", subtitle: "Energy Storage" },
  { id: 3, name: "Adani", subtitle: "Solar" },
  { id: 4, name: "RAYZON", subtitle: "SOLAR" },
  { id: 5, name: "SUNORA", subtitle: "SOLAR PVM MODULE" },
  { id: 6, name: "GAUTAM", subtitle: "SOLAR" },
  { id: 7, name: "KP GROUP", subtitle: "Renewable Energy" },
  { id: 8, name: "Renewable Partner", subtitle: "Clean Energy" },
];

export default function OurClients() {
  const reduce = useReducedMotion();

  const repeatedClients = [...clients, ...clients];

  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADING */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between border-b border-[#E8E8E8]">
            <div>
              <h2 className="text-[20px] font-extrabold uppercase tracking-[-0.02em] text-[#E51B23] sm:text-[22px]">
                Our Clients
              </h2>
              <div className="mt-2 h-[5px] w-[105px] bg-black" />
            </div>

            <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A9A9A] sm:block">
              Trusted Industry Partners
            </span>
          </div>
        </motion.div>

        {/* CLIENT LOGO MARQUEE */}
        <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-xl border border-[#E7E7E7] bg-white">

          {/* Side fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />

          <motion.div
            className="flex w-max"
            animate={reduce ? {} : { x: ["0%", "-50%"] }}
            transition={
              reduce
                ? {}
                : {
                    duration: 32,
                    ease: "linear",
                    repeat: Infinity,
                  }
            }
          >
            {repeatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex h-[112px] w-[170px] shrink-0 items-center justify-center border-r border-[#EEEEEE] px-5 transition-colors duration-300 hover:bg-[#F9FAF8] sm:h-[122px] sm:w-[210px] sm:px-7"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-[65px] max-w-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="font-display text-[19px] font-extrabold tracking-[-0.04em] text-[#315E46] sm:text-[23px]">
                      {client.name}
                    </span>

                    <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.17em] text-[#89938A]">
                      {client.subtitle}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM LABEL */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#D6BD78]" />
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#929A92]">
            Growing Together · Building a Greener Future
          </p>
          <span className="h-px w-8 bg-[#D6BD78]" />
        </div>

      </div>
    </section>
  );
}
