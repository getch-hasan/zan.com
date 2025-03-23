import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Auto-scroll when navigating with a section hash
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.substring(1); // Remove #
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
      setActiveSection(section);
    }
  }, [location]); // Run when location changes

  const handleSetActive = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close the mobile menu
  };

  return (
    <nav className="bg-white fixed w-full z-10 top-0 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <RouterLink to="/">
            <img className="max-h-20 py-2 w-32" src={logo} alt="Logo" />
          </RouterLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-5 items-center">
            {['home', 'services', 'about', 'contact'].map((section) => (
              location.pathname === '/' ? (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={handleSetActive}
                  className={`py-2 px-3 ${
                    activeSection === section
                      ? 'bg-blue-500 text-white'
                      : 'text-blue-700 hover:bg-gray-200'
                  } rounded-xl cursor-pointer`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={section}
                  to={`/#${section}`} // Redirect with hash
                  className="py-2 px-3 text-blue-700 hover:bg-gray-200 rounded-xl"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </RouterLink>
              )
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
            <div className="flex flex-col items-center py-4">
              {['home', 'services', 'about', 'contact'].map((section) => (
                location.pathname === '/' ? (
                  <ScrollLink
                    key={section}
                    to={section}
                    smooth={true}
                    duration={500}
                    spy={true}
                    onClick={() => setIsOpen(false)}
                    className={`py-2 px-3 ${
                      activeSection === section
                        ? 'bg-blue-500 text-white'
                        : 'text-blue-700 hover:bg-gray-200'
                    } rounded-xl cursor-pointer`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={section}
                    to={`/#${section}`}
                    onClick={() => setIsOpen(false)}
                    className="py-2 px-3 text-blue-700 hover:bg-gray-200 rounded-xl"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </RouterLink>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
