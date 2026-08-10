const fs = require('fs');
let code = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');

const oldDataStoreNode = code.match(/export const DataStoreNode = \(\{\s*data,\s*id,\s*selected\s*\}\s*:\s*any\) => \{[\s\S]*?^};\n/m)[0];

const newDataStoreNode = `export const DataStoreNode = ({ data, id, selected }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const [storeId, setStoreId] = useState(data?.storeId || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); setStoreId(data?.storeId || ''); }, [data?.label, data?.storeId]);
  const bgColor = data.error ? 'border-red-500 bg-red-50 text-red-900' : data.correct ? 'border-green-500 bg-green-50 text-green-900' : 'border-line bg-surface text-ink';
  return (
    <div className={\`border-y-2 border-l-2 border-r-0 w-44 h-16 flex items-center relative shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] \${bgColor}\`}>
       {selected && <DeleteButton id={id} />}
       <NodeHandles />
       <div className="border-r-2 border-line h-full flex items-center w-12 shrink-0">
          <input value={storeId} onChange={e => setStoreId(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, storeId: storeId } } : n))} className="w-full text-center bg-transparent outline-none font-mono font-bold text-sm" placeholder="D1" />
       </div>
       <div className="flex-1 h-full p-2 flex items-center">
         <textarea value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="w-full h-full bg-transparent outline-none text-sm font-mono resize-none overflow-hidden" placeholder="Data Store" />
       </div>
       <div className="absolute -top-5 left-0 text-[9px] text-muted font-bold uppercase tracking-wider">Data Store</div>
    </div>
  );
};
`;
code = code.replace(oldDataStoreNode, newDataStoreNode);

const oldEntityNode = code.match(/export const EntityNode = \(\{\s*data,\s*id,\s*selected\s*\}\s*:\s*any\) => \{[\s\S]*?^};\n/m)[0];

const newEntityNode = `export const EntityNode = ({ data, id, selected }: any) => {
  const [val, setVal] = useState(data?.label || '');
  const { setNodes } = useReactFlow();
  useEffect(() => { setVal(data?.label || ''); }, [data?.label]);
  const bgColor = data.error ? 'border-red-500 bg-red-50 text-red-900' : data.correct ? 'border-green-500 bg-green-50 text-green-900' : 'border-line bg-surface text-ink';
  return (
    <div className={\`border-2 rounded-[50%] w-32 h-24 flex flex-col items-center justify-center relative shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] \${bgColor}\`}>
       {selected && <DeleteButton id={id} />}
       <NodeHandles />
       <textarea value={val} onChange={e => setVal(e.target.value)} onBlur={() => setNodes(nds => nds.map(n => n.id === id ? { ...n, data: { ...n.data, label: val } } : n))} className="w-3/4 h-3/4 text-center bg-transparent outline-none text-sm font-mono font-bold p-2 resize-none overflow-hidden flex items-center justify-center" placeholder="Entity Name" />
       <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-muted font-bold uppercase tracking-wider">Entity</div>
    </div>
  );
};
`;
code = code.replace(oldEntityNode, newEntityNode);

fs.writeFileSync('src/CustomNodes.tsx', code);
