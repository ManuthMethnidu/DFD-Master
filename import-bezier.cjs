const fs = require('fs');
let code = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');
code = code.replace(
  "EdgeLabelRenderer, getSmoothStepPath } from 'reactflow';",
  "EdgeLabelRenderer, getSmoothStepPath, getBezierPath } from 'reactflow';"
);
fs.writeFileSync('src/CustomNodes.tsx', code);
