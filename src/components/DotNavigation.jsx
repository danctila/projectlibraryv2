import { motion } from "framer-motion";
import { useScroll } from "../Context/ScrollContext";

export default function DotNavigation() {
  const { activeSection, scrollToSection } = useScroll();
  const sections = [
    { id: "profile", label: "Profile" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="absolute right-4 top-1/2 flex flex-col space-y-3 -translate-y-1/2 z-10">
      {sections.map(({ id }) => {
        const isActive = id === activeSection;
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="w-3 h-3 relative"
          >
            <div
              className={`w-full h-full rounded-full ${
                isActive ? "bg-transparent" : "bg-gray-300 hover:bg-gray-500"
              }`}
            />
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-600"
                layoutId="activeDot"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
