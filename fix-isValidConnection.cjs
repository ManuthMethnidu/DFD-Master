const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf-8');
app = app.replace(
  'isValidConnection={() => true}',
  'isValidConnection={(conn) => conn.source !== conn.target}'
);
fs.writeFileSync('src/App.tsx', app);
