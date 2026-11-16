
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  LockKeyhole,
  Database,
  Cookie,
  Share2,
  Mail,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "information",
    number: "01",
    title: "Information We Collect",
    content: [
      "Renewable Mirror may collect information that you voluntarily provide when you contact us, submit an enquiry, share feedback, or communicate with our editorial team.",
      "This information may include your name, email address, organization details, and any information you choose to include in your message.",
      "Basic technical information, such as browser type, device information, and website usage data, may also be collected to help us understand how visitors use our website.",
    ],
  },
  {
    id: "usage",
    number: "02",
    title: "How We Use Your Information",
    content: [
      "We may use the information collected for the following purposes:",
    ],
    bullets: [
      "To respond to enquiries and communication requests.",
      "To provide information about our publications, editorial content, and services.",
      "To improve website performance, content quality, and user experience.",
      "To maintain website security and prevent misuse.",
      "To communicate important updates related to our website.",
    ],
  },
  {
    id: "cookies",
    number: "03",
    title: "Cookies and Tracking Technologies",
    content: [
      "Our website may use cookies and similar technologies to improve browsing experience, understand website traffic, and analyze visitor interactions.",
      "You can manage or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.",
    ],
  },
  {
    id: "sharing",
    number: "04",
    title: "Information Sharing",
    content: [
      "Renewable Mirror does not sell personal information to third parties.",
      "Information may be shared with service providers who assist in website operations, analytics, hosting, or communication, where necessary and subject to appropriate safeguards.",
      "We may also disclose information when required by applicable law or legal process.",
    ],
  },
  {
    id: "security",
    number: "05",
    title: "Data Security",
    content: [
      "We take reasonable measures to protect information submitted through our website against unauthorized access, alteration, disclosure, or misuse.",
      "However, no method of internet transmission or electronic storage can be guaranteed to be completely secure.",
    ],
  },
  {
    id: "external-links",
    number: "06",
    title: "Third-Party Websites",
    content: [
      "Our website may contain links to external websites, publications, and other resources. These websites operate independently and have their own privacy policies.",
      "Renewable Mirror is not responsible for the privacy practices or content of third-party websites.",
    ],
  },
  {
    id: "rights",
    number: "07",
    title: "Your Privacy Choices",
    content: [
      "You may contact us to request information about personal details you have submitted, request corrections, or ask us to delete information where applicable.",
      "Requests will be handled in accordance with applicable data protection laws.",
    ],
  },
  {
    id: "changes",
    number: "08",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our website, operations, or applicable requirements.",
      "Any updated version will be published on this page with a revised effective date.",
    ],
  },
];

