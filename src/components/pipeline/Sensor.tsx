import React from 'react';
import { Activity, Thermometer, Gauge } from 'lucide-react';

interface SensorProps {
  x: number;
  y: number;
  type: 'flow' | 'pressure' | 'temperature';
  value: number;
  unit: string;
  size?: number;
}

export const Sensor: React.FC<SensorProps> = ({
  x,
  y,
  type,
  value,
  unit,
  size = 30,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'flow': return <Activity className="w-4 h-4" />;
      case 'pressure': return <Gauge className="w-4 h-4" />;
      case 'temperature': return <Thermometer className="w-4 h-4" />;
    }
  };

  return (
    <g transform={`translate(${x},${y})`}>
      {/* Sensor Mount */}
      <path
        d={`
          M 0,${size*0.3}
          L 0,0
          M ${-size*0.15},${size*0.3}
          L ${size*0.15},${size*0.3}
        `}
        stroke="#475569"
        strokeWidth="2"
      />

      {/* Sensor Housing */}
      <path
        d={`
          M ${-size*0.3},${-size*0.4}
          L ${size*0.3},${-size*0.4}
          L ${size*0.3},${size*0.2}
          L ${-size*0.3},${size*0.2}
          Z
        `}
        fill="#f3f4f6"
        stroke="#475569"
        strokeWidth="2"
      />

      {/* Sensor Display */}
      <foreignObject
        x={-size*0.25}
        y={-size*0.35}
        width={size*0.5}
        height={size*0.5}
        className="text-primary-600"
      >
        {getIcon()}
      </foreignObject>

      {/* Value Display */}
      <g transform={`translate(0,${size*0.6})`}>
        <rect
          x={-size*0.4}
          y="0"
          width={size*0.8}
          height={size*0.4}
          fill="white"
          stroke="#475569"
          strokeWidth="1"
          rx="2"
        />
        <text
          x="0"
          y={size*0.25}
          textAnchor="middle"
          className="text-xs font-medium"
          fill="#374151"
        >
          {value} {unit}
        </text>
      </g>
    </g>
  );
};