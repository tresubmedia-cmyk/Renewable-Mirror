
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Renewable Mirror website, you agree to comply with these Terms & Conditions. If you do not agree, please discontinue using our website."
    ]
  },
  {
    id: "about",
    title: "About Renewable Mirror",
    content: [
      "Renewable Mirror is a media and information platform focused on the renewable energy and green energy industry, publishing news, reports, interviews, articles and other informational resources."
    ]
  },
  {
    id: "content",
    title: "Website Content and Accuracy",
    content: [
      "We aim to provide relevant and up-to-date information for general informational purposes. However, we do not guarantee that all content is complete, current or free from errors. Readers should independently verify information before relying on it."
    ]
  },
  {
    id: "intellectual",
    title: "Intellectual Property",
    content: [
      "Our original articles, branding, graphics and website materials are protected by applicable intellectual property laws. Reproduction or commercial use without prior written permission is not permitted, except where allowed by law."
    ]
  },
  {
    id: "user-conduct",
    title: "User Responsibilities",
    content: [
      "When using our website, you agree not to:"
    ],
    bullets: [
      "Use the website for unlawful or fraudulent activities.",
      "Submit false, misleading or harmful information.",
      "Attempt unauthorized access to our website or systems.",
      "Interfere with website functionality or security.",
      "Reproduce or misuse content without authorization."
    ]
  },
  {
    id: "submissions",
    title: "User Submissions and Contributions",
    content: [
      "By submitting articles, photographs, feedback or other materials, you confirm that you have the necessary rights and permissions. Submission does not guarantee publication, and editorial decisions remain with Renewable Mirror."
    ]
  },
  {
    id: "external",
    title: "External Links",
    content: [
      "Our website may contain links to third-party websites. These websites operate independently, and Renewable Mirror does not control or guarantee their content or policies."
    ]
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: [
      "To the extent permitted by applicable law, Renewable Mirror shall not be liable for losses arising from the use of our website or reliance on its published information. Nothing in these terms excludes liability that cannot legally be excluded."
    ]
  },
  {
    id: "availability",
    title: "Website Availability",
    content: [
      "We aim to keep our website accessible but do not guarantee uninterrupted availability. Website features, content or services may be updated, modified or discontinued when necessary."
    ]
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: [
      "We may revise these Terms & Conditions when necessary. Updated terms will be published on this page."
    ]
  },
  {
    id: "law",
    title: "Governing Law",
    content: [
      "These Terms & Conditions shall be interpreted in accordance with the applicable laws of India, subject to the jurisdiction of competent courts."
    ]
  }
];

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#17291F]">

      {/* HERO */}
      <section className="border-b border-[#EAECE9]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-10 lg:px-16">

          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-[#747D76] transition-colors hover:text-[#A58B4D]"
          >
            ← Back to Home
          </Link>

          <div className="max-w-4xl">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A58B4D]">
              Legal Information
            </p>

            <h1 className="font-serif text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#747D76]">
              Please read these terms carefully before using Renewable Mirror.
              They explain the conditions governing access to our website.
            </p>

            <p className="mt-6 text-xs text-[#929A93]">
              Effective date: November 16, 2026
            </p>

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <article className="mx-auto max-w-4xl">

          <div className="mb-12">
            <h2 className="font-serif text-2xl font-medium sm:text-3xl">
              Welcome to Renewable Mirror
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#747D76]">
              These Terms & Conditions govern your access to and use
              of the Renewable Mirror website. By visiting or using
              our platform, you agree to these terms.
            </p>
          </div>

          {/* TERMS SECTIONS */}
          <div className="border-t border-[#EAECE9]">

            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-[#EAECE9] py-8 sm:py-9"
              >
                <div className="flex items-start gap-5 sm:gap-8">

                  <span className="pt-1 text-xs font-medium tabular-nums text-[#A58B4D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">

                    <h2 className="font-serif text-xl font-medium sm:text-2xl">
                      {section.title}
                    </h2>

                    <div className="mt-3 space-y-3">
                      {section.content.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-sm leading-8 text-[#747D76]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets && (
                      <ul className="mt-4 space-y-3">
                        {section.bullets.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-7 text-[#747D76]"
                          >
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A58B4D]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                  </div>
                </div>
              </section>
            ))}

          </div>

          {/* CONTACT */}
          <div className="mt-14">
            <h2 className="font-serif text-2xl font-medium">
              Have Questions?
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#747D76]">
              If you have any questions about these Terms & Conditions,
              please get in touch with our team.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#17291F] transition-colors hover:text-[#A58B4D]"
            >
              Contact Our Team
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* BOTTOM LINKS */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-[#EAECE9] pt-7">

            <Link
              to="/"
              className="text-sm text-[#747D76] hover:text-[#A58B4D]"
            >
              ← Back to Home
            </Link>

            <Link
              to="/privacy-policy"
              className="text-sm font-medium text-[#17291F] hover:text-[#A58B4D]"
            >
              Privacy Policy →
            </Link>

          </div>

        </article>
      </section>
    </main>
  );
}
