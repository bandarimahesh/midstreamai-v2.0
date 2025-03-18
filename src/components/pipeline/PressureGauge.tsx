import React from 'react';

interface PressureGaugeProps {
  x: number;
  y: number;
  value?: number;
  size?: number;
  rotation?: number;
}

export const PressureGauge: React.FC<PressureGaugeProps> = ({
  x,
  y,
  value = 50,
  size = 40,
  rotation = 0
}) => {
  const angle = -90 + (value * 1.8); // Convert 0-100 to -90 to 90 degrees

  return (
    <g transform={`translate(${x},${y}) rotate(${rotation})`}>
      {/* Mount */}
      <rect
        x={-size/8}
        y={0}
        width={size/4}
        height={size/2}
        fill="#666"
      />

      {/* Gauge Body */}
      <circle
        cx={0}
        cy={0}
        r={size}
        fill="#fff"
        stroke="#666"
        strokeWidth="2"
      />

      {/* Scale Markings */}
      {Array.from({ length: 11 }).map((_, i) => {
        const markAngle = -90 + (i * 18);
        const isLongMark = i % 2 === 0;
        return (
          <line
            key={i}
            x1={0}
            y1={-size + (isLongMark ? 10 : 5)}
            x2={0}
            y2={-size}
            stroke="#333"
            strokeWidth={isLongMark ? 2 : 1}
            transform={`rotate(${markAngle})`}
          />
        );
      })}

      {/* Colored Zones */}
      <path
        d={`M ${-size},0 A ${size} ${size} 0 0 1 ${size},0`}
        fill="none"
        stroke="#22c55e"
        strokeWidth="5"
        strokeDasharray={`${size * Math.PI * 0.6} ${size * Math.PI * 0.4}`}
        transform="rotate(-90)"
      />
      <path
        d={`M ${-size},0 A ${size} ${size} 0 0 1 ${size},0`}
        fill="none"
        stroke="#ef4444"
        strokeWidth="5"
        strokeDasharray={`${size * Math.PI * 0.2} ${size * Math.PI * 0.8}`}
        transform="rotate(30)"
      />

      {/* Needle */}
      <g transform={`rotate(${angle})`}>
        <line
          x1={0}
          y1={5}
          x2={0}
          y2={-size + 10}
          stroke="#000"
          strokeWidth="2"
        />
        <circle
          cx={0}
          cy={0}
          r={5}
          fill="#000"
        />
      </g>
    </g>
  );
};