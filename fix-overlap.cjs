const fs = require('fs');
let code = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');

const newHandles = `
const NodeHandles = () => (
  <>
    <Handle type="source" position={Position.Top} id="top" className="w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Bottom} id="bot" className="w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Left} id="left" className="w-2 h-2 rounded-none bg-surface border border-line" />
    <Handle type="source" position={Position.Right} id="right" className="w-2 h-2 rounded-none bg-surface border border-line" />
  </>
);
`;

code = code.replace(/const NodeHandles = \(\) => \([\s\S]*?<\/>\n\);/, newHandles.trim());
fs.writeFileSync('src/CustomNodes.tsx', code);
