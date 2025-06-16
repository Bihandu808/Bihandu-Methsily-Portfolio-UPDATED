import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Mail, MapPin, Phone, Copy, ExternalLink, PhoneCall } from 'lucide-react';
import ReactTypingEffect from 'react-typing-effect';
import Image from 'next/image';
import Img1 from '../Asessts/IMG1.png';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const email = 'bihandumethsilu55@gmail.com';
  const phone = '+94750845396';
  const formattedPhone = '+94 75 084 5396'; // More readable format for display

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

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      // Fallbox for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = phone;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  const openGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const openViber = () => {
    window.open(`viber://chat?number=${phone.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 to-white/10 dark:from-gray-900/30 dark:to-gray-900/10 z-0"></div>
      
      <div className="container mx-auto max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                  Hi, I'm <span className="text-teal-600 dark:text-teal-400">Bihandu Wijesiri</span>
                </h1>
                <div className="h-12">
                  <ReactTypingEffect
                    text={["Computer Science Undergraduate", "Web Developer", "Software Engineer"]}
                    speed={100}
                    eraseSpeed={100}
                    typingDelay={500}
                    eraseDelay={2000}
                    className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Passionate about creating innovative solutions in software development and engineering, 
                with a keen interest in web and mobile app development, digital privacy, and data ownership solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin size={18} className="mr-2 text-teal-600 dark:text-teal-400" />
                  <span>Boralesgamuwa, Western Province, Sri Lanka</span>
                </div>
                
                {/* Enhanced Email with Options */}
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail size={18} className="mr-2 text-teal-600 dark:text-teal-400" />
                  <div className="relative group">
                    <a 
                      href={`mailto:${email}`} 
                      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {email}
                    </a>
                    
                    {/* Hover Options for Email - Fixed positioning and interaction */}
                    <div className="absolute left-0 bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-2 flex space-x-2 z-[60] min-w-max pointer-events-none group-hover:pointer-events-auto">
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
                      <div className="absolute left-0 bottom-full mb-1 bg-teal-500 text-white px-3 py-2 rounded text-sm whitespace-nowrap z-[70] shadow-lg">
                        Email copied!
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Enhanced Phone Number with Options */}
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Phone size={18} className="mr-2 text-teal-600 dark:text-teal-400" />
                  <div className="relative group">
                    <a 
                      href={`tel:${phone}`} 
                      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {formattedPhone}
                    </a>
                    
                    {/* Hover Options for Phone - Fixed positioning and interaction */}
                    <div className="absolute left-0 top-full mt-1 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-2 flex space-x-2 z-[60] min-w-max pointer-events-none group-hover:pointer-events-auto">
                      <button
                        onClick={() => window.location.href = `tel:${phone}`}
                        className="flex items-center space-x-1 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded whitespace-nowrap transition-colors"
                        title="Call"
                      >
                        <PhoneCall size={14} />
                        <span>Call</span>
                      </button>
                      <button
                        onClick={copyPhone}
                        className="flex items-center space-x-1 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded whitespace-nowrap transition-colors"
                        title="Copy Phone"
                      >
                        <Copy size={14} />
                        <span>Copy</span>
                      </button>
                      <button
                        onClick={openWhatsApp}
                        className="flex items-center space-x-1 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded whitespace-nowrap transition-colors"
                        title="WhatsApp"
                      >
                        <ExternalLink size={14} />
                        <span>WhatsApp</span>
                      </button>
                      
                      {/* Bridge element to prevent hover loss */}
                      <div className="absolute bottom-full left-0 right-0 h-1 bg-transparent"></div>
                    </div>
                    
                    {/* Copy Success Message */}
                    {phoneCopied && (
                      <div className="absolute left-0 top-full mt-1 bg-teal-500 text-white px-3 py-2 rounded text-sm whitespace-nowrap z-[70] shadow-lg">
                        Phone copied!
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors cursor-pointer"
                >
                  Contact Me
                </Link>
                <a
                  href="/Wijesiri_Bihandu_Resume.pdf"
                  download
                  className="px-6 py-3 border border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 rounded-md hover:bg-teal-600/10 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-teal-600 dark:border-teal-400 shadow-xl">
 <img 
  src={Img1} 
  alt="Bihandu Wijesiri" 
  className="w-full h-full object-cover"
/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer p-2 rounded-full bg-teal-600/10 text-teal-600 dark:text-teal-400"
        >
          <ChevronDown size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;