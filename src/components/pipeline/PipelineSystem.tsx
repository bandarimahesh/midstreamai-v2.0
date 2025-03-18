import React, { useState } from 'react';
import { Pipe } from './Pipe';
import { PipeBend } from './PipeBend';
import { Valve } from './Valve';
import { PressureGauge } from './PressureGauge';
import { Tank } from './Tank';
import { Pump } from './Pump';
import { Sensor } from './Sensor';

export const PipelineSystem: React.FC = () => {
  const [isActive, setIsActive] = useState(true);
  const [pressure, setPressure] = useState(60);

  // Theme colors from the website
  const colors = {
    primary: '#16a34a',
    background: '#f0fdf4',
    pipe: '#16a34a',
  };

  return (
    <div className="relative w-full overflow-x-auto">
      <svg width="1200" height="600" viewBox="0 0 1200 600">
        {/* Background Pattern */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={colors.background} />
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Source Tank */}
        <Tank x={100} y={100} fillLevel={80} product="crude" />

        {/* Vertical Pipe from Source Tank */}
        <Pipe x1={100} y1={150} x2={100} y2={250} color={colors.pipe} isActive={isActive} />

        {/* First Bend - 90 degrees clockwise */}
        <PipeBend x={100} y={250} rotation={0} direction="clockwise" isActive={isActive} />

        {/* Horizontal Pipe after First Bend */}
        <Pipe x1={150} y1={300} x2={400} y2={300} color={colors.pipe} isActive={isActive} />

        {/* Pump Station */}
        <Pump x={450} y={300} isActive={isActive} />

        {/* Flow Sensor */}
        <Sensor x={550} y={250} type="flow" value={75} unit="m³/h" />

        {/* Horizontal Pipe after Pump */}
        <Pipe x1={500} y1={300} x2={600} y2={300} color={colors.pipe} isActive={isActive} />

        {/* T-Junction with Vertical Rise */}
        <PipeBend x={600} y={300} rotation={-90} direction="counterclockwise" isActive={isActive} />
        <Pipe x1={600} y1={250} x2={600} y2={150} color={colors.pipe} isActive={isActive} />

        {/* Control Valve */}
        <Valve x={700} y={300} isOpen={isActive} />

        {/* Pressure Gauge */}
        <PressureGauge x={700} y={200} value={pressure} />

        {/* Final Horizontal Section */}
        <Pipe x1={800} y1={300} x2={900} y2={300} color={colors.pipe} isActive={isActive} />

        {/* Final Bend to Destination Tank */}
        <PipeBend x={900} y={300} rotation={-90} direction="clockwise" isActive={isActive} />

        {/* Destination Tank */}
        <Tank x={1000} y={100} fillLevel={40} product="crude" />

        {/* Control Panel */}
        <foreignObject x="20" y="400" width="300" height="180">
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">System Controls</h3>
              <button
                onClick={() => setIsActive(!isActive)}
                className={`w-full px-4 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                {isActive ? 'System Active' : 'System Inactive'}
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                System Pressure: {pressure}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={pressure}
                onChange={(e) => setPressure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};