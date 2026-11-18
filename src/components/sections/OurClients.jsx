
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LOGO_FOLDER = "/images/clients";

const clientList = [
  { name: "Grew", file: "grew.png" },
  { name: "Renew", file: "renew.png" },
  { name: "WAGO", file: "wago.png" },
  { name: "Emmvee", file: "emmvee.png" },
  { name: "Goldi Solar", file: "goldi-solar.png" },
  { name: "Novasys", file: "novasys.png" },
  { name: "Navitas Solar", file: "navitas-solar.png" },
  { name: "Microtek", file: "microtek.png" },
  { name: "Flotex Solar", file: "flotex-solar.png" },
  { name: "Pixon", file: "pixon.png" },
  { name: "Dhak", file: "dhash.png" },
  { name: "ASOT Solar", file: "asot-solar.png" },
  { name: "Newtronics", file: "newtronics.png" },
  { name: "Solex Energy", file: "solex-energy.png" },
  { name: "Jinko Solar", file: "jinko-solar.png" },
  { name: "Solera", file: "solera.png" },
  { name: "Growatt", file: "growatt.png" },
  { name: "Waaree", file: "waaree.png" },
  { name: "Alishan", file: "alishan.png" },
  { name: "Knack Energy", file: "knack-energy.png" },
  { name: "Enicon", file: "enicon.png" },
  { name: "Credence", file: "credence.png" },
  { name: "Solis", file: "solis.png" },
  { name: "Adani Solar", file: "adani-solar.png" },
  { name: "Rayzon Solar", file: "rayzon-solar.png" },
  { name: "Sunora", file: "sunora.png" },
  { name: "Gautam Solar", file: "gautam-solar.png" },
  { name: "KP Group", file: "kp-group.png" },
].map((client, index) => ({
  ...client,
  id: index + 1,
  logo: `${LOGO_FOLDER}/${client.file}`,
}));

const half = Math.ceil(clientList.length / 2);
const rowA = clientList.slice(0, half);
const rowB = clientList.slice(half);

// CLIENT LOGO TILE
function ClientTile({ client }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="
        group flex h-[82px] w-[170px] shrink-0
        items-center justify-center
        rounded-md border border-[#E8E8E8]
        bg-white px-5
        transition-colors duration-300
        hover:border-[#CFCFCF]
        sm:h-[92px] sm:w-[200px]
        lg:w-[215px]
      "
    >
      {!failed ? (
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          title={client.name}
          loading="lazy"
          draggable="false"
          onError={() => setFailed(true)}
          className="
            max-h-[54px] max-w-full
            object-contain
            transition-transform duration-300
            group-hover:scale-[1.04]
            sm:max-h-[62px]
          "
        />
      ) : (
        <span className="text-sm font-bold text-[#1F3D2E]">
          {client.name}
        </span>
      )}
    </div>
  );
}

// INFINITE MARQUEE
function MarqueeRow({
  items,
  direction = "left",
  duration = 65,
  reduceMotion,
}) {
  const loop = [...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`marquee-track flex w-max ${
          direction === "left"
            ? "marquee-left"
            : "marquee-right"
        }`}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: reduceMotion ? "paused" : "running",
        }}
      >
        {loop.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="pr-3 sm:pr-4"
            aria-hidden={index >= items.length ? "true" : undefined}
          >
            <ClientTile client={client} />
          </div>
        ))}
      </div>
    </div>
  );
}

// MAIN SECTION
export default function OurClients() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="our-clients-heading"
      className="
        relative overflow-hidden
        bg-white
        px-5 py-14
        sm:px-8 sm:py-16
        lg:px-10 lg:py-20
      "
    >
      <style>{`
        @keyframes clients-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes clients-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .marquee-left {
          animation: clients-left linear infinite;
        }

        .marquee-right {
          animation: clients-right linear infinite;
        }

        .clients-marquee:hover .marquee-track,
        .clients-marquee:focus-within .marquee-track {
          animation-play-state: paused;
        }

        .marquee-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            #000 4%,
            #000 96%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 4%,
            #000 96%,
            transparent
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mb-9 flex flex-col gap-4
            sm:mb-11 sm:flex-row
            sm:items-end sm:justify-between
          "
        >
          <div>
            <p className="
              mb-2 text-[11px] font-bold
              uppercase tracking-[0.2em]
              text-[#A17B32]
            ">
              Our Trusted Network
            </p>

            <h2
              id="our-clients-heading"
              className="
                font-display text-[34px]
                font-extrabold tracking-[-0.04em]
                text-[#172D21]
                sm:text-[44px]
              "
            >
              Our Clients
            </h2>

            <div className="mt-3 h-[3px] w-14 bg-[#D6BD78]" />
          </div>

          <p className="
            max-w-[390px]
            text-[14px] leading-[1.8]
            text-[#707070]
            sm:text-right
          ">
            Building strong partnerships with leading
            solar and renewable energy brands.
          </p>
        </motion.div>

        {/* CLIENT LOGO ROWS */}
        <div
          className="clients-marquee flex flex-col gap-3 sm:gap-4"
          role="region"
          aria-label="Our client logos"
          tabIndex={0}
        >
          <MarqueeRow
            items={rowA}
            direction="left"
            duration={68}
            reduceMotion={reduce}
          />

          <MarqueeRow
            items={rowB}
            direction="right"
            duration={76}
            reduceMotion={reduce}
          />
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="
          mt-9 flex items-center
          justify-center gap-3
          sm:mt-11
        ">
          <span className="h-px w-9 bg-[#E5E5E5]" />

          <p className="
            text-center text-[12px]
            font-semibold tracking-wide
            text-[#777777]
            sm:text-[13px]
          ">
            Growing Together. Creating a Sustainable Future.
          </p>

          <span className="h-px w-9 bg-[#E5E5E5]" />
        </div>

      </div>
    </section>
  );
}
