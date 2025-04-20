
import { useState } from "react";
import { Github, ExternalLink, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TransitionView",
    description: "A scientific innovation for companies transitioning to net-zero emissions",
    longDescription: `TransitionView represents a scientific innovation, born out of a collaborative effort between Another Tomorrow, esteemed professors, and climate scientists. Launched in 2023, this tool is currently undergoing trials by various Swedish companies as they navigate their transition towards net-zero emissions.`,
    role: `My responsibilities included researching and exploring various branding elements, ultimately initialising a design system. I also created a set of marketing materials and produced videos trailers to consistently convey the tool's capabilities and value in aiding companies toward their net-zero goals. This foundational work was crucial in establishing TransitionView's brand presence in its initial phase.`,
    year: "2023",
    image: "/lovable-uploads/d8131e9b-fecb-42f0-b46b-bdd4589231f8.png",
    link: "#",
    github: "#",
    videoUrl: "https://transitionview-pitch.com", // Replace with actual video URL
  },
  // Add more projects as needed
];

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const closeProject = () => setSelectedProject(null);

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
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

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-video overflow-hidden rounded-lg glass hover-lift cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="mb-6">{project.description}</p>
                    <div className="flex gap-4 justify-center">
                      <Button variant="outline" size="sm" className="glass" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="glass" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={closeProject}>
          <div className="bg-background max-w-4xl w-full rounded-lg p-6 overflow-y-auto max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{projects[selectedProject].title}</h2>
                <p className="text-muted-foreground">{projects[selectedProject].year}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={closeProject}>×</Button>
            </div>
            
            <img 
              src={projects[selectedProject].image} 
              alt={projects[selectedProject].title}
              className="w-full rounded-lg mb-6 object-cover"
            />

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground">{projects[selectedProject].longDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">My Role</h3>
                <p className="text-muted-foreground">{projects[selectedProject].role}</p>
              </div>

              <div className="flex gap-4 pt-4">
                {projects[selectedProject].videoUrl && (
                  <Button asChild>
                    <a href={projects[selectedProject].videoUrl} target="_blank" rel="noopener noreferrer">
                      <Video className="mr-2 h-4 w-4" />
                      Watch Video
                    </a>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <a href={projects[selectedProject].link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Project
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
