import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';

interface EducationItemProps {
  title: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ title, institution, period, location, description }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400"></div>
        <div className="w-0.5 h-full bg-teal-600/30 dark:bg-teal-400/30"></div>
      </div>
      <div className="pb-12">
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2">{institution}</h4>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
            <Calendar size={16} className="mr-2" />
            <span>{period}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
            <BookOpen size={16} className="mr-2" />
            <span>{location}</span>
          </div>
          {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <EducationItem 
            title="BSc. (Hons.) in Computer Science"
            institution="University of Westminster"
            period="May 2023 - Present"
            location="Informatics Institute of Technology (IIT), Colombo 10"
            description="Currently pursuing undergraduate studies in Computer Science, focusing on software development, algorithms, and system design."
          />
          
          <EducationItem 
            title="Foundation Certificate in Higher Education"
            institution="Informatics Institute of Technology (IIT)"
            period="September 2022 - April 2023"
            location="Colombo 03"
            description="Completed foundational courses in mathematics, programming fundamentals, and information systems."
          />
          
          <EducationItem 
            title="General Certificate of Education (Ordinary Level)"
            institution="Mahanama College"
            period="December 2021"
            location="Colombo 03"
            description="Achieved excellent results: A grades in History, Mathematics, English Language, Drama & Theatre, Business & Account Studies, and Health & Physical Education."
          />
        </div>
      </div>
    </section>
  );
};

export default Education;