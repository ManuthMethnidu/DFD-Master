const fs = require('fs');

let code = fs.readFileSync('src/useHistory.ts', 'utf-8');

const oldTakeSnapshot = `  const takeSnapshot = useCallback((nodes: Node[], edges: Edge[]) => {
    setHistory((prev) => {
      const currentState = prev[currentIndex];
      // Deduplicate: if nodes and edges are exactly the same, don't snapshot.
      if (JSON.stringify(currentState.nodes) === JSON.stringify(nodes) && 
          JSON.stringify(currentState.edges) === JSON.stringify(edges)) {
          return prev;
      }
      
      const newHistory = prev.slice(0, currentIndex + 1);
      newHistory.push(JSON.parse(JSON.stringify({ nodes, edges })));
      if (newHistory.length > 50) newHistory.shift();
      return newHistory;
    });
    setCurrentIndex((prev) => Math.min(prev + 1, 50));
  }, [currentIndex]);`;

const newTakeSnapshot = `  const takeSnapshot = useCallback((nodes: Node[], edges: Edge[]) => {
    setHistory((prev) => {
      // Find the current index based on length if currentIndex is somehow out of bounds
      const safeIndex = Math.min(currentIndex, prev.length - 1);
      const currentState = prev[safeIndex];
      
      // Deduplicate
      if (currentState && JSON.stringify(currentState.nodes) === JSON.stringify(nodes) && 
          JSON.stringify(currentState.edges) === JSON.stringify(edges)) {
          return prev;
      }
      
      let newHistory = prev.slice(0, safeIndex + 1);
      newHistory.push(JSON.parse(JSON.stringify({ nodes, edges })));
      if (newHistory.length > 50) {
          newHistory = newHistory.slice(-50);
      }
      setCurrentIndex(newHistory.length - 1);
      return newHistory;
    });
  }, [currentIndex]);`;

code = code.replace(oldTakeSnapshot, newTakeSnapshot);
fs.writeFileSync('src/useHistory.ts', code);
