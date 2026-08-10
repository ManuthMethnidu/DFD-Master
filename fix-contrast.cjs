const fs = require('fs');

// 1. Update index.css
let css = fs.readFileSync('src/index.css', 'utf-8');
css = css.replace('--color-ink-muted: #6b7280;', '--color-ink-muted: #4b5563;'); // darker gray in light mode
css = css.replace('--color-ink-muted: #9ca3af;', '--color-ink-muted: #d1d5db;'); // lighter gray in dark mode
fs.writeFileSync('src/index.css', css);

// 2. Update App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf-8');
// Fix gray-700 / bg-gray-50
app = app.replace(
  'text-xs font-serif leading-relaxed text-gray-700 italic bg-gray-50 p-3 border-l-2 border-line',
  'text-xs font-serif leading-relaxed text-ink italic bg-canvas p-3 border-l-2 border-line'
);

// Fix bg-amber-50 etc in App.tsx
app = app.replace(
  "n.type.includes('entity') ? 'bg-amber-50' : n.type.includes('process') ? 'bg-sky-50' : 'bg-emerald-50'",
  "n.type.includes('entity') ? 'bg-amber-50 dark:bg-amber-900/30 dark:text-amber-200' : n.type.includes('process') ? 'bg-sky-50 dark:bg-sky-900/30 dark:text-sky-200' : 'bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-200'"
);

fs.writeFileSync('src/App.tsx', app);
