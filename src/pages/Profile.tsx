
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div className="min-h-screen w-full">
      <section className="relative max-w-4xl mx-auto py-20 px-4 flex flex-col items-center">
        <Avatar className="w-48 h-48 mb-8">
          <AvatarImage 
            src="/lovable-uploads/d9aa2c4f-c5ed-4678-aac4-af8454c044ce.png" 
            alt="Profile portrait" 
            className="object-cover"
          />
          <AvatarFallback>DN</AvatarFallback>
        </Avatar>
        
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Daniele Navarra</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A cross-functional creative blending expertise in UI/UX design, front-end development, and emerging technologies. With a proven track record collaborating with startups, consultancies, and corporate clients, I specialize in transforming ideas into engaging, user-centered digital experiences. I leverage creative thinking, rapid prototyping, and AI-driven innovation to deliver impactful solutions that drive meaningful change. Passionate about pushing boundaries and turning vision into reality through design and technology.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
