
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "News", path: "/news", dropdown: true },
//   { name: "Interviews", path: "/interviews" },
//   { name: "Magazine", path: "/magazine" },
//   { name: "About Us", path: "/about" },
// ];

// const newsCategories = [
//   "National News",
//   "International News",
//   "Solar Energy",
//   "Wind Energy",
//   "Energy Storage",
//   "Green Hydrogen",
// ];

// export default function Navbar() {
//   const [newsOpen, setNewsOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="rm-navbar">
//       <div className="rm-nav-inner">

//         {/* Logo */}
//         <Link to="/" className="rm-logo">
//           <img
//             src="/images/renewable-mirror-logo.png"
//             alt="Renewable Mirror"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="rm-desktop-nav">

//           <Link to="/" className="rm-nav-link">
//             Home
//           </Link>

//           <div
//             className="rm-news-menu"
//             onMouseEnter={() => setNewsOpen(true)}
//             onMouseLeave={() => setNewsOpen(false)}
//           >
//             <button
//               className="rm-nav-link rm-news-trigger"
//               onClick={() => setNewsOpen(!newsOpen)}
//             >
//               News
//               <ChevronDown size={14} />
//             </button>

//             <AnimatePresence>
//               {newsOpen && (
//                 <motion.div
//                   className="rm-dropdown"
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 12 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <span>EXPLORE NEWS</span>

//                   {newsCategories.map((category) => (
//                     <Link
//                       to="/news"
//                       key={category}
//                       onClick={() => setNewsOpen(false)}
//                     >
//                       {category}
//                       <ArrowUpRight size={14} />
//                     </Link>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {navLinks.slice(1).map((item) => (
//             <Link
//               to={item.path}
//               className="rm-nav-link"
//               key={item.name}
//             >
//               {item.name}
//             </Link>
//           ))}

//           <Link to="/contact" className="rm-contact-btn">
//             Contact us
//             <span>
//               <ArrowUpRight size={15} />
//             </span>
//           </Link>
//         </nav>

//         {/* Mobile Menu */}
//         <button
//           className="rm-mobile-toggle"
//           onClick={() => setMobileOpen(true)}
//           aria-label="Open menu"
//         >
//           <Menu size={25} />
//         </button>

//       </div>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             className="rm-mobile-overlay"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="rm-mobile-drawer"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="rm-drawer-header">
//                 <img
//                   src="/images/renewable-mirror-logo.png"
//                   alt="Renewable Mirror"
//                 />

//                 <button onClick={() => setMobileOpen(false)}>
//                   <X size={24} />
//                 </button>
//               </div>

//               <Link to="/" onClick={() => setMobileOpen(false)}>
//                 Home
//               </Link>

//               {navLinks.map((item) => (
//                 <Link
//                   to={item.path}
//                   key={item.name}
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   {item.name}
//                   <ArrowUpRight size={16} />
//                 </Link>
//               ))}

//               <Link
//                 to="/contact"
//                 className="rm-mobile-contact"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 Contact us <ArrowUpRight size={16} />
//               </Link>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </header>
//   );
// }






import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

// NEWS DROPDOWN
const newsCategories = [
  { name: "National News", path: "/news/national" },
  { name: "International News", path: "/news/international" },
];

// MORE DROPDOWN
const moreLinks = [
  { name: "Resources", path: "/resources" },
  { name: "Cover Story", path: "/cover-story" },
  { name: "Editorial Calendar", path: "/editorial-calendar" },
  { name: "Event Calendar", path: "/event-calendar" },
];

const navLinkClass = ({ isActive }) =>
  `rm-nav-link ${isActive ? "active" : ""}`;

