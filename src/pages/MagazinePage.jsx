import MagazineHero from "../components/magazine/MagazineHero";
import MagazineCard from "../components/magazine/MagazineCard";
import MagazineCTA from "../components/magazine/MagazineCTA";

export default function MagazinePage() {
  return (
    <main>
      <MagazineHero />
      <MagazineCard />
      <MagazineCTA />
    </main>
  );
}