const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf-8');
code = code.replace(/\.dark \{[\s\S]*?\}/, '');
fs.writeFileSync('src/index.css', code);
