// src/utils/scrollToSection.js
export default function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
  
    // Scroll smoothly to this section
    section.scrollIntoView({ behavior: 'smooth' });
  
    // Update the hash in the URL without a full route change
    window.history.replaceState({}, '', `#${sectionId}`);
  }
  