import React from 'react';
import { Code, Database, Globe, Server, Layout, Smartphone } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: "Programming Languages",
      icon: <Code size={20} />,
      skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "Web Development",
      icon: <Globe size={20} />,
      skills: ["React JS", "Next JS", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"]
    },
    {
      title: "Backend Development",
      icon: <Server size={20} />,
      skills: ["SpringBoot", "Node.js", "Express.js", "REST API"]
    },
    {
      title: "Database Management",
      icon: <Database size={20} />,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={20} />,
      skills: ["React Native"]
    },
    {
      title: "UI/UX Design",
      icon: <Layout size={20} />,
      skills: ["Responsive Design", "User Interface", "User Experience"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and skills I've acquired through my education and projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-teal-50 dark:bg-teal-900/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Other Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Soft Skills</h4>
              <ul className="space-y-2">
                {["Leadership", "Teamwork", "Critical Thinking", "Problem Solving", "Communication", "Time Management"].map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Special Skills</h4>
              <ul className="space-y-2">
                {["Professional Photography", "Videography", "Video Editing", "Image Editing", "Content Creation"].map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;