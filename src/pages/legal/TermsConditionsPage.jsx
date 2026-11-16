
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  Scale,
  Copyright,
  Globe,
  AlertCircle,
  Mail,
} from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the Renewable Mirror website, you agree to comply with these Terms & Conditions.",
      "If you do not agree with any part of these terms, please discontinue using our website.",
    ],
  },
  {
    id: "about",
    title: "2. About Renewable Mirror",
    content: [
      "Renewable Mirror is a media and information platform focused on the renewable energy and green energy industry.",
      "Our website publishes industry news, reports, interviews, articles, publications, and other informational resources for readers and industry professionals.",
    ],
  },
  {
    id: "content",
    title: "3. Website Content and Accuracy",
    content: [
      "We aim to provide relevant, informative, and up-to-date content. However, information published on our website is provided for general informational and educational purposes.",
      "While we make reasonable efforts to maintain accuracy, we do not guarantee that all content is complete, current, or free from errors.",
      "Industry developments, technical information, statistics, and market conditions may change over time. Readers should independently verify information before relying on it for important decisions.",
    ],
  },
  {
    id: "intellectual",
    title: "4. Intellectual Property",
    content: [
      "Unless otherwise stated, the website design, branding, original articles, written materials, graphics, and other original content published by Renewable Mirror are protected by applicable intellectual property laws.",
      "You may access and share our publicly available content for personal and informational purposes, provided appropriate credit is given.",
      "Reproduction, redistribution, modification, or commercial use of our content without prior written permission is not permitted, except where allowed by applicable law.",
    ],
  },
  {
    id: "user-conduct",
    title: "5. User Responsibilities",
    content: [
      "When using our website, you agree not to:",
    ],
    bullets: [
      "Use the website for unlawful or fraudulent activities.",
      "Submit false, misleading, harmful, or unauthorized information.",
      "Attempt to gain unauthorized access to our website or systems.",
      "Interfere with website functionality or security.",
      "Copy, reproduce, or misuse website content without appropriate authorization.",
    ],
  },
  {
    id: "submissions",
    title: "6. User Submissions and Contributions",
    content: [
      "If you submit articles, photographs, feedback, event details, interviews, or other materials to Renewable Mirror, you confirm that you have the necessary rights and permissions to share those materials.",
      "Submission of material does not automatically guarantee publication. Editorial decisions remain at the discretion of Renewable Mirror.",
      "Any agreed publication, attribution, or usage arrangements may be handled separately between the parties.",
    ],
  },
  {
    id: "external",
    title: "7. External Links",
    content: [
      "Our website may include links to third-party websites, organizations, publications, or resources for additional information.",
      "These external websites are independently operated. Renewable Mirror does not control or guarantee their content, availability, or policies.",
      "Accessing third-party websites is at your own discretion.",
    ],
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    content: [
      "To the extent permitted by applicable law, Renewable Mirror shall not be liable for any direct, indirect, incidental, or consequential loss arising from the use of our website or reliance on information published through it.",
      "Nothing in these terms excludes liability that cannot legally be excluded under applicable law.",
    ],
  },
  {
    id: "availability",
    title: "9. Website Availability",
    content: [
      "We aim to keep our website accessible and operational. However, we do not guarantee uninterrupted availability.",
      "Website features, content, or services may be updated, modified, suspended, or discontinued when necessary.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to These Terms",
    content: [
      "Renewable Mirror reserves the right to revise these Terms & Conditions when necessary.",
      "Updated terms will be published on this page. Continued use of the website after changes are published may constitute acceptance of the updated terms, subject to applicable law.",
    ],
  },
  {
    id: "law",
    title: "11. Governing Law",
    content: [
      "These Terms & Conditions shall be interpreted in accordance with applicable laws of India, subject to the jurisdiction of the competent courts.",
    ],
  },
];

const highlights = [
  { icon: Scale, label: "Fair Usage" },
  { icon: Copyright, label: "Copyright & Ownership" },
  { icon: Globe, label: "Website Access" },
  { icon: AlertCircle, label: "User Responsibilities" },
];

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="border-b border-[#E8ECE8] bg-[#FAFBFA] px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20">
        <div className="mx-auto max-w-7xl">

          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-xs font-semibold text-[#65736A] transition-colors hover:text-[#A58B4D]"
          >
            <ArrowLeft size={15} />
            Back to Homepage
          </Link>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A58B4D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A58B4D]">
                  Legal Information
                </span>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <FileText
                  size={38}
                  strokeWidth={1.3}
                  className="shrink-0 text-[#A58B4D]"
                />

                <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#17291F] sm:text-5xl lg:text-6xl">
                  Terms & Conditions
                </h1>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#737D75] sm:text-base">
                Please read these terms carefully before using
                Renewable Mirror. They explain the guidelines and
                conditions governing access to our website.
              </p>
            </div>

            <div className="text-xs text-[#858D86]">
              Effective Date: November 16, 2026
            </div>

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">

          {/* SIDEBAR */}
          <aside className="h-fit lg:sticky lg:top-28">

            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A58B4D]">
              On This Page
            </p>

            <nav className="space-y-1 border-l border-[#E5E9E5]">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block border-l-2 border-transparent py-2 pl-4 text-xs text-[#737D75] transition-all hover:border-[#A58B4D] hover:text-[#17291F]"
                >
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="mt-10 border border-[#E5E9E5] bg-[#FAFBFA] p-5">

              <Mail size={20} className="text-[#A58B4D]" />

              <p className="mt-4 font-serif text-lg text-[#17291F]">
                Need clarification?
              </p>

              <p className="mt-2 text-xs leading-6 text-[#737D75]">
                Get in touch with our team if you have questions
                about these terms.
              </p>

              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#17291F] hover:text-[#A58B4D]"
              >
                Contact Us
                <span>↗</span>
              </Link>

            </div>
          </aside>

          {/* MAIN CONTENT */}
          <article className="max-w-3xl">

            <div className="border-l-2 border-[#A58B4D] bg-[#FAFBFA] px-6 py-6">
              <p className="text-sm leading-7 text-[#58645B]">
                These Terms & Conditions govern your access to and use
                of the Renewable Mirror website. By visiting or using
                our platform, you acknowledge that you have read
                and understood these terms.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="border border-[#E8ECE8] bg-white p-4"
                >
                  <Icon size={21} className="text-[#A58B4D]" />
                  <p className="mt-3 text-[10px] font-semibold leading-5 text-[#35463A]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-11">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2 className="font-serif text-2xl font-semibold text-[#17291F] sm:text-[26px]">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {section.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm leading-8 text-[#667168]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-7 text-[#667168]"
                        >
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A58B4D]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* CONTACT */}
            <div className="mt-14 border border-[#E5E9E5] bg-[#FAFBFA] p-7 sm:p-9">

              <h3 className="font-serif text-2xl font-semibold text-[#17291F]">
                Need More Information?
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#737D75]">
                If you have any questions regarding these Terms &
                Conditions, please contact our team.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-3 bg-[#17291F] px-6 py-3.5 text-xs font-bold text-white transition-colors hover:bg-[#A58B4D]"
              >
                Contact Our Team
                <ArrowLeft size={14} className="rotate-180" />
              </Link>

            </div>

          </article>
        </div>
      </section>

    </main>
  );
}
