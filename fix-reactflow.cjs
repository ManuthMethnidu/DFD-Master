const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf-8');
app = app.replace(
  'connectionMode={ConnectionMode.Loose}',
  'connectionMode={ConnectionMode.Loose}\n               isValidConnection={() => true}'
);
fs.writeFileSync('src/App.tsx', app);
