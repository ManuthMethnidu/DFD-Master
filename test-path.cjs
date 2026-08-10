const { getSmoothStepPath, getBezierPath } = require('reactflow');

const path = getSmoothStepPath({ sourceX: 100, sourceY: 100, targetX: 100, targetY: 100, sourcePosition: 'top', targetPosition: 'bottom' });
console.log(path);
