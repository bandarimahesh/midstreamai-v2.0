import React from 'react';

interface TankProps {
  x: number;
  y: number;
  fillLevel?: number;
  product?: string;
  size?: number;
}

export const Tank: React.FC<TankProps> = ({
  x,
  y,
  fillLevel = 70,
  product = 'crude',
  size = 100,
}) => {
  const getProductColor = (type: string) => {
    switch (type) {
      case 'crude': return '#4b5563';
      case 'gasoline': return '#ef4444';
      case 'diesel': return '#eab308';
      case 'natural-gas': return '#22c55e';
      default: return '#94a3b8';
    }
  };

  return (
    <g transform={`translate(${x},${y})`}>
      {/* Tank Shadow */}
      <ellipse
        cx={0}
        cy={size/2 + 5}
        rx={size/2}
        ry={size/6}
        fill="rgba(0,0,0,0.1)"
      />

      {/* Tank Body */}
      <path
        d={`M ${-size/2},${-size/2}
            L ${-size/2},${size/2}
            A ${size/2} ${size/6} 0 0 0 ${size/2},${size/2}
            L ${size/2},${-size/2}
            A ${size/2} ${size/6} 0 0 1 ${-size/2},${-size/2} Z`}
        fill="#e5e7eb"
        stroke="#d1d5db"
        strokeWidth="2"
      />

      {/* Product Level */}
      <path
        d={`M ${-size/2},${size/2 - (fillLevel/100) * size}
            L ${size/2},${size/2 - (fillLevel/100) * size}
            L ${size/2},${size/2}
            A ${size/2} ${size/6} 0 0 1 ${-size/2},${size/2} Z`}
        fill={getProductColor(product)}
        opacity="0.8"
      />

      {/* Tank Top */}
      <ellipse
        cx={0}
        cy={-size/2}
        rx={size/2}
        ry={size/6}
        fill="#f3f4f6"
        stroke="#d1d5db"
        strokeWidth="2"
      />

      {/* Level Indicator */}
      <line
        x1={size/2 + 10}
        y1={-size/2}
        x2={size/2 + 10}
        y2={size/2}
        stroke="#d1d5db"
        strokeWidth="2"
      />
      <rect
        x={size/2 + 5}
        y={size/2 - (fillLevel/100) * size}
        width={10}
        height={4}
        fill="#64748b"
      />
    </g>
  );
};