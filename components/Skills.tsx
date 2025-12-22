import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML/CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'GraphQL', 'WebSocket']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Vite', 'Linux']
    },
    {
      title: 'Design',
      skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Design Systems']
    }
  ];

  return (
    <section id="skills" className="bg-[#111111] w-screen relative left-1/2 -translate-x-1/2 py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        
        <div className="border-t border-gray-800 pt-8 mb-12">
          <span className="text-xl font-medium text-gray-400 uppercase tracking-widest">
            (04) Skills & Technologies
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-400 group">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2.5 shrink-0 group-hover:bg-white transition-colors" />
                    <span className="text-sm hover:text-white transition-colors duration-200 cursor-default">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;