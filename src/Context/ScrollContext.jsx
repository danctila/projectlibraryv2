import { createContext, useContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  // Active section from local storage or default to profile
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "profile";
  });

  const isScrollingRef = useRef(false);
  const scrollTimeout = useRef(null);
  const lastScrollTime = useRef(0);
  const scrollDeltaY = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll lock based on isMenuOpen
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5 && !isScrollingRef.current) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id);
            localStorage.setItem("activeSection", id);
            window.history.replaceState({}, "", `#${id}`);
          }
        });
      },
      {
        threshold: [0.5], // Trigger when at least 50% of a section is visible
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    const savedSection = localStorage.getItem("activeSection");
    if (savedSection) {
      const section = document.getElementById(savedSection);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    setActiveSection(sectionId);
    localStorage.setItem("activeSection", sectionId);
    window.history.replaceState({}, "", `#${sectionId}`);

    isScrollingRef.current = true;

    section.scrollIntoView({ behavior: "smooth" });

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (isMenuOpen || isScrollingRef.current) {
        event.preventDefault();
        return;
      }

      // To counteract touchpad inertia
      const now = Date.now();

      scrollDeltaY.current += event.deltaY;

      // Check if we should process this scroll event
      if (now - lastScrollTime.current < 50) {
        event.preventDefault();
        return;
      }

      // Determine scroll direction based on accumulated delta
      const direction = scrollDeltaY.current > 0 ? 1 : -1;

      // Reset accumulated delta
      scrollDeltaY.current = 0;
      lastScrollTime.current = now;

      // Check if the event is from a touchpad
      const isTouchPad = event.wheelDeltaY
        ? event.wheelDeltaY === -3 * event.deltaY
        : event.deltaMode === 0;

      // Adjust threshold based on input type
      const scrollThreshold = isTouchPad ? 50 : 10;

      // Only process scroll if it exceeds threshold
      if (Math.abs(event.deltaY) < scrollThreshold) {
        event.preventDefault();
        return;
      }

      const currentIndex = Array.from(
        document.querySelectorAll("section[id]")
      ).findIndex((section) => section.id === activeSection);

      const nextIndex = Math.min(
        Math.max(0, currentIndex + direction),
        document.querySelectorAll("section[id]").length - 1
      );

      if (nextIndex !== currentIndex) {
        const nextSectionId =
          document.querySelectorAll("section[id]")[nextIndex].id;
        scrollToSection(nextSectionId);
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection, isMenuOpen]);

  return (
    <ScrollContext.Provider
      value={{ activeSection, scrollToSection, setIsMenuOpen }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
