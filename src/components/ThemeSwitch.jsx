import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { motion } from "framer-motion";

const MotionBox = motion.div;

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Height
  const size = 32;

  const containerVariants = {
    dark: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
      backgroundColor: "#1A1A1A",
      borderColor: "#FFF",
    },
    light: {
      backgroundColor: "#FFF",
      borderColor: "#000",
    },
  };

  const childVariants = {
    dark: {
      y: 0,
      transition: {
        type: "tween",
      },
    },
    light: {
      y: "-100px",
    },
  };

  return (
    <div className="flex justify-center">
      <div
        onClick={toggleTheme}
        className="cursor-pointer"
        style={{
          "--switch-size": `${size}px`,
          "--switch-width": "64px",
          "--star-sm": `${size * 0.08}px`,
          "--star-md": `${size * 0.15}px`,
          "--star-lg": `${size * 0.25}px`,
        }}
      >
        <motion.div
          className={`
            relative w-[var(--switch-width)] h-[var(--switch-size)] 
            rounded-full p-1
            flex items-center ${
              theme === "dark" ? "justify-end" : "justify-start"
            }
            overflow-hidden border
            before:content-[''] before:absolute before:w-[calc(var(--switch-size)*0.3)]
            before:h-[calc(var(--switch-size)*0.3)] before:rounded-full before:bg-[#3AED7C]
            before:right-[15%] before:top-[20%] before:z-[2]
            before:transform before:transition-transform before:duration-300
            before:ease-linear
            ${
              theme === "dark"
                ? "before:translate-y-[100px]"
                : "before:translate-y-0"
            }
            after:content-[''] after:absolute after:w-[calc(var(--switch-size)*0.2)]
            after:h-[calc(var(--switch-size)*0.2)] after:rounded-full after:bg-[#3AED7C]
            after:right-[30%] after:top-[45%] after:z-[2]
            after:transform after:transition-transform after:duration-300
            after:ease-linear after:delay-100
            ${
              theme === "dark"
                ? "after:translate-y-[100px]"
                : "after:translate-y-0"
            }
          `}
          variants={containerVariants}
          initial={theme === "dark" ? "light" : "dark"}
          exit={theme === "dark" ? "light" : "dark"}
          animate={theme}
        >
          {/* Stars */}
          <MotionBox
            className="absolute top-[70%] left-[25%] w-[var(--star-sm)] h-[calc(var(--star-sm)*0.75)] rounded-full bg-[#3AED7C]"
            variants={childVariants}
          />
          <MotionBox
            className="absolute top-[25%] left-[15%] w-[var(--star-lg)] h-[var(--star-lg)] bg-[#3AED7C]"
            style={{
              clipPath:
                "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)",
            }}
            variants={childVariants}
          />
          <MotionBox
            className="absolute top-[60%] left-[45%] w-[var(--star-md)] h-[var(--star-md)] rounded-[58%] bg-[#3AED7C]"
            style={{
              clipPath:
                "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)",
            }}
            variants={childVariants}
          />
          <MotionBox
            className="absolute top-[40%] left-[35%] w-[var(--star-sm)] h-[var(--star-sm)] rounded-full bg-[#3AED7C]"
            variants={childVariants}
          />
          <MotionBox
            className="absolute top-[25%] left-[55%] w-[var(--star-sm)] h-[var(--star-sm)] rounded-full bg-[#3AED7C]"
            variants={childVariants}
          />

          {/* Knob (Sun/Moon) */}
          <motion.div
            layout
            animate={theme}
            variants={{
              dark: {
                boxShadow:
                  "inset 8px 8px #3AED7C, inset 8px 8px 1px 1px #3AED7C",
                rotate: 135,
                background: "transparent",
              },
              light: {
                boxShadow:
                  "inset 0px 0px #3AED7C, inset 0px 0px 0px 0px #3AED7C",
                rotate: 90,
                background: "#3AED7C",
              },
            }}
            initial={false}
            className="w-[24px] h-[24px] z-[9999] rounded-full "
          />
        </motion.div>
      </div>
    </div>
  );
}
