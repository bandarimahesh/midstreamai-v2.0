import React from "react";
import { Factory, Flame, Container } from "lucide-react";
import GoToTop from "../components/Utils/GoToTop";

export const IndustriesPage: React.FC = () => {
  const industries = [
    {
      icon: <Factory className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600" />,
      title: "Oil & Refined Products",
      description:
        "Optimize pipeline networks for safe and efficient transportation.",
      features: [
        "Real-time flow monitoring",
        "Pressure monitoring",
        "Leak detection systems",
        "Throughput analysis",
      ],
    },
    {
      icon: <Flame className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600" />,
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
      icon: (
        <Container className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600" />
      ),
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
      <div className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-extrabold text-gray-900">
              Industries We Serve
            </h1>
          </div>

          <div className="mt-8 sm:mt-16">
            <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="p-4 bg-primary-50 rounded-2xl mb-6 sm:mb-8">
                    {industry.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3 sm:mb-4">
                    {industry.title}
                  </h3>

                  <p className="text-base sm:text-lg text-gray-600 text-center mb-6 sm:mb-8">
                    {industry.description}
                  </p>

                  <div className="w-full max-w-xs">
                    <ul className="space-y-3 sm:space-y-4">
                      {industry.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center justify-center"
                        >
                          <div className="flex items-center w-full">
                            <div className="flex-shrink-0">
                              <svg
                                className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600"
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
                            <span className="ml-3 text-base sm:text-lg text-gray-600">
                              {feature}
                            </span>
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
