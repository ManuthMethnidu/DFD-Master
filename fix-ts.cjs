const fs = require('fs');

// 1. Fix CustomNodes.tsx BaseEdge className
let cn = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');
cn = cn.replace(
  '<BaseEdge path={edgePath} markerEnd={markerEnd} style={style} className="react-flow__edge-path" />',
  '<BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />'
);
fs.writeFileSync('src/CustomNodes.tsx', cn);

// 2. Fix App.tsx types
let app = fs.readFileSync('src/App.tsx', 'utf-8');
app = app.replace(
  /type === 'process'/g,
  "type.includes('process')"
);
app = app.replace(
  /type === 'contextProcess'/g,
  "type.includes('contextProcess')"
);
app = app.replace(
  /type === 'detailedProcess'/g,
  "type.includes('detailedProcess')"
);
app = app.replace(
  /type === 'dataStore'/g,
  "type.includes('dataStore')"
);
app = app.replace(
  /type === 'entity'/g,
  "type.includes('entity')"
);
fs.writeFileSync('src/App.tsx', app);
