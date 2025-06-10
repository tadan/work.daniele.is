
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
            "text-sm transition-colors px-3 py-2 md:px-0 md:py-0 rounded-full md:rounded-none border md:border-none",
            selected === filter.value
              ? "text-primary font-medium bg-primary/10 border-primary md:bg-transparent"
              : "text-muted-foreground hover:text-primary border-border hover:border-primary md:border-none"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
