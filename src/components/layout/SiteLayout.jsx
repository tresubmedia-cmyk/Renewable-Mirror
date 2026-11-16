
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function SiteLayout({ children }) {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  return (
    <>
      {/* Homepage has its own Navbar inside HomePage */}
      {!isHomePage && <Navbar />}

      {children}

      <Footer />
    </>
  );
}
