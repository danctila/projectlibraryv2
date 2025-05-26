import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import projects from "../../projects";
import { ProjectCard } from "../../components/ProjectCard";

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

// Debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function ProjectIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );
  const [selectedTech, setSelectedTech] = useState(() => {
    const techParam = searchParams.get("tech");
    return techParam ? techParam.split(",") : [];
  });

  // Debounce search input to prevent animation on every keystroke
  const searchTerm = useDebounce(searchInput, 300);

  // Get unique technologies
  const allTechnologies = useMemo(
    () =>
      [...new Set(projects.flatMap((project) => project.technologies))].sort(),
    []
  );

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (selectedTech.length > 0) params.set("tech", selectedTech.join(","));

    setSearchParams(params, { replace: true });
  }, [searchTerm, selectedTech, setSearchParams]);

  // Toggle selected technologies
  const toggleTechnology = useCallback((tech) => {
    setSelectedTech((prevSelected) =>
      prevSelected.includes(tech)
        ? prevSelected.filter((t) => t !== tech)
        : [...prevSelected, tech]
    );
  }, []);

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setSelectedTech([]);
    setSearchInput("");
  }, []);

  // Filter projects based on search term and selected technologies
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search filter
      const matchesSearch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.short_description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Technology filter - project must have ALL selected technologies
      const matchesTech =
        selectedTech.length === 0 ||
        selectedTech.every((tech) => project.technologies.includes(tech));

      return matchesSearch && matchesTech;
    });
  }, [searchTerm, selectedTech]);

  return (
    <section className="min-h-screen snap-start bg-[#FBFBFB] dark:bg-[#262329] font-neue">
      <motion.div
        className="mx-auto px-[30px] tablet:px-[30px] desktop:px-[130px] w-full py-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex flex-col desktop:flex-row desktop:items-end desktop:justify-between gap-4">
            <div>
              <motion.h1
                variants={textVariants}
                className="text-[40px] font-normal text-[#262329] dark:text-white pb-[8px]"
              >
                Projects
              </motion.h1>
              <motion.p
                variants={textVariants}
                className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px] w-[310px] tablet:w-[450px] desktop:w-[450px]"
              >
                A collection of my recent work and personal projects.
              </motion.p>
            </div>

            {/* Search Bar */}
            <motion.div variants={textVariants} className="desktop:w-[400px]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#645E6E] dark:text-[#D8D6DC] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#645E6E] dark:border-[#D8D6DC] 
                            bg-white dark:bg-[#1a1a1a] text-[#262329] dark:text-white 
                            focus:outline-none focus:ring-2 focus:ring-[#6E07F3] dark:focus:ring-[#8A34F9] 
                            focus:border-transparent placeholder-[#645E6E] dark:placeholder-[#D8D6DC]"
                />
                {searchInput && (
                  <button
                    onClick={() => setSearchInput("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#645E6E] dark:text-[#D8D6DC] hover:text-[#262329] dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Filter Section */}
        <motion.div variants={textVariants} className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-medium text-[#262329] dark:text-white">
              Filter:
            </h3>
            {(searchTerm || selectedTech.length > 0) && (
              <button
                onClick={clearAllFilters}
                className="text-[14px] text-[#6E07F3] dark:text-[#8A34F9] hover:underline"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Available Technologies */}
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleTechnology(tech)}
                className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200
                  ${
                    selectedTech.includes(tech)
                      ? "bg-[#6E07F3] dark:bg-[#8A34F9] text-white border-[#6E07F3] dark:border-[#8A34F9]"
                      : "bg-white dark:bg-[#1a1a1a] text-[#645E6E] dark:text-[#D8D6DC] border-[#645E6E] dark:border-[#D8D6DC] hover:border-[#6E07F3] dark:hover:border-[#8A34F9]"
                  }`}
              >
                {tech}
              </motion.button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-[14px] text-[#645E6E] dark:text-[#D8D6DC]">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 w-full">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.25, ease: "easeInOut" },
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.06,
                  ease: "easeOut",
                  layout: { duration: 0.4, ease: "easeInOut" },
                }}
                className="w-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="col-span-full text-center py-12"
            >
              <div className="text-[#645E6E] dark:text-[#D8D6DC] space-y-2">
                <p className="text-xl">No projects found</p>
                <p className="text-sm">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
