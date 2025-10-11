import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-internet.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Internet connectivity and digital security"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <Shield className="w-20 h-20 text-accent animate-glow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Navigate the Digital World
            <span className="block gradient-accent bg-clip-text text-transparent">
              Safely & Smartly
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Empowering you with knowledge, safety tips, and best practices for a secure and productive online experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("awareness")}
            >
              Explore Awareness
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("safety")}
            >
              Safety Tips
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
