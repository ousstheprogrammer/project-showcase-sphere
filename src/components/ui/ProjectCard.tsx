
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`h-full transform transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group h-full block overflow-hidden rounded-xl glass-card transition-all duration-300 hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-medium text-white/80 uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-foreground/80 line-clamp-2">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-secondary dark:bg-gray-800 text-foreground/70"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-secondary dark:bg-gray-800 text-foreground/70">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
