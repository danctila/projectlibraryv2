import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Animation for each technology bubble
const bubbleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Overlay animation
const overlayVariants = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    backdropFilter: "blur(4px)",
    transition: {
      duration: 0.3,
    },
  },
};

export const ProjectCard = ({ project }) => {
  const location = useLocation();
  const fromPath = location.pathname === "/" ? "/#projects" : "/projects";

  return (
    <div className="mr-4 last:mr-0 w-[350px]">
      <div className="flex flex-col items-start">
        <Link
          to={`/projects/${project.id}`}
          state={{ from: fromPath }}
          className="block w-full relative group"
        >
          <div className="overflow-hidden rounded-[5px] relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-[230px] object-cover"
              />
            </motion.div>

            <AnimatePresence>
              <motion.div
                className="absolute inset-0 bg-black/60"
                initial="hidden"
                whileHover="visible"
                exit="hidden"
                variants={overlayVariants}
              >
                <motion.div
                  className="h-full flex items-center justify-center p-4"
                  variants={containerVariants}
                >
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies?.map((tech, index) => (
                      <motion.span
                        key={index}
                        variants={bubbleVariants}
                        className="px-3 py-1 rounded-full bg-white/20 text-white text-sm backdrop-blur-sm 
                                     hover:bg-white/30 transition-colors"
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to={`/projects/${project.id}`} state={{ from: fromPath }}>
            <h2 className="text-[30px] font-medium text-[#262329] dark:text-white">
              {project.title}
            </h2>
          </Link>
          <p className="mt-2 text-[18px] text-[#645E6E] dark:text-[#D8D6DC]">
            {project.short_description}
          </p>
          <Link
            to={{
              pathname: `/projects/${project.id}`,
            }}
            state={{ from: fromPath }}
            className="mt-4 text-[16px] text-[#3AED7C] hover:underline inline-block"
          >
            <motion.span
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              SEE MORE
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
