const fs = require('fs');
let code = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');

const oldCode = `  const [edgePath, labelX, labelY] = getSmoothStepPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });`;

const newCode = `  let edgePath, labelX, labelY;
  if (source === target) {
    edgePath = \`M \${sourceX},\${sourceY} C \${sourceX + 100},\${sourceY - 50} \${targetX + 100},\${targetY + 50} \${targetX},\${targetY}\`;
    labelX = (sourceX + targetX) / 2 + 60;
    labelY = (sourceY + targetY) / 2;
  } else {
    const path = getSmoothStepPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });
    edgePath = path[0];
    labelX = path[1];
    labelY = path[2];
  }`;

code = code.replace(oldCode, newCode);
fs.writeFileSync('src/CustomNodes.tsx', code);
