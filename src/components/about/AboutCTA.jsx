import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

function ContactRow({ label, value, to, href }) {
  const inner = (
    <>
      <span className="text-xs text-[#D9BC70]">{label}</span>
      <span className="mt-1 flex items-center justify-between gap-4">
        <span className="break-all text-lg font-medium tracking-tight text-[#F4F1E8] transition-colors duration-300 group-hover:text-[#D9BC70]">
          {value}
        </span>
        <ArrowUpRight
          size={20}
          className="shrink-0 text-[#D9BC70] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
      {/* Hairline that fills with gold on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#D9BC70] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none"
      />
    </>
  );
  const cls =
    "group relative block border-b border-white/15 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70]";

  return to ? (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

export default function AboutCTA() {
  const reduce = useReducedMotion();

  // Gold light that follows the cursor across the panel
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(217,188,112,0.16), transparent 65%)`;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section className="bg-[#F7F8F5] px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          onMouseMove={reduce ? undefined : onMove}
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative overflow-hidden rounded-3xl bg-[#0B2117] text-[#F4F1E8]"
        >
          {/* Static glow (for touch) + cursor spotlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-[#D9BC70]/[0.07] blur-3xl"
          />
          <motion.div
            aria-hidden
            style={{ background: spotlight }}
            className="pointer-events-none absolute inset-0"
          />

          <div className="relative grid items-center gap-10 px-7 py-10 sm:px-12 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-14">
            {/* LEFT */}
            <div>
           <p className="text-4xl font-bold leading-[1.06] tracking-[-0.03em] sm:text-5xl">
  Every Great Idea
  <span className="block font-serif font-medium tracking-tight text-[#D9BC70]">
    Starts With A Conversation.
  </span>
</p>

              <p className="mt-5 max-w-md text-base leading-7 text-[#F4F1E8]/60">
                Have an industry story, a new perspective or a partnership
                idea? We would love to hear from you.
              </p>

              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center gap-4 rounded-full bg-[#D9BC70] py-1.5 pl-6 pr-1.5 text-sm font-bold text-[#0B2117] transition-all duration-300 hover:bg-[#E8CE8B] hover:shadow-[0_10px_40px_rgba(217,188,112,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BC70]"
              >
                Start a Conversation
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2117] text-[#F4F1E8] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="border-t border-white/15">
              <ContactRow
                label="Email us"
                value="neha@renewablemirror.com"
                href="mailto:neha@renewablemirror.com"
              />
              <ContactRow
                label="Contact us"
                value="Visit our contact page"
                to="/contact"
              />
            </div>
          </div>
        </motion.div>

        <p className="mt-6 text-center font-serif text-base  text-[#344739] sm:text-left">
          Connecting perspectives. Inspiring progress.
        </p>
      </div>
    </section>
  );
}