'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out!');
  };

  return (
    <section id="contact" className="bg-gray-50 w-screen relative left-1/2 -translate-x-1/2 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        
        <div className="border-t border-gray-200 pt-8 mb-12">
          <span className="text-xl font-medium text-gray-500 uppercase tracking-widest">
            (06) Get In Touch
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Let's work together
            </h2>
            <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-lg">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <a 
              href="mailto:goel.aadhaar@outlook.com" 
              className="inline-block text-xl sm:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors mb-8"
            >
              goel.aadhaar@outlook.com
            </a>

            <div className="flex gap-3">
              {[
                { icon: <Github size={18} />, label: 'GitHub', href: '#' },
                { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
                { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
                { icon: <Mail size={18} />, label: 'Email', href: 'mailto:alex.johnson@email.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-900 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3 py-2.5 bg-white border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors text-sm text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-900 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2.5 bg-white border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors text-sm text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-900 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full px-3 py-2.5 bg-white border border-gray-200 focus:border-gray-900 focus:ring-0 outline-none transition-colors text-sm text-gray-900 placeholder-gray-400 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-black text-white px-6 py-3 font-bold text-sm hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;