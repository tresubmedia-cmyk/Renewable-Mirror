
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import LatestNews from "../components/sections/LatestNews";
import FeaturedNews from "../components/sections/FeaturedNews";
import Interviews from "../components/sections/Interviews";
import VideoInterviews from "../components/sections/VideoInterviews";

import NationalNews from "../components/sections/NationalNews";
import InternationalNews from "../components/sections/InternationalNews";
import Gallery from "../components/sections/Gallery";

import AdvertisementStripSection from "../components/advertisements/AdvertisementStripSection";


import GuestArticle from "../components/sections/GuestArticle";
import CoverStory from "../components/sections/CoverStory";
import MagazineSection from "../components/sections/MagazineSection";

import OurClients from "../components/sections/OurClients";

export function HomePage() {
  return (
    <div className="rm-home">
      <div className="rm-home-frame">

        {/* Homepage Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

      </div>

      {/* LatestNews News + Advertisement */}
      <LatestNews />
      <FeaturedNews />
      <Interviews />
      <Gallery />
      <VideoInterviews />
      <NationalNews />
      <AdvertisementStripSection placement="afterNational" />
      <InternationalNews />
      <GuestArticle />
      <AdvertisementStripSection placement="afterInternational" />
      <CoverStory />
      <MagazineSection />
      <OurClients />

    </div>
  );
}
