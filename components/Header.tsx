'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'BLOG', href: '#blog' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (isOpen) setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isOpen) setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 border-b border-black transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="flex justify-between items-center h-20">
          
          <div 
            className="flex flex-col justify-center cursor-pointer group"
            onClick={scrollToTop}
          >
            {/* Added font-heading for branding */}
            <h1 className="text-xl font-bold font-heading text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">
              Aadhaar Goel
            </h1>
            <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-0.5">
              Full Stack Developer &amp; Competitive Programmer
            </p>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-xs font-medium tracking-wider text-gray-800
                 transition-colors duration-200 hover:text-black
                 after:absolute after:left-0 after:top-1/2
                 after:h-[1.5px] after:w-0 after:bg-current
                 after:transition-[width] after:duration-200 after:ease-out
                 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-black focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* FIX: Increased z-index to z-[60] to ensure it covers the header content */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden z-60 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Sidebar */}
      {/* FIX: Changed h-full to h-screen to fix height issue. Increased z-index to z-[70]. */}
      <div
        className={`fixed top-0 left-0 h-screen w-[75%] max-w-xs bg-white shadow-xl z-70 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          <div className="flex justify-between items-center p-5 border-b border-gray-100 shrink-0">
            <div onClick={scrollToTop} className="cursor-pointer">
              <h2 className="text-lg font-bold font-heading text-gray-900">Aadhaar Goel</h2>
            </div>
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-red-600 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={2} />
            </button>
          </div>

          <nav className="flex-1 px-6 flex flex-col justify-center overflow-hidden">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-base font-medium text-gray-800 tracking-wide 
                               hover:text-black hover:line-through decoration-2 decoration-gray-800"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-5 border-t border-gray-100 bg-gray-50 shrink-0">
            <p className="text-[10px] text-gray-500 text-center">
              © {new Date().getFullYear()} Aadhaar Goel
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;