import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Tech workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-60 right-32 w-16 h-16 bg-gradient-primary rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 border border-accent/30 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Building innovative digital solutions with cutting-edge technologies. 
              Passionate about clean code, user experience, and scalable architecture.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
              View My Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a href="#" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors group">
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors group">
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors group">
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;