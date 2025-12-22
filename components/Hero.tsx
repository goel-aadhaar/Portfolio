'use client';

import React, { useState } from 'react';
import { MapPin, Mail, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import { SiCodeforces , SiLeetcode , SiCodechef } from "@icons-pack/react-simple-icons";

const Hero = () => {
  const [activeButtons, setActiveButtons] = useState<string[]>([]);

  const toggleButtonState = (id: string) => {
    setActiveButtons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isButtonActive = (id: string) => activeButtons.includes(id);

  const getActionBtnClass = (id: string) => `
    w-full flex justify-between items-center px-5 py-3 border border-gray-900 
    transition-all duration-300 ease-in-out cursor-pointer group text-xs sm:text-sm font-medium
    ${isButtonActive(id) ? 'bg-gray-900 text-white' : 'bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white'}
  `;

  const getSocialBtnClass = (id: string) => `
    flex items-center justify-center w-10 h-10 border border-gray-900 rounded-full
    transition-all duration-300 ease-in-out cursor-pointer
    ${isButtonActive(id) ? 'bg-gray-900 text-white' : 'bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white'}
  `;

  return (
    <section className="min-h-[70vh] bg-gray-50 w-screen relative left-1/2 -translate-x-1/2 flex items-center py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">A</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Aadhaar Goel
              </h1>
              <h2 className="text-lg sm:text-xl text-gray-600 font-medium">
                Full Stack Developer & Competitive Programmer
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 text-gray-500 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>Bengaluru, Karnataka</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail size={14} />
                <span>goel.aadhaar@outlook.com</span>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-base text-gray-600 leading-relaxed">
                I craft digital experiences with clean code and thoughtful design. 
                Passionate about building scalable web applications that solve real 
                problems and delight users.
              </p>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                Available for freelance projects
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <button
                onClick={() => toggleButtonState('email')}
                className={getActionBtnClass('email')}
              >
                <span>Send Email</span>
                <Mail size={16} strokeWidth={1.5} />
              </button>

              <button
                onClick={() => toggleButtonState('cv')}
                className={getActionBtnClass('cv')}
              >
                <span>Download CV</span>
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex gap-3">
              {['github', 'linkedin', 'twitter' , 'codeforces' , 'leetcode' , 'codechef'].map((social) => (
                <button
                  key={social}
                  onClick={() => toggleButtonState(social)}
                  className={getSocialBtnClass(social)}
                  aria-label={social}
                >
                  {social === 'github' && <Github size={18} strokeWidth={1.5} />}
                  {social === 'linkedin' && <Linkedin size={18} strokeWidth={1.5} />}
                  {social === 'twitter' && <Twitter size={18} strokeWidth={1.5} />}
                  {social === 'codeforces' && <SiCodeforces size={18} strokeWidth={1.5} />}
                  {social === 'leetcode' && <SiLeetcode size={18} strokeWidth={1.5} />}
                  {social === 'codechef' && <SiCodechef size={18} strokeWidth={1.5} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;