import React from 'react';

interface PipeBendProps {
  x: number;
  y: number;
  rotation?: number;
  radius?: number;
  diameter?: number;
  direction?: 'clockwise' | 'counterclockwise';
  isActive?: boolean;
}

export const PipeBend: React.FC<PipeBendProps> = ({
  x,
  y,
  rotation = 0,
  radius = 50,
  diameter = 30,
  direction = 'clockwise',
  isActive = true,
}) => {
  // Calculate the path for the bend using arc commands
  const createBendPath = () => {
    const startX = 0;
    const startY = 0;
    const endX = direction === 'clockwise' ? radius : radius;
    const endY = direction === 'clockwise' ? -radius : radius;
    
    return {
      outer: `
        M ${startX},${-diameter/2}
        A ${radius + diameter/2} ${radius + diameter/2} 0 0 ${direction === 'clockwise' ? 0 : 1} 
        ${endX},${endY - diameter/2}
      `,
      inner: `
        M ${startX},${diameter/2}
        A ${radius - diameter/2} ${radius - diameter/2} 0 0 ${direction === 'clockwise' ? 0 : 1} 
        ${endX},${endY + diameter/2}
      `,
      center: `
        M ${startX},0
        A ${radius} ${radius} 0 0 ${direction === 'clockwise' ? 0 : 1} 
        ${endX},${endY}
      `
    };
  };

  const paths = createBendPath();

  return (
    <g transform={`translate(${x},${y}) rotate(${rotation})`}>
      {/* Main Bend Body */}
      <path
        d={`
          ${paths.outer}
          L ${radius},${direction === 'clockwise' ? -radius - diameter/2 : radius - diameter/2}
          L ${radius},${direction === 'clockwise' ? -radius + diameter/2 : radius + diameter/2}
          ${paths.inner}
          Z
        `}
        fill="#16a34a"
        fillOpacity="0.3"
        stroke="#16a34a"
        strokeWidth="2"
        strokeOpacity="0.3"
      />

      {/* Flow Animation */}
      {isActive && (
        <g>
          {[...Array(5)].map((_, i) => (
            <circle
              key={i}
              r={diameter/4}
              fill="#16a34a"
              opacity="0.3"
            >
              <animateMotion
                dur={`${2 + i * 0.5}s`}
                repeatCount="indefinite"
                path={paths.center}
                rotate="auto"
              >
                <mpath href="#flowPath" />
              </animateMotion>
            </circle>
          ))}
          {/* Hidden path for flow animation */}
          <path
            id="flowPath"
            d={paths.center}
            stroke="none"
            fill="none"
          />
        </g>
      )}
    </g>
  );
};