import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Copy, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const email = 'bihandumethsilu55@gmail.com';
  const phone = '+94750845396';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const openGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };
  
  return (
    <footer className="py-8 border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bihandu Wijesiri</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Computer Science undergraduate passionate about creating innovative solutions.
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
              <MapPin size={18} className="mr-2" />
              <span>Boralesgamuwa, Western Province, Sri Lanka</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/Bihandu808" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bihandu-wijesiri-37336532b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                <Linkedin size={24} />
              </a>
              
              {/* Enhanced Email Icon with Options - Fixed positioning */}
              <div className="relative group">
                <button
                  onClick={handleEmailClick}
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  title="Send Email"
                >
                  <Mail size={24} />
                </button>
                
                {/* Additional Options - Fixed positioning to avoid overlap */}
                <div className="absolute bottom-full mb-1 left-0 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-2 flex space-x-2 pointer-events-none group-hover:pointer-events-auto min-w-max z-[60]">
                 
                  <button
                    onClick={copyEmail}
                    className="flex items-center space-x-1 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded whitespace-nowrap transition-colors"
                    title="Copy Email"
                  >
                    <Copy size={14} />
                    <span>Copy</span>
                  </button>
                  <button
                    onClick={openGmail}
                    className="flex items-center space-x-1 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded whitespace-nowrap transition-colors"
                    title="Open in Gmail"
                  >
                    <ExternalLink size={14} />
                    <span>Gmail</span>
                  </button>
                  
                  {/* Bridge element to prevent hover loss */}
                  <div className="absolute top-full left-0 right-0 h-1 bg-transparent"></div>
                </div>
                
                {/* Copy Success Message */}
                {copied && (
                  <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-3 py-2 rounded text-sm whitespace-nowrap z-[70] shadow-lg">
                    Email copied!
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Email Text - Fixed positioning */}
            <div className="mb-4">
              <span className="text-gray-600 dark:text-gray-400">Email: </span>
              <span className="relative inline-block group">
                <a 
                  href={`mailto:${email}`} 
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  {email}
                </a>
                
                {/* Hover Options for Email Text - Better positioned and contained */}
                <div className="absolute left-0 bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-2 flex space-x-2 pointer-events-none group-hover:pointer-events-auto min-w-max z-[60]">
                  
                  <button
                    onClick={copyEmail}
                    className="flex items-center space-x-1 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded whitespace-nowrap transition-colors"
                    title="Copy Email"
                  >
                    <Copy size={14} />
                    <span>Copy</span>
                  </button>
                  <button
                    onClick={openGmail}
                    className="flex items-center space-x-1 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded whitespace-nowrap transition-colors"
                    title="Open in Gmail"
                  >
                    <ExternalLink size={14} />
                    <span>Gmail</span>
                  </button>
                  
                  {/* Bridge element to prevent hover loss */}
                  <div className="absolute top-full left-0 right-0 h-1 bg-transparent"></div>
                </div>
              </span>
            </div>

            {/* Phone Number - Separate container */}
            <div className="text-gray-600 dark:text-gray-400">
              <span>Phone: </span>
              <a href={`tel:${phone}`} className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                {phone}
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Bihandu Wijesiri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;