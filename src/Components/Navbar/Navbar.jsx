import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActive = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close the mobile menu when a section is clicked
  };

  return (
    <nav className="bg-white fixed w-full z-10 top-0 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href='/'>
            <img className="max-h-20 py-2 w-32" src={logo} alt="Logo" />
          </a>
          <div className="hidden lg:flex space-x-5 items-center">
            {['hero', 'services', 'about', 'contact'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                spy={true} // Enables active class tracking
                onSetActive={handleSetActive} // Auto updates activeSection when scrolling
                className={`py-2 px-3 ${
                  activeSection === section
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-700 hover:bg-gray-200'
                } rounded-xl cursor-pointer`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-700 focus:outline-none"
            >
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
        <div
          className={`lg:hidden fixed top-0 left-0 w-3/4 h-full bg-white shadow-md transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300`}
        >
          <div className="flex flex-col items-center py-4">
            {['hero', 'services', 'about', 'contact'].map((section) => (
              <Link
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
                } rounded-xl`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
