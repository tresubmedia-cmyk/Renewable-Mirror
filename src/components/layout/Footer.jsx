
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Home", "/"],
      ["Latest News", "/news"],
      ["National News", "/news"],
      ["International News", "/news"],
      ["Interviews", "/interviews"],
      ["Guest Articles", "/news"],
    ],
  },
  {
    title: "Discover",
    links: [
      ["Cover Stories", "/news"],
      ["Magazine", "/magazine"],
      ["Gallery", "/gallery"],
      ["Video Interviews", "/interviews"],
      ["About Us", "/about"],
    ],
  },
  {
    title: "Information",
    links: [
      ["Contact Us", "/contact"],
      ["Advertise With Us", "/contact"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms-and-conditions"],
    ],
  },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "" },
  { name: "Instagram", icon: Instagram, url: "" },
  { name: "Facebook", icon: Facebook, url: "" },
  { name: "YouTube", icon: Youtube, url: "" },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="bg-[#0B1912] text-white">

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">

        {/* BRAND AND NAVIGATION */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-14 lg:py-20">

          {/* BRAND */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Link to="/" className="inline-flex">
              <img
                src="https://www.renewablemirror.com/wp-content/uploads/2026/01/RM-Logo-large-White.png"
                alt="Renewable Mirror"
                className="h-auto w-[210px] max-w-full object-contain object-left"
              />
            </Link>

            <p className="mt-7 max-w-[330px] text-[13px] leading-[2] text-[#A8B5AA]">
              An outlook of the renewable and green energy industry.
              Bringing you the latest news, industry developments,
              exclusive interviews and insights from across the world.
            </p>

            <div className="mt-7 flex items-center gap-2">
              {socialLinks.filter((item) => item.url).map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#B5C0B7] transition-all duration-300 hover:border-[#D8BD76] hover:bg-[#D8BD76] hover:text-[#0B1912]"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* FOOTER NAVIGATION */}
          {footerGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: reduce ? 0 : index * 0.1,
                ease: EASE,
              }}
            >
              <h3 className="mb-7 text-[11px] font-extrabold uppercase tracking-[0.19em] text-[#D8BD76]">
                {group.title}
              </h3>

              <ul className="space-y-4">
                {group.links.map(([label, path]) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="group inline-flex items-center gap-2 text-[13px] text-[#A8B5AA] transition-colors duration-300 hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#D8BD76] transition-all duration-300 group-hover:w-4" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

    

        {/* BOTTOM BAR */}
        <div className="flex flex-col justify-between gap-4 py-7 sm:flex-row sm:items-center">

          <p className="text-[11px] text-[#829187]">
            © {new Date().getFullYear()} Renewable Mirror. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/privacy-policy"
              className="text-[11px] text-[#829187] transition-colors hover:text-[#D8BD76]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-[11px] text-[#829187] transition-colors hover:text-[#D8BD76]"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-[11px] text-[#829187] transition-colors hover:text-[#D8BD76]"
            >
              Contact
              <ArrowRight size={12} />
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
