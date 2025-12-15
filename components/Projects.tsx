import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Urban Sole',
      type: 'Shoe E-Commerce Platform • 2025',
      description: 'A production-ready shoe eCommerce platform with modern UI, secure payments, authentication, real-time inventory, admin dashboard, and scalable backend.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'TypeScript', 'Next.js', 'MongoDB', 'Stripe'],
      links: { demo: 'https://shoe-ecommerce-mu.vercel.app/', code: 'https://github.com/goel-aadhaar/shoe-ecommerce' }
    },
    {
      title: 'Personal Portfolio & Blog Website',
      type: 'Portfolio • 2025',
      description: 'A personal portfolio and blog platform showcasing projects, technical writing, and ideas with clean design, fast performance, and scalable architecture.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Next.js'],
      links: { code: '#' }
    },
    {
      title: 'Space Invaders Game',
      type: 'Game • 2025',
      description: 'A classic Space Invaders arcade game built with smooth controls, responsive gameplay, retro visuals, and engaging score-based progression.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Canvas API', 'JavaScript', 'HTML5'],
      links: { demo: '#', code: '#' }
    },
    {
      title: 'Bank Customer Segmentation',
      type: 'Machine Learning • 2025',
      description: 'A bank customer segmentation project using AI/ML clustering to identify user groups and deliver targeted, data-driven promotional offers.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800',
      tech: ['Unsupervised Learning', 'Exploratory Data Analysis', 'Numpy', 'Pandas', 'Matplotlib', 'Scikit-Learn'],
      links: { code: '#' }
    }
  ];

  return (
    <section id="projects" className="bg-white w-screen relative left-1/2 -translate-x-1/2 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        
        <div className="border-t border-gray-200 pt-8 mb-12">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
            (03) Featured Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col h-full">
              
              <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-500">
                      {project.type}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4 flex-1 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 bg-gray-50 text-[10px] font-medium text-gray-600 rounded border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      className="flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-blue-600 transition-colors group/link"
                    >
                      Live Demo
                      <ArrowUpRight size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                  {project.links.code && (
                    <a 
                      href={project.links.code}
                      className="flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-blue-600 transition-colors group/link"
                    >
                      View Code
                      <Github size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;