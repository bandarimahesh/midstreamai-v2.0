import React from "react";
import { Timeline } from "../components/Timeline";
import { KeyHighlights } from "../components/KeyHighlights";
import { Features } from "../components/Features";
import { Link } from "react-router-dom";
import { PipelineDiagram } from "../components/pipeline/PipelineDiagram";
import GoToTop from "../components/Utils/GoToTop";

export const HomePageAlt: React.FC = () => {
  document.title = "MidstreamAI | Home";

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Smarter Pipelines,</span>
                <span className="block text-primary-600">
                  Safer Operations,
                </span>
                <span className="block">Maximum Efficiency</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500 sm:max-w-xl lg:mx-0">
                MidstreamAI solutions use physics-based models, AI, advanced
                analytics, and real-time monitoring to make pipelines smarter,
                improve safety, and maximize efficiency.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:text-lg"
                >
                  Request Demo
                </Link>
                <Link
                  to="/services"
                  className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:text-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <PipelineDiagram />
            </div>
          </div>
        </div>
      </section>
      <Timeline />
      <KeyHighlights />
      <Features />
      <GoToTop />
    </>
  );
};
