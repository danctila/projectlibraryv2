import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink } from "lucide-react";
import projects from "../../../projects";

export const RateMyPlate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const project = projects.find((p) => p.id === "9");
  console.log(project);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] dark:bg-[#262329] px-4 py-8 font-neue">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Header Section */}
        <motion.div variants={fadeIn} className="text-left mb-12">
          <h1 className=" text-[40px]  font-semibold text-[#262329] dark:text-white mb-4">
            {project.title}
          </h1>
          <p className=" text-[20px] text-[#645E6E] dark:text-[#D8D6DC] mx-auto">
            {project.short_description}
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div variants={fadeIn} className="flex justify-left gap-4 mb-12">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6E07F3] dark:bg-[#8A34F9] text-white "
          >
            <svg
              className="fill-[white]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.0001 0C5.3735 0 0 5.50847 0 12.3038C0 17.74 3.43839 22.3519 8.2064 23.9789C8.80613 24.0927 9.02631 23.7119 9.02631 23.387C9.02631 23.0936 9.01518 22.1244 9.01001 21.0963C5.67157 21.8405 4.96712 19.6446 4.96712 19.6446C4.42125 18.2224 3.63473 17.8443 3.63473 17.8443C2.54596 17.0806 3.7168 17.0963 3.7168 17.0963C4.92181 17.1831 5.55632 18.3642 5.55632 18.3642C6.6266 20.2452 8.36359 19.7014 9.04836 19.387C9.15607 18.5918 9.46706 18.049 9.81024 17.7418C7.14486 17.4307 4.34295 16.3757 4.34295 11.6612C4.34295 10.3179 4.81172 9.22032 5.57937 8.35868C5.45477 8.04878 5.04402 6.79737 5.69562 5.10261C5.69562 5.10261 6.70331 4.77193 8.9965 6.3638C9.95372 6.09119 10.9803 5.95447 12.0001 5.94979C13.0199 5.95447 14.0473 6.09119 15.0063 6.3638C17.2967 4.77193 18.303 5.10261 18.303 5.10261C18.9562 6.79737 18.5452 8.04878 18.4206 8.35868C19.1901 9.22032 19.6557 10.3179 19.6557 11.6612C19.6557 16.3869 16.8484 17.4274 14.1762 17.732C14.6067 18.1138 14.9902 18.8626 14.9902 20.0105C14.9902 21.6568 14.9763 22.9817 14.9763 23.387C14.9763 23.7144 15.1923 24.098 15.8006 23.9772C20.566 22.3485 24 17.7381 24 12.3038C24 5.50847 18.6273 0 12.0001 0Z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#6E07F3] dark:border-[#8A34F9] text-[#6E07F3] dark:text-[#8A34F9] "
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </motion.div>

        {/* Video Section */}
        <motion.div
          variants={fadeIn}
          className="aspect-video mb-12 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
        >
          {project.videos[0] ? (
            <video
              controls
              className="w-full h-full object-cover"
              src={project.videos[0]}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Demo video coming soon
            </div>
          )}
        </motion.div>

        {/* Technologies */}
        <motion.div variants={fadeIn} className="mb-12">
          <h2 className="text-[30px] text-[#262329] dark:text-white mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-[18px] px-3 py-1 rounded-full bg-[#6E07F3]/10 dark:bg-[#8A34F9]/10 text-[#6E07F3] dark:text-[#8A34F9]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Full Description */}
        <motion.div variants={fadeIn}>
          <h2 className="text-[30px] text-[#262329] dark:text-white mb-4">
            About the Project
          </h2>
          <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 mb-12"
        >
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-full curser-zoom-in object-cover"
                onClick={() => setSelectedImage(image)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
              >
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  X
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
