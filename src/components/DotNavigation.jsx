import { motion, AnimatePresence } from "framer-motion";
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
    <div className="absolute right-3 flex-col space-y-[13px] pointer-events-auto z-10 hidden tablet:flex desktop:flex">
      {sections.map(({ id }) => {
        const isActive = id === activeSection;
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="w-[14px] h-[16px] relative flex items-center justify-center"
            aria-label={id}
          >
            {/* Inactive Dot */}
            {!isActive && (
              <svg
                width="14"
                height="16"
                viewBox="0 0 52 55"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black dark:text-white"
              >
                <path d="M4.51855 37.935C-0.644375 30.2618 4.88733 19.2316 16.6883 13.3168C28.4892 7.40205 42.3185 8.52107 47.4814 16.1943C52.6443 23.8675 47.1126 34.8977 35.3117 40.9723C23.5107 46.8871 9.68146 45.6082 4.51855 37.935ZM45.6375 17.1534C43.6092 13.9562 33.2834 15.7147 22.5888 21.1499C22.4044 21.1499 22.4044 21.3097 22.22 21.3097C22.0356 21.3097 21.8512 21.4696 21.8512 21.4696C11.341 26.9048 4.51855 33.7787 6.73123 36.816C8.75953 40.0132 19.0854 38.2548 29.78 32.8196C29.9644 32.8196 29.9644 32.6597 30.1488 32.6597L30.3331 32.4998C40.8434 27.2245 47.6658 20.3506 45.6375 17.1534Z" />
              </svg>
            )}

            {/* Active Dot */}
            {isActive && (
              <AnimatePresence>
                <motion.svg
                  key="active-dot"
                  width="14"
                  height="16"
                  viewBox="0 0 52 59"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black dark:text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <path d="M4.51855 39.8213C-0.644375 32.1481 4.88733 21.1178 16.6883 15.203C28.4892 9.28828 42.3185 10.4073 47.4814 18.0805C52.6443 25.7537 47.1126 36.7839 35.3117 42.8586C23.5107 48.7733 9.68146 47.4945 4.51855 39.8213Z" />
                </motion.svg>
              </AnimatePresence>
            )}
          </button>
        );
      })}
    </div>
  );
}
