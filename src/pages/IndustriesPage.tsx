import React from "react";
import { Factory, Flame, Truck } from "lucide-react";
import GoToTop from "../components/Utils/GoToTop";

export const IndustriesPage: React.FC = () => {
  document.title = "MidstreamAI | Industries";

  const industries = [
    {
      icon: <Factory className="h-16 w-16 text-primary-600" />,
      title: "Oil & Refined Products",
      description:
        "Optimize pipeline networks for efficient and safe transportation of oil and natural gas products.",
      features: [
        "Real-time flow monitoring",
        "Pressure monitoring",
        "Leak detection systems",
        "Throughput analysis",
      ],
    },
    {
      icon: <Flame className="h-16 w-16 text-primary-600" />,
      title: "Natural Gas and Liquids",
      description:
        "Enhanced control and monitoring for gas and liquid networks.",
      features: [
        "Pressure regulation",
        "Safety monitoring",
        "Demand forecasting",
        "Emergency response",
      ],
    },
    {
      icon: <Truck className="h-16 w-16 text-primary-600" />,
      title: "Petro Chemicals and Chemicals",
      description:
        "Specialized solutions for chemical and petrochemical pipeline operations.",
      features: [
        "Material compatibility",
        "Safety protocols",
        "Temperature control",
        "Batch tracking",
      ],
    },
  ];

  return (
    <>
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
              Industries We Serve
            </h1>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="p-4 bg-primary-100 rounded-2xl mb-8">
                    {industry.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {industry.title}
                  </h3>

                  <p className="text-lg text-gray-600 text-center mb-8">
                    {industry.description}
                  </p>

                  <div className="w-full max-w-xs">
                    <ul className="space-y-4">
                      {industry.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center justify-center text-lg text-gray-700"
                        >
                          <div className="flex items-center w-full">
                            <div className="flex-shrink-0">
                              <svg
                                className="h-6 w-6 text-primary-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="ml-3">{feature}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};
