import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AlertTriangle, Gauge, Thermometer, Activity } from 'lucide-react';
import { usePipelineStore } from '../store/pipelineStore';

export const Dashboard: React.FC = () => {
  const { segments, alerts } = usePipelineStore();
  const latestSegment = segments[0];
  const latestData = latestSegment.sensors[latestSegment.sensors.length - 1];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Pressure"
          value={latestData?.pressure || 0}
          unit="PSI"
          icon={<Gauge className="w-6 h-6" />}
        />
        <MetricCard
          title="Temperature"
          value={latestData?.temperature || 0}
          unit="°F"
          icon={<Thermometer className="w-6 h-6" />}
        />
        <MetricCard
          title="Flow Rate"
          value={latestData?.flowRate || 0}
          unit="bbl/day"
          icon={<Activity className="w-6 h-6" />}
        />
        <MetricCard
          title="Integrity"
          value={latestData?.integrity || 100}
          unit="%"
          icon={<AlertTriangle className="w-6 h-6" />}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Real-time Monitoring</h2>
        <LineChart width={800} height={400} data={latestSegment.sensors}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pressure" stroke="#8884d8" />
          <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
          <Line type="monotone" dataKey="flowRate" stroke="#ffc658" />
        </LineChart>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
        <div className="space-y-2">
          {alerts.slice(0, 5).map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
}> = ({ title, value, unit, icon }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">
          {value.toFixed(2)} {unit}
        </p>
      </div>
      <div className="text-blue-500">{icon}</div>
    </div>
  </div>
);

const AlertCard: React.FC<{ alert: AlertData }> = ({ alert }) => {
  const severityColors = {
    low: 'bg-yellow-100 text-yellow-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <div className={`p-3 rounded-lg ${severityColors[alert.severity]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{alert.message}</p>
          <p className="text-sm">Location: {alert.location}</p>
        </div>
        <span className="text-sm">
          {new Date(alert.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};