import React from "react";
import { Target, Users, Award } from "lucide-react";
import GoToTop from "../components/Utils/GoToTop";

export const AboutPage: React.FC = () => {
  return (
    <>
      <div className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900">
              About Us
            </h1>
          </div>

          <div className="mt-8 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="bg-primary-50 rounded-xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                  At MidstreamAI, we are dedicated to transforming midstream oil
                  and gas operations through physics-based and hybrid solutions
                  that ensure safer, more efficient, and more reliable
                  pipelines.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Who We Are
                </h2>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
                  With 25+ years of industry expertise, we provide Advanced
                  Solutions that integrate real-time monitoring, advanced
                  analytics, and predictive modeling to help pipeline operators
                  optimize performance, enhance safety, and meet regulatory
                  compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <Target className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600" />
                </div>
                <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
                  Innovation
                </h3>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                  Continuously developing Advanced Solutions that push the
                  boundaries of pipeline technology.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <Users className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600" />
                </div>
                <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
                  Expertise
                </h3>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                  Our team brings decades of combined experience in pipeline
                  operations and technology.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <Award className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600" />
                </div>
                <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
                  Excellence
                </h3>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                  Committed to delivering the highest quality solutions and
                  support to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};
