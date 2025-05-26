import { createContext, useContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  // Active section from local storage or default to profile
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "profile";
  });
  // Scroll handling refs
  const isScrollingRef = useRef(false);
  const scrollTimeout = useRef(null);
  const lastScrollTime = useRef(0);
  const scrollDeltaY = useRef(0);

  // Menu handling state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Touch handling refs
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  const touchDeltaY = useRef(0);
  const isTouchScrolling = useRef(false);

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

  // Scroll to section
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
    // Handle wheel scroll for desktop/laptop devices
    const handleWheel = (event) => {
      // Only apply custom wheel handling if we're on a page with sections
      const sections = document.querySelectorAll("section[id]");
      if (sections.length === 0 || isMenuOpen || isScrollingRef.current) {
        if (isMenuOpen) event.preventDefault();
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

      // Adjust threshold based on input type
      const scrollThreshold = 10;

      // Only process scroll if it exceeds threshold
      if (Math.abs(event.deltaY) < scrollThreshold) {
        event.preventDefault();
        return;
      }

      const currentIndex = Array.from(sections).findIndex(
        (section) => section.id === activeSection
      );

      const nextIndex = Math.min(
        Math.max(0, currentIndex + direction),
        sections.length - 1
      );

      if (nextIndex !== currentIndex) {
        const nextSectionId = sections[nextIndex].id;
        scrollToSection(nextSectionId);
        event.preventDefault();
      }
    };

    const handleTouchStart = (event) => {
      // Only apply custom touch handling if we're on a page with sections
      const sections = document.querySelectorAll("section[id]");
      if (sections.length === 0 || isMenuOpen || isScrollingRef.current) {
        return;
      }

      touchStartY.current = event.touches[0].clientY;
      touchStartTime.current = Date.now();
      touchDeltaY.current = 0;
      isTouchScrolling.current = false;

      // Also track X position for horizontal gesture detection
      touchStartY.current = event.touches[0].clientY;
      const touchStartX = event.touches[0].clientX;
      touchStartY.touchStartX = touchStartX; // Store X on the Y ref for simplicity
    };

    const handleTouchMove = (event) => {
      // Only apply custom touch handling if we're on a page with sections
      const sections = document.querySelectorAll("section[id]");
      if (sections.length === 0) {
        return; // Allow normal scrolling on pages without sections
      }

      if (isMenuOpen || isScrollingRef.current) {
        event.preventDefault();
        return;
      }

      const touchY = event.touches[0].clientY;
      const touchX = event.touches[0].clientX;
      const deltaY = touchStartY.current - touchY;
      const deltaX = Math.abs(touchStartY.touchStartX - touchX);

      touchDeltaY.current = deltaY;

      // Check if this is primarily a horizontal gesture
      const isHorizontalGesture =
        Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 20;

      // If it's a horizontal gesture, don't prevent default (allow carousel scrolling)
      // If it's vertical, prevent default to stop native scrolling
      if (!isHorizontalGesture) {
        event.preventDefault();
      }
    };

    const handleTouchEnd = (event) => {
      // Only apply custom touch handling if we're on a page with sections
      const sections = document.querySelectorAll("section[id]");
      if (
        sections.length === 0 ||
        isMenuOpen ||
        isScrollingRef.current ||
        isTouchScrolling.current
      ) {
        return;
      }

      const now = Date.now();
      const touchDistance = Math.abs(touchDeltaY.current);
      const touchDistanceX = Math.abs(
        touchStartY.touchStartX -
          (event.changedTouches[0]?.clientX || touchStartY.touchStartX)
      );

      // Check if this was primarily a horizontal gesture
      const isHorizontalGesture =
        touchDistanceX > Math.abs(touchDeltaY.current) && touchDistanceX > 30;

      // If it was a horizontal gesture, don't trigger vertical section scrolling
      if (isHorizontalGesture) {
        return;
      }

      // Minimum distance threshold for a valid swipe (similar to desktop scroll threshold)
      const minSwipeDistance = 50;

      // Maximum duration for a flick (to prevent fast flicks from jumping multiple sections)
      const maxFlickDuration = 300;

      // Only process if we have sufficient distance and reasonable duration
      if (touchDistance < minSwipeDistance) {
        return;
      }

      // Prevent multiple rapid scrolls
      if (now - lastScrollTime.current < 100) {
        return;
      }

      // Determine direction
      const direction = touchDeltaY.current > 0 ? 1 : -1;

      lastScrollTime.current = now;
      isTouchScrolling.current = true;

      const currentIndex = Array.from(sections).findIndex(
        (section) => section.id === activeSection
      );

      const nextIndex = Math.min(
        Math.max(0, currentIndex + direction),
        sections.length - 1
      );

      if (nextIndex !== currentIndex) {
        const nextSectionId = sections[nextIndex].id;
        scrollToSection(nextSectionId);
      }

      // Reset touch scrolling flag after a delay
      setTimeout(() => {
        isTouchScrolling.current = false;
      }, 100);
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      // Remove event listeners on cleanup
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
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
