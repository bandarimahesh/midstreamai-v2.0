export interface SensorData {
  timestamp: number;
  pressure: number;
  temperature: number;
  flowRate: number;
  integrity: number;
}

export interface PipelineSegment {
  id: string;
  name: string;
  length: number;
  diameter: number;
  material: string;
  sensors: SensorData[];
}

export interface AlertData {
  id: string;
  timestamp: number;
  type: 'leak' | 'pressure' | 'temperature' | 'flow' | 'integrity';
  severity: 'low' | 'medium' | 'high';
  message: string;
  location: string;
}