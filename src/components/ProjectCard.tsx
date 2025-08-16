
import { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

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
      </div>
    </div>
    <div
      className={`absolute bottom-4 right-4 bg-brand text-brand-foreground hover:bg-white hover:text-black px-3 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
        hovered ? "opacity-100" : "opacity-0"
      }`}
    >
      Click for more info
      <ArrowRight size={16} />
    </div>
  </div>
);

export default ProjectCard;
