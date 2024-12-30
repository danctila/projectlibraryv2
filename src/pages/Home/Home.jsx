// src/pages/Home/Home.jsx
import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

import ProfileSection from "./sections/ProfileSection";
import ProjectsSection from "./sections/ProjectsSection";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  useEffect(() => {
    // If there's already an initialized instance in hot-reload dev, destroy it
    if (window.fullpage_api) {
      window.fullpage_api.destroy("all");
    }

    // Initialize fullpage
    new fullpage("#fullpage", {
      // Provide the required licenseKey:
      // Use 'OPEN-SOURCE-GPLV3-LICENSE' for free / open-source projects
      // or your purchased license key
      licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      anchors: ["profile", "projects", "blog", "contact"],
      navigation: true,
      // add other settings as desired
    });

    // Cleanup on unmount or next hot reload
    return () => {
      // Safely destroy the instance
      if (window.fullpage_api) {
        window.fullpage_api.destroy("all");
      }
    };
  }, []);

  return (
    <div id="fullpage">
      {/* Section 1: Profile */}
      <div className="section">
        <ProfileSection />
      </div>

      {/* Section 2: Projects */}
      <div className="section">
        <ProjectsSection />
      </div>

      {/* Section 3: Blog */}
      <div className="section">
        <BlogSection />
      </div>

      {/* Section 4: Contact */}
      <div className="section">
        <ContactSection />
      </div>
    </div>
  );
}
