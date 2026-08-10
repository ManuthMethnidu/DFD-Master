const fs = require('fs');
let code = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');

code = code.replace(
  /<textarea value=\{val\}([\s\S]*?)className="w-3\/4 h-3\/4 text-center bg-transparent outline-none text-sm font-mono font-bold p-2 resize-none overflow-hidden flex items-center justify-center" placeholder="Entity Name" \/>/,
  '<input value={val}$1className="w-full text-center bg-transparent outline-none text-sm font-mono font-bold px-4" placeholder="Entity Name" />'
);

code = code.replace(
  /<div className="flex-1 flex items-center justify-center p-2">\s*<textarea value=\{val\}([\s\S]*?)className="w-full h-full text-center bg-transparent outline-none text-sm font-bold resize-none overflow-hidden" placeholder="Process Name" \/>\s*<\/div>/,
  '<input value={val}$1className="w-full text-center bg-transparent outline-none text-sm font-bold mt-2 px-4" placeholder="Process Name" />'
);

code = code.replace(
  /<div className="flex-1 h-full p-2 flex items-center">\s*<textarea value=\{val\}([\s\S]*?)className="w-full h-full bg-transparent outline-none text-sm font-mono resize-none overflow-hidden" placeholder="Data Store" \/>\s*<\/div>/,
  '<input value={val}$1className="w-full bg-transparent outline-none text-sm font-mono px-2" placeholder="Data Store" />'
);

fs.writeFileSync('src/CustomNodes.tsx', code);
