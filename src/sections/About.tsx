import React from 'react';
import Img4 from '../Asessts/IMG4.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-teal-600 dark:bg-teal-400 rounded-lg transform rotate-3"></div>
              <img 
                src={Img4}
                alt="Bihandu working on code" 
                className="relative rounded-lg shadow-lg transform -rotate-2 z-10"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Computer Science Undergraduate
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I am a dedicated undergraduate student at Informatics Institute of Technology (IIT), 
                currently pursuing a degree in Computer Science. With a passion for technology and innovation, 
                I aim to develop advanced solutions in software development and engineering.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I have a keen interest in web and mobile app development, digital privacy, and data ownership solutions. 
                My academic journey is complemented by hands-on projects where I strive to apply my knowledge in 
                solving real-world problems.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I am open to internships and collaborative opportunities that allow me to enhance my skills 
                and grow professionally in the tech industry. I believe in continuous learning and adapting 
                to new technologies to stay relevant in this ever-evolving field.
              </p>
              
              <div className="pt-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Personal Interests
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Photography', 'Videography', 'Cricket', 'Web Development', 'Mobile App Development', 'Problem Solving'].map((interest, index) => (
                    <span key={index} className="px-3 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;