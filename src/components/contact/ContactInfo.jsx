
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Globe2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "neha@renewablemirror.com",
    href: "mailto:neha@renewablemirror.com",
  },
  {
    icon: Globe2,
    label: "Visit Our Website",
    value: "www.renewablemirror.com",
    href: "https://www.renewablemirror.com",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#A58B4D]">
        We'd Love To Hear From You
      </span>

      <h2 className="mt-5 font-display text-[34px] font-extrabold leading-[1.2] tracking-[-0.04em] text-[#17291F] sm:text-[42px]">
        Every great
        <br />
        <span className="font-semibold italic text-[#A58B4D]">
          connection starts here.
        </span>
      </h2>

      <p className="mt-6 max-w-[440px] text-[13px] leading-7 text-[#788378]">
        Whether you're an industry professional, a business,
        a reader or a potential partner, connect with our team.
        Let's create something meaningful together.
      </p>

      {/* Contact Details */}
      <div className="mt-10 space-y-7">
        {contactDetails.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center gap-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1F4EF] text-[#315D45] transition-colors duration-300 group-hover:bg-[#172D21] group-hover:text-[#D8BD76]">
                <Icon size={19} />
              </span>

              <span className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#929B91]">
                  {item.label}
                </span>

                <span className="mt-1 block break-all text-[13px] font-bold text-[#263D2D]">
                  {item.value}
                </span>
              </span>

              <ArrowUpRight
                size={17}
                className="ml-auto shrink-0 text-[#B99A4B] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>
          );
        })}
      </div>

      {/* Advertising Panel */}
      <div className="mt-12 rounded-xl bg-[#10291D] p-6 text-white sm:p-8">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D8BD76]">
          Business & Partnerships
        </span>

        <h3 className="mt-3 text-[20px] font-bold">
          Want to promote your brand?
        </h3>

        <p className="mt-3 text-[12px] leading-6 text-[#B0BDB2]">
          Connect with businesses, professionals and decision-makers
          across the renewable energy industry.
        </p>

        <a
          href="mailto:neha@renewablemirror.com?subject=Advertising%20Enquiry"
          className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold text-[#D8BD76]"
        >
          Discuss Advertising
          <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.div>
  );
}
