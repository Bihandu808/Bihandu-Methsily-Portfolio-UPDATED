import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Projects', to: 'projects' },
    { name: 'Photography & Videography', to: 'photography-videography' }, // Updated to match the section ID
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? `${theme === 'dark' ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-lg'}` 
          : `${theme === 'dark' ? 'bg-transparent' : 'bg-transparent'}`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            {isHomePage ? (
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Bihandu Wijesiri
              </Link>
            ) : (
              <RouterLink to="/">Bihandu Wijesiri</RouterLink>
            )}
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {isHomePage ? (
                <>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="px-3 py-2 rounded-md text-sm font-medium hover:text-teal-500 cursor-pointer transition-colors"
                      activeClass="text-teal-500"
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              ) : (
                <RouterLink to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:text-teal-500 transition-colors">
                  Back to Home
                </RouterLink>
              )}
              
             
              <a
                href="/Wijesiri_Bihandu_Resume.pdf"
                download
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium bg-teal-600 text-white hover:bg-teal-700 transition-colors"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">           
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-600 dark:text-teal-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            {isHomePage ? (
              <>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-teal-500 transition-colors"
                    activeClass="text-teal-500"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </>
            ) : (
              <RouterLink 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-teal-500 transition-colors"
                onClick={closeMenu}
              >
                Back to Home
              </RouterLink>
            )}
            
            <a
              href="/Wijesiri_Bihandu_Resume.pdf" // Fixed the mobile resume link path
              download
              className="flex items-center gap-1 px-3 py-2 rounded-md text-base font-medium bg-teal-600 text-white hover:bg-teal-700 transition-colors"
              onClick={closeMenu}
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;