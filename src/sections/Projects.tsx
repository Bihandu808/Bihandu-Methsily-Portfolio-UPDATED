import React, { useState } from 'react';
import { ExternalLink, Code, Calendar, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Img5 from '../Asessts/IMG5.png';
import Img2 from '../Asessts/IMG2.png';
import Img3 from '../Asessts/IMG3.png';
// Add a sample image for the photography preview
import SamplePhoto from '../Asessts/sample-photo.jpg'; // Add your sample photo here

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  period: string;
  image: string;
  technologies: string[];
  features?: string[];
  githubLink?: string;
}

const projectsData: ProjectProps[] = [
  {
    id: "mood-beats",
    title: "MOOD BEATS",
    description: "An innovative application designed to integrate music generation, Facial Recognition and Voice Recognition into a unified system.",
    period: "Ongoing",
    image: Img5,
    technologies: ["React Native", "Python", "MongoDB"],
    features: [
      "Leveraging advanced machine learning algorithms and user-friendly interface",
      "Generating personalized music experiences including song generation and automated cover generation",
      "Created and Designed Home page, Navigation bar, Log-in page, User profile using React Native",
      "Supported to connect Frontend and Backend with team members"
    ],
    githubLink: "https://github.com/BinaryVortex/SDGP-Project-MOODBEATS/branches/active"
  },
  {
    id: "plane-management",
    title: "Plane Management System",
    description: "A console-based application using Java 21 for managing plane seat reservations.",
    period: "February 2024 - April 2024",
    image: Img2,
    technologies: ["JAVA", "Object Oriented Design (OOD)", "MySQL"],
    features: [
      "Implemented features to view seat availability, book and cancel seats, and display seating layouts dynamically",
      "Designed to handle multiple flight seating arrangements, enhancing reservation flexibility",
      "Optimized backend for efficient data management and seamless seat reservation processes",
      "Created a responsive user interface to improve the overall user experience"
    ],
    githubLink: "https://github.com/Bihandu808"
  },
  {
    id: "pure-energy",
    title: "Pure Energy",
    description: "Natural Energy generating products website. That user can use it to buy products, services and have a knowledge about Solar Energy System.",
    period: "February 2023 - March 2023",
    image: Img3,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Implemented features to buy products and small description about Solar Energy System",
      "Created a responsive user interface to improve the overall user experience",
      "Designed product catalog with detailed information about solar energy products",
      "Integrated contact form for inquiries and quote requests"
    ],
    githubLink: "https://github.com/Bihandu808"
  }
];

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 w-full">
            <div className="flex items-center text-white/80 text-sm mb-2">
              <Calendar size={14} className="mr-1" />
              <span>{project.period}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/project/${project.id}`} 
            className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            View Details
            <ExternalLink size={16} className="ml-1" />
          </Link>
          
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              title="View on GitHub"
            >
              <Github size={18} className="mr-1" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Photography: React.FC = () => {
  // Updated to include a sample image instead of undefined
  const [imagePreview] = useState<string | undefined>(SamplePhoto);

  return (
    <section id="photography-videography" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-600 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Photography & Videography
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Capturing moments and telling stories through the lens. I specialize in creating 
            compelling visual narratives that bring ideas to life through both photography and videography.
          </p>
        </div>

        {/* Main Content Layout - Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Preview */}
          <div className="relative group">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {imagePreview ? (
                <img 
                  src={imagePreview} 
                  alt="Featured photography work"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="mx-auto mb-4 text-white/80" width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/>
                    </svg>
                    <p className="text-lg font-medium">Featured Work</p>
                  </div>
                </div>
              )}
              {/* Color overlay - always visible */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/30 via-teal-500/20 to-teal-800/40 flex items-center justify-center">
                <div className="relative">
  {/* Background gradient overlay */}
  <div className="absolute inset-0"></div>
  
  {/* Animated color effects */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>
  
  <div className="relative z-10 text-center text-white">
    <svg className="mx-auto mb-8 text-white drop-shadow-lg" width="80" height="80" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.35-3-3-3z"/>
    </svg>
    <p className="text-8xl md:text-9xl font-black tracking-widest drop-shadow-lg text-white/70">NORIZA</p>
  </div>
</div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-teal-500 rounded-2xl rotate-12 shadow-lg transition-all duration-300 group-hover:rotate-[18deg]"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-400 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110"></div>
            </div>
          </div>
          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Creative Vision</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I bring a unique perspective to every project, combining technical expertise with 
                artistic vision to create stunning visual content. From portrait photography to 
                dynamic video productions, I focus on capturing authentic moments and emotions.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300">
                <svg className="text-teal-400 mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/>
                </svg>
                <h4 className="font-semibold mb-2">Photography</h4>
                <p className="text-gray-400 text-sm">
                  Portrait, event, and commercial photography with attention to detail and composition.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300">
                <svg className="text-teal-400 mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6V9h3V6h2v3h3v4z"/>
                </svg>
                <h4 className="font-semibold mb-2">Videography</h4>
                <p className="text-gray-400 text-sm">
                  Professional video production including editing, color grading, and post-production.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-teal-600/20 to-teal-800/20 backdrop-blur-sm p-6 rounded-xl border border-teal-500/30">
              <div className="flex items-center mb-4">
                <svg className="text-teal-400 mr-3" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
                <h4 className="text-lg font-semibold">View My Work</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Check out my photography and videography website (NORIZA) to see my latest projects 
                and creative work in action.
              </p>
              
              <a
                href="https://noriza-productions.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
               Visit My Website
                <svg className="ml-2" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">100+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">3+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CombinedProjectsPhotography: React.FC = () => {
  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills and experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <Photography />
    </div>
  );
};

export default CombinedProjectsPhotography;