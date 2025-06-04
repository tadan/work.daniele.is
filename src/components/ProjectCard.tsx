
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
}: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      className={cn(
        "group relative aspect-video overflow-hidden rounded-2xl cursor-pointer",
        "glass hover-glow transition-all duration-500 ease-out",
        "transform hover:scale-[1.02] active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} project details`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Image with loading state */}
      <div className="relative w-full h-full">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
        )}
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            "group-hover:scale-110",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>

      {/* Content overlay */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500",
          "transform",
          hovered 
            ? "opacity-100 scale-100 backdrop-blur-sm" 
            : "opacity-0 scale-95"
        )}
      >
        <div className="text-white text-center p-8 transform transition-all duration-300 group-hover:translate-y-0 translate-y-4">
          {/* Project title with glow effect */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="mb-8 text-white/90 leading-relaxed drop-shadow-md max-w-md mx-auto">
            {project.description}
          </p>
          
          {/* Action buttons */}
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline" 
              size="sm" 
              className={cn(
                "glass text-white border-white/30 hover:bg-white/20",
                "transform hover:scale-105 transition-all duration-200",
                "focus-visible:ring-white/50"
              )}
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className={cn(
                "glass text-white border-white/30 hover:bg-white/20",
                "transform hover:scale-105 transition-all duration-200",
                "focus-visible:ring-white/50"
              )}
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live demo`}
              >
                <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                Visit
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300",
        hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}>
        <div className="glass rounded-lg p-3">
          <h4 className="font-semibold text-white text-sm">{project.title}</h4>
          {project.tags && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/20 rounded-full text-xs text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
