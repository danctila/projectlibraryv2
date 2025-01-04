import { useState } from "react";
import projects from "../../projects";
import { ProjectCard } from "../../components/ProjectCard";

export default function ProjectIndex() {
  const [selectedTech, setSelectedTech] = useState("");

  // Get unique technologies
  const allTechnologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ].sort();

  // Filter projects based on selected technology
  const filteredProjects = selectedTech
    ? projects.filter((project) => project.technologies.includes(selectedTech))
    : projects;

  return (
    <section className="min-h-screen snap-start bg-[#FBFBFB] dark:bg-[#262329] font-neue">
      <div className="max-w-[1915px] mx-auto px-[30px] tablet:px-[100px] desktop:px-[130px] w-full py-16">
        {/* Section Header */}
        <div className="mb-10">
          <h1 className="text-[40px] font-normal text-[#262329] dark:text-white pb-[8px]">
            Projects
          </h1>
          <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px] w-[310px] tablet:w-[450px] desktop:w-[450px] pb-[32px]">
            A collection of my recent work and personal projects.
          </p>
        </div>

        {/* Technology Filter */}
        <div className="mb-8">
          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white dark:bg-[#2D2A31] text-[#262329] dark:text-white border border-[#E5E5E5] dark:border-[#363139] focus:outline-none focus:ring-2 focus:ring-[#645E6E] dark:focus:ring-[#D8D6DC]"
          >
            <option value="">All Technologies</option>
            {allTechnologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
