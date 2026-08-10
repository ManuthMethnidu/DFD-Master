const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf-8');

const darkTheme = `
@layer base {
  .dark {
    --bg-canvas: #0f1115;
    --bg-surface: #1a1d24;
    --color-ink: #f3f4f6;
    --color-ink-muted: #9ca3af;
    --color-border: #374151;
    --color-accent: #f3f4f6;
    --color-accent-text: #0f1115;
    --shadow-rgb: 255, 255, 255;
  }
}
`;

if (!code.includes('.dark')) {
  code += darkTheme;
  fs.writeFileSync('src/index.css', code);
}
