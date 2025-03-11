import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from 'emailjs-com';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration
    const serviceID = 'service_a3gagou'; // Your EmailJS service ID
    const templateID = 'template_portfolio_contact'; // The template ID you created with {{name}}, {{email}}, {{message}} placeholders
    const userID = 'YOUR_USER_ID'; // Replace with your EmailJS user ID
    
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setIsSubmitting(false);
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setIsSubmitting(false);
        toast.error("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" ref={sectionRef} className="section bg-background dark:bg-gray-950">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
            >
              <span className="text-sm md:text-base font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10 mb-4 inline-block">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's work together
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                I'm currently available for freelance work, collaborations, 
                and job opportunities. Feel free to reach out if you have a project 
                in mind or just want to connect!
              </p>

              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:oussamazouini780@gmail.com"
                  className="flex items-center text-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span>oussamazouini780@gmail.com</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-foreground/80 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5 mr-3" />
                  <span>github.com/username</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-foreground/80 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-3" />
                  <span>linkedin.com/in/username</span>
                </a>
              </div>
            </div>

            <div
              className={`glass-card p-8 rounded-xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-lg" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Sending
                      <span className="ml-2 animate-pulse">...</span>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
