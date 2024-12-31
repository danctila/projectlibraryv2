import ThemeSwitch from "./ThemeSwitch";
import { motion } from "framer-motion";
import { useScroll } from "../Context/ScrollContext";
import { useState } from "react";

export default function Navigation() {
  const { activeSection, scrollToSection } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    // Lock or unlock scroll
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const sections = [
    { id: "profile", label: "Profile" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  //   return (
  //     <nav className="fixed top-0 left-0 w-full z-50 bg-transparent dark:bg-gray-900/50 transition-all duration-300 flex items-center justify-between px-6 py-4">
  //       <div className="flex space-x-6 items-center">
  //         {sections.map((section) => (
  //           <button
  //             key={section.id}
  //             onClick={() => scrollToSection(section.id)}
  //             className="relative text-lg"
  //           >
  //             {section.label}
  //             {activeSection === section.id && (
  //               <motion.div
  //                 className="absolute bottom-[-2px] left-0 right-0 h-1 bg-blue-600"
  //                 layoutId="activeSection"
  //                 transition={{
  //                   type: "spring",
  //                   stiffness: 380,
  //                   damping: 30,
  //                 }}
  //               />
  //             )}
  //           </button>
  //         ))}
  //       </div>
  //       <ThemeSwitch />
  //     </nav>
  //   );
  // }

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent dark:bg-gray-900/50 transition-all duration-300 flex items-center justify-between px-6 py-4">
        {/* Logo or Home Link */}
        <div className="text-lg font-bold">My Logo</div>

        {/* Desktop Links */}
        <div className="hidden tablet:hidden desktop:flex space-x-6 items-center">
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
          <ThemeSwitch />
        </div>

        {/* Hamburger Menu */}
        <button
          className="tablet:flex mobile:flex desktop:hidden flex-col items-center justify-center w-10 h-10 rounded gap-1"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-[2px] bg-black dark:bg-white"></span>
          <span className="block w-6 h-[2px] bg-black dark:bg-white"></span>
          <span className="block w-6 h-[2px] bg-black dark:bg-white"></span>
        </button>
      </nav>

      {/* Modal for Hamburger Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center text-white"
          onClick={toggleMenu}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent propagation
          >
            <button
              className="absolute top-6 right-6 text-2xl"
              onClick={toggleMenu}
            >
              ✕
            </button>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  toggleMenu();
                }}
                className="text-2xl mb-4"
              >
                {section.label}
              </button>
            ))}
            <ThemeSwitch />
          </div>
        </div>
      )}
    </>
  );
}
