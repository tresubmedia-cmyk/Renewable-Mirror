
import GalleryHero from "../components/gallery/GalleryHero";
import GallerySection from "../components/gallery/GallerySection";
import GalleryCTA from "../components/gallery/GalleryCTA";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryHero />
      <GallerySection />
      <GalleryCTA />
    </main>
  );
}
