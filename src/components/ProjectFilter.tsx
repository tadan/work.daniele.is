
import { cn } from "@/lib/utils";
import { useState } from "react";

type FilterOption = {
  label: string;
  value: string;
  icon: string;
};

interface ProjectFilterProps {
  selected: string;
  onSelect: (value: string) => void;
}

const ProjectFilter = ({ selected, onSelect }: ProjectFilterProps) => {
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  const filters: FilterOption[] = [
    { label: "All Projects", value: "all", icon: "🎨" },
    { label: "Prototyping", value: "prototyping", icon: "⚡" },
    { label: "Web Development", value: "development", icon: "💻" },
    { label: "Experience Design", value: "experience", icon: "✨" }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-16" role="tablist" aria-label="Project filters">
      {filters.map((filter) => {
        const isSelected = selected === filter.value;
        const isHovered = hoveredFilter === filter.value;
        
        return (
          <button
            key={filter.value}
            onClick={() => onSelect(filter.value)}
            onMouseEnter={() => setHoveredFilter(filter.value)}
            onMouseLeave={() => setHoveredFilter(null)}
            className={cn(
              "relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
              "hover-glow magnetic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "flex items-center gap-2 group",
              isSelected
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-white/80 backdrop-blur-md text-foreground hover:bg-white hover:shadow-md border border-white/20"
            )}
            role="tab"
            aria-selected={isSelected}
            aria-controls={`panel-${filter.value}`}
          >
            {/* Background glow for selected state */}
            {isSelected && (
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />
            )}
            
            <span className="text-base" aria-hidden="true">{filter.icon}</span>
            <span className="relative z-10">{filter.label}</span>
            
            {/* Hover shimmer effect */}
            {isHovered && !isSelected && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full shimmer" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;
