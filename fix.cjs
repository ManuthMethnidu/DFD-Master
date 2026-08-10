const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');
code = code.replace(
  'let idealType = idealNode.type;',
  'let idealType: string = idealNode.type;'
);
fs.writeFileSync('src/App.tsx', code);

let cn = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');
cn = cn.replace(
  'className="react-flow__edge-path"',
  ''
);
fs.writeFileSync('src/CustomNodes.tsx', cn);
