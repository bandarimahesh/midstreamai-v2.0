import React from "react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Smarter Pipelines,</span>
              <span className="block text-primary-600">Safer Operations,</span>
              <span className="block">Maximum Efficiency</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 sm:max-w-xl lg:mx-0">
              MidstreamAI solutions use physics-based models, AI, advanced
              analytics, and real-time monitoring to make pipelines smarter,
              improve safety, and maximize efficiency.
            </p>
            <div className="mt-6 sm:flex sm:justify-center lg:justify-start gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:text-lg"
              >
                Request Demo
              </Link>
              <Link
                to="/services"
                className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              {/* Main Pipeline - Outer Shell */}
              <path
                d="M 50,200 L 750,200"
                stroke="#16a34a"
                strokeWidth="16"
                strokeOpacity="0.3"
                fill="none"
              />

              {/* Vertical Branches - Outer Shell */}
              <path
                d="M 250,200 L 250,320
                   M 500,200 L 500,320"
                stroke="#16a34a"
                strokeWidth="16"
                strokeOpacity="0.3"
                fill="none"
              />

              {/* Main Pipeline - Inner Line */}
              <path
                d="M 50,200 L 750,200"
                stroke="#16a34a"
                strokeWidth="2"
                fill="none"
              />

              {/* Vertical Branches - Inner Line */}
              <path
                d="M 250,200 L 250,320
                   M 500,200 L 500,320"
                stroke="#16a34a"
                strokeWidth="2"
                fill="none"
              />

              {/* Storage Tanks */}
              {[
                { x: 50, y: 120, type: "source", label: "Source" },
                { x: 750, y: 120, type: "destination", label: "Destination" },
                { x: 250, y: 320, type: "delivery", label: "Delivery Station" },
                { x: 500, y: 320, type: "delivery", label: "Delivery Station" },
              ].map((station, index) => (
                <g
                  key={`tank-${index}`}
                  transform={`translate(${station.x},${station.y})`}
                >
                  {/* Tank Body */}
                  <rect
                    x="-25"
                    y="-40"
                    width="50"
                    height="40"
                    fill="white"
                    stroke="#16a34a"
                    strokeWidth="2"
                    rx="2"
                  />
                  {/* Tank Top */}
                  <path
                    d="M -25,-40 C -25,-45 25,-45 25,-40"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2"
                  />
                  {/* Connection to Pipeline */}
                  {station.y < 200 ? (
                    <>
                      {/* Outer connection */}
                      <path
                        d={
                          station.type === "source"
                            ? `M 0,0 C 0,40 0,160 0,${200 - station.y}`
                            : `M 0,0 C 0,40 0,160 0,${200 - station.y}`
                        }
                        stroke="#16a34a"
                        strokeWidth="16"
                        strokeOpacity="0.3"
                        fill="none"
                      />
                      {/* Inner connection */}
                      <path
                        d={
                          station.type === "source"
                            ? `M 0,0 C 0,40 0,160 0,${200 - station.y}`
                            : `M 0,0 C 0,40 0,160 0,${200 - station.y}`
                        }
                        stroke="#16a34a"
                        strokeWidth="2"
                        fill="none"
                      />
                    </>
                  ) : (
                    <>
                      {/* Outer connection */}
                      <path
                        d={`M 0,-40 L 0,${-station.y + 200}`}
                        stroke="#16a34a"
                        strokeWidth="16"
                        strokeOpacity="0.3"
                        fill="none"
                      />
                      {/* Inner connection */}
                      <path
                        d={`M 0,-40 L 0,${-station.y + 200}`}
                        stroke="#16a34a"
                        strokeWidth="2"
                        fill="none"
                      />
                    </>
                  )}
                </g>
              ))}

              {/* Tank Labels */}
              {[
                { x: 50, y: 50, text: "Source", anchor: "middle" },
                { x: 750, y: 50, text: "Destination", anchor: "middle" },
                { x: 310, y: 320, text: "Delivery Station", anchor: "start" },
                { x: 560, y: 320, text: "Delivery Station", anchor: "start" },
              ].map((label, index) => (
                <text
                  key={`label-${index}`}
                  x={label.x}
                  y={label.y}
                  textAnchor={label.anchor}
                  className="text-base font-bold fill-gray-900"
                >
                  {label.text}
                </text>
              ))}

              {/* Pump Station */}
              <g transform="translate(250,200)">
                {/* Pump Circle */}
                <circle r="15" fill="white" stroke="#16a34a" strokeWidth="2" />
                {/* Pump Symbol */}
                <path
                  d="M -8,0 C -8,-8 8,8 8,0 C 8,-8 -8,8 -8,0"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
                <text
                  x="0"
                  y="-25"
                  textAnchor="middle"
                  className="text-base font-bold fill-gray-900"
                >
                  Pump Station
                </text>
              </g>

              {/* Control Valve */}
              <g transform="translate(500,200)">
                {/* Valve Body */}
                <circle r="15" fill="white" stroke="#16a34a" strokeWidth="2" />
                {/* Valve Symbol */}
                <path
                  d="M -8,-8 L 8,8 M -8,8 L 8,-8"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
                <text
                  x="0"
                  y="-25"
                  textAnchor="middle"
                  className="text-base font-bold fill-gray-900"
                >
                  Pressure Regulator
                </text>
              </g>

              {/* Flow Animation */}
              {[
                "M 50,200 L 750,200",
                "M 250,200 L 250,320",
                "M 500,200 L 500,320",
              ].map((path, pathIndex) =>
                [...Array(5)].map((_, index) => (
                  <circle
                    key={`flow-${pathIndex}-${index}`}
                    r="3"
                    fill="#4ade80"
                  >
                    <animateMotion
                      dur={`${3 + index * 0.5}s`}
                      repeatCount="indefinite"
                      path={path}
                    />
                  </circle>
                ))
              )}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
