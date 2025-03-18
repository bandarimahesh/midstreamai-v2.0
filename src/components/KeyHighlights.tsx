import React from 'react';
import { AlertCircle, Cpu, FileCheck } from 'lucide-react';

export const KeyHighlights: React.FC = () => {
  const highlights = [
    {
      icon: <AlertCircle className="h-10 w-10 text-primary-600" />,
      title: "Leak Detection & Real-Time Monitoring",
      description: "Continuously tracks pipeline conditions to detect leaks, anomalies, and potential failures before they escalate."
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary-600" />,
      title: "Physics-Based & Hybrid Models",
      description: "Combines physics-based models with AI to provide accurate flow, pressure, and operational state."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-primary-600" />,
      title: "Regulatory Compliance & Reporting",
      description: "Ensures adherence to safety and environmental regulations, including leak detection requirements, with automated compliance tracking and reporting."
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Key Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-2 bg-primary-100 rounded-xl">
                  {highlight.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                {highlight.title}
              </h3>
              <p className="text-lg text-gray-600 text-center">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};