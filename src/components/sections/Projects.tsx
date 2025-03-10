
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ui/ProjectCard";
import { Link } from "react-router-dom";
import { getFeaturedProjects, projects } from "@/data/projects";

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section bg-secondary/50 dark:bg-gray-900/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm md:text-base font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10 mb-4 inline-block">
            My Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-foreground/80">
            Explore a selection of my recent projects across web development,
            artificial intelligence, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {featuredProjects.length < projects.length && (
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
