const fs = require('fs');
let code = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');
code = code.replace(
  /data\.error \? 'border-red-500 bg-red-50 text-red-900' : data\.correct \? 'border-green-500 bg-green-50 text-green-900' : 'border-line bg-surface text-ink'/g,
  "data.error ? 'border-red-500 bg-red-50 dark:bg-red-900/30 text-red-900 dark:text-red-200' : data.correct ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-900 dark:text-green-200' : 'border-line bg-surface text-ink'"
);
fs.writeFileSync('src/CustomNodes.tsx', code);
