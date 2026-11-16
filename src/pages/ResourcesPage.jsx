
import ResourcesHero from "../components/resources/ResourcesHero";
import ResourcesSection from "../components/resources/ResourcesSection";
import ResourcesCTA from "../components/resources/ResourcesCTA";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <ResourcesHero />
      <ResourcesSection />
      <ResourcesCTA />
    </main>
  );
}
