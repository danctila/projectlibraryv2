import React, { useEffect, useState } from "react";
import ProfileSection from "./sections/ProfileSection";
import ProjectsSection from "./sections/ProjectsSection";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";
import DotNavigation from "../../components/DotNavigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If at least 50% of the section is in view
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const id = entry.target.getAttribute("id");

            // Only update if different from current
            if (id !== activeSection) {
              setActiveSection(id);
              // Also update the hash for deep linking / refresh
              if (window.location.hash !== `#${id}`) {
                window.history.replaceState({}, "", `#${id}`);
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeSection]);

  return (
    <div className="relative w-screen h-screen">
      <div
        className="
          w-full h-full
          snap-y snap-mandatory
          scroll-smooth
          overflow-y-scroll
          hide-scrollbar
        "
      >
        <section id="profile" className="h-screen snap-start">
          <ProfileSection />
        </section>

        <section id="projects" className="h-screen snap-start">
          <ProjectsSection />
        </section>

        <section id="blog" className="h-screen snap-start">
          <BlogSection />
        </section>

        <section id="contact" className="h-screen snap-start">
          <ContactSection />
        </section>
      </div>

      <DotNavigation activeSection={activeSection} />
    </div>
  );
}
