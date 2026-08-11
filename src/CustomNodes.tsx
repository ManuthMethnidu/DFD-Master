import { useState, useEffect } from 'react';
import { Handle, Position, NodeResizer, useReactFlow, useNodes, BaseEdge, EdgeLabelRenderer, getSmoothStepPath } from 'reactflow';
import { X } from 'lucide-react';

const DeleteButton = ({ id }: { id: string }) => {
  const { setNodes, setEdges } = useReactFlow();
  return (
    <button 
      onClick={() => {
        setNodes(nds => nds.filter(n => n.id !== id));
        setEdges(eds => eds.filter(e => e.source !== id && e.target !== id));
      }}
      className="absolute -top-3 -right-3 w-6 h-6 bg-surface border-2 border-line rounded-full flex items-center justify-center hover:bg-ink hover:text-canvas z-50 shadow-[2px_2px_0px_0px_rgba(var(--shadow-rgb),1)]"
    >
      <X size={12} strokeWidth={3} />
    </button>
  );
};

const NodeHandles = () => (
  <>
    <Handle type="source" position={Position.Top} id="top" className="w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Bottom} id="bot" className="w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Left} id="left" className="w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Right} id="right" className="w-2 h-2 rounded-none bg-surface border border-line" />
  </>
);

export const EntityNode = ({ data, id, selected }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const [isDuplicate, setIsDuplicate] = useState(data?.isDuplicate || false);
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); setIsDuplicate(data?.isDuplicate || false); }, [data?.label, data?.isDuplicate]);
  const bgColor = data.error ? 'border-ink border-dashed border-4 bg-canvas text-ink' : data.correct ? 'border-ink border-solid border-4 bg-surface text-ink' : 'border-line bg-surface text-ink';
  return (
    <div className={`border-2 rounded-[50%] w-32 h-24 flex flex-col items-center justify-center relative shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] ${bgColor}`}>
       {selected && <DeleteButton id={id} />}
       <NodeHandles />
       
       {isDuplicate && (
         <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
           <line x1="0" y1="30" x2="30" y2="0" stroke="currentColor" strokeWidth="2" />
         </svg>
       )}
       
       
       <textarea value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="w-3/4 h-3/4 text-center bg-transparent outline-none text-base font-mono font-bold p-2 resize-none overflow-hidden flex items-center justify-center z-10" placeholder="Entity Name" />
       <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-sm text-ink font-bold uppercase tracking-wider">Entity</div>
    </div>
  );
};

export const ContextProcessNode = ({ data, id, selected }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); }, [data?.label]);
  const bgColor = data.error ? 'border-ink border-dashed border-4 bg-canvas text-ink' : data.correct ? 'border-ink border-solid border-4 bg-surface text-ink' : 'border-line bg-surface text-ink';
  return (
    <div className={`border-2 w-32 h-24 flex items-center justify-center relative shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] ${bgColor}`}>
       {selected && <DeleteButton id={id} />}
       <NodeHandles />
       <textarea value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="w-full h-3/4 text-center bg-transparent outline-none text-base font-bold p-2 resize-none overflow-hidden" placeholder="Process Name (Noun)" />
       <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-sm text-ink font-bold uppercase tracking-wider whitespace-nowrap">Context Process</div>
    </div>
  );
};

export const DetailedProcessNode = ({ data, id, selected }: any) => {
  const [name, setName] = useState(data?.label || '');
  const [procId, setProcId] = useState(data?.processId || '');
  const [desc, setDesc] = useState(data?.description || '');
  const { setNodes } = useReactFlow();
  
  useEffect(() => { 
    setName(data?.label || ''); 
    setProcId(data?.processId || ''); 
    setDesc(data?.description || ''); 
  }, [data?.label, data?.processId, data?.description]);
  
  const bgColor = data.error ? 'border-ink border-dashed border-4 bg-canvas text-ink' : data.correct ? 'border-ink border-solid border-4 bg-surface text-ink' : 'border-line bg-surface text-ink';
  return (
    <div className={`border-2 w-48 h-32 flex flex-col relative shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] ${bgColor}`}>
       {selected && <DeleteButton id={id} />}
       <NodeHandles />
       <div className="flex flex-1 border-b-2 border-line">
         <div className="w-12 border-r-2 border-line shrink-0 flex items-center justify-center">
            <input value={procId} onChange={e => setProcId(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, processId: procId } } : n))} className="w-full text-center bg-transparent outline-none text-sm font-bold font-mono px-1" placeholder="ID" />
         </div>
         <div className="flex-1 flex items-center justify-center p-1">
            <textarea value={name} onChange={e => setName(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: name } } : n))} className="w-full h-full text-center bg-transparent outline-none text-sm font-bold px-1 resize-none overflow-hidden" placeholder="Name (Noun)" />
         </div>
       </div>
       <div className="flex-1 flex items-center justify-center p-2">
         <textarea value={desc} onChange={e => setDesc(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, description: desc } } : n))} className="w-full h-full text-center bg-transparent outline-none text-sm resize-none overflow-hidden" placeholder="Description (Verb)" />
       </div>
       <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-sm text-ink font-bold uppercase tracking-wider whitespace-nowrap">Level 1/2 Process</div>
    </div>
  );
};

