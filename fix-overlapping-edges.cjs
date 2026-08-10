const fs = require('fs');
let code = fs.readFileSync('src/CustomNodes.tsx', 'utf-8');

const oldCode = `  let edgePath, labelX, labelY;
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

const newCode = `  const { setEdges, getNode, getEdges } = useReactFlow();
  const edges = getEdges();
  
  let edgePath, labelX, labelY;
  if (source === target) {
    edgePath = \`M \${sourceX},\${sourceY} C \${sourceX + 100},\${sourceY - 50} \${targetX + 100},\${targetY + 50} \${targetX},\${targetY}\`;
    labelX = (sourceX + targetX) / 2 + 60;
    labelY = (sourceY + targetY) / 2;
  } else {
    // Check for bidirectional or duplicate edges
    const isBidirectional = edges.some(e => e.source === target && e.target === source);
    const duplicateEdges = edges.filter(e => e.source === source && e.target === target);
    const edgeIndex = duplicateEdges.findIndex(e => e.id === id);
    
    if (isBidirectional || duplicateEdges.length > 1) {
      // Use bezier for overlapping edges to separate them
      const offset = (edgeIndex * 20) + (isBidirectional && source > target ? 30 : 0);
      const path = getBezierPath({ 
        sourceX, sourceY, 
        targetX, targetY, 
        sourcePosition, targetPosition,
        curvature: 0.25 + (offset / 100)
      });
      edgePath = path[0];
      labelX = path[1];
      labelY = path[2] - offset; // Offset label vertically
    } else {
      const path = getSmoothStepPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });
      edgePath = path[0];
      labelX = path[1];
      labelY = path[2];
    }
  }`;

// Remove old const { setEdges, getNode } = useReactFlow(); since it's now in newCode
code = code.replace("  const { setEdges, getNode } = useReactFlow();\n", "");
code = code.replace(oldCode, newCode);

fs.writeFileSync('src/CustomNodes.tsx', code);
