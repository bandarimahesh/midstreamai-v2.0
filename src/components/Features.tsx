import React from "react";
import {
  Award,
  Brain,
  Activity,
  FileCheck,
  Globe,
  Cloud,
  Clock,
  Settings,
  Wrench,
} from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-primary-600" />,
      title: "Industry Expertise & Proven Experience",
      description:
        "Backed by 25+ years of pipeline industry experience, our team understands real-world operational challenges and delivers solutions tailored to your needs",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary-600" />,
      title: "AI & Physics-Based Hybrid Models for High Accuracy",
      description:
        "Our models integrate physics-based simulations with AI-driven analytics for highly accurate predictions of pipeline behavior.",
    },
    {
      icon: <Activity className="h-10 w-10 text-primary-600" />,
      title: "Real-Time Monitoring & Proactive Leak Detection",
      description:
        "Continuous tracking of pipeline conditions using SCADA, IoT sensors, and Physics and Hybrid powered anomaly detection to identify leaks, pressure drops, and system inefficiencies before they escalate.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-primary-600" />,
      title: "Regulatory Compliance & Future-Proofed Standards",
      description:
        "Designed to align with regulations, ensuring your pipeline operations meet all safety and environmental compliance requirements.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary-600" />,
      title: "Center of Excellence for Innovation & Support",
      description:
        "Our Center of Excellence provides 24/7 operational support to ensure seamless performance. Continuous R&D and innovation to keep you ahead of industry trends.",
    },
    {
      icon: <Settings className="h-10 w-10 text-primary-600" />,
      title: "End-to-End Pipeline Optimization",
      description:
        "From leak detection to operational efficiency, MidstreamAI provides a complete suite of solutions for midstream pipeline operators.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary-600" />,
      title: "Scalable Integration",
      description:
        "MidstreamAI solutions seamlessly integrate with existing SCADA, IoT, and third-party applications, supporting on-premise deployments for easy scalability.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-600" />,
      title: "24/7 Support & Long-Term Partnership",
      description:
        "We don't just deliver solutions—we provide ongoing support, updates, and innovation to ensure your operations stay at Advanced Solutions.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary-600" />,
      title: "Custom Solutions Tailored to Unique Pipeline Needs",
      description:
        "We understand that every pipeline operation faces unique challenges, such as inadequate instrumentation, data gaps, or complex operational constraints. MidstreamAI develops custom solutions tailored to each client's specific needs, integrating different techniques to bridge gaps and optimize performance.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-2 text-xl text-gray-500">
            We provide exceptional services with a commitment to quality and
            customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 rounded-lg">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
