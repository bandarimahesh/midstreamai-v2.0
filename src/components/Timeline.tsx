import React from 'react';
import { History, Cpu, Network, Brain } from 'lucide-react';

export const Timeline: React.FC = () => {
  const milestones = [
    {
      icon: <History className="h-8 w-8 text-primary-600" />,
      year: "1970s-1980s",
      title: "SCADA Systems",
      description: "Remote monitoring and automation improved efficiency and response times."
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary-600" />,
      year: "1990s-2000s",
      title: "Digital Transformation",
      description: "Digital sensors, PLCs, and early leak detection enhanced real-time data collection and automation."
    },
    {
      icon: <Network className="h-8 w-8 text-primary-600" />,
      year: "2010s",
      title: "IoT & Cloud Integration",
      description: "IoT, cloud computing, and big data enabled predictive diagnostics and remote asset management."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary-600" />,
      year: "2020s & Beyond",
      title: "AI & Hybrid Models",
      description: "AI, ML, and digital twins drive predictive maintenance, advanced leak detection, and autonomous control for safer, smarter pipelines."
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Evolution of Pipeline Operations
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200" />

          <div className="space-y-6 sm:space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600" />

                <div className="flex-1 md:w-1/2">
                  <div className={`bg-gradient-to-br from-primary-50 to-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                  }`}>
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        {milestone.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-primary-600">
                          {milestone.year}
                        </h3>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                          {milestone.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};