export const ProcessNode = ({ data, id, selected }: any) => {
  return data?.isContext ? <ContextProcessNode data={data} id={id} selected={selected} /> : <DetailedProcessNode data={data} id={id} selected={selected} />;
};

export const DataStoreNode = ({ data, id, selected }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const [storeId, setStoreId] = useState(data?.storeId || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); setStoreId(data?.storeId || ''); }, [data?.label, data?.storeId]);
  const bgColor = data.error ? 'border-ink border-dashed border-4 bg-canvas text-ink' : data.correct ? 'border-ink border-solid border-4 bg-surface text-ink' : 'border-line bg-surface text-ink';
  return (
    <div className={`border-y-2 border-l-2 border-r-0 w-44 h-16 flex items-center relative shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] ${bgColor}`}>
       {selected && <DeleteButton id={id} />}
       <NodeHandles />
       <div className="border-r-2 border-line h-full flex flex-col items-center justify-center w-12 shrink-0">
          <input value={storeId} onChange={e => setStoreId(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, storeId: storeId } } : n))} className="w-full text-center bg-transparent outline-none font-mono font-bold text-base" placeholder="D1" />
       </div>
       <div className="flex-1 h-full p-2 flex items-center">
         <textarea value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="w-full h-full bg-transparent outline-none text-base font-mono resize-none overflow-hidden" placeholder="Data Store Name" />
       </div>
       <div className="absolute -top-5 left-0 text-sm text-ink font-bold uppercase tracking-wider whitespace-nowrap">Data Store</div>
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
      <div className="w-full h-full min-w-[100px] min-h-[100px] bg-yellow-200 border border-yellow-400 p-3 shadow-[4px_4px_0px_0px_rgba(202,138,4,0.5)] flex flex-col relative rotate-[-2deg]">
         {selected && <DeleteButton id={id} />}
         <div className="w-full h-4 bg-yellow-300 mb-2 opacity-50 shrink-0"></div>
         <textarea
            value={val}
            onChange={e => setVal(e.target.value)}
            onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))}
            className="w-full h-full bg-transparent outline-none text-base font-sans resize-none overflow-hidden text-black"
            placeholder="Add a note..."
          />
      </div>
    </>
  );
};

export const CustomEdge = ({ id, source, target, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, markerEnd, data, selected, animated }: any) => {
  const { setEdges, getNode, getEdges } = useReactFlow();
  const edges = getEdges();
  
  // Check for bidirectional or duplicate edges
  const isBidirectional = edges.some(e => e.source === target && e.target === source);
  const duplicateEdges = edges.filter(e => e.source === source && e.target === target);
  const edgeIndex = duplicateEdges.findIndex(e => e.id === id);
  
  let edgePath, labelX, labelY;
  const path = getSmoothStepPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, borderRadius: 0 });
  edgePath = path[0];
  labelX = path[1];
  labelY = path[2];

  if (isBidirectional || duplicateEdges.length > 1) {
    const offset = (edgeIndex * 20) + (isBidirectional && source > target ? 30 : 0);
    labelY -= offset; // Offset label vertically
  }
  const [val, setVal] = useState(data?.label || '');
  useEffect(() => { setVal(data?.label || ''); }, [data?.label]);
  
  const sourceNode = getNode(source);
  const targetNode = getNode(target);
  const isEntityToEntity = sourceNode?.type === 'entity' && targetNode?.type === 'entity';
  
  const strokeColor = 'var(--color-border)';
  const strokeDasharray = isEntityToEntity ? '6 6' : 'none';

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ ...style, stroke: strokeColor, strokeWidth: selected ? 3 : 2, strokeDasharray }}  />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -100%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
            paddingBottom: '6px'
          }}
          className="nodrag nopan"
        >
          <div className="relative">
             {selected && (
               <button 
                 onClick={() => setEdges(eds => eds.filter(e => e.id !== id))}
                 className="absolute -top-3 -right-3 w-5 h-5 bg-surface border border-line rounded-full flex items-center justify-center hover:bg-ink hover:text-canvas text-ink z-50 shadow-[1px_1px_0px_0px_rgba(var(--shadow-rgb),1)]"
               >
                 <X size={10} strokeWidth={3} />
               </button>
             )}
            <input
              value={val}
              onChange={e => setVal(e.target.value)}
              onBlur={() => setEdges((eds) => eds.map(edge => edge.id === id ? { ...edge, data: { ...edge.data, label: val } } : edge))}
              className={`bg-surface border-2 text-sm font-mono px-2 py-1 outline-none w-28 text-center shadow-[2px_2px_0px_0px_rgba(var(--shadow-rgb),1)] ${data?.error ? 'border-ink border-dashed' : data?.correct ? 'border-ink font-bold' : 'border-line text-ink'}`}
              placeholder="Flow Label"
            />
          </div>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};
