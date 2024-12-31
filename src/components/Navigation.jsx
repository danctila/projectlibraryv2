import ThemeSwitch from "./ThemeSwitch";
import { motion } from "framer-motion";
import { useScroll } from "../Context/ScrollContext";

export default function Navigation() {
  const { activeSection, scrollToSection } = useScroll();

  const sections = [
    { id: "profile", label: "Profile" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent dark:bg-gray-900/50 transition-all duration-300 flex items-center justify-between px-6 py-4">
      <div className="flex space-x-6 items-center">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative text-lg"
          >
            {section.label}
            {activeSection === section.id && (
              <motion.div
                className="absolute bottom-[-2px] left-0 right-0 h-1 bg-blue-600"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </div>
      <ThemeSwitch />
    </nav>
  );
}
