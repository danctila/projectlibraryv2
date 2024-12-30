import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Loader from "../components/Loader";

export default function MainLayout({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    // Check if the pathname actually changed (ignore hash changes)
    if (location.pathname !== prevPath) {
      // Trigger loading for route change
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 600);

      setPrevPath(location.pathname);

      return () => clearTimeout(timer);
    }
    // If only the hash changed, do nothing
  }, [location, prevPath]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Navigation />
      {loading ? <Loader /> : children}
    </div>
  );
}
