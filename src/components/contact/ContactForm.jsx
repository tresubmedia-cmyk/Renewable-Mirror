
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const initialForm = {
  name: "",
  email: "",
  company: "",
  subject: "General Enquiry",
  message: "",
};

export default function ContactForm() {
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

        {/* Name and Email */}
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

        {/* Company */}
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

        {/* Enquiry Type */}
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

        {/* Message */}
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

        {/* Submit Button */}
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
  );
}
