
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResourcesCTA() {
  return (
    <section className="bg-white px-6 pb-20 sm:px-10 lg:px-16">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl rounded-xl border border-[#D9BC70]/30 bg-[#09251A] px-8 py-12 sm:px-12 sm:py-14 lg:px-16"
      >
        <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-center">

          {/* CONTENT */}
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9BC70]">
              Connect With Us
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Looking for more
              <span className="block text-[#D9BC70]">
                information?
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
              Connect with our team for industry information,
              publications and resource-related enquiries.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex shrink-0 flex-wrap items-center gap-3">

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-[#D9BC70] px-6 py-4 text-xs font-bold text-[#09251A] transition-all duration-300 hover:bg-white"
            >
              Contact Us
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="mailto:info@renewablemirror.com"
              className="inline-flex items-center gap-3 rounded-md border border-white/30 px-6 py-4 text-xs font-bold text-white transition-all duration-300 hover:border-[#D9BC70] hover:text-[#D9BC70]"
            >
              <Mail size={16} />
              Email Us
            </a>

          </div>
        </div>
      </motion.div>

    </section>
  );
}
