
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project 1",
    description: "A beautiful and functional web application",
    image: "/lovable-uploads/f09be936-5cbb-4ff2-b3b8-9749139668e5.png",
    link: "#",
    github: "#",
  },
  // Add more projects as needed
];

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
                className="group relative aspect-video overflow-hidden rounded-lg glass hover-lift"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
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
    </div>
  );
};

export default Index;
