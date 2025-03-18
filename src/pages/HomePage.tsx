import React from "react";
import { Timeline } from "../components/Timeline";
import { KeyHighlights } from "../components/KeyHighlights";
import { Features } from "../components/Features";
import { Link } from "react-router-dom";
import { PipelineDiagram } from "../components/pipeline/PipelineDiagram";
import GoToTop from "../components/Utils/GoToTop";

export const HomePage: React.FC = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-50 to-white py-8 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-extrabold text-gray-900">
                <span className="block">Smarter Pipelines,</span>
                <span className="block text-primary-600">
                  Safer Operations,
                </span>
                <span className="block">Optimum Efficiency</span>
              </h1>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-500 max-w-3xl">
                MidstreamAI solutions use physics-based models, AI, advanced
                analytics, and real-time monitoring to make pipelines smarter,
                improve safety, and maximize efficiency.
              </p>
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:text-lg"
                >
                  Request Demo
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:text-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0">
              <PipelineDiagram />
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <Timeline />
        <KeyHighlights />
        <Features />
      </div>
      <GoToTop />
    </>
  );
};
