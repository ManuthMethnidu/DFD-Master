const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf-8');

const oldOnConnect = `  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge({ 
      ...params, 
      type: 'custom',
      animated: true,
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--color-border)' }, 
      data: { label: '' } 
    }, eds));
  }, [setEdges]);`;

const newOnConnect = `  const onConnect = useCallback((params: any) => {
    setEdges((eds) => {
      const newEdge = {
        ...params,
        id: \`e\${params.source}-\${params.sourceHandle || ''}-\${params.target}-\${params.targetHandle || ''}-\${Date.now()}\`,
        type: 'custom',
        animated: true,
        markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--color-border)' }, 
        data: { label: '' } 
      };
      // Check if this exact connection exists
      if (eds.find(e => e.source === params.source && e.target === params.target && e.sourceHandle === params.sourceHandle && e.targetHandle === params.targetHandle)) {
        return eds;
      }
      return [...eds, newEdge];
    });
  }, [setEdges]);`;

app = app.replace(oldOnConnect, newOnConnect);
fs.writeFileSync('src/App.tsx', app);
