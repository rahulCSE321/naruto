import { Button } from "@/components/ui/button";
import heroImage from "@/assets/naruto-hero.jpg";
import { Play, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-primary/60 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-accent animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-primary animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-orange drop-shadow-2xl">
          Explore the Shinobi World
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-foreground/90 font-medium">
          Watch episodes, explore characters, read stories, and relive the Naruto universe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary-glow glow-orange font-bold text-primary-foreground transition-all hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Now
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 rounded-full glass-card hover:bg-primary/10 font-bold border-2 border-primary/50 hover:border-primary transition-all hover:scale-105"
          >
            <Users className="mr-2 h-5 w-5" />
            Explore Characters
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
