import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Loader from "../components/Loader";

export default function MainLayout({ children, navbarType }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
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

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Navigation />
      {loading ? <Loader /> : children}
    </div>
    // for different nav bar layouts
    //   <div>
    //   {navbarType === "home" && <HomeNavBar />}
    //   {navbarType === "blog" && <BlogNavBar />}
    //   {navbarType === "project" && <ProjectNavBar />}
    //   <main>{children}</main>
    // </div>
  );
}
