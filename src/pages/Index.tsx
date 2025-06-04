
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";
import MainNav from "@/components/MainNav";
import ProjectFilter from "@/components/ProjectFilter";

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (!project.tags) return false;
    return project.tags.some(tag => 
      tag.toLowerCase().includes(selectedFilter.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen w-full">
      <MainNav />
      <section className="relative mb-20 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center animate-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
            A technologist and designer working with IRL and digital experiences.
          </h1>
        </div>
      </section>

      <section className="py-20 px-4">
        <ProjectFilter selected={selectedFilter} onSelect={setSelectedFilter} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                hovered={hoveredIndex === index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  setSelectedProject(index);
                  setCurrentImageIndex(0);
                }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {selectedProject !== null && (
        <ProjectModal
          project={projects[selectedProject]}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          onClose={closeProject}
        />
      )}
    </div>
  );
};

export default Index;
