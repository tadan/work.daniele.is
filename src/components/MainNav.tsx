
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const MainNav = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    { href: "/", label: "Home", emoji: "🏠" },
    { href: "/profile", label: "Profile", emoji: "👨‍💻" },
    { href: "/contact", label: "Contact", emoji: "📬" },
  ];

  // Add magnetic effect to navigation
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    (e.currentTarget as HTMLElement).style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.transform = '';
  };

  return (
    <nav className="flex justify-center mb-16 relative z-50" role="navigation" aria-label="Main navigation">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
        
        <div className="relative inline-flex items-center rounded-full glass p-2 shadow-2xl border border-white/30">
          {/* Active indicator background */}
          <div
            className={cn(
              "absolute h-10 bg-primary rounded-full transition-all duration-500 ease-out shadow-lg",
              location.pathname === "/" && "w-20 left-2",
              location.pathname === "/profile" && "w-24 left-24",
              location.pathname === "/contact" && "w-24 left-50"
            )}
            style={{
              transform: hoveredIndex !== null ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          
          {links.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 magnetic",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  "hover:scale-105 active:scale-95",
                  isActive
                    ? "text-white shadow-lg z-10"
                    : "text-foreground/70 hover:text-foreground z-10"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={(e) => {
                  handleMouseLeave(e);
                  setHoveredIndex(null);
                }}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base" aria-hidden="true">{link.emoji}</span>
                  <span>{link.label}</span>
                </span>
                
                {/* Hover effect */}
                {hoveredIndex === index && !isActive && (
                  <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
