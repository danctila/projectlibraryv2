import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import filler from "../../../assets/filler.jpg";
import { ProjectCard } from "../../../components/ProjectCard";

export default function ProjectsSection() {
  const carouselRef = useRef(null);
  const flickityRef = useRef(null);

  const projects = [
    {
      id: "1",
      title: "Project One",
      description: "Brief description...",
      image: filler,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    },
    {
      id: "2",
      title: "Project Two",
      description: "Brief description...",
      image: filler,
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    },
    {
      id: "3",
      title: "Project Three",
      description: "Brief description...",
      image: filler,
      technologies: ["React", "Redux", "Styled Components"],
    },
    {
      id: "4",
      title: "Project Four",
      description: "Brief description...",
      image: filler,
      technologies: ["Gatsby", "GraphQL", "Netlify"],
    },
    {
      id: "5",
      title: "Project Five",
      description: "Brief description...",
      image: filler,
      technologies: ["Vue", "Nuxt.js", "Vercel"],
    },
  ];

  useEffect(() => {
    flickityRef.current = new Flickity(carouselRef.current, {
      cellAlign: "left",
      contain: true,
      draggable: true,
      pageDots: false,
      prevNextButtons: false,
      freeScroll: false,
      freeScrollFriction: 0.075,
      selectedAttraction: 0.025,
      friction: 0.28,
      resize: true,
      rightToLeft: false,
    });

    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }
    };
  }, []);

  const handlePrev = () => {
    if (flickityRef.current) {
      flickityRef.current.previous();
    }
  };

  const handleNext = () => {
    if (flickityRef.current) {
      flickityRef.current.next();
    }
  };

  return (
    <section className="min-h-screen snap-start bg-[#FBFBFB] dark:bg-[#262329] font-neue flex items-center justify-center">
      <div className="max-w-[1915px] mx-auto px-[30px] tablet:px-[100px] desktop:px-[130px] w-full relative">
        {/* Section Header */}
        <div className="mb-10 ">
          <h1 className="text-[40px] font-normal text-[#262329] dark:text-white">
            Projects
          </h1>
          <div className="relative w-full flex flex-col tablet:flex-row items-start tablet:items-end justify-between">
            <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px] w-[310px] tablet:w-[450px] desktop:w-[450px]">
              Explore some of the exciting projects I've worked on recently.
            </p>
            <Link
              to="/projects"
              className="mt-6 tablet:mt-4 desktop:mt-0 text-[#645E6E] dark:text-[#D8D6DC] hover:text-black dark:hover:text-white text-[20px] underline self-start tablet:self-auto"
            >
              See all projects
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[470px]">
          {/* Flickity Carousel */}
          <div ref={carouselRef}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {/* Navigation Arrows */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <AnimatePresence>
              {/* Previous Button (hide if atStart) */}

              <motion.button
                key="prev-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={handlePrev}
                className="absolute left-[-50px] bg-transparent"
              >
                {/* Light Mode Left Arrow */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block dark:hidden"
                >
                  <path
                    d="M16 24L8 16L16 8"
                    stroke="black"
                    strokeWidth="1.33333"
                  />
                  <path
                    d="M24 24L16 16L24 8"
                    stroke="black"
                    strokeWidth="1.33333"
                  />
                </svg>
                {/* Dark Mode Left Arrow */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden dark:block"
                >
                  <path
                    d="M16 24L8 16L16 8"
                    stroke="white"
                    strokeWidth="1.33333"
                  />
                  <path
                    d="M24 24L16 16L24 8"
                    stroke="white"
                    strokeWidth="1.33333"
                  />
                </svg>
              </motion.button>

              {/* Next Button (hide if atEnd) */}

              <motion.button
                key="next-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={handleNext}
                className="absolute right-[-50px] bg-transparent"
              >
                {/* Light Mode Right Arrow */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block dark:hidden"
                >
                  <path
                    d="M16 24L24 16L16 8"
                    stroke="black"
                    strokeWidth="1.33333"
                  />
                  <path
                    d="M8 24L16 16L8 8"
                    stroke="black"
                    strokeWidth="1.33333"
                  />
                </svg>
                {/* Dark Mode Right Arrow */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden dark:block"
                >
                  <path
                    d="M16 24L24 16L16 8"
                    stroke="white"
                    strokeWidth="1.33333"
                  />
                  <path
                    d="M8 24L16 16L8 8"
                    stroke="white"
                    strokeWidth="1.33333"
                  />
                </svg>
              </motion.button>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .flickity-enabled {
          outline: none;
        }
      `}</style>
    </section>
  );
}
