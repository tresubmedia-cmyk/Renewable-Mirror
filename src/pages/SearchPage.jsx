
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Globe2,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const initialForm = {
  name: "",
  email: "",
  company: "",
  subject: "General Enquiry",
  message: "",
};

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

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `
Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
Enquiry Type: ${form.subject}

Message:
${form.message}
    `;

    const mailto = `mailto:neha@renewablemirror.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0B1912] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-[#D8BD76]/10" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#D8BD76]/10" />

        <div className="relative mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#D8BD76]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D8BD76]">
                Get In Touch
              </span>
            </div>

            <h1 className="max-w-[950px] font-display text-[42px] font-extrabold leading-[1.08] tracking-[-0.055em] sm:text-[60px] lg:text-[78px]">
              Let's Start a
              <br />
              <span className="font-semibold italic text-[#D8BD76]">
                Conversation.
              </span>
            </h1>

            <p className="mt-7 max-w-[570px] text-[13px] leading-7 text-[#B0BDB2] sm:text-[15px]">
              Have a story to share, an idea to discuss or an opportunity
              to collaborate? We'd love to hear from you.
            </p>

            <div className="mt-9 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#A8B5AA]">
              <span>Renewable Mirror</span>
              <span className="h-1 w-1 rounded-full bg-[#D8BD76]" />
              <span>Contact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFORMATION AND FORM */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1350px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* LEFT SIDE */}
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

            {/* CONTACT DETAILS */}
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

            {/* ADVERTISING PANEL */}
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

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="rounded-2xl border border-[#E8ECE6] bg-[#FAFBF8] p-6 sm:p-9 lg:p-11"
          >
            <div className="mb-9">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A58B4D]">
                Send Us a Message
              </span>

              <h2 className="mt-3 font-display text-[28px] font-extrabold tracking-[-0.04em] text-[#17291F] sm:text-[34px]">
                How can we help?
              </h2>

              <p className="mt-3 text-[12px] leading-6 text-[#828C81]">
                Fill in the details below and our team will be happy
                to connect with you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] font-bold text-[#344739]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-[#E0E6DE] bg-white px-4 py-3.5 text-[12px] text-[#17291F] outline-none transition-all placeholder:text-[#A5ADA3] focus:border-[#A58B4D] focus:ring-2 focus:ring-[#D8BD76]/15"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-bold text-[#344739]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border border-[#E0E6DE] bg-white px-4 py-3.5 text-[12px] text-[#17291F] outline-none transition-all placeholder:text-[#A5ADA3] focus:border-[#A58B4D] focus:ring-2 focus:ring-[#D8BD76]/15"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-bold text-[#344739]">
                  Company / Organisation
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  autoComplete="organization"
                  className="w-full rounded-lg border border-[#E0E6DE] bg-white px-4 py-3.5 text-[12px] text-[#17291F] outline-none transition-all placeholder:text-[#A5ADA3] focus:border-[#A58B4D] focus:ring-2 focus:ring-[#D8BD76]/15"
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-bold text-[#344739]">
                  Enquiry Type *
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#E0E6DE] bg-white px-4 py-3.5 text-[12px] text-[#17291F] outline-none transition-all focus:border-[#A58B4D]"
                >
                  <option>General Enquiry</option>
                  <option>Advertising & Partnerships</option>
                  <option>Editorial & News Submission</option>
                  <option>Interview Opportunity</option>
                  <option>Magazine Enquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-bold text-[#344739]">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-[#E0E6DE] bg-white px-4 py-3.5 text-[12px] leading-6 text-[#17291F] outline-none transition-all placeholder:text-[#A5ADA3] focus:border-[#A58B4D] focus:ring-2 focus:ring-[#D8BD76]/15"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-between rounded-full bg-[#172D21] py-2 pl-6 pr-2 text-white transition-colors duration-300 hover:bg-[#254A34]"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.1em]">
                  Send Your Message
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D8BD76] text-[#172D21] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={19} />
                </span>
              </button>

              <p className="text-center text-[10px] leading-5 text-[#929B91]">
                Your message will open in your default email application.
              </p>

            </form>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM BRAND STRIP */}
      <section className="border-t border-[#E9EDE7] bg-[#F7F8F5] px-5 py-8 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#788477]">
          Renewable Energy. One Perspective.
        </p>
      </section>

    </main>
  );
}
