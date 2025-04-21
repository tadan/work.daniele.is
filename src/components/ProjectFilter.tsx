
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
    { label: "Experience Design", value: "experience" }
  ];

  return (
    <div className="flex gap-6 justify-center mb-16">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onSelect(filter.value)}
          className={cn(
            "text-sm transition-colors",
            selected === filter.value
              ? "text-primary font-medium"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
