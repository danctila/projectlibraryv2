import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Loader from "../components/Loader";

export default function MainLayout({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loading each time route changes
    setLoading(true);

    // Fake a short delay for demonstration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      <Navigation />
      {loading ? <Loader /> : children}
    </div>
  );
}
