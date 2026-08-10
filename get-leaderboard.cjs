const fs = require('fs');
const content = fs.readFileSync('src/RouterApp.tsx', 'utf-8');
const match = content.match(/function Leaderboard\(\) \{[\s\S]*?\}/);
console.log(match ? match[0] : 'not found');
