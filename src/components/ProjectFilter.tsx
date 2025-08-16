
import { cn } from "@/lib/utils";

type FilterOption = {
  label: string;
  value: string;
};

interface ProjectFilterProps {
  selected: string;
  onSelect: (value: string) => void;
}

const ProjectFilter = ({ selected, onSelect }: ProjectFilterProps) => {
  const filters: FilterOption[] = [
    { label: "All Projects", value: "all" },
    { label: "Prototyping", value: "prototyping" },
    { label: "Web Development", value: "development" },
    { label: "Experience Design", value: "experience" },
    { label: "Facilitation", value: "facilitation" }
  ];

  return (
    <div className="flex flex-wrap gap-3 md:gap-6 justify-center mb-16 px-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onSelect(filter.value)}
          className={cn(
            "text-sm transition-colors px-3 py-2 md:px-0 md:py-0 rounded-full md:rounded-none border md:border-none relative",
            selected === filter.value
              ? "text-brand font-medium bg-brand/10 border-brand md:bg-transparent md:after:absolute md:after:bottom-0 md:after:left-0 md:after:right-0 md:after:h-0.5 md:after:bg-brand"
              : "text-muted-foreground hover:text-brand border-border hover:border-brand md:border-none"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
