
import { Route, Routes } from "react-router-dom";

import { SiteLayout } from "../components/layout/SiteLayout";
import ScrollToTop from "../components/common/ScrollToTop";

import { HomePage } from "../pages/HomePage";
import { NewsPage } from "../pages/NewsPage";
import { ArticlePage } from "../pages/ArticlePage";
import NewsCategoryPage from "../pages/NewsCategoryPage";

import { InterviewsPage } from "../pages/InterviewsPage";
import MagazinePage from "../pages/MagazinePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import SearchPage from "../pages/SearchPage";
import GalleryPage from "../pages/GalleryPage";
import { NotFoundPage } from "../pages/NotFoundPage";

import EditorialCalendarPage from "../pages/EditorialCalendarPage";
import EventCalendarPage from "../pages/EventCalendarPage";

import ResourcesPage from "../pages/ResourcesPage";
import CoverStoryPage from "../pages/CoverStoryPage";


import ArticleDetailPage from "../pages/ArticleDetailPage";


import PrivacyPolicyPage from "../pages/legal/PrivacyPolicyPage";
import TermsConditionsPage from "../pages/legal/TermsConditionsPage";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <SiteLayout>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* NEWS */}
          <Route path="/news" element={<NewsPage />} />

          {/* NEWS CATEGORY PAGES */}
          <Route
            path="/news/national"
            element={<NewsCategoryPage />}
          />

          <Route
            path="/news/international"
            element={<NewsCategoryPage />}
          />

          {/* NEWS ARTICLE */}
          <Route path="/news/:slug" element={<ArticlePage />} />

          {/* MAIN PAGES */}
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/interviews" element={<InterviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* MORE PAGES */}
          <Route
            path="/editorial-calendar"
            element={<EditorialCalendarPage />}
          />

          <Route
            path="/event-calendar"
            element={<EventCalendarPage />}
          />

          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/cover-story" element={<CoverStoryPage />} />

          {/* SEARCH */}
          <Route path="/search" element={<SearchPage />} />

          {/* 404 - ALWAYS LAST */}
          <Route path="*" element={<NotFoundPage />} />




<Route path="/news/:category/:slug" element={<ArticleDetailPage />} />
<Route path="/cover-story/:slug" element={<ArticleDetailPage />} />
<Route path="/interviews/:slug" element={<ArticleDetailPage />} />
<Route path="/magazine/:slug" element={<ArticleDetailPage />} />




<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
<Route
  path="/terms-and-conditions"
  element={<TermsConditionsPage />}
/>


        </Routes>
      </SiteLayout>
    </>
  );
}
