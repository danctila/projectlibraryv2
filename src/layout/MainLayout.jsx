import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/navigation/Navigation";
import Loader from "../components/Loader";
import { useScroll } from "../Context/ScrollContext";
import SocialLinksOverlay from "../components/SocialLinksOverlay";
import DotNavigation from "../components/navigation/DotNavigation";
import ProjectNavigation from "../components/navigation/ProjectNavigation";

const sectionOrder = ["profile", "projects", "blog", "contact"];

export default function MainLayout({ children, navbarType }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { activeSection, scrollToSection } = useScroll();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Only show loader if:
    // 1. We're not on the home page
    // 2. The pathname has changed (not just the hash)
    if (!isHomePage) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 900);

      return () => clearTimeout(timer);
    } else {
      // Ensure loader is off for home page
      setLoading(false);
    }
  }, [location.pathname]);

  // If we're on the home page and there's no hash, set default hash
  useEffect(() => {
    if (isHomePage && !location.hash) {
      window.history.replaceState({}, "", "#profile");
    }
  }, [isHomePage]);

  // Handle hash changes separately from loading state
  useEffect(() => {
    const handleHashChange = () => {
      if (isHomePage) {
        setLoading(false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [isHomePage]);

  const nextSectionText = sectionOrder[sectionOrder.indexOf(activeSection) + 1];

  const handleNextClick = () => {
    const nextIndex = sectionOrder.indexOf(activeSection) + 1;
    if (nextIndex < sectionOrder.length) {
      scrollToSection(sectionOrder[nextIndex]);
    }
  };

  return (
    <div
      className={`relative w-screen h-screen ${
        isHomePage ? "overflow-hidden" : "overflow-auto hide-scrollbar"
      }`}
    >
      {navbarType === "home" && <Navigation />}
      {navbarType === "project" && <ProjectNavigation />}

      {loading ? <Loader /> : children}
      {isHomePage && (
        <>
          <div className="absolute inset-0 flex items-center pointer-events-none ">
            <DotNavigation />
            <SocialLinksOverlay />
          </div>

          {/* Next Section Overlay */}
          <div className="fixed bottom-0 w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              {nextSectionText && (
                <motion.div
                  key={nextSectionText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  style={{ cursor: "pointer" }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  className="flex flex-col items-center"
                  onClick={handleNextClick}
                >
                  {/* Section Text */}
                  <p className="font-neue text-[20px] font-normal text-[#262329] dark:text-[#FBFBFB] mb-2">
                    {nextSectionText.toUpperCase()}
                  </p>

                  {/* Clickable SVG */}
                  {nextSectionText !== "THANK YOU" && (
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 150 150"
                      style={{
                        width: "29px",
                        height: "29px",
                        cursor: "pointer",
                      }}
                      xmlSpace="preserve"
                      className="fill-[#262329] dark:fill-[#FBFBFB]"
                      onClick={handleNextClick}
                    >
                      <polygon
                        id="XMLID_818_"
                        points="0,0 0,150 30.002,150 30.002,60 120.669,60 120.669,150 150,150 150,0"
                      />
                    </svg>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}
