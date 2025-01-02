import ThemeSwitch from "./ThemeSwitch";
import { AnimatePresence, motion } from "framer-motion";
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

  const lineVariants = {
    closed: (customY) => ({
      y: customY, // original top offset
      opacity: 1,
    }),
    open: {
      y: 12, // collapse to middle line
      opacity: 0, // fade out
    },
  };

  // The middle line is handled slightly differently (since it becomes the minus)
  const middleLineVariants = {
    closed: { y: 12, opacity: 1 },
    open: { y: 12, opacity: 1 }, // stays in the middle
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 flex items-center justify-between px-6 py-4">
        {/* Logo or Home Link */}
        <p className="font-neue font-bold italic dark:text-[#8A34F9] text-[#6E07F3] text-[32px]">
          Dylan Anctil
        </p>

        {/* Desktop Links */}
        <div className="hidden tablet:hidden desktop:flex space-x-6 items-center z-50">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative font-neue text-[20px] font-regular text-black dark:text-white focus:outline-none"
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  className="absolute bottom-[-2px] left-0 right-0 h-[1px] bg-[#3AED7C]"
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

        {/* Hamburger / Minus Menu */}
        <button
          className="flex tablet:flex mobile:flex desktop:hidden relative w-[28px] h-[50px] z-[60]"
          onClick={toggleMenu}
        >
          {/* Line 1 */}
          <motion.span
            className="absolute left-0 w-[28px] h-[2px] rounded-full bg-black dark:bg-white"
            custom={0} // top offset = 0
            variants={lineVariants}
            animate={isMenuOpen ? "open" : "closed"}
            initial="closed"
            transition={{ duration: 0.2 }}
          />
          {/* Line 2 */}
          <motion.span
            className="absolute left-0 w-[28px] h-[2px] rounded-full bg-black dark:bg-white"
            custom={6} // top offset = 6px
            style={{ top: 6 }}
            variants={lineVariants}
            animate={isMenuOpen ? "open" : "closed"}
            initial="closed"
            transition={{ duration: 0.2 }}
          />
          {/* Line 3 (middle) */}
          <motion.span
            className="absolute left-0 w-[28px] h-[2px] rounded-full bg-black dark:bg-white"
            style={{ top: 12 }}
            variants={middleLineVariants}
            animate={isMenuOpen ? "open" : "closed"}
            initial="closed"
            transition={{ duration: 0.2 }}
          />
          {/* Line 4 */}
          <motion.span
            className="absolute left-0 w-[28px] h-[2px] rounded-full bg-black dark:bg-white"
            custom={18} // top offset = 18px
            style={{ top: 18 }}
            variants={lineVariants}
            animate={isMenuOpen ? "open" : "closed"}
            initial="closed"
            transition={{ duration: 0.2 }}
          />
          {/* Line 5 */}
          <motion.span
            className="absolute left-0 w-[28px] h-[2px] rounded-full bg-black dark:bg-white"
            custom={24} // top offset = 24px
            style={{ top: 24 }}
            variants={lineVariants}
            animate={isMenuOpen ? "open" : "closed"}
            initial="closed"
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="
      fixed inset-0 z-30 
      bg-[#DEDDE2] dark:bg-[#3E3B45]
      flex flex-col items-center justify-start pt-40 dark:text-white light:text-black font-neue
    "
            onClick={toggleMenu}
            initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
            animate={{ opacity: 1 }} // Animate to opacity 1 (visible)
            transition={{ duration: 0.3 }} // Smooth transition over 0.3 seconds
            exit={{ opacity: 0 }}
          >
            <div
              className="relative flex flex-col items-center space-y-[85px] Mobile:w-full Tablet:w-full px-4
      "
              onClick={(e) => e.stopPropagation()} // Prevent propagation
            >
              {/* Navigation Links */}
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => {
                    scrollToSection(section.id);
                    toggleMenu();
                  }}
                  className="relative text-[20px] font-regular text-center focus:outline-none"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {section.label}

                  {/* Animated Underline */}
                  <motion.div
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#3AED7C] origin-center"
                    style={{ transformOrigin: "center" }}
                  />
                </motion.button>
              ))}

              {/* Theme Switch */}
              <ThemeSwitch />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
