import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  ConnectionMode,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';

// Custom node types
const CustomTankNode = ({ data }: { data: any }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-gray-200">
    <div className="w-20 h-32 relative bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
      <div 
        className="absolute bottom-0 left-0 right-0 bg-gray-600 transition-all duration-500"
        style={{ height: `${data.fillLevel}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-gray-700">{data.fillLevel}%</span>
      </div>
    </div>
    <div className="mt-2 text-center text-sm font-medium text-gray-700">{data.label}</div>
  </div>
);

const CustomPumpNode = ({ data }: { data: any }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-gray-200">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
      data.isActive ? 'bg-green-100' : 'bg-red-100'
    }`}>
      <div className={`w-12 h-12 rounded-full border-4 ${
        data.isActive ? 'border-green-500 animate-spin' : 'border-red-500'
      }`} />
    </div>
    <div className="mt-2 text-center text-sm font-medium text-gray-700">{data.label}</div>
  </div>
);

const CustomValveNode = ({ data }: { data: any }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-gray-200">
    <div 
      className={`w-16 h-16 rounded-full flex items-center justify-center ${
        data.isOpen ? 'bg-green-100' : 'bg-red-100'
      }`}
      onClick={data.onClick}
    >
      <div className={`w-8 h-8 rotate-${data.isOpen ? '0' : '90'} transition-transform duration-300`}>
        ⬍
      </div>
    </div>
    <div className="mt-2 text-center text-sm font-medium text-gray-700">{data.label}</div>
  </div>
);

const nodeTypes = {
  tank: CustomTankNode,
  pump: CustomPumpNode,
  valve: CustomValveNode,
};

export const ReactFlowPipeline = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: 'source-tank-1',
      type: 'tank',
      position: { x: 50, y: 50 },
      data: { label: 'Source Tank 1', fillLevel: 85 },
      sourcePosition: Position.Right,
    },
    {
      id: 'source-tank-2',
      type: 'tank',
      position: { x: 50, y: 200 },
      data: { label: 'Source Tank 2', fillLevel: 70 },
      sourcePosition: Position.Right,
    },
    {
      id: 'pump-1',
      type: 'pump',
      position: { x: 300, y: 125 },
      data: { label: 'Main Pump', isActive: true },
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: 'valve-1',
      type: 'valve',
      position: { x: 550, y: 125 },
      data: { 
        label: 'Control Valve', 
        isOpen: true,
        onClick: () => {
          setNodes(nds => 
            nds.map(node => {
              if (node.id === 'valve-1') {
                return {
                  ...node,
                  data: {
                    ...node.data,
                    isOpen: !node.data.isOpen,
                  },
                };
              }
              return node;
            })
          );
        },
      },
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
    },
    {
      id: 'dest-tank-1',
      type: 'tank',
      position: { x: 800, y: 50 },
      data: { label: 'Storage Tank 1', fillLevel: 30 },
      targetPosition: Position.Left,
    },
    {
      id: 'dest-tank-2',
      type: 'tank',
      position: { x: 800, y: 200 },
      data: { label: 'Storage Tank 2', fillLevel: 45 },
      targetPosition: Position.Left,
    },
  ]);

  const [edges, setEdges, onEdgesChange] = useEdgesState([
    { id: 'e1-2', source: 'source-tank-1', target: 'pump-1', animated: true, style: { stroke: '#16a34a' } },
    { id: 'e1-3', source: 'source-tank-2', target: 'pump-1', animated: true, style: { stroke: '#16a34a' } },
    { id: 'e2-3', source: 'pump-1', target: 'valve-1', animated: true, style: { stroke: '#16a34a' } },
    { id: 'e3-4', source: 'valve-1', target: 'dest-tank-1', animated: true, style: { stroke: '#16a34a' } },
    { id: 'e3-5', source: 'valve-1', target: 'dest-tank-2', animated: true, style: { stroke: '#16a34a' } },
  ]);

  const onConnect = useCallback((params: any) => 
    setEdges((eds) => addEdge({ ...params, animated: true }, eds)), 
    [setEdges]
  );

  return (
    <div className="h-[800px] bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};