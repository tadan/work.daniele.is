
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen w-full">
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center animate-in">
          <p className="text-sm uppercase tracking-wider mb-4">Portfolio</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
            Designer & Technologist
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            based in Stockholm
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
