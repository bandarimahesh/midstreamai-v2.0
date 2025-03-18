import React from 'react';

interface PumpProps {
  x: number;
  y: number;
  rotation?: number;
  isActive?: boolean;
  size?: number;
}

export const Pump: React.FC<PumpProps> = ({
  x,
  y,
  rotation = 0,
  isActive = true,
  size = 60,
}) => {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotation})`}>
      {/* Pump Shadow */}
      <path
        d={`
          M ${-size*0.6},${size*0.3 + 2}
          L ${size*0.6},${size*0.3 + 2}
          L ${size*0.5},${size*0.4 + 2}
          L ${-size*0.5},${size*0.4 + 2}
          Z
        `}
        fill="rgba(0,0,0,0.1)"
      />

      {/* Pump Base */}
      <path
        d={`
          M ${-size*0.6},${size*0.3}
          L ${size*0.6},${size*0.3}
          L ${size*0.5},${size*0.4}
          L ${-size*0.5},${size*0.4}
          Z
        `}
        fill="url(#pumpBaseGradient)"
        stroke="#475569"
        strokeWidth="2"
      />

      {/* Pump Housing */}
      <path
        d={`
          M ${-size*0.4},${-size*0.3}
          A ${size*0.4} ${size*0.4} 0 1 1 ${size*0.4},${-size*0.3}
          L ${size*0.4},${size*0.3}
          L ${-size*0.4},${size*0.3}
          Z
        `}
        fill="url(#pumpHousingGradient)"
        stroke="#475569"
        strokeWidth="2"
      />

      {/* Motor Housing */}
      <path
        d={`
          M ${-size*0.3},${-size*0.5}
          L ${size*0.3},${-size*0.5}
          L ${size*0.3},${-size*0.3}
          L ${-size*0.3},${-size*0.3}
          Z
        `}
        fill="url(#motorHousingGradient)"
        stroke="#475569"
        strokeWidth="2"
      />

      {/* Cooling Fins */}
      {[...Array(5)].map((_, i) => (
        <rect
          key={i}
          x={-size*0.25 + i*(size*0.125)}
          y={-size*0.48}
          width={size*0.05}
          height={size*0.15}
          fill="#94a3b8"
          stroke="#475569"
          strokeWidth="1"
        />
      ))}

      {/* Pump Connections */}
      <path
        d={`
          M ${-size*0.4},0
          L ${-size*0.7},0
          M ${size*0.4},0
          L ${size*0.7},0
        `}
        stroke="#475569"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Motor Indicator */}
      <circle
        cx="0"
        cy={-size*0.4}
        r={size*0.15}
        fill={isActive ? "#22c55e" : "#ef4444"}
        opacity={isActive ? "1" : "0.5"}
      >
        {isActive && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </circle>

      {/* Gradients */}
      <defs>
        <linearGradient id="pumpBaseGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="pumpHousingGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="motorHousingGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>
    </g>
  );
};