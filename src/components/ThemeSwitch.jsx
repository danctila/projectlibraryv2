import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { motion, AnimatePresence, delay } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Define variants for the switch background
  const switchVariants = {
    light: { backgroundColor: "#EFEFEF", borderColor: "#000" },
    dark: { backgroundColor: "#1A1A1A", borderColor: "#FFF" },
  };

  const iconContainerVariants = {
    light: { x: 0 },
    dark: { x: 32 },
  };

  const overlayCircleVariants = {
    light: {
      x: 24,
      backgroundColor: "#EFEFEF",
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
    dark: {
      x: -8,
      backgroundColor: "#1A1A1A",
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-16 h-8 rounded-full flex items-center p-1 relative focus:outline-none"
      initial={false}
      animate={theme}
      variants={switchVariants}
      transition={{ duration: 0 }}
    >
      <div className="relative w-full h-full">
        {/* Container for both circles that slides together */}
        <motion.div
          className="absolute"
          variants={iconContainerVariants}
          animate={theme}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        >
          {/* Base circle */}
          <div
            className="absolute w-6 h-6 rounded-full"
            style={{ backgroundColor: "#3AED7C" }}
          />

          {/* Overlay circle that creates crescent */}
          <motion.div
            className="absolute w-6 h-6 rounded-full "
            // style={{
            //   backgroundColor: theme === "dark" ? "#1A1A1A" : "#EFEFEF",
            // }}
            variants={overlayCircleVariants}
            animate={theme}
          />
        </motion.div>
      </div>
    </motion.button>
  );
}
