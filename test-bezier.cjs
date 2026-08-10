const { getBezierPath } = require('reactflow');
const path = getBezierPath({ sourceX: 100, sourceY: 100, targetX: 100, targetY: 100, sourcePosition: 'top', targetPosition: 'top' });
console.log(path);
