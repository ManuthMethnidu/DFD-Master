const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf-8');
app = app.replace(
  'let idealType: string = idealNode.type;',
  '' // This was wrong
);
app = app.replace(
  'let idealType = idealMatch?.type;',
  'let idealType: string = idealMatch?.type || "";'
);
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

let cn = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');
cn = cn.replace(
  /className=\{animated \? 'animated-edge' : ''\}/,
  ""
);
fs.writeFileSync('src/CustomNodes.tsx', cn);