const highlights = [
  { icon: Database, label: "Information Collection" },
  { icon: LockKeyhole, label: "Data Protection" },
  { icon: Cookie, label: "Cookies & Analytics" },
  { icon: Share2, label: "Information Sharing" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#17291F]">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#EAECE9] bg-white">

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10">

          {/* BACK LINK */}
          <Link
            to="/"
            className="group mb-14 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#737D75] transition-colors hover:text-[#A58B4D]"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Homepage
          </Link>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#A58B4D]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A58B4D]">
                  Legal & Privacy
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">

                <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-[#17291F] sm:text-6xl lg:text-[76px]">
                  Privacy Policy
                </h1>

                <ShieldCheck
                  size={35}
                  strokeWidth={1.2}
                  className="mt-2 hidden shrink-0 text-[#B69A5C] sm:block"
                />

              </div>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[#747D76] sm:text-base">
                Your privacy matters to us. Learn how Renewable Mirror
                collects, uses, and protects information when you visit
                our website.
              </p>

            </div>

            <div className="flex items-center gap-3 border-t border-[#E8EBE7] pt-5 lg:min-w-[200px] lg:justify-end lg:border-t-0 lg:pt-0">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8EBE7]">
                <LockKeyhole size={17} className="text-[#A58B4D]" />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#A58B4D]">
                  Last Updated
                </p>

                <p className="mt-1 text-xs font-semibold text-[#26382D]">
                  November 16, 2026
                </p>
              </div>

            </div>

          </div>

          {/* BOTTOM BRAND LINE */}
          <div className="mt-14 flex items-center justify-between border-t border-[#EAECE9] pt-5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8A938B]">
              Renewable Mirror
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A58B4D]">
              Transparency. Trust. Responsibility.
            </span>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20">

          {/* SIDEBAR */}
          <aside className="h-fit lg:sticky lg:top-28">

            <div className="border border-[#E8EBE7] bg-white p-6">

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A58B4D]">
                Contents
              </p>

              <h3 className="mt-3 font-serif text-xl text-[#17291F]">
                On This Page
              </h3>

              <div className="mt-6 h-px bg-[#EAECE9]" />

              <nav className="mt-5 space-y-1">

                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-start gap-3 py-2.5 text-xs text-[#778078] transition-colors hover:text-[#17291F]"
                  >

                    <span className="pt-0.5 text-[10px] font-semibold text-[#B49A60]">
                      {section.number}
                    </span>

                    <span className="flex-1 leading-5">
                      {section.title}
                    </span>

                    <ChevronRight
                      size={13}
                      className="mt-0.5 shrink-0 text-[#A58B4D] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    />

                  </a>
                ))}

              </nav>

            </div>

            {/* SIDEBAR CONTACT */}
            <div className="mt-5 border border-[#E8EBE7] bg-white p-6">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F6F0]">
                <Mail size={18} className="text-[#A58B4D]" />
              </div>

              <h3 className="mt-5 font-serif text-xl text-[#17291F]">
                Need Assistance?
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#778078]">
                Have questions about your privacy or the information
                you share with us?
              </p>

              <Link
                to="/contact"
                className="group mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#17291F] transition-colors hover:text-[#A58B4D]"
              >
                Contact Our Team

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

            </div>

          </aside>

          {/* ARTICLE */}
          <article className="min-w-0">

            {/* INTRODUCTION */}
            <div className="border-b border-[#E8EBE7] pb-10">

              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#A58B4D]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A58B4D]">
                  Our Commitment
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl font-serif text-2xl leading-snug text-[#17291F] sm:text-3xl">
                Your information deserves care, respect and transparency.
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-[#747D76]">
                Renewable Mirror is committed to respecting your privacy
                and handling information responsibly. This policy explains
                our general approach to information collected through
                our website and communication channels.
              </p>

            </div>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-3 border-b border-[#E8EBE7] py-9 sm:grid-cols-4">

              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group border border-[#E8EBE7] bg-white p-4 transition-all duration-300 hover:border-[#B69A5C] hover:shadow-[0_8px_25px_-18px_rgba(23,41,31,0.25)] sm:p-5"
                >

                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#A58B4D] transition-transform duration-300 group-hover:-translate-y-1"
                  />

                  <p className="mt-4 text-[10px] font-bold leading-5 text-[#39483D]">
                    {label}
                  </p>

                </div>
              ))}

            </div>

            {/* POLICY SECTIONS */}
            <div className="divide-y divide-[#E8EBE7]">

              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 py-9 sm:py-11"
                >

                  <div className="flex items-start gap-5 sm:gap-7">

                    {/* NUMBER */}
                    <span className="pt-1 font-serif text-xl font-medium text-[#B69A5C] sm:text-2xl">
                      {section.number}
                    </span>

                    <div className="min-w-0 flex-1">

                      <h2 className="font-serif text-2xl font-semibold leading-snug tracking-tight text-[#17291F] sm:text-[27px]">
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4">

                        {section.content.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-[13px] leading-[2] text-[#747D76] sm:text-sm"
                          >
                            {paragraph}
                          </p>
                        ))}

                      </div>

                      {section.bullets && (
                        <ul className="mt-6 space-y-4">

                          {section.bullets.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-[13px] leading-7 text-[#667168] sm:text-sm"
                            >
                              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B69A5C]" />

                              <span>{item}</span>
                            </li>
                          ))}

                        </ul>
                      )}

                    </div>

                  </div>

                </section>
              ))}

            </div>

            {/* CONTACT CTA */}
            <div className="mt-6 border border-[#E6E9E5] bg-white p-7 sm:p-10">

              <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">

                <div className="max-w-xl">

                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#A58B4D]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A58B4D]">
                      We're Here to Help
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[#17291F] sm:text-3xl">
                    Questions About Your Privacy?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#747D76]">
                    If you have any questions, concerns, or requests
                    regarding this Privacy Policy, please get in touch
                    with our team.
                  </p>

                </div>

                <Link
                  to="/contact"
                  className="group inline-flex shrink-0 items-center justify-center gap-4 bg-[#17291F] px-7 py-4 text-xs font-bold text-white transition-all duration-300 hover:bg-[#A58B4D]"
                >
                  Contact Our Team

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

              </div>

            </div>

            {/* BOTTOM LINKS */}
            <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[#E8EBE7] pt-7 sm:flex-row sm:items-center">

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#747D76] transition-colors hover:text-[#A58B4D]"
              >
                <ArrowLeft size={14} />
                Back to Homepage
              </Link>

              <Link
                to="/terms-and-conditions"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#17291F] transition-colors hover:text-[#A58B4D]"
              >
                Terms & Conditions
                <ArrowUpRight size={14} />
              </Link>

            </div>

          </article>

        </div>

      </section>

    </main>
  );
}
