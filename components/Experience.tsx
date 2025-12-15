import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Placement Coordinator Intern',
      company: 'Physics Wallah Institute Of Innovation',
      period: '04/2024 - 10/2024',
      location: 'Bengaluru, Karnataka',
      description: [
        'Managed and organized college-level events, ensuring smooth execution.',
        'Conducted research on student enhancement plans, including foreign internships and aptitude programs.',
        'Collaborated with stakeholders to improve outreach initiatives.',
      ],
      skills: ['Research & Analysis', 'Outreach & Coordination', 'Team Collaboration', 'Event Management']
    },
    {
      title: 'Freelance Tutor',
      company: 'Self-Employed',
      period: '07/2023 - 10/2023',
      location: 'Remote',
      description: [
        'Taught programming basics and mathematical concepts to school students.',
        'Designed structured lesson plans to improve student engagement.',
      ],
      skills: ['Mathematics', 'C++', 'Java', 'Problem Solving', 'Communication']
    }
  ];

  return (
    <section id="experience" className="bg-gray-50 w-screen relative left-1/2 -translate-x-1/2 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        
        <div className="border-t border-gray-200 pt-8 mb-12">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
            (02) Work Experience
          </span>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 group">
              
              <div className="lg:col-span-8">
                <div className="flex flex-col border-l-2 border-gray-200 pl-8 transition-all duration-300 group-hover:border-gray-900">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-gray-600 mb-4">
                    {exp.company}
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 leading-relaxed text-sm">
                        <span className="mr-3 mt-1.5 w-1 h-1 bg-gray-400 rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-0.5 rounded-full border border-gray-200 text-xs text-gray-600 bg-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-2 mt-1">
                <div className="flex items-center gap-2 text-gray-500 font-medium text-xs">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-medium text-xs">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;