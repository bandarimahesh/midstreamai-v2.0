import { create } from 'zustand';
import type { PipelineSegment, AlertData } from '../types/pipeline';

interface PipelineState {
  segments: PipelineSegment[];
  alerts: AlertData[];
  addAlert: (alert: AlertData) => void;
  updateSensorData: (segmentId: string, data: PipelineSegment['sensors'][0]) => void;
}

export const usePipelineStore = create<PipelineState>((set) => ({
  segments: [
    {
      id: 'segment-1',
      name: 'Main Pipeline Segment A',
      length: 50,
      diameter: 36,
      material: 'Carbon Steel',
      sensors: []
    }
  ],
  alerts: [],
  addAlert: (alert) => set((state) => ({
    alerts: [alert, ...state.alerts].slice(0, 100)
  })),
  updateSensorData: (segmentId, data) => set((state) => ({
    segments: state.segments.map(segment => 
      segment.id === segmentId 
        ? { ...segment, sensors: [...segment.sensors, data].slice(-100) }
        : segment
    )
  }))
}));