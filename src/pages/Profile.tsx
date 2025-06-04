
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MainNav from "@/components/MainNav";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import FloatingElements from "@/components/FloatingElements";

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: "UI/UX Design", level: 95, icon: "🎨" },
    { name: "Frontend Development", level: 92, icon: "💻" },
    { name: "Prototyping", level: 88, icon: "⚡" },
    { name: "AI Innovation", level: 85, icon: "🤖" },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <FloatingElements />
      <MainNav />
      
      <section className="relative max-w-5xl mx-auto py-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-60 rounded-3xl" />
        
        <div className="relative z-10 flex flex-col items-center">
          {/* Avatar with enhanced styling */}
          <div className={cn(
            "relative mb-12 transform transition-all duration-1000 ease-out",
            isLoaded ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
          )}>
            {/* Glow effect behind avatar */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-20 blur-2xl animate-pulse-slow" />
            
            <Avatar className="w-56 h-56 ring-4 ring-white/50 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300">
              <AvatarImage 
                src="/lovable-uploads/d9aa2c4f-c5ed-4678-aac4-af8454c044ce.png" 
                alt="Daniele Navarra profile portrait" 
                className="object-cover"
              />
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                DN
              </AvatarFallback>
            </Avatar>
            
            {/* Floating indicator */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
          </div>
          
          {/* Name and title */}
          <div className={cn(
            "text-center mb-12 transform transition-all duration-1000 ease-out",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )} style={{ transitionDelay: '200ms' }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text hover:scale-105 transition-transform duration-300 cursor-default">
              Daniele Navarra
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Cross-functional Creative & Technology Innovator
            </p>
            
            {/* Social proof badges */}
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-700 border border-purple-200">
                🏆 Award-winning Designer
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-sm font-medium text-blue-700 border border-blue-200">
                🚀 Innovation Leader
              </span>
            </div>
          </div>

          {/* Description with enhanced styling */}
          <div className={cn(
            "text-center max-w-4xl transform transition-all duration-1000 ease-out mb-16",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )} style={{ transitionDelay: '400ms' }}>
            <div className="glass rounded-3xl p-8 md:p-12 hover-glow">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A cross-functional creative blending expertise in UI/UX design, front-end development, and emerging technologies. With a proven track record collaborating with startups, consultancies, and corporate clients, I specialize in transforming ideas into engaging, user-centered digital experiences. I leverage creative thinking, rapid prototyping, and AI-driven innovation to deliver impactful solutions that drive meaningful change. Passionate about pushing boundaries and turning vision into reality through design and technology.
              </p>
            </div>
          </div>

          {/* Skills section */}
          <div className={cn(
            "w-full max-w-3xl transform transition-all duration-1000 ease-out",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )} style={{ transitionDelay: '600ms' }}>
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Core Expertise</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={cn(
                    "glass rounded-2xl p-6 hover-glow transition-all duration-300",
                    `fade-in-up stagger-${index + 1}`
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" aria-hidden="true">{skill.icon}</span>
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Animated progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isLoaded ? `${skill.level}%` : '0%',
                        transitionDelay: `${800 + index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