export default function Navbar() {
  const [newsOpen, setNewsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // NAVBAR SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // RESET MENUS ON PAGE CHANGE
  useEffect(() => {
    setNewsOpen(false);
    setMoreOpen(false);
    setMobileOpen(false);
    setMobileNewsOpen(false);
    setMobileMoreOpen(false);
  }, [location.pathname]);

  const isSolid = scrolled || !isHomePage;

  const isNewsActive = location.pathname.startsWith("/news");

  const isMoreActive = moreLinks.some((item) =>
    location.pathname.startsWith(item.path)
  );

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileNewsOpen(false);
    setMobileMoreOpen(false);
  };

  return (
    <header className={`rm-navbar ${isSolid ? "is-scrolled" : ""}`}>
      <div className="rm-nav-inner">

        {/* LOGO */}
        <Link
          to="/"
          className="rm-logo"
          aria-label="Renewable Mirror Home"
        >
          <img
            src="/images/renewable-mirror-logo.png"
            alt="Renewable Mirror"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="rm-desktop-nav">

          {/* HOME */}
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          {/* NEWS MENU */}
          <div
            className="rm-news-menu"
            onMouseEnter={() => {
              setNewsOpen(true);
              setMoreOpen(false);
            }}
            onMouseLeave={() => setNewsOpen(false)}
          >
            <div className="flex items-center">
              <NavLink
                to="/news"
                className={() =>
                  `rm-nav-link ${isNewsActive ? "active" : ""}`
                }
              >
                News
              </NavLink>

              <button
                type="button"
                className={`rm-nav-link rm-news-trigger ${
                  isNewsActive || newsOpen ? "active" : ""
                }`}
                aria-label="Toggle news dropdown"
                aria-expanded={newsOpen}
                onClick={() => {
                  setNewsOpen(!newsOpen);
                  setMoreOpen(false);
                }}
              >
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    newsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <AnimatePresence>
              {newsOpen && (
                <motion.div
                  className="rm-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="rm-dropdown-heading">
                    EXPLORE NEWS
                  </span>

                  {newsCategories.map((item) => (
                    <NavLink
                      to={item.path}
                      key={item.path}
                      onClick={() => setNewsOpen(false)}
                    >
                      {item.name}
                      <ArrowUpRight size={14} />
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MAGAZINE */}
          <NavLink to="/magazine" className={navLinkClass}>
            Magazine
          </NavLink>

          {/* ABOUT */}
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          {/* GALLERY */}
          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>

          {/* MORE MENU */}
          <div
            className="rm-news-menu"
            onMouseEnter={() => {
              setMoreOpen(true);
              setNewsOpen(false);
            }}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              className={`rm-nav-link rm-news-trigger ${
                moreOpen || isMoreActive ? "active" : ""
              }`}
              onClick={() => {
                setMoreOpen(!moreOpen);
                setNewsOpen(false);
              }}
              aria-expanded={moreOpen}
            >
              More

              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  className="rm-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="rm-dropdown-heading">
                    EXPLORE MORE
                  </span>

                  {moreLinks.map((item) => (
                    <NavLink
                      to={item.path}
                      key={item.path}
                      onClick={() => setMoreOpen(false)}
                    >
                      {item.name}
                      <ArrowUpRight size={14} />
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

     
{/* CONTACT */}
<Link
  to="/contact"
  className="!inline-flex !items-center !justify-center !gap-2.5 !rounded-full !bg-[#f39200] !px-6 !py-3 !text-[12px] !font-bold !text-white !shadow-none !transition-all !duration-300 hover:!bg-[#df8200] hover:!-translate-y-0.5"
>
  Contact Us

  <span className="!flex !h-auto !w-auto !items-center !justify-center !rounded-none !bg-transparent !p-0 !text-white">
    <ArrowUpRight size={16} />
  </span>
</Link>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="rm-mobile-toggle"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="rm-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          >
            <motion.div
              className="rm-mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >

              {/* DRAWER HEADER */}
              <div className="rm-drawer-header">
                <Link to="/" onClick={closeMobileMenu}>
                  <img
                    src="/images/renewable-mirror-logo.png"
                    alt="Renewable Mirror"
                  />
                </Link>

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* HOME */}
              <NavLink to="/" end onClick={closeMobileMenu}>
                Home
                <ArrowUpRight size={16} />
              </NavLink>

              {/* MOBILE NEWS */}
              <div className="rm-mobile-group">
                <div className="flex items-center justify-between">
                  <NavLink
                    to="/news"
                    onClick={closeMobileMenu}
                    className="!border-0 !py-3"
                  >
                    News
                  </NavLink>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileNewsOpen(!mobileNewsOpen);
                      setMobileMoreOpen(false);
                    }}
                    aria-label="Toggle news submenu"
                    aria-expanded={mobileNewsOpen}
                  >
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${
                        mobileNewsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {mobileNewsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <NavLink
                        to="/news"
                        className="!border-0 !py-2 !pl-5 !text-sm"
                        onClick={closeMobileMenu}
                      >
                        All News
                        <ArrowUpRight size={14} />
                      </NavLink>

                      {newsCategories.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className="!border-0 !py-2 !pl-5 !text-sm"
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                          <ArrowUpRight size={14} />
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* MAGAZINE */}
              <NavLink to="/magazine" onClick={closeMobileMenu}>
                Magazine
                <ArrowUpRight size={16} />
              </NavLink>

              {/* ABOUT */}
              <NavLink to="/about" onClick={closeMobileMenu}>
                About Us
                <ArrowUpRight size={16} />
              </NavLink>

              {/* GALLERY */}
              <NavLink to="/gallery" onClick={closeMobileMenu}>
                Gallery
                <ArrowUpRight size={16} />
              </NavLink>

              {/* MOBILE MORE */}
              <div className="rm-mobile-group">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMoreOpen(!mobileMoreOpen);
                    setMobileNewsOpen(false);
                  }}
                  className="flex w-full items-center justify-between"
                  aria-expanded={mobileMoreOpen}
                >
                  More

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      mobileMoreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileMoreOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {moreLinks.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className="!border-0 !py-2 !pl-5 !text-sm"
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                          <ArrowUpRight size={14} />
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

       
{/* CONTACT */}
<Link
  to="/contact"
  className="!inline-flex !items-center !justify-center !gap-2.5 !rounded-full !bg-[#f39200] !px-6 !py-3 !text-[12px] !font-bold !text-white !shadow-none !transition-all !duration-300 hover:!bg-[#df8200] hover:!-translate-y-0.5"
>
  Contact Us

  <span className="!flex !h-auto !w-auto !items-center !justify-center !rounded-none !bg-transparent !p-0 !text-white">
    <ArrowUpRight size={16} />
  </span>
</Link>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
