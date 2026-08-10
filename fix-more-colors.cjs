const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf-8');
app = app.replace(/text-red-600/g, 'text-ink');
app = app.replace(/text-red-700/g, 'text-ink');
app = app.replace(/text-green-600/g, 'text-ink');
fs.writeFileSync('src/App.tsx', app);

let router = fs.readFileSync('src/RouterApp.tsx', 'utf-8');
router = router.replace(/text-red-500/g, 'text-ink');
router = router.replace(/text-emerald-600/g, 'text-ink');
fs.writeFileSync('src/RouterApp.tsx', router);

let customNodes = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');
customNodes = customNodes.replace(/hover:bg-red-100 hover:text-red-600/g, 'hover:bg-ink hover:text-canvas');
fs.writeFileSync('src/CustomNodes.tsx', customNodes);

