const fs = require('fs');
let code = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');

const newHandles = `
const NodeHandles = () => (
  <>
    <Handle type="source" position={Position.Top} id="top" className="!w-full !h-4 !opacity-0 !top-0" style={{ transform: 'translate(0, -50%)', left: 0, borderRadius: 0 }} />
    <Handle type="source" position={Position.Bottom} id="bot" className="!w-full !h-4 !opacity-0 !bottom-0" style={{ transform: 'translate(0, 50%)', left: 0, borderRadius: 0 }} />
    <Handle type="source" position={Position.Left} id="left" className="!h-full !w-4 !opacity-0 !left-0" style={{ transform: 'translate(-50%, 0)', top: 0, borderRadius: 0 }} />
    <Handle type="source" position={Position.Right} id="right" className="!h-full !w-4 !opacity-0 !right-0" style={{ transform: 'translate(50%, 0)', top: 0, borderRadius: 0 }} />
  </>
);
`;

code = code.replace(/const NodeHandles = \(\) => \([\s\S]*?<\/>\n\);/, newHandles.trim());
fs.writeFileSync('src/CustomNodes.tsx', code);
