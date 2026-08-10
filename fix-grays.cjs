const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf-8');

app = app.replace(/text-gray-400/g, 'text-muted');
app = app.replace(/text-gray-[5-9]00/g, 'text-ink');
app = app.replace(/bg-gray-50/g, 'bg-canvas');
app = app.replace(/bg-gray-100/g, 'bg-canvas');
app = app.replace(/bg-gray-200/g, 'bg-surface hover:bg-canvas');
app = app.replace(/border-gray-[0-9]00/g, 'border-line');

fs.writeFileSync('src/App.tsx', app);
