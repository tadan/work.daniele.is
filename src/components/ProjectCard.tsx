
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
};

const ProjectCard = ({
  project,
  hovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ProjectCardProps) => (
  <div
    className="group relative aspect-video overflow-hidden rounded-lg glass hover-lift cursor-pointer"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div
      className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
        hovered ? "opacity-100" : "opacity-0"
      }`}
    >
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
);

export default ProjectCard;
