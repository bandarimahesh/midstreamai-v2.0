import React, { useState } from "react";
import { AlertCircle, Box, BookOpen, GitCompare } from "lucide-react";
import GoToTop from "../components/Utils/GoToTop";

export const ServicesPage: React.FC = () => {
  document.title = "MidstreamAI | Services";

  const [selectedService, setSelectedService] = useState<string | null>(
    "Leak Detection"
  );

  const services = {
    "Leak Detection": {
      icon: <AlertCircle className="h-8 w-8" />,
      description:
        "Leak detection solutions enhance pipeline safety, improve operational efficiency, and ensure regulatory compliance. Using advanced technologies, they optimize detection, minimize false alarms, and enable rapid response to leaks.",
      subServices: [
        {
          name: "Insights",
          description:
            "Insights analyzes data from the leak detection system, providing actionable insights on pipeline operations, model tuning, and overall detection performance. This empowers operators to enhance sensitivity, reliability, and compliance while minimizing false alarms.",
        },
        {
          name: "Leak Detection Standards & Best Practices",
          description:
            "A comprehensive framework for deploying and managing leak detection systems (LDS) across pipeline networks. This ensures standardized procedures for model tuning, alarm validation, and performance evaluation, leading to improved safety, regulatory compliance, and operational efficiency.",
        },
        {
          name: "Threshold Optimizer & Analyzer",
          description:
            "Optimizing leak detection thresholds is crucial for balancing sensitivity and reliability. This tool automates data validation and threshold tuning, reducing false alarms and improving real-time leak detection accuracy.",
        },
        {
          name: "Leak Alarms Analyzer",
          description:
            "Quick and accurate leak alarm validation is essential for timely responses. This solution automates alarm analysis, ensuring operators can efficiently differentiate between real leaks and false positives, improving response times and detection accuracy.",
        },
        {
          name: "Tank Leak Detection",
          description:
            "Designed for storage facilities, this system continuously monitors tank integrity, helping operators quickly detect leaks, ensure environmental safety, and comply with industry regulations.",
        },
        {
          name: "Hybrid Leak Detection Model",
          description:
            "By combining hydraulic models with machine learning techniques, this hybrid system improves detection reliability, reduces false positives, and enhances operational decision-making.",
        },
        {
          name: "API 1149-Based Performance Evaluation",
          description:
            "Conducting live leak tests is costly and time-consuming. This simulation-based tool replicates leak scenarios for evaluating LDS performance, ensuring compliance and improving detection accuracy without disrupting operations.",
        },
        {
          name: "High-Frequency Leak Detection & Location",
          description:
            "Using advanced pressure sensor data, this system accelerates leak detection and precise location identification, minimizing downtime and improving containment efforts.",
        },
        {
          name: "Rupture Detection",
          description:
            "A real-time monitoring system that instantly identifies pipeline ruptures, allowing for rapid emergency responses and minimizing environmental and operational risks.",
        },
        {
          name: "Seeps Detection",
          description:
            "Detecting slow, minor leaks (seeps) is vital for long-term pipeline integrity. This solution identifies small leaks that could impact efficiency, enabling proactive maintenance before they escalate into major issues.",
        },
      ],
    },
    "Batch Management": {
      icon: <Box className="h-8 w-8" />,
      description:
        "Ensuring precise scheduling, minimizing losses, and maximizing profitability in multi-product pipeline operations.",
      subServices: [
        {
          name: "Batch Tracking",
          description:
            "Monitors and manages batches throughout the pipeline, preventing loss, optimizing scheduling, and maintaining product integrity for seamless transfers and improved efficiency.",
        },
      ],
    },
    "Product Compatibility": {
      icon: <GitCompare className="h-8 w-8" />,
      description:
        "Ensuring safe and efficient product transfers by verifying compatibility across critical pipeline components.",
      subServices: [
        {
          name: "Meter-Tank Product Compatibility",
          description:
            "Verifies if the meter's active ticket product group matches the tank product group, preventing contamination and ensuring accurate transfers.",
        },
        {
          name: "Meter-Analog Product Compatibility",
          description:
            "Checks if the meter's active ticket product properties align with those measured by analog instruments, maintaining measurement accuracy.",
        },
        {
          name: "DRA Product Compatibility",
          description:
            "Ensures Drag Reducing Agent (DRA) is compatible with upstream and downstream products at the DRA pump, preventing performance issues.",
        },
        {
          name: "Pump Product Compatibility",
          description:
            "Verifies whether a pump's previously handled product is compatible with incoming and outgoing products, ensuring safe transitions and avoiding contamination.",
        },
      ],
    },
    "Operator Training Simulator": {
      icon: <BookOpen className="h-8 w-8" />,
      description:
        "A dynamic training platform that equips operators with hands-on experience in pipeline operations, leak detection, and emergency response. Realistic simulations ensure quick, effective decision-making in critical situations.",
      subServices: [
        {
          name: "Simulation Engine",
          description:
            "Simulates pipeline hydraulics, batch tracking, and key components like pumps and valves, providing operators with real-world scenario training.",
        },
        {
          name: "SCADA/HMI Interface",
          description:
            "Replicates a real control room experience with live pipeline status, alarms, and dynamic data visualization.",
        },
        {
          name: "Real-Time & Historical Data",
          description:
            "Integrates simulated sensor readings and past incidents to enhance practical learning.",
        },
        {
          name: "Scenario-Based Training",
          description:
            "Trains operators in routine operations, emergency handling, and unexpected disruptions for comprehensive preparedness.",
        },
      ],
    },
  };

  return (
    <>
      <div className="py-20 bg-gradient-to-br from-primary-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
              Our Services
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Service Navigation */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-3">
                {Object.entries(services).map(([name]) => (
                  <button
                    key={name}
                    onClick={() => setSelectedService(name)}
                    className={`w-full px-6 py-4 rounded-lg text-left transition-all text-lg font-medium ${
                      selectedService === name
                        ? "bg-primary-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-primary-50"
                    }`}
                  >
                    <div className="flex items-center">
                      {services[name].icon}
                      <span className="ml-3">{name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Content */}
            <div className="lg:w-3/4">
              {selectedService && (
                <div className="animate-fadeIn">
                  <div className="bg-primary-100 rounded-lg p-8 shadow-md mb-8">
                    <div className="flex items-center">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        {services[selectedService].icon}
                      </div>
                      <div className="ml-6">
                        <h2 className="text-3xl font-bold text-gray-900">
                          {selectedService}
                        </h2>
                        <p className="mt-2 text-xl text-gray-600">
                          {services[selectedService].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {services[selectedService].subServices.map(
                      (subService, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-lg shadow-sm hover:shadow transition-all duration-300
                        border border-primary-50 hover:border-primary-200"
                        >
                          <h3 className="text-2xl font-semibold text-primary-600 mb-3">
                            {subService.name}
                          </h3>
                          <p className="text-lg text-gray-600">
                            {subService.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};
