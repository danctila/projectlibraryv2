import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink } from "lucide-react";
import Flickity from "flickity";
import projects from "../../../projects";

export const HealthMate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const project = projects.find((p) => p.id === "11");
  const carouselRef = useRef(null);
  const flickityRef = useRef(null);

  // Lock/unlock body scroll when modal is open/closed
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  // Initialize Flickity carousel
  useEffect(() => {
    if (carouselRef.current && project.images.length > 1) {
      flickityRef.current = new Flickity(carouselRef.current, {
        cellAlign: "left",
        contain: true,
        draggable: false,
        pageDots: true,
        prevNextButtons: false,
        freeScroll: false,
        percentPosition: true,
        freeScrollFriction: 0.075,
        selectedAttraction: 0.025,
        friction: 0.28,
        resize: true,
        rightToLeft: false,
        wrapAround: true,
        autoPlay: 2000,
        pauseAutoPlayOnHover: true,
      });

      return () => {
        if (flickityRef.current) {
          flickityRef.current.destroy();
        }
      };
    }
  }, [project.images.length]);

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
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] dark:bg-[#262329] px-4 py-12 font-neue">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Header Section */}
        <motion.div variants={fadeIn} className="text-left mb-16">
          <h1 className="text-[40px] font-medium text-[#262329] dark:text-white mb-6">
            {project.title}
          </h1>
          <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] max-w-3xl leading-[25px]">
            {project.short_description}
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center sm:justify-start gap-3 px-6 py-3 rounded-xl bg-[#6E07F3] dark:bg-[#8A34F9] text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#6E07F3]/25 hover:-translate-y-0.5"
          >
            <svg
              className="fill-white w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.0001 0C5.3735 0 0 5.50847 0 12.3038C0 17.74 3.43839 22.3519 8.2064 23.9789C8.80613 24.0927 9.02631 23.7119 9.02631 23.387C9.02631 23.0936 9.01518 22.1244 9.01001 21.0963C5.67157 21.8405 4.96712 19.6446 4.96712 19.6446C4.42125 18.2224 3.63473 17.8443 3.63473 17.8443C2.54596 17.0806 3.7168 17.0963 3.7168 17.0963C4.92181 17.1831 5.55632 18.3642 5.55632 18.3642C6.6266 20.2452 8.36359 19.7014 9.04836 19.387C9.15607 18.5918 9.46706 18.049 9.81024 17.7418C7.14486 17.4307 4.34295 16.3757 4.34295 11.6612C4.34295 10.3179 4.81172 9.22032 5.57937 8.35868C5.45477 8.04878 5.04402 6.79737 5.69562 5.10261C5.69562 5.10261 6.70331 4.77193 8.9965 6.3638C9.95372 6.09119 10.9803 5.95447 12.0001 5.94979C13.0199 5.95447 14.0473 6.09119 15.0063 6.3638C17.2967 4.77193 18.303 5.10261 18.303 5.10261C18.9562 6.79737 18.5452 8.04878 18.4206 8.35868C19.1901 9.22032 19.6557 10.3179 19.6557 11.6612C19.6557 16.3869 16.8484 17.4274 14.1762 17.732C14.6067 18.1138 14.9902 18.8626 14.9902 20.0105C14.9902 21.6568 14.9763 22.9817 14.9763 23.387C14.9763 23.7144 15.1923 24.098 15.8006 23.9772C20.566 22.3485 24 17.7381 24 12.3038C24 5.50847 18.6273 0 12.0001 0Z" />
            </svg>
            <span>View on GitHub</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center sm:justify-start gap-3 px-6 py-3 rounded-xl border-2 border-[#6E07F3] dark:border-[#8A34F9] text-[#6E07F3] dark:text-[#8A34F9] font-medium transition-all duration-200 hover:bg-[#6E07F3] hover:text-white dark:hover:bg-[#8A34F9] dark:hover:text-white hover:-translate-y-0.5"
            >
              <ExternalLink
                size={20}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              <span>Live Demo</span>
            </a>
          )}
        </motion.div>

        {/* Video Section */}
        <motion.div variants={fadeIn} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.videos.map((video, index) => (
              <div
                key={index}
                className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
              >
                {video ? (
                  <video
                    controls
                    className="w-full h-full object-cover"
                    src={video}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎬</div>
                      <p className="text-lg">Demo video coming soon</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-[40px] font-medium text-[#262329] dark:text-white mb-8">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#6E07F3]/10 to-[#8A34F9]/10 text-[#6E07F3] dark:text-[#8A34F9] font-medium border border-[#6E07F3]/20 dark:border-[#8A34F9]/20 text-sm md:text-base"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Full Description */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-[40px] font-medium text-[#262329] dark:text-white mb-8">
            About the Project
          </h2>
          <div className="max-w-none space-y-6">
            <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px]">
              HealthMate is a comprehensive AI-powered health application
              developed for the InnovAIte Hackathon at Northeastern University,
              addressing the critical challenge of accessible healthcare in
              urban environments. The project tackles the significant problem
              many residents face: finding affordable, trustworthy, and nearby
              mental health resources and healthcare professionals.
            </p>
            <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px]">
              The application features a sophisticated agentic AI workflow built
              in Botpress that guides users through an advanced conversational
              flow, intelligently tracking their preferences, health concerns,
              communication methods, and insurance/budget constraints along the
              way. This conversational agent (demonstrated in video 2) creates a
              comprehensive user preference payload that captures all relevant
              information needed for personalized healthcare matching.
            </p>
            <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px]">
              The backend leverages Retrieval-Augmented Generation (RAG) with
              OpenAI embeddings to perform semantic matching against a MongoDB
              database of vectorized medical professional profiles. This
              advanced AI system analyzes the user's specific needs and
              intelligently matches them with healthcare providers who are best
              suited to address their particular health issues, location
              requirements, and financial constraints.
            </p>
            <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px]">
              The technical architecture combines the Botpress agentic
              conversation flow for intelligent preference collection, a custom
              Node.js backend with RAG-powered semantic search, MongoDB vector
              database for scalable medical professional storage, automated
              appointment booking capabilities, emergency assistance routing,
              and real-time healthcare provider matching. This creates a
              seamless end-to-end healthcare navigation experience that
              addresses significant urban accessibility challenges.
            </p>
          </div>
        </motion.div>

        {/* Hackathon Context */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-[40px] font-medium text-[#262329] dark:text-white mb-8">
            AI NU InnovAIte 2025 hackathon Challenge
          </h2>
          <div className="max-w-none space-y-6">
            <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px]">
              Cities are evolving, but are they truly getting smarter? In
              Boston, traffic congestion costs commuters an average of 79 hours
              per year in delays, while public transit reliability issues
              continue to frustrate residents who depend on the MBTA. Rising sea
              levels threaten $85 billion worth of real estate along the city's
              waterfront, and extreme weather events are straining aging
              infrastructure. At the same time, Boston faces widening economic
              inequality, with disparities in access to affordable housing,
              healthcare, and digital resources. As urban populations grow and
              environmental challenges intensify, the need for AI-driven
              innovation has never been greater.
            </p>
            <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px]">
              This year's InnovAIte Hackathon challenges you to reimagine the
              future of all cities—not just as hubs of technology, but as
              dynamic, adaptable ecosystems. Your task is to develop an
              AI-powered solution that tackles a pressing challenge, present or
              future, facing cities. From equitable mobility and
              climate-conscious urban planning to smart governance and digital
              inclusivity, your innovation should address the complex,
              interconnected systems that define city life. How can AI help
              cities become not just more intelligent, but more livable, fair,
              and resilient?
            </p>
            <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px]">
              Solutions must demonstrate an interdisciplinary integration of
              advanced technologies, equitable design, and systems thinking to
              develop technically robust, human-centered, scalable, and
              business-viable AI-driven solutions, addressing significant urban
              challenges.
            </p>
          </div>
        </motion.div>

        {/* Presentation Slideshow */}
        {project.images.length > 0 && (
          <motion.div variants={fadeIn} className="mb-16">
            <h2 className="text-[40px] font-medium text-[#262329] dark:text-white mb-8">
              Presentation
            </h2>

            {/* Flickity Slideshow */}
            <div className="relative">
              <div ref={carouselRef} className="gallery-carousel">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="gallery-cell group relative aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer mr-4"
                    style={{ width: "500px" }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} presentation slide ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Search size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-[95vw] h-[95vh] flex items-center justify-center"
              >
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-pointer"
                  onClick={() => setSelectedImage(null)}
                />
                {/* Click anywhere hint */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full pointer-events-none">
                  Click anywhere to close
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
