const fs = require('fs');

// Fix App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf-8');

app = app.replace(
  "n.type.includes('entity') ? 'bg-amber-50 dark:bg-amber-900/30 dark:text-amber-200' : n.type.includes('process') ? 'bg-sky-50 dark:bg-sky-900/30 dark:text-sky-200' : 'bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-200'",
  "n.type.includes('entity') ? 'bg-surface text-ink' : n.type.includes('process') ? 'bg-canvas text-ink' : 'bg-surface text-ink'"
);

app = app.replace(/text-emerald-500/g, 'text-ink');
app = app.replace(/text-red-500/g, 'text-ink');
app = app.replace(/text-emerald-600/g, 'text-ink');

fs.writeFileSync('src/App.tsx', app);

// Fix CustomNodes.tsx
let nodes = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');

nodes = nodes.replace(
  /const bgColor = data\.error \? 'border-red-500 bg-red-50 dark:bg-red-900\/30 text-red-900 dark:text-red-200' : data\.correct \? 'border-green-500 bg-green-50 dark:bg-green-900\/30 text-green-900 dark:text-green-200' : 'border-line bg-surface text-ink';/g,
  "const bgColor = data.error ? 'border-ink border-dashed border-4 bg-canvas text-ink' : data.correct ? 'border-ink border-solid border-4 bg-surface text-ink' : 'border-line bg-surface text-ink';"
);

nodes = nodes.replace(
  /const strokeColor = data\?\.error \? '#ef4444' : data\?\.correct \? '#22c55e' : \(selected \? '#3b82f6' : 'var\(--color-border\)'\);/g,
  "const strokeColor = 'var(--color-border)';"
);

nodes = nodes.replace(
  /className=\{`bg-surface border-2 text-xs font-mono px-2 py-1 outline-none w-28 text-center shadow-\[2px_2px_0px_0px_rgba\(var\(--shadow-rgb\),1\)\] \$\{data\?\.error \? 'border-red-500 text-red-700' : data\?\.correct \? 'border-green-500 text-green-700' : 'border-line text-ink'\}`\}/g,
  "className={`bg-surface border-2 text-xs font-mono px-2 py-1 outline-none w-28 text-center shadow-[2px_2px_0px_0px_rgba(var(--shadow-rgb),1)] ${data?.error ? 'border-ink border-dashed' : data?.correct ? 'border-ink font-bold' : 'border-line text-ink'}`}"
);

nodes = nodes.replace(/hover:bg-red-100 text-red-600/g, 'hover:bg-ink hover:text-canvas text-ink');

fs.writeFileSync('src/CustomNodes.tsx', nodes);

// Fix RouterApp.tsx
let router = fs.readFileSync('src/RouterApp.tsx', 'utf-8');

router = router.replace(/text-red-600/g, 'text-ink');
router = router.replace(/hover:bg-red-50/g, 'hover:bg-ink');
router = router.replace(/hover:text-red-900/g, 'hover:text-canvas');
router = router.replace(/hover:border-red-600/g, 'hover:border-ink');
router = router.replace(/border-red-500 bg-red-50 text-red-900/g, 'border-ink bg-canvas text-ink border-dashed');

router = router.replace(
  /if \(score >= 1000\) return 'text-amber-500 border-amber-500 bg-amber-50 dark:bg-amber-900\/30';/g,
  "if (score >= 1000) return 'text-ink border-ink bg-canvas font-black';"
);
router = router.replace(
  /if \(score >= 500\) return 'text-slate-500 border-slate-500 bg-slate-50 dark:bg-slate-800\/50';/g,
  "if (score >= 500) return 'text-ink border-ink bg-surface border-dashed';"
);
router = router.replace(
  /if \(score >= 250\) return 'text-amber-700 border-amber-700 bg-orange-50 dark:bg-orange-900\/30';/g,
  "if (score >= 250) return 'text-ink border-ink bg-canvas';"
);
router = router.replace(
  /if \(score >= 100\) return 'text-emerald-500 border-emerald-500 bg-emerald-50 dark:bg-emerald-900\/30';/g,
  "if (score >= 100) return 'text-ink border-ink bg-surface border-dotted';"
);
router = router.replace(
  /return 'text-sky-500 border-sky-500 bg-sky-50 dark:bg-sky-900\/30';/g,
  "return 'text-ink border-ink bg-surface';"
);

router = router.replace(
  /idx === 0 \? 'bg-amber-100 dark:bg-amber-900 shadow-\[8px_8px_0px_0px_rgba\(var\(--shadow-rgb\),1\)\] -translate-y-1 -translate-x-1' : 'bg-canvas'/g,
  "idx === 0 ? 'bg-surface border-4 font-bold shadow-[8px_8px_0px_0px_rgba(var(--shadow-rgb),1)] -translate-y-1 -translate-x-1' : 'bg-canvas'"
);

router = router.replace(/bg-amber-50 dark:bg-amber-900\/30 border-2 border-amber-200 dark:border-amber-700 text-amber-800 dark:text-amber-200/g, 'bg-canvas border-2 border-ink border-dashed text-ink');

fs.writeFileSync('src/RouterApp.tsx', router);

