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
    videoUrl: "https://transitionview-pitch.com",
  },
  {
    title: "The Future of Breakfast with Arla",
    description: "A vending machine prototype for healthy breakfasts targeting teenagers",
    longDescription: `The 'Future of Breakfast' project was a collaborative effort with the Area Innovation Team, which has been working with Another Tomorrow since last summer. During a hackathon held in the summer, the winning idea was further developed in the fall. This concept involved creating a vending machine prototype designed to serve healthy breakfasts to teenagers at reasonable prices. The first test was run at Fryshuset in October 2023, collecting almost a hundred responses.`,
    role: `My responsibilities involved researching and exploring all the technical aspects of the prototypes. Once approved by the client, Daniele constructed the vending machine prototype and developed its digital counterpart in Figma. On the test day, the prototype was equipped with tracking analytics, enabling us to collect an extensive dataset about user interactions. This was complemented by qualitative data gathered from interviews.`,
    year: "2024",
    images: [
      "/lovable-uploads/43157a96-e053-4c75-9618-2b3ca6503f4e.png",
      "/lovable-uploads/a90c27c0-d51d-4b01-b7ee-acc92378aabb.png",
      "/lovable-uploads/15d70303-40c9-4aa2-8c9c-abe3ef9ec6cd.png"
    ],
    image: "/lovable-uploads/a90c27c0-d51d-4b01-b7ee-acc92378aabb.png",
    link: "#",
    github: "#",
  },
  {
    title: "Prototyping Sustainable Logistics with DFDS",
    description: "Redefining sustainable logistics routes for Denmark's largest logistics company",
    longDescription: `DFDS, standing as Denmark's largest logistics company, embarked on project to redefine sustainable logistics for their clients. The goal was to create a comprehensive model of logistic routes that incorporated a myriad of sustainable requirements, meeting the rising demand for eco-friendly transportation solutions.`,
    role: `My role was to bring clarity and interaction to the sustainable logistics model through proficient prototyping using Figma. I was tasked with translating the complex requirements and data into intuitive, user-friendly prototypes, showcasing the viability of sustainable routes.`,
    year: "2023",
    images: [
      "/lovable-uploads/87652519-d152-411b-a621-4a1d56fc71e6.png",
      "/lovable-uploads/a35d15e2-1374-4635-8e73-a20e9a7fc89e.png"
    ],
    image: "/lovable-uploads/87652519-d152-411b-a621-4a1d56fc71e6.png",
    link: "#",
    github: "#",
  },
  {
    title: "Postnord SWAN Dashboard",
    description: "A dashboard tool that saved over 1,000,000 failed deliveries for PostNord Sweden",
    longDescription: `Swan Dashboard is a product installed in all PostNord terminals in Sweden. It is a tool for the delivery team targeting specific KPIs. Born as a prototype before COVID, it has been evolving in accordance with requests from Customer Experience at PostNord. Since its launch into production, PostNord has saved more than 1,000,000 failed deliveries within the range 2020-2022.`,
    role: `Front End Developer and Designer of the application based on React/Redux. Design system, wireframes and mockups built in Figma. Remote user testing to evaluate and iterate the app features.`,
    year: "2020–2022",
    link: "#",
    github: "#"
  }
];

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (projectImages: string[]) => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = (projectImages: string[]) => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
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
            
            {'images' in projects[selectedProject] ? (
              <div className="relative mb-6">
                <img 
                  src={projects[selectedProject].images[currentImageIndex]} 
                  alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
                  className="w-full rounded-lg object-cover"
                />
                {projects[selectedProject].images.length > 1 && (
                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(projects[selectedProject].images);
                      }}
                    >
                      Previous
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(projects[selectedProject].images);
                      }}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <img 
                src={projects[selectedProject].image} 
                alt={projects[selectedProject].title}
                className="w-full rounded-lg mb-6 object-cover"
              />
            )}

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
