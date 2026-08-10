import { useState, useCallback } from 'react';
import { Node, Edge } from 'reactflow';

export function useHistory(initialNodes: Node[] = [], initialEdges: Edge[] = []) {
  const [history, setHistory] = useState<{nodes: Node[], edges: Edge[]}[]>([{ nodes: initialNodes, edges: initialEdges }]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const takeSnapshot = useCallback((nodes: Node[], edges: Edge[]) => {
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
  }, [currentIndex]);

  const undo = useCallback(() => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      return history[prevIndex];
    }
    return null;
  }, [currentIndex, history]);

  const redo = useCallback(() => {
    if (currentIndex < history.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      return history[nextIndex];
    }
    return null;
  }, [currentIndex, history]);

  const clearHistory = useCallback((nodes: Node[], edges: Edge[]) => {
    setHistory([{ nodes: JSON.parse(JSON.stringify(nodes)), edges: JSON.parse(JSON.stringify(edges)) }]);
    setCurrentIndex(0);
  }, []);

  return {
    takeSnapshot,
    undo,
    redo,
    canUndo: currentIndex > 0,
    canRedo: currentIndex < history.length - 1,
    clearHistory
  };
}
