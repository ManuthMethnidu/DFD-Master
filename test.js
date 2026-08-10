const { addEdge } = require('reactflow');
const edges = addEdge({ source: '1', target: '1', sourceHandle: 'a', targetHandle: 'b' }, []);
console.log(edges);
