import React, { useState, useEffect } from 'react';
import { Handle, Position, BaseEdge, EdgeLabelRenderer, getBezierPath, useReactFlow } from 'reactflow';

export const EntityNode = ({ data, id }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); }, [data?.label]);
  const bgColor = data.error ? 'border-red-500 bg-red-50 text-red-900' : data.correct ? 'border-green-500 bg-green-50 text-green-900' : 'border-black bg-white text-black';
  return (
    <div className={`border-2 w-32 h-32 flex flex-col items-center justify-center relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${bgColor}`}>
       <Handle type="target" position={Position.Top} className="w-2 h-2 rounded-none bg-black border-black" />
       <Handle type="source" position={Position.Bottom} className="w-2 h-2 rounded-none bg-black border-black" />
       <Handle type="target" position={Position.Left} className="w-2 h-2 rounded-none bg-black border-black" />
       <Handle type="source" position={Position.Right} className="w-2 h-2 rounded-none bg-black border-black" />
       <input value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="w-full text-center bg-transparent outline-none text-sm font-mono font-bold px-2" placeholder="Entity Name" />
       <div className="absolute -top-5 left-0 text-[9px] text-gray-500 font-bold uppercase tracking-wider">Entity</div>
    </div>
  );
};

export const ProcessNode = ({ data, id }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); }, [data?.label]);
  const bgColor = data.error ? 'border-red-500 bg-red-50 text-red-900' : data.correct ? 'border-green-500 bg-green-50 text-green-900' : 'border-black bg-white text-black';
  return (
    <div className={`border-2 rounded-full w-40 h-40 flex flex-col items-center justify-center relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${bgColor}`}>
       <Handle type="target" position={Position.Top} className="w-2 h-2 rounded-none bg-black border-black" />
       <Handle type="source" position={Position.Bottom} className="w-2 h-2 rounded-none bg-black border-black" />
       <Handle type="target" position={Position.Left} className="w-2 h-2 rounded-none bg-black border-black" />
       <Handle type="source" position={Position.Right} className="w-2 h-2 rounded-none bg-black border-black" />
       <div className="border-b border-black w-full text-center pb-1 mb-1 absolute top-[25%] px-8">
         <span className="text-[9px] font-bold font-mono">0.0</span>
       </div>
       <input value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="w-full text-center bg-transparent outline-none text-sm font-bold mt-4 px-4" placeholder="Process Name" />
       <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 font-bold uppercase tracking-wider">Process</div>
    </div>
  );
};

export const DataStoreNode = ({ data, id }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); }, [data?.label]);
  const bgColor = data.error ? 'border-red-500 bg-red-50 text-red-900' : data.correct ? 'border-green-500 bg-green-50 text-green-900' : 'border-black bg-white text-black';
  return (
    <div className={`border-y-2 border-l-2 border-r-0 w-44 h-16 flex items-center px-4 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${bgColor}`}>
       <Handle type="target" position={Position.Top} className="w-2 h-2 rounded-none bg-black border-black" />
       <Handle type="source" position={Position.Bottom} className="w-2 h-2 rounded-none bg-black border-black" />
       <Handle type="target" position={Position.Left} className="w-2 h-2 rounded-none bg-black border-black" />
       <Handle type="source" position={Position.Right} className="w-2 h-2 rounded-none bg-black border-black" />
       <div className="border-r border-black pr-3 mr-3 h-full flex items-center">
          <span className="font-mono font-bold text-sm">D1</span>
       </div>
       <input value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="w-full bg-transparent outline-none text-sm font-mono" placeholder="Data Store" />
       <div className="absolute -top-5 left-0 text-[9px] text-gray-500 font-bold uppercase tracking-wider">Data Store</div>
    </div>
  );
};

export const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, markerEnd, data }: any) => {
  const [edgePath, labelX, labelY] = getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });
  const { setEdges } = useReactFlow();
  const [val, setVal] = useState(data?.label || '');
  useEffect(() => { setVal(data?.label || ''); }, [data?.label]);
  const strokeColor = data?.error ? '#ef4444' : data?.correct ? '#22c55e' : '#000000';

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ ...style, stroke: strokeColor, strokeWidth: 2 }} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
          className="nodrag nopan"
        >
          <input
            value={val}
            onChange={e => setVal(e.target.value)}
            onBlur={() => setEdges((eds) => eds.map(edge => edge.id === id ? { ...edge, data: { ...edge.data, label: val } } : edge))}
            className={`bg-white border-2 text-xs font-mono px-2 py-1 outline-none w-28 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${data?.error ? 'border-red-500 text-red-700' : data?.correct ? 'border-green-500 text-green-700' : 'border-black text-black'}`}
            placeholder="Flow Label"
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
};
