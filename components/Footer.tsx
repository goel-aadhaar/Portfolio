import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const connectLinks = [
    { name: 'GitHub', href: 'https://github.com/goel-aadhaar' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aadhaar-goel/' },
    { name: 'Twitter', href: 'https://x.com/goel_aadhaar' },
    { name: 'Email', href: 'mailto:goel.aadhaar@outlook.com' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6 w-screen relative left-1/2 -translate-x-1/2">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Aadhaar Goel
            </h3>
            <p className="text-xs text-gray-500">
              Full Stack Developer & Competitive Programmer
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © {currentYear} Aadhaar Goel. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;