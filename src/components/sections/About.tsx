
import { useEffect, useRef, useState } from "react";
import { Code, Server, Globe, Brain } from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces",
    icon: <Code className="h-6 w-6" />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"]
  },
  {
    name: "Backend Development",
    description: "Creating robust server-side applications and APIs",
    icon: <Server className="h-6 w-6" />,
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "RESTful APIs"]
  },
  {
    name: "Web Technologies",
    description: "Leveraging modern web standards and tools",
    icon: <Globe className="h-6 w-6" />,
    technologies: ["Responsive Design", "Progressive Web Apps", "Version Control/Git", "Web Security", "Performance Optimization"]
  },
  {
    name: "AI & Machine Learning",
    description: "Applying AI techniques to solve complex problems",
    icon: <Brain className="h-6 w-6" />,
    technologies: ["Python", "TensorFlow", "OpenCV", "Machine Learning Models", "Data Analysis"]
  }
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <section id="about" ref={sectionRef} className="section bg-background dark:bg-gray-950">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm md:text-base font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10 mb-4 inline-block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Crafting digital solutions through code and creativity
          </h2>
          <p className="text-lg text-foreground/80">
            I'm a computer science student passionate about web development, 
            software engineering, and artificial intelligence. With a strong 
            foundation in both theory and practical application, I enjoy solving 
            complex problems and building intuitive, user-friendly applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass-card p-6 rounded-xl transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-foreground/70 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-secondary dark:bg-gray-800 text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
