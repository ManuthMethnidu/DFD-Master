import React, { useState, useEffect } from 'react';
import { Handle, Position, BaseEdge, EdgeLabelRenderer, getSmoothStepPath, useReactFlow } from 'reactflow';
import { X } from 'lucide-react';
import { NodeResizer } from '@reactflow/node-resizer';
import '@reactflow/node-resizer/dist/style.css';

const DeleteButton = ({ id }: { id: string }) => {
  const { setNodes, setEdges } = useReactFlow();
  return (
    <button 
      onClick={() => {
        setNodes(nds => nds.filter(n => n.id !== id));
        setEdges(eds => eds.filter(e => e.source !== id && e.target !== id));
      }}
      className="!z-50 absolute -top-3 -right-3 w-6 h-6 bg-surface border-2 border-line rounded-full flex items-center justify-center hover:bg-red-100 hover:text-red-600 z-50 shadow-[2px_2px_0px_0px_rgba(var(--shadow-rgb),1)]"
    >
      <X size={12} strokeWidth={3} />
    </button>
  );
};

const NodeHandles = () => (
  <>
    {/* Top */}
    <Handle type="source" position={Position.Top} id="top-1" style={{ left: '25%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Top} id="top-2" style={{ left: '50%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Top} id="top-3" style={{ left: '75%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    {/* Bottom */}
    <Handle type="source" position={Position.Bottom} id="bot-1" style={{ left: '25%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Bottom} id="bot-2" style={{ left: '50%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Bottom} id="bot-3" style={{ left: '75%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    {/* Left */}
    <Handle type="source" position={Position.Left} id="left-1" style={{ top: '25%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Left} id="left-2" style={{ top: '50%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Left} id="left-3" style={{ top: '75%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    {/* Right */}
    <Handle type="source" position={Position.Right} id="right-1" style={{ top: '25%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Right} id="right-2" style={{ top: '50%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Right} id="right-3" style={{ top: '75%' }} className="!z-50 w-2 h-2 rounded-none bg-surface border border-line" />
  </>
);

export const EntityNode = ({ data, id, selected }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); }, [data?.label]);
  const bgColor = data.error ? 'border-red-500 bg-red-50 text-red-900' : data.correct ? 'border-green-500 bg-green-50 text-green-900' : 'border-line bg-surface text-ink';
  return (
    <div className={`border-2 rounded-[50%] w-32 h-24 flex flex-col items-center justify-center relative shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] ${bgColor}`}>
       {selected && <DeleteButton id={id} />}
       <NodeHandles />
       <input value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="!z-50 w-full text-center bg-transparent outline-none text-sm font-mono font-bold px-4" placeholder="Entity Name" />
       <div className="!z-50 absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-muted font-bold uppercase tracking-wider">Entity</div>
    </div>
  );
};

export const ProcessNode = ({ data, id, selected }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const [procId, setProcId] = useState(data?.processId || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); setProcId(data?.processId || ''); }, [data?.label, data?.processId]);
  const bgColor = data.error ? 'border-red-500 bg-red-50 text-red-900' : data.correct ? 'border-green-500 bg-green-50 text-green-900' : 'border-line bg-surface text-ink';
  return (
    <div className={`border-2 rounded-2xl w-36 h-28 flex flex-col items-center justify-center relative shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] ${bgColor}`}>
       {selected && <DeleteButton id={id} />}
       <NodeHandles />
       <div className="!z-50 border-b border-line w-full text-center pb-1 mb-1 absolute top-[15%] px-8 flex justify-center">
         <input value={procId} onChange={e => setProcId(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, processId: procId } } : n))} className="!z-50 w-12 text-center bg-transparent outline-none text-[9px] font-bold font-mono" placeholder="ID (e.g. 1)" />
       </div>
       <input value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="!z-50 w-full text-center bg-transparent outline-none text-sm font-bold mt-4 px-4" placeholder="Process Name" />
       <div className="!z-50 absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-muted font-bold uppercase tracking-wider">Process</div>
    </div>
  );
};

export const DataStoreNode = ({ data, id, selected }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const [storeId, setStoreId] = useState(data?.storeId || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); setStoreId(data?.storeId || ''); }, [data?.label, data?.storeId]);
  const bgColor = data.error ? 'border-red-500 bg-red-50 text-red-900' : data.correct ? 'border-green-500 bg-green-50 text-green-900' : 'border-line bg-surface text-ink';
  return (
    <div className={`border-y-2 border-l-2 border-r-0 w-44 h-16 flex items-center px-4 relative shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] ${bgColor}`}>
       {selected && <DeleteButton id={id} />}
       <NodeHandles />
       <div className="!z-50 border-r border-line pr-2 mr-2 h-full flex items-center w-12 shrink-0">
          <input value={storeId} onChange={e => setStoreId(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, storeId: storeId } } : n))} className="!z-50 w-full bg-transparent outline-none font-mono font-bold text-sm" placeholder="D1" />
       </div>
       <input value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="!z-50 w-full bg-transparent outline-none text-sm font-mono" placeholder="Data Store" />
       <div className="!z-50 absolute -top-5 left-0 text-[9px] text-muted font-bold uppercase tracking-wider">Data Store</div>
    </div>
  );
};

