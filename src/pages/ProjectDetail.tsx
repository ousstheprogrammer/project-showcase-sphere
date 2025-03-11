
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectById, Project } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (id) {
      const foundProject = getProjectById(id);
      
      // Simulate API call
      setTimeout(() => {
        if (foundProject) {
          setProject(foundProject);
        }
        setIsLoading(false);
      }, 300);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-foreground/70 mb-6">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const preloadImage = (src: string) => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  };

  useEffect(() => {
    if (project) {
      preloadImage(project.image);
    }
  }, [project]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>

          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-secondary dark:bg-gray-800 text-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative aspect-video w-full mb-10 rounded-xl overflow-hidden glass-card">
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-xl leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.links.github && (
                <Button asChild variant="outline" className="gap-2">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}

              {project.links.other?.map((link) => (
                <Button
                  key={link.label}
                  asChild
                  variant="outline"
                  className="gap-2"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
