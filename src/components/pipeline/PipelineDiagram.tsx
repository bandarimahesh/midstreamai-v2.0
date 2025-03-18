import React, { useState, useEffect } from "react";

export const PipelineDiagram: React.FC = () => {
  const [flowOffset, setFlowOffset] = useState(0);
  const [pressure, setPressure] = useState(75);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowOffset((prev) => (prev + 2) % 50);
      setPressure(prev => prev + Math.sin(Date.now() / 1000) * 0.1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full p-6 rounded-xl">
      <svg className="w-full h-full" viewBox="0 0 900 500">
        <defs>
          {/* Define paths for flow animations */}
          <path
            id="mainPipePath"
            d="M 50,200 L 850,200"
            fill="none"
          />
          <path
            id="sourceTankPath"
            d="M 50,160 C 50,170 50,180 50,200"
            fill="none"
          />
          <path
            id="destTankPath"
            d="M 850,200 C 850,180 850,170 850,160"
            fill="none"
          />
          {[250, 600].map((x, i) => (
            <path
              key={`branchPath-${i}`}
              id={`branchPath-${i}`}
              d={`M ${x},200 L ${x},320`}
              fill="none"
            />
          ))}
        </defs>

        {/* Main Pipeline */}
        <path 
          d="M 50,200 L 850,200" 
          stroke="#16a34a" 
          strokeWidth="20" 
          strokeOpacity="0.2" 
          fill="none"
          strokeLinecap="round"
        />

        {/* Vertical Branches */}
        {[250, 600].map(x => (
          <path 
            key={`branch-${x}`}
            d={`M ${x},200 L ${x},320`}
            stroke="#16a34a" 
            strokeWidth="20" 
            strokeOpacity="0.2" 
            fill="none"
            strokeLinecap="round"
          />
        ))}

        {/* Storage Tanks */}
        {[
          { x: 50, y: 120, type: "source", level: 85, label: "Source" },
          { x: 850, y: 120, type: "destination", level: 45, label: "Destination" },
          { x: 250, y: 320, type: "delivery", level: 60, label: "Intermediate Delivery" },
          { x: 600, y: 320, type: "delivery", level: 70, label: "Intermediate Delivery" }
        ].map((station, index) => (
          <g key={`tank-${index}`}>
            {/* Tank Connection */}
            <path
              d={`M ${station.x},${station.y + 40} L ${station.x},${station.type === "delivery" ? 320 : 200}`}
              stroke="#16a34a"
              strokeWidth="20"
              strokeOpacity="0.2"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Tank Body */}
            <g transform={`translate(${station.x},${station.y})`}>
              <path
                d={`
                  M -30,-40 
                  L -30,40 
                  A 30 10 0 0 0 30,40
                  L 30,-40
                  A 30 10 0 0 1 -30,-40
                `}
                fill="white"
                stroke="#16a34a"
                strokeWidth="2"
              />
              {/* Product Level */}
              <path
                d={`
                  M -30,${-40 + (80 - 80 * station.level/100)}
                  L 30,${-40 + (80 - 80 * station.level/100)}
                  L 30,40
                  A 30 10 0 0 1 -30,40
                  Z
                `}
                fill="#16a34a"
                fillOpacity="0.2"
              />
              {/* Tank Top */}
              <ellipse
                cx="0"
                cy="-40"
                rx="30"
                ry="10"
                fill="white"
                stroke="#16a34a"
                strokeWidth="2"
              />
              {/* Tank Label */}
              <text
                x="0"
                y={station.type === "delivery" ? "80" : "-60"}
                textAnchor="middle"
                className="text-sm font-medium fill-gray-700"
              >
                {station.label}
              </text>
            </g>
          </g>
        ))}

        {/* Pump Station */}
        <g transform="translate(400,200)">
          <circle r="15" fill="white" stroke="#16a34a" strokeWidth="2" />
          <path
            d="M -8,0 C -8,-8 8,8 8,0 C 8,-8 -8,8 -8,0"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
          <text
            x="0"
            y="-25"
            textAnchor="middle"
            className="text-sm font-medium fill-gray-700"
          >
            Pump Station
          </text>
        </g>

        {/* Control Valves */}
        {[200, 700].map((x, index) => (
          <g key={`valve-${index}`} transform={`translate(${x},200)`}>
            <rect
              x="-15"
              y="-15"
              width="30"
              height="30"
              fill="white"
              stroke="#16a34a"
              strokeWidth="2"
              rx="4"
            />
            <path
              d="M -8,-8 L 8,8 M -8,8 L 8,-8"
              stroke="#16a34a"
              strokeWidth="2"
            />
            <text
              x="0"
              y="-25"
              textAnchor="middle"
              className="text-sm font-medium fill-gray-700"
            >
              Control Valve
            </text>
          </g>
        ))}

        {/* Flow Animation - Main Line */}
        <g>
          {[...Array(10)].map((_, index) => (
            <circle
              key={`flow-main-${index}`}
              r="3"
              fill="#16a34a"
              opacity="0.3"
            >
              <animateMotion
                dur={`${2 + index * 0.2}s`}
                repeatCount="indefinite"
                path="M 50,200 L 850,200"
              />
            </circle>
          ))}
        </g>

        {/* Flow Animation - Vertical Branches */}
        {[250, 600].map((x, branchIndex) => (
          <g key={`branch-${branchIndex}`}>
            {[...Array(5)].map((_, index) => (
              <circle
                key={`flow-branch-${index}`}
                r="3"
                fill="#16a34a"
                opacity="0.3"
              >
                <animateMotion
                  dur={`${1.5 + index * 0.2}s`}
                  repeatCount="indefinite"
                  path={`M ${x},200 L ${x},320`}
                />
              </circle>
            ))}
          </g>
        ))}

        {/* Flow Animation - Source Tank to Main Line */}
        <g>
          {[...Array(3)].map((_, i) => (
            <circle
              key={`source-flow-${i}`}
              r="3"
              fill="#16a34a"
              opacity="0.3"
            >
              <animateMotion
                dur={`${1 + i * 0.2}s`}
                repeatCount="indefinite"
                path="M 50,160 C 50,170 50,180 50,200"
              />
            </circle>
          ))}
        </g>

        {/* Flow Animation - Main Line to Destination Tank */}
        <g>
          {[...Array(3)].map((_, i) => (
            <circle
              key={`dest-flow-${i}`}
              r="3"
              fill="#16a34a"
              opacity="0.3"
            >
              <animateMotion
                dur={`${1 + i * 0.2}s`}
                repeatCount="indefinite"
                path="M 850,200 C 850,180 850,170 850,160"
              />
            </circle>
          ))}
        </g>

        {/* Pressure Gauges */}
        {[150, 500, 750].map((x, index) => (
          <g key={`gauge-${index}`} transform={`translate(${x},140)`}>
            <circle r="12" fill="white" stroke="#16a34a" strokeWidth="2" />
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1="-10"
                x2="0"
                y2="-12"
                stroke="#16a34a"
                strokeWidth="1"
                transform={`rotate(${i * 45})`}
              />
            ))}
            <path
              d="M 0,0 L 0,-10"
              stroke="#ef4444"
              strokeWidth="2"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values={`${-45 + pressure};${-45 + pressure + 5};${-45 + pressure}`}
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
            <circle r="2" fill="#ef4444" />
            <text
              x="0"
              y="-20"
              textAnchor="middle"
              className="text-sm font-medium fill-gray-700"
            >
              Pressure
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};