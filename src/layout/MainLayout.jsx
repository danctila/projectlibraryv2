import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Loader from "../components/Loader";
import { useScroll } from "../Context/ScrollContext";

const sectionTextMap = {
  profile: "PROJECTS",
  projects: "BLOG",
  blog: "CONTACT",
  contact: null,
};

export default function MainLayout({ children, navbarType }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { activeSection } = useScroll();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Only show loader if:
    // 1. We're not on the home page
    // 2. The pathname has changed (not just the hash)
    if (!isHomePage) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 600);

      return () => clearTimeout(timer);
    } else {
      // Ensure loader is off for home page
      setLoading(false);
    }
  }, [location.pathname]); // Only trigger on pathname changes, not hash changes

  // If we're on the home page and there's no hash, set default hash
  useEffect(() => {
    if (isHomePage && !location.hash) {
      window.history.replaceState({}, "", "#profile");
    }
  }, [isHomePage]);

  // Handle hash changes separately from loading state
  useEffect(() => {
    const handleHashChange = () => {
      // Don't show loader for hash changes
      if (isHomePage) {
        setLoading(false);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [isHomePage]);

  const nextSectionText = sectionTextMap[activeSection];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Navigation />
      {loading ? <Loader /> : children}
      {/* Global Overlay */}
      {nextSectionText && (
        <div className="fixed bottom-0 w-full flex flex-col items-center">
          <p className="font-neue text-[20px] font-normal text-[#262329] dark:text-[#FBFBFB] mb-2">
            {nextSectionText}
          </p>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            style={{ width: "29px", height: "29px" }}
            xmlSpace="preserve"
            className="fill-[#262329] dark:fill-[#FBFBFB]"
          >
            <polygon
              id="XMLID_818_"
              points="0,0 0,150 30.002,150 30.002,60 120.669,60 120.669,150 150,150 150,0"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
// for different nav bar layouts
//   <div>
//   {navbarType === "home" && <HomeNavBar />}
//   {navbarType === "blog" && <BlogNavBar />}
//   {navbarType === "project" && <ProjectNavBar />}
//   <main>{children}</main>
// </div>
