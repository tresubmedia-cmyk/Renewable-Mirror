
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const sections = [
  {
    id: "information",
    title: "Information We Collect",
    content: [
      "We may collect your name, email address, organization details and information you voluntarily share when contacting Renewable Mirror.",
      "Basic technical information, including browser and device details, may also be collected to improve our website."
    ]
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    content: [
      "We use collected information to respond to enquiries, share relevant updates, improve website performance and maintain security."
    ]
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    content: [
      "Our website may use cookies to improve browsing, understand website traffic and analyze visitor interactions. You can manage cookies through your browser settings."
    ]
  },
  {
    id: "sharing",
    title: "Information Sharing",
    content: [
      "Renewable Mirror does not sell personal information. Information may be shared with service providers when necessary or disclosed when required by law."
    ]
  },
  {
    id: "security",
    title: "Data Security",
    content: [
      "We take reasonable measures to protect submitted information against unauthorized access, alteration or misuse. However, no online transmission can be guaranteed completely secure."
    ]
  },
  {
    id: "external-links",
    title: "Third-Party Websites",
    content: [
      "Our website may link to external websites. These websites have their own privacy policies, and Renewable Mirror is not responsible for their practices."
    ]
  },
  {
    id: "rights",
    title: "Your Privacy Choices",
    content: [
      "You may contact us to request access, correction or deletion of your submitted personal information, where applicable."
    ]
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: [
      "We may update this policy from time to time. Any changes will be published on this page with a revised date."
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#17291F]">

      {/* HERO */}
      <section className="border-b border-[#EAECE9]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-10 lg:px-16">

          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-[#747D76] transition-colors hover:text-[#A58B4D]"
          >
            <span>←</span> Back to Home
          </Link>

          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A58B4D]">
              Legal Information
            </p>

            <h1 className="font-serif text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#747D76]">
              Your privacy matters to us. Learn how Renewable Mirror
              collects, uses and protects your information.
            </p>

            <p className="mt-6 text-xs text-[#929A93]">
              Last updated: November 16, 2026
            </p>
          </div>

        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <article className="mx-auto max-w-4xl">

          {/* INTRODUCTION */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-medium sm:text-3xl">
              Our Commitment to Your Privacy
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#747D76]">
              Renewable Mirror is committed to respecting your privacy
              and handling your information responsibly. This policy
              explains how information is collected and used through
              our website and communication channels.
            </p>
          </div>

          {/* SECTIONS */}
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

                  <div className="flex-1">
                    <h2 className="font-serif text-xl font-medium sm:text-2xl">
                      {section.title}
                    </h2>

                    <div className="mt-3 max-w-3xl space-y-3">
                      {section.content.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-sm leading-8 text-[#747D76]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
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
              If you have any questions about this Privacy Policy,
              feel free to get in touch with our team.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#17291F] transition-colors hover:text-[#A58B4D]"
            >
              Contact Our Team
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* FOOTER LINKS */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-[#EAECE9] pt-7">

            <Link
              to="/"
              className="text-sm text-[#747D76] hover:text-[#A58B4D]"
            >
              ← Back to Home
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-sm font-medium text-[#17291F] hover:text-[#A58B4D]"
            >
              Terms & Conditions →
            </Link>

          </div>

        </article>
      </section>

    </main>
  );
}
