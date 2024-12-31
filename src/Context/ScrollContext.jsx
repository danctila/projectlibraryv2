import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const [activeSection, setActiveSection] = useState("profile");
  const isScrollingRef = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update if we're not in a programmatic scroll
          if (entry.intersectionRatio >= 0.5 && !isScrollingRef.current) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id);
            window.history.replaceState({}, "", `#${id}`);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    const initialHash = window.location.hash.replace("#", "") || "profile";
    setActiveSection(initialHash);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Set the active section immediately for UI purposes
    setActiveSection(sectionId);
    window.history.replaceState({}, "", `#${sectionId}`);

    // Set the scrolling flag
    isScrollingRef.current = true;

    section.scrollIntoView({ behavior: "smooth" });

    // Clear any existing timeout
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    // Reset the scrolling flag after the scroll animation should be complete
    scrollTimeout.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000); // Adjust this value based on your scroll animation duration
  };

  return (
    <ScrollContext.Provider value={{ activeSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
