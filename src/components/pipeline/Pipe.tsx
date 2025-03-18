import React from 'react';

interface PipeProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  diameter?: number;
  color?: string;
  isActive?: boolean;
}

export const Pipe: React.FC<PipeProps> = ({
  x1,
  y1,
  x2,
  y2,
  diameter = 30,
  color = '#ff4444',
  isActive = true,
}) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  const length = Math.sqrt(dx * dx + dy * dy);

  // Flange dimensions
  const flangeWidth = diameter * 1.8;
  const flangeHeight = diameter * 0.3;
  const boltRadius = diameter * 0.1;
  const numBolts = 8;

  return (
    <g transform={`translate(${x1},${y1}) rotate(${angle})`}>
      {/* Main Pipe */}
      <path
        d={`M 0,${-diameter/2} L ${length},${-diameter/2} L ${length},${diameter/2} L 0,${diameter/2} Z`}
        fill={color}
        stroke="#666"
        strokeWidth="2"
      />

      {/* Pipe Highlight */}
      <path
        d={`M 0,${-diameter/2} L ${length},${-diameter/2}`}
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
      />

      {/* Start Flange */}
      <g>
        <rect
          x={-flangeHeight}
          y={-flangeWidth/2}
          width={flangeHeight}
          height={flangeWidth}
          fill="#888"
          stroke="#666"
          strokeWidth="1"
        />
        {/* Flange Bolts */}
        {Array.from({ length: numBolts }).map((_, i) => {
          const angle = (i * 360 / numBolts) * Math.PI / 180;
          const bx = -flangeHeight/2;
          const by = (flangeWidth/2 - flangeWidth/4) * Math.sin(angle);
          return (
            <circle
              key={`start-bolt-${i}`}
              cx={bx}
              cy={by}
              r={boltRadius}
              fill="#444"
            />
          );
        })}
      </g>

      {/* End Flange */}
      <g transform={`translate(${length},0)`}>
        <rect
          x={0}
          y={-flangeWidth/2}
          width={flangeHeight}
          height={flangeWidth}
          fill="#888"
          stroke="#666"
          strokeWidth="1"
        />
        {/* Flange Bolts */}
        {Array.from({ length: numBolts }).map((_, i) => {
          const angle = (i * 360 / numBolts) * Math.PI / 180;
          const bx = flangeHeight/2;
          const by = (flangeWidth/2 - flangeWidth/4) * Math.sin(angle);
          return (
            <circle
              key={`end-bolt-${i}`}
              cx={bx}
              cy={by}
              r={boltRadius}
              fill="#444"
            />
          );
        })}
      </g>

      {/* Flow Animation */}
      {isActive && (
        <g>
          {[...Array(5)].map((_, i) => (
            <circle
              key={i}
              r={diameter/4}
              fill="rgba(255,255,255,0.3)"
            >
              <animateMotion
                dur={`${2 + i * 0.5}s`}
                repeatCount="indefinite"
                path={`M 0,0 L ${length},0`}
              />
            </circle>
          ))}
        </g>
      )}
    </g>
  );
};