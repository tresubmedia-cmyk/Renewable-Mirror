
import CoverStoryHero from "../components/cover-story/CoverStoryHero";
import CoverStorySection from "../components/cover-story/CoverStorySection";
import CoverStoryCTA from "../components/cover-story/CoverStoryCTA";

export default function CoverStoryPage() {
  return (
    <main className="min-h-screen">
      <CoverStoryHero />
      <CoverStorySection />
      <CoverStoryCTA />
    </main>
  );
}
