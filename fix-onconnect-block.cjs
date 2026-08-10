const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');
const oldCode = `      // Check if this exact connection exists
      if (eds.find(e => e.source === params.source && e.target === params.target && e.sourceHandle === params.sourceHandle && e.targetHandle === params.targetHandle)) {
        return eds;
      }`;
code = code.replace(oldCode, "");
fs.writeFileSync('src/App.tsx', code);
