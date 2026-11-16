
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactBrandStrip from "../components/contact/ContactBrandStrip";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      <ContactHero />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1350px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <ContactBrandStrip />
    </main>
  );
}
