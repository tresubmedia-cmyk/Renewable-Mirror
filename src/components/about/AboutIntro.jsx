import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const TOPICS = ["Solar", "Wind", "Energy storage", "Green hydrogen", "Clean tech"];

/* Headline is rendered twice: once normal, once as a mirror reflection. */
function Headline() {
  return (
    <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#17291F] sm:text-6xl lg:text-7xl">
      More Than News.
      <span className="mt-2 block font-serif font-medium  text-[#A58B4D]">
        A Clearer Perspective.
      </span>
    </h2>
  );
}

export default function AboutIntro() {
  const reduce = useReducedMotion();

  // One orchestrated entrance: text first, reflection last.
  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section
      id="about-intro"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >

     

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          {/* LEFT — headline + reflection */}
          <div>
            <motion.p
              {...reveal(0)}
              className="mb-8 flex items-center gap-3 text-sm font-medium text-[#5F6E63]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9BC70] opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D9BC70]" />
              </span>
              About Renewable Mirror
            </motion.p>

            <motion.div {...reveal(0.1)}>
              <Headline />
            </motion.div>

            {/* The mirror: flipped, faded, and fading out */}
            <motion.div
              aria-hidden
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 0.18 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
              className="pointer-events-none mt-3 hidden max-h-36 select-none overflow-hidden blur-[1.5px] sm:block"
              style={{
                transform: "scaleY(-1)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, transparent 75%)",
                maskImage: "linear-gradient(to top, black 0%, transparent 75%)",
              }}
            >
              <Headline />
            </motion.div>

            <motion.a
              {...reveal(0.3)}
              href="#our-mission"
              className="group mt-10 inline-flex items-center gap-4 rounded-full border border-[#DCE3D9] py-2 pl-6 pr-2 text-sm font-semibold text-[#17291F] transition-colors hover:border-[#A58B4D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A58B4D]"
            >
              Explore our purpose
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17291F] text-white group-hover:bg-[#A58B4D] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </motion.a>
          </div>

          {/* RIGHT — description */}
          <motion.div {...reveal(0.2)} className="lg:pt-14">
            <p className="text-xl font-medium leading-9 text-[#17291F] sm:text-2xl">
              Renewable Mirror is a platform dedicated to bringing the
              renewable energy industry into sharper focus.
            </p>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#5F6E63]">
              From solar and wind to energy storage and emerging clean
              technologies, we bring together industry news, expert
              perspectives, interviews and developments that matter.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#5F6E63]">
              Our aim is to create a meaningful connection between industry
              professionals, businesses, innovators and readers through
              relevant information and informed perspectives.
            </p>

          

            <div className="mt-9 flex items-center gap-4">
              <span className="h-10 w-1 rounded-full bg-[#D9BC70]" />
              <p className="max-w-md text-sm font-semibold leading-6 text-[#17291F]">
                Connecting the renewable energy ecosystem through stories,
                knowledge and industry insights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}