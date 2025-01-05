import { AnimatePresence, motion } from "framer-motion";
import { useScroll } from "../../../Context/ScrollContext";
import headshot from "../../../assets/headshot.webp";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function ProfileSection() {
  const { activeSection } = useScroll();

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-[#FBFBFB] dark:bg-[#262329]">
      <div className="flex flex-col desktop:flex-row items-center desktop:items-center space-y-[50px] mobile:space-y-[50px] tablet:space-y-[50px] desktop:space-x-[100px]">
        {/* Text Section */}
        <motion.div
          className="flex flex-col items-start text-left w-[310px] tablet:w-[450px] desktop:w-[450px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {" "}
          <motion.p
            variants={textVariants}
            className="font-neue text-[40px] font-normal text-[#262329] dark:text-white leading-[50px]"
          >
            {/* Desktop and Tablet Layout */}
            <span className="hidden tablet:block desktop:block">Hey,</span>
            <span className="hidden tablet:block desktop:block">
              My name is{" "}
              <AnimatePresence>
                {activeSection === "profile" && (
                  <motion.span
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="font-bold text-[#6E07F3] dark:text-[#8A34F9]"
                  >
                    Dylan Anctil
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
            {/* Mobile Layout */}
            <span className="block tablet:hidden desktop:hidden">
              Hey, my name is
            </span>
            <span className="block tablet:hidden desktop:hidden">
              <span className="font-bold text-[#6E07F3] dark:text-[#8A34F9]">
                Dylan Anctil
              </span>
            </span>
          </motion.p>
          <motion.p
            variants={textVariants}
            className="font-neue text-[20px] font-normal text-[#645E6E] dark:text-[#D8D6DC] mt-4 leading-[25px]"
          >
            This is some filler text about me. Feel free to replace it with
            something meaningful.
          </motion.p>
        </motion.div>
        {/* Image + Border Section */}
        <motion.div
          className="mt-6 tablet:mt-8 desktop:mt-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4,
          }}
        >
          <div className="relative w-[270px] h-[270px] mobile:w-[270px] mobile:h-[270px] tablet:w-[400px] tablet:h-[400px] desktop:w-[400px] desktop:h-[400px]">
            <motion.div
              className="absolute -top-2 -left-2 w-full h-full border-[1px] border-[#6E07F3] dark:border-[#8A34F9]"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.6 }}
            />
            <motion.img
              src={headshot}
              alt="headshot"
              className="bg-gray-300 dark:bg-gray-600 w-full h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
