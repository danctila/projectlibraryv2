import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

export default function Blog() {
  return (
    <section className="min-h-screen snap-start bg-[#FBFBFB] dark:bg-[#262329] font-neue flex items-center justify-center">
      <motion.div
        className="max-w-[1915px] mx-auto px-[30px] tablet:px-[100px] desktop:px-[130px] w-full"
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
        {/* Section Header */}
        <div className="mb-10">
          <motion.h1
            variants={textVariants}
            className="text-[40px] font-normal text-[#262329] dark:text-white pb-[8px]"
          >
            Blog
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px] w-[310px] tablet:w-[450px] desktop:w-[450px] pb-[32px]"
          >
            Coming soon...
          </motion.p>
          {/* <Link to="/blog" className="text-blue-600 underline">
            See All Blogs
          </Link> */}
        </div>
      </motion.div>
    </section>
  );
}
