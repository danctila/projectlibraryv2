import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../projects";
import { ProjectCard } from "../../components/ProjectCard";

export default function ProjectIndex() {
  const [selectedTech, setSelectedTech] = useState([]);

  // Get unique technologies
  const allTechnologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ].sort();

  // Toggle selected technologies
  const toggleTechnology = (tech) => {
    setSelectedTech((prevSelected) =>
      prevSelected.includes(tech)
        ? prevSelected.filter((t) => t !== tech)
        : [...prevSelected, tech]
    );
  };

  // Filter projects based on selected technologies
  const filteredProjects =
    selectedTech.length > 0
      ? projects.filter((project) =>
          selectedTech.some((tech) => project.technologies.includes(tech))
        )
      : projects;

  return (
    <section className="min-h-screen snap-start bg-[#FBFBFB] dark:bg-[#262329] font-neue">
      <div className="mx-auto px-[30px] tablet:px-[30px] desktop:px-[130px] w-full py-16">
        {/* Section Header */}
        <div className="mb-10">
          <h1 className="text-[40px] font-normal text-[#262329] dark:text-white pb-[8px]">
            Projects
          </h1>
          <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px] w-[310px] tablet:w-[450px] desktop:w-[450px] pb-[32px]">
            A collection of my recent work and personal projects.
          </p>
        </div>

        {/* Technology Filter Carousel */}
        <div className="mb-8 relative p-4 rounded-lg border border-[#645E6E] dark:border-[#D8D6DC] bg-[#f5f5f5] dark:bg-[#262329] overflow-hidden">
          <p className="text-[#645E6E] dark:text-[#D8D6DC] mb-4">
            Filter by Technologies:
          </p>
          <motion.div
            drag="x"
            // Lower left value to increase drag distance
            dragConstraints={{ left: -400, right: 0 }}
            className="flex space-x-4 cursor-grab"
            initial={{ x: 0 }}
            animate={{ x: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            {allTechnologies.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleTechnology(tech)}
                className={`px-4 py-2 rounded-full border border-[#645E6E] dark:border-[#D8D6DC] text-sm 
                ${
                  selectedTech.includes(tech)
                    ? "bg-[#645E6E] text-white"
                    : "bg-transparent text-[#645E6E] dark:text-[#D8D6DC]"
                } 
                transition-colors duration-300`}
              >
                {tech}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects List with Flexbox */}
        <div className="flex flex-wrap justify-center items-center gap-6 tablet:pl-[78px] desktop:pl-0">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex-grow basis-[280px] max-w-[500px] mx-auto transition-all duration-300 ease-in-out"
            >
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="w-full text-center py-12 text-[#645E6E] dark:text-[#D8D6DC]">
              No projects found with the selected technologies.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
