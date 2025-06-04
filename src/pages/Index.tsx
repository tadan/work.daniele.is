
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";
import MainNav from "@/components/MainNav";
import ProjectFilter from "@/components/ProjectFilter";
import HeroSection from "@/components/HeroSection";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <div className="min-h-screen w-full relative overflow-hidden">
      <FloatingElements />
      <MainNav />
      
      <HeroSection isLoaded={isLoaded} />

      <section className="py-20 px-4 relative z-10">
        <div className={cn(
          "transform transition-all duration-1000",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}>
          <ProjectFilter selected={selectedFilter} onSelect={setSelectedFilter} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  "transform transition-all duration-700 fade-in-up",
                  `stagger-${(index % 4) + 1}`,
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                )}
              >
                <ProjectCard
                  project={project}
                  hovered={hoveredIndex === index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setSelectedProject(index);
                    setCurrentImageIndex(0);
                  }}
                />
              </div>
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
