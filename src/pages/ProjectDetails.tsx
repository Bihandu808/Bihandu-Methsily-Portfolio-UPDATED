import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Github, ExternalLink, Code, Database, Monitor, Cpu, Globe, Brain, Zap, Music, Plane, Sun } from 'lucide-react';

interface ProjectDetailsProps {
  id: string;
  title: string;
  description: string;
  period: string;
  technologies: string[];
  features: string[];
  githubLink?: string;
  gradient: string;
  icon: React.ReactNode;
  category: string;
  overview: string;
  challenges: string[];
  impact: string;
}

const projectsData: ProjectDetailsProps[] = [
  {
    id: "mood-beats",
    title: "MOOD BEATS",
    description: "An innovative application designed to integrate music generation, Facial Recognition and Voice Recognition into a unified system.",
    overview: "MOOD BEATS represents a cutting-edge approach to personalized music experiences, combining artificial intelligence with user interaction to create dynamic, mood-responsive audio content. The application leverages machine learning algorithms to analyze user emotions through facial and voice recognition, then generates customized music that matches their current state.",
    period: "Ongoing",
    gradient: "from-purple-600 via-pink-600 to-blue-600",
    icon: <Music className="w-12 h-12" />,
    category: "AI & Machine Learning",
    technologies: ["React Native", "Python", "MongoDB"],
    features: [
      "Advanced machine learning algorithms for emotion detection and music generation",
      "Real-time facial recognition system for mood analysis",
      "Voice recognition capabilities for enhanced user interaction",
      "Personalized music generation based on detected emotional states",
      "Automated cover generation system",
      "Cross-platform mobile application with intuitive user interface"
    ],
    challenges: [
      "Integrating multiple AI systems (facial recognition, voice processing, music generation) into a cohesive application",
      "Optimizing machine learning models for real-time performance on mobile devices",
      "Creating seamless frontend-backend communication for live data processing",
      "Ensuring accurate emotion detection across diverse user demographics"
    ],
    impact: "Pioneering a new approach to personalized entertainment by bridging the gap between human emotion and digital music creation.",
    githubLink: "https://github.com/BinaryVortex/SDGP-Project-MOODBEATS/branches/active"
  },
  {
    id: "plane-management",
    title: "Plane Management System",
    description: "A comprehensive console-based application built with Java 21 for efficient airline seat reservation management.",
    overview: "The Plane Management System is an enterprise-grade solution designed to streamline airline operations through efficient seat reservation management. Built with modern Java practices, the system provides robust functionality for managing multiple aircraft configurations while maintaining data integrity and optimal performance.",
    period: "February 2024 - April 2024",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    icon: <Plane className="w-12 h-12" />,
    category: "Enterprise Software",
    technologies: ["JAVA", "Object Oriented Design (OOD)", "MySQL"],
    features: [
      "Dynamic seat availability visualization with real-time updates",
      "Comprehensive booking management system with validation",
      "Flexible cancellation system with automatic seat reallocation",
      "Multi-aircraft configuration support for different plane types",
      "Robust error handling and data validation",
      "Performance-optimized database operations"
    ],
    challenges: [
      "Designing a scalable architecture to handle multiple aircraft configurations simultaneously",
      "Implementing efficient algorithms for seat allocation and conflict resolution",
      "Ensuring data consistency across concurrent booking operations",
      "Creating an intuitive console interface for complex reservation workflows"
    ],
    impact: "Demonstrated enterprise software development capabilities while creating a foundation for scalable airline reservation systems.",
    githubLink: "https://github.com/Bihandu808"
  },
  {
    id: "pure-energy",
    title: "Pure Energy",
    description: "A comprehensive e-commerce platform specializing in solar energy products and renewable energy solutions.",
    overview: "Pure Energy serves as a complete digital solution for the renewable energy market, combining e-commerce functionality with educational content to help customers make informed decisions about solar energy investments. The platform bridges the gap between complex energy solutions and consumer accessibility.",
    period: "February 2023 - March 2023",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    icon: <Sun className="w-12 h-12" />,
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript" ],
    features: [
      "Comprehensive product catalog with detailed solar system specifications",
      "Educational content section explaining solar energy benefits and installation",
      "Responsive design optimized for all device types",
      "Interactive quote request system for custom installations",
      "SEO-optimized content for improved search engine visibility",
      "Contact management system for customer inquiries"
    ],
    challenges: [
      "Creating an intuitive user experience for complex technical products",
      "Balancing detailed product information with clean, accessible design",
      "Implementing responsive design patterns for optimal mobile experience",
      "Developing educational content that simplifies complex energy concepts"
    ],
    impact: "Successfully created a professional web presence that combines e-commerce functionality with educational value in the growing renewable energy sector.",
    githubLink: "https://github.com/Bihandu808"
  }
];

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  if (techLower.includes('react')) return <Monitor className="w-4 h-4" />;
  if (techLower.includes('python')) return <Code className="w-4 h-4" />;
  if (techLower.includes('java')) return <Cpu className="w-4 h-4" />;
  if (techLower.includes('mongodb') || techLower.includes('mysql')) return <Database className="w-4 h-4" />;
  if (techLower.includes('html') || techLower.includes('css')) return <Globe className="w-4 h-4" />;
  if (techLower.includes('machine learning') || techLower.includes('object oriented')) return <Brain className="w-4 h-4" />;
  return <Zap className="w-4 h-4" />;
};

const ProjectDetails: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectIdFromUrl = urlParams.get('project') || window.location.pathname.split('/').pop() || 'mood-beats';
  
  const [project, setProject] = useState<ProjectDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundProject = projectsData.find(p => p.id === projectIdFromUrl) || null;
    setProject(foundProject);
    setTimeout(() => setLoading(false), 300);
  }, [projectIdFromUrl]);

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 dark:border-blue-400"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">The requested project could not be found.</p>
        <button 
          onClick={handleBackToHome}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Return to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        
      </nav>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-12 pt-20">
        {/* Project Header */}
        <header className="mb-12">
          <div className="flex items-center mb-4">
            <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mr-6`}>
              {project.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar size={18} className="mr-2" />
                <span className="mr-4">{project.period}</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-200 leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Challenges */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                    <p className="text-gray-700 dark:text-gray-100 leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Impact</h2>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-100 leading-relaxed">{project.impact}</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies</h3>
              <div className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="mr-3 text-blue-600 dark:text-blue-400">
                      {getTechIcon(tech)}
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-100">{tech}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Actions */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    View Source Code
                  </a>
                )}
                <button 
                  onClick={handleBackToHome}
                  className="flex items-center justify-center w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ExternalLink size={20} className="mr-2" />
                  View All Projects
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;