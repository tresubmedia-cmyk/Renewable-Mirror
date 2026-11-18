
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `
Name: ${form.name}
Email: ${form.email}
Company: ${form.company || "Not provided"}
Enquiry Type: ${form.subject}

Message:
${form.message}
    `.trim();

    const mailto = `mailto:neha@renewablemirror.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  const inputClass =
    "w-full border-b border-[#D1D5DB] bg-transparent px-0 py-2.5 text-[13px] text-[#1F2937] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#F5A000]";

  const labelClass =
    "mb-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#1F2937]";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
      className="flex h-full flex-col justify-center bg-white px-6 py-8 sm:px-9 sm:py-10 lg:px-11 lg:py-11"
    >
      {/* HEADER */}
      <div className="mb-7">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8860B]">
          Send Us a Message
        </span>

        <h2 className="mt-2.5 font-display text-[26px] font-bold tracking-tight text-[#111827] sm:text-[30px]">
          How can we help?
        </h2>

        <p className="mt-2 text-[12px] leading-6 text-[#6B7280]">
          Tell us a little about your enquiry. We'd love to hear from you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* NAME AND EMAIL */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Your Name *
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Your Email *
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Company / Organisation
          </label>

          <input
            id="contact-company"
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
            autoComplete="organization"
            className={inputClass}
          />
        </div>

        {/* ENQUIRY TYPE */}
        <div>
          <label htmlFor="contact-subject" className={labelClass}>
            Enquiry Type *
          </label>

          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className={`${inputClass} cursor-pointer`}
          >
            <option>General Enquiry</option>
            <option>Advertising & Partnerships</option>
            <option>Editorial & News Submission</option>
            <option>Interview Opportunity</option>
            <option>Magazine Enquiry</option>
            <option>Other</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Your Message *
          </label>

          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            rows={3}
            required
            className={`${inputClass} resize-none leading-6`}
          />
        </div>

        {/* SUBMIT */}
        <div className="flex justify-end pt-1">
          <button
            type="submit"
            className="group inline-flex items-center gap-3 rounded-lg bg-[#F5A000] px-5 py-3 text-[12px] font-bold text-[#111827] transition-colors duration-300 hover:bg-[#E6B94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
          >
            Send Your Message

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        <p className="text-right text-[9px] leading-4 text-[#9CA3AF]">
          Your message will open in your default email application.
        </p>
      </form>
    </motion.div>
  );
}
