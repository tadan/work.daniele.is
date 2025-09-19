
import { Button } from "@/components/ui/button";
import { ExternalLink, Video } from "lucide-react";
import { Project } from "@/data/projects";
import { useState } from "react";

type ProjectModalProps = {
  project: Project;
  currentImageIndex: number;
  setCurrentImageIndex: (idx: number) => void;
  onClose: () => void;
};

const ProjectModal = ({
  project,
  currentImageIndex,
  setCurrentImageIndex,
  onClose,
}: ProjectModalProps) => {
  const hasImages = Boolean(project.images && project.images.length);

  const nextImage = () => {
    if (!project.images) return;
    setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    if (!project.images) return;
    setCurrentImageIndex(
      (currentImageIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-background max-w-6xl w-full rounded-lg p-6 overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground">{project.year}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>
          {hasImages ? (
            <div className="relative mb-6">
              <img
                src={
                  project.images
                    ? project.images[currentImageIndex]
                    : project.image
                }
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full rounded-lg object-cover"
              />
              {project.images && project.images.length > 1 && (
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={e => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={e => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg mb-6 object-cover"
            />
          )}

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">The Solution</h3>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">My Role & Impact</h3>
              <p className="text-muted-foreground">{project.impact}</p>
            </div>
            <div className="flex gap-4 pt-4">
              {project.videoUrl && (
                <Button asChild>
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Video className="mr-2 h-4 w-4" />
                    Watch Video
                  </a>
                </Button>
              )}
              <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Project
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden md:block">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground text-lg">{project.year}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">The Solution</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">My Role & Impact</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.impact}</p>
              </div>
              <div className="flex gap-4 pt-4">
                {project.videoUrl && (
                  <Button asChild size="lg">
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Watch Video
                    </a>
                  </Button>
                )}
                <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Project
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="sticky top-6">
              {hasImages ? (
                <div className="relative">
                  <img
                    src={
                      project.images
                        ? project.images[currentImageIndex]
                        : project.image
                    }
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full rounded-lg object-cover"
                  />
                  {project.images && project.images.length > 1 && (
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={e => {
                          e.stopPropagation();
                          prevImage();
                        }}
                      >
                        Previous
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={e => {
                          e.stopPropagation();
                          nextImage();
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
