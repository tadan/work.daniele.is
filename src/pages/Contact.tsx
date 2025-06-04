
import MainNav from "@/components/MainNav";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@danielenavarra.com",
      href: "mailto:hello@danielenavarra.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <FloatingElements />
      <MainNav />
      
      <section className="relative max-w-6xl mx-auto py-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-60 rounded-3xl" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className={cn(
            "text-center mb-16 transform transition-all duration-1000 ease-out",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Let's Create Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your ideas into exceptional digital experiences? 
              I'd love to hear about your project and explore how we can collaborate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className={cn(
              "transform transition-all duration-1000 ease-out",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )} style={{ transitionDelay: '200ms' }}>
              <div className="glass rounded-3xl p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="transition-all duration-300 focus:scale-[1.02] hover:shadow-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="transition-all duration-300 focus:scale-[1.02] hover:shadow-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration opportunity"
                      required
                      className="transition-all duration-300 focus:scale-[1.02] hover:shadow-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                      rows={6}
                      required
                      className="transition-all duration-300 focus:scale-[1.02] hover:shadow-md"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className={cn(
                      "w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
                      "text-white font-semibold py-3 rounded-xl shadow-lg hover-glow",
                      "transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                    )}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className={cn(
              "transform transition-all duration-1000 ease-out space-y-8",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )} style={{ transitionDelay: '400ms' }}>
              {/* Contact Methods */}
              <div className="glass rounded-3xl p-8 hover-glow">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl transition-all duration-300",
                        "hover:bg-white/50 hover:scale-105 hover:shadow-md",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      )}
                    >
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                        <method.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{method.label}</p>
                        <p className="text-gray-600">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass rounded-3xl p-8 hover-glow">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-xl">⏰</span>
                  Availability
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <span className="font-medium text-green-600">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Timezone</span>
                    <span className="font-medium">PST (UTC-8)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Preferred Meeting</span>
                    <span className="font-medium">Video calls</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-3xl p-8 hover-glow">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-xl">🌐</span>
                  Connect Online
                </h3>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'GitHub', 'Dribbble'].map((platform, index) => (
                    <a
                      key={platform}
                      href="#"
                      className={cn(
                        "px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full",
                        "text-sm font-medium text-purple-700 hover:from-purple-200 hover:to-pink-200",
                        "transition-all duration-200 hover:scale-105",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      )}
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
