
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  isLoaded: boolean;
}

const HeroSection = ({ isLoaded }: HeroSectionProps) => {
  return (
    <section className="relative mb-20 flex items-center justify-center px-4 min-h-[60vh]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-60" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className={cn(
          "transform transition-all duration-1200 ease-out",
          isLoaded ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
        )}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance leading-tight">
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              A{" "}
            </span>
            <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              technologist
            </span>
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              {" "}and{" "}
            </span>
            <span className="gradient-text inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              designer
            </span>
            <br />
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              working with{" "}
            </span>
            <span className="relative inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                IRL
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            </span>
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              {" "}and{" "}
            </span>
            <span className="relative inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                digital
              </span>
            </span>
            <br />
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              experiences.
            </span>
          </h1>
        </div>

        <div className={cn(
          "transform transition-all duration-1200 ease-out",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )} style={{ transitionDelay: '200ms' }}>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Crafting award-winning digital experiences through innovative design and cutting-edge technology
          </p>
        </div>

        {/* Scroll indicator */}
        <div className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1200",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )} style={{ transitionDelay: '400ms' }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
