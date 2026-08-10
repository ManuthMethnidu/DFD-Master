const fs = require('fs');
let code = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');
code = code.replace(
  /<button onClick=\{\(\) => setNodes[\s\S]*?Dup\n       <\/button>/,
  ""
);
fs.writeFileSync('src/CustomNodes.tsx', code);
