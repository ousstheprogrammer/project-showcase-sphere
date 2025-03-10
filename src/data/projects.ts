
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  category: 'web' | 'ai' | 'mobile' | 'other';
  links: {
    demo?: string;
    github?: string;
    other?: {
      label: string;
      url: string;
    }[];
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "e-learning-platform",
    title: "E-Learning Platform",
    shortDescription: "A comprehensive online learning platform with interactive courses and progress tracking.",
    description: "Developed a full-stack e-learning platform that offers interactive courses, real-time progress tracking, and personalized learning paths. The platform features a robust authentication system, payment integration, video streaming capabilities, and an intuitive admin dashboard for course management. Built with a focus on accessibility and responsive design to ensure a seamless learning experience across all devices.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1674&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API", "WebRTC"],
    category: "web",
    links: {
      demo: "https://example.com/e-learning",
      github: "https://github.com/username/e-learning",
    },
    featured: true
  },
  {
    id: "university-club-website",
    title: "University Club Website",
    shortDescription: "A dynamic website for a university programming club with event management features.",
    description: "Created a website for our university's programming club that serves as a central hub for club activities, events, and resources. The platform includes features for event registration, resource sharing, member profiles, and blog functionality for tech articles. The responsive design ensures compatibility across devices, while the intuitive CMS allows club administrators to easily update content without technical knowledge.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1740&auto=format&fit=crop",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript", "Google Calendar API"],
    category: "web",
    links: {
      demo: "https://example.com/club",
      github: "https://github.com/username/club-website",
    },
    featured: true
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A modern e-commerce solution with product management and payment processing.",
    description: "Built a scalable e-commerce platform that features comprehensive product management, shopping cart functionality, secure payment processing, and order tracking. The platform includes an admin dashboard for inventory management, customer analytics, and order processing. Integration with various payment gateways and shipping APIs enables a seamless shopping experience, while the responsive design ensures usability across all device types.",
    image: "https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1740&auto=format&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Stripe", "Redux", "Docker"],
    category: "web",
    links: {
      demo: "https://example.com/ecommerce",
      github: "https://github.com/username/ecommerce",
    },
    featured: true
  },
  {
    id: "face-detection-ai",
    title: "Face Detection AI",
    shortDescription: "An AI-powered face detection system using computer vision and machine learning.",
    description: "Developed an advanced face detection system using computer vision techniques and deep learning. The application can identify and track faces in images and video streams, detect facial expressions, and estimate age and gender. The system is optimized for real-time processing and can be deployed in various environments. The project includes a user-friendly interface for demonstration purposes and a documented API for integration with other applications.",
    image: "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=1740&auto=format&fit=crop",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React", "Docker"],
    category: "ai",
    links: {
      demo: "https://example.com/face-detection",
      github: "https://github.com/username/face-detection",
    },
    featured: false
  },
  {
    id: "diabetes-detection",
    title: "Diabetes Detection System",
    shortDescription: "Machine learning model for early diabetes detection based on medical parameters.",
    description: "Developed a machine learning model for early diabetes detection using patient medical data. The system analyzes various health parameters to predict the risk of diabetes with high accuracy. The project includes data preprocessing, model training and evaluation, and a web interface for healthcare professionals to input patient data and receive risk assessments. The solution aims to assist in early intervention and prevention of diabetes-related complications.",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1738&auto=format&fit=crop",
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "React", "Chart.js"],
    category: "ai",
    links: {
      github: "https://github.com/username/diabetes-detection",
      other: [
        {
          label: "Research Paper",
          url: "https://example.com/research-paper"
        }
      ]
    },
    featured: false
  },
  {
    id: "event-management-website",
    title: "Event Management Website",
    shortDescription: "A comprehensive event management platform for organizing and tracking events.",
    description: "Designed and implemented a comprehensive event management platform that facilitates event creation, registration, ticketing, and attendee management. The system includes features for creating event pages, managing ticket sales, sending automated notifications, and generating attendance reports. A mobile-responsive interface ensures that organizers can manage events on the go, while integration with popular calendar services allows attendees to easily add events to their personal schedules.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1740&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Google Maps API"],
    category: "web",
    links: {
      demo: "https://example.com/event-management",
      github: "https://github.com/username/event-management",
    },
    featured: false
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};
