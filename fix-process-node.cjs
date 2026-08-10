const fs = require('fs');
let code = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');

const oldProcessNode = code.match(/export const ProcessNode = \(\{\s*data,\s*id,\s*selected\s*\}\s*:\s*any\) => \{[\s\S]*?^};\n/m)[0];

const newProcessNode = `export const ProcessNode = ({ data, id, selected }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const [procId, setProcId] = useState(data?.processId || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); setProcId(data?.processId || ''); }, [data?.label, data?.processId]);
  const bgColor = data.error ? 'border-red-500 bg-red-50 text-red-900' : data.correct ? 'border-green-500 bg-green-50 text-green-900' : 'border-line bg-surface text-ink';
  return (
    <div className={\`border-2 rounded-2xl w-36 h-28 flex flex-col relative shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] \${bgColor}\`}>
       {selected && <DeleteButton id={id} />}
       <NodeHandles />
       <div className="border-b-2 border-line w-full h-8 flex items-center justify-center shrink-0">
         <input value={procId} onChange={e => setProcId(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, processId: procId } } : n))} className="w-full text-center bg-transparent outline-none text-[10px] font-bold font-mono px-2" placeholder="ID (e.g. 1)" />
       </div>
       <div className="flex-1 flex items-center justify-center p-2">
         <textarea value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="w-full h-full text-center bg-transparent outline-none text-sm font-bold resize-none overflow-hidden" placeholder="Process Name" />
       </div>
       <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-muted font-bold uppercase tracking-wider">Process</div>
    </div>
  );
};
`;

code = code.replace(oldProcessNode, newProcessNode);
fs.writeFileSync('src/CustomNodes.tsx', code);