export const NoteNode = ({ data, id, selected }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); }, [data?.label]);
  return (
    <>
      <NodeResizer color="#ca8a04" isVisible={selected} minWidth={100} minHeight={100} />
      <div className="!z-50 w-full h-full min-w-[100px] min-h-[100px] bg-yellow-200 border border-yellow-400 p-3 shadow-[4px_4px_0px_0px_rgba(202,138,4,0.5)] flex flex-col relative rotate-[-2deg]">
         {selected && <DeleteButton id={id} />}
         <div className="!z-50 w-full h-4 bg-yellow-300 mb-2 opacity-50 shrink-0"></div>
         <textarea 
           value={val} 
           onChange={e => setVal(e.target.value)} 
           onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} 
           className="!z-50 w-full h-full bg-transparent outline-none text-sm font-sans resize-none overflow-hidden text-black" 
           placeholder="Add a note..." 
         />
      </div>
    </>
  );
};

export const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, markerEnd, data, selected, animated }: any) => {
  const [edgePath, labelX, labelY] = getSmoothStepPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });
  const { setEdges } = useReactFlow();
  const [val, setVal] = useState(data?.label || '');
  useEffect(() => { setVal(data?.label || ''); }, [data?.label]);
  const strokeColor = data?.error ? '#ef4444' : data?.correct ? '#22c55e' : (selected ? '#3b82f6' : 'var(--color-border)');

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ ...style, stroke: strokeColor, strokeWidth: selected ? 3 : 2 }} className={animated ? 'animated-edge' : ''} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
          className="!z-50 nodrag nopan"
        >
          <div className="!z-50 relative">
             {selected && (
               <button 
                 onClick={() => setEdges(eds => eds.filter(e => e.id !== id))}
                 className="!z-50 absolute -top-3 -right-3 w-5 h-5 bg-surface border border-line rounded-full flex items-center justify-center hover:bg-red-100 text-red-600 z-50 shadow-[1px_1px_0px_0px_rgba(var(--shadow-rgb),1)]"
               >
                 <X size={10} strokeWidth={3} />
               </button>
             )}
            <input
              value={val}
              onChange={e => setVal(e.target.value)}
              onBlur={() => setEdges((eds) => eds.map(edge => edge.id === id ? { ...edge, data: { ...edge.data, label: val } } : edge))}
              className={`bg-surface border-2 text-xs font-mono px-2 py-1 outline-none w-28 text-center shadow-[2px_2px_0px_0px_rgba(var(--shadow-rgb),1)] ${data?.error ? 'border-red-500 text-red-700' : data?.correct ? 'border-green-500 text-green-700' : 'border-line text-ink'}`}
              placeholder="Flow Label"
            />
          </div>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

