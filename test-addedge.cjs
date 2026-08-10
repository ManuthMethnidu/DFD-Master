const { addEdge } = require('reactflow');
const edges = addEdge({ source: '1', target: '1', sourceHandle: 'a', targetHandle: 'b' }, []);
console.log(edges.length);
const edges2 = addEdge({ source: '1', target: '1', sourceHandle: 'a', targetHandle: 'a' }, []);
console.log(edges2.length);
