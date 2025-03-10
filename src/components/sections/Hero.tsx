
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/30 dark:from-primary/10 dark:to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10 mt-16 md:mt-0">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className={`inline-block text-sm md:text-base font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10 mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            Computer Science Student & Developer
          </span>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            Building <span className="text-primary">digital experiences</span> that make a difference
          </h1>

          <p
            className={`text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 md:mb-10 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            I'm a passionate developer focused on creating intuitive, responsive, and
            accessible web applications and AI solutions.
          </p>

          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            <Button
              size="lg"
              className="rounded-full px-8"
              onClick={() => smoothScroll("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              onClick={() => smoothScroll("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => smoothScroll("about")}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
