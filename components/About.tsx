import React from 'react';
import { Code2, Braces , Brain } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Code2 size={20} />,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern frameworks and best practices.'
    },
    {
      icon: <Braces size={20} />,
      title: 'Competitive Programming',
      description: 'Practicing data structures and algorithms through timed problem-solving and competitive contests.'
    },
    {
      icon: <Brain size={20} />,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Exploring AI/ML concepts including supervised learning, neural networks, and data-driven problem solving.'
    }
  ];

  return (
    <section id="about" className="bg-white w-screen relative left-1/2 -translate-x-1/2 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        
        <div className="border-t border-gray-200 pt-8 mb-12">
          <span className="text-xl font-medium text-gray-500 uppercase tracking-widest">
            (01) About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Background
            </h3>
            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                I’m a software developer with strong foundations in 
                Data Structures & Algorithms (C++), backend engineering, 
                and full-stack development. I’m currently pursuing a 
                B.Sc. (Hons) in Data Science & Artificial Intelligence 
                from IIT Guwahati, 
                where I focus on building solid computer science fundamentals.
              </p>
              <p>
                I enjoy developing scalable, real-world applications. 
                I’ve built a full-stack MERN e-commerce platform with secure APIs,
                 authentication, payments, email automation, and cloud deployment, 
                and I prioritize writing clean, efficient, and reliable code.
              </p>
              <p>
                I’m also a Codeforces Specialist, reflecting strong problem-solving 
                and algorithmic thinking. I’m seeking Software Developer / Backend / Full-Stack internship opportunities 
                where I can contribute to impactful projects and grow as an engineer.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What I Do
            </h3>
            
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="mt-1 p-1.5 bg-gray-50 rounded-lg text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;