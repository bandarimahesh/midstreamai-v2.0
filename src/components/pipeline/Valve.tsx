import React from 'react';

interface ValveProps {
  x: number;
  y: number;
  rotation?: number;
  size?: number;
  isOpen?: boolean;
}

export const Valve: React.FC<ValveProps> = ({
  x,
  y,
  rotation = 0,
  size = 60,
  isOpen = true
}) => {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotation})`}>
      {/* Valve Body */}
      <path
        d={`
          M ${-size/2},${-size/3}
          L ${size/2},${-size/3}
          L ${size/2},${size/3}
          L ${-size/2},${size/3}
          Z
        `}
        fill="#888"
        stroke="#666"
        strokeWidth="2"
      />

      {/* Valve Stem */}
      <rect
        x={-size/8}
        y={-size}
        width={size/4}
        height={size*0.7}
        fill="#666"
        stroke="#444"
        strokeWidth="1"
      />

      {/* Handwheel */}
      <circle
        cx={0}
        cy={-size}
        r={size/3}
        fill="none"
        stroke="#666"
        strokeWidth={size/8}
      />
      
      {/* Spokes */}
      {[0, 45, 90, 135].map(angle => (
        <line
          key={angle}
          x1={0}
          y1={-size}
          x2={Math.cos(angle * Math.PI / 180) * size/3}
          y2={-size + Math.sin(angle * Math.PI / 180) * size/3}
          stroke="#666"
          strokeWidth={size/12}
        />
      ))}

      {/* Flanges */}
      {[-1, 1].map(side => (
        <g key={side} transform={`translate(${side * size/2},0)`}>
          <rect
            x={-size/8}
            y={-size/2}
            width={size/4}
            height={size}
            fill="#999"
            stroke="#666"
            strokeWidth="1"
          />
          {/* Bolts */}
          {[-1, 1].map(boltY => (
            <circle
              key={boltY}
              cx={0}
              cy={boltY * size/3}
              r={size/12}
              fill="#444"
            />
          ))}
        </g>
      ))}
    </g>
  );
};