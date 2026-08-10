const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Add imports
code = code.replace(
  "import { ThemeToggle } from './ThemeToggle';",
  "import { useHistory } from './useHistory';\nimport { Undo, Redo, Eye } from 'lucide-react';"
);

// 2. Add History hooks and skip ref inside DFDSimulator
const hooksInjection = `  const [hintsRevealed, setHintsRevealed] = useState(false);
  const skipNextSnapshot = useRef(false);
  const { takeSnapshot, undo, redo, canUndo, canRedo, clearHistory } = useHistory([], []);

  useEffect(() => {
    if (skipNextSnapshot.current) {
      skipNextSnapshot.current = false;
      return;
    }
    const timer = setTimeout(() => {
      takeSnapshot(nodes, edges);
    }, 500);
    return () => clearTimeout(timer);
  }, [nodes, edges, takeSnapshot]);

  const handleUndo = () => {
    const state = undo();
    if (state) {
      skipNextSnapshot.current = true;
      setNodes(state.nodes);
      setEdges(state.edges);
    }
  };

  const handleRedo = () => {
    const state = redo();
    if (state) {
      skipNextSnapshot.current = true;
      setNodes(state.nodes);
      setEdges(state.edges);
    }
  };`;

code = code.replace(
  "const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);",
  "const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);\n" + hooksInjection
);

// 3. Update selectScenario to clear history and hints
code = code.replace(
  /const selectScenario = \([\s\S]*?setShowQuestionModal\(false\);\n  \};/,
  `const selectScenario = (index: number) => {
    setScenarioIndex(index);
    setNodes([]);
    setEdges([]);
    setEvalState({ evaluating: false, score: 0, feedback: [] });
    setShowQuestionModal(false);
    setHintsRevealed(false);
    clearHistory([], []);
  };`
);

// 4. Update evaluateDiagram to include hint penalty
code = code.replace(
  "let currentScore = 100;\n    const errors: string[] = [];",
  `let currentScore = 100;\n    const errors: string[] = [];\n\n    if (hintsRevealed) {\n      currentScore -= 15;\n      errors.push("Hint Penalty: Expected elements were revealed (-15).");\n    }`
);

// 5. Update top bar (Undo/Redo and remove ThemeToggle)
const oldToolbar = `<button onClick={() => setShowCheatSheet(true)} className="px-3 py-1.5 border-2 border-line bg-surface text-ink text-xs font-bold uppercase tracking-widest hover:bg-canvas transition-colors">
                Rules
             </button>
             <ThemeToggle />`;

const newToolbar = `<button onClick={handleUndo} disabled={!canUndo} className="p-2 border-2 border-line bg-surface text-ink disabled:opacity-50 disabled:cursor-not-allowed hover:bg-canvas transition-colors" title="Undo">
                <Undo size={14} strokeWidth={3} />
             </button>
             <button onClick={handleRedo} disabled={!canRedo} className="p-2 border-2 border-line bg-surface text-ink disabled:opacity-50 disabled:cursor-not-allowed hover:bg-canvas transition-colors" title="Redo">
                <Redo size={14} strokeWidth={3} />
             </button>
             <button onClick={() => setShowCheatSheet(true)} className="px-3 py-1.5 border-2 border-line bg-surface text-ink text-xs font-bold uppercase tracking-widest hover:bg-canvas transition-colors">
                Rules
             </button>`;
code = code.replace(oldToolbar, newToolbar);

// 6. Update hints UI
const oldHints = `<div className="border border-line p-3 bg-surface">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Expected Elements</h4>
                  <div className="flex flex-wrap gap-1">
                    {scenario.ideal.nodes.map(n => (
                      <span key={n.id} className={\`text-[10px] font-mono px-2 py-0.5 border border-line \${n.type === 'entity' ? 'bg-amber-50' : n.type === 'process' ? 'bg-sky-50' : 'bg-emerald-50'}\`}>
                        {n.label} ({n.type === 'dataStore' ? 'Store' : n.type})
                      </span>
                    ))}
                  </div>
                </div>`;

const newHints = `<div className="border border-line p-3 bg-surface relative overflow-hidden">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Expected Elements</h4>
                  <div className={\`flex flex-wrap gap-1 transition-all \${!hintsRevealed ? 'blur-sm opacity-60 select-none' : ''}\`}>
                    {scenario.ideal.nodes.map(n => (
                      <span key={n.id} className={\`text-[10px] font-mono px-2 py-0.5 border border-line text-ink \${n.type === 'entity' ? 'bg-amber-50' : n.type === 'process' ? 'bg-sky-50' : 'bg-emerald-50'}\`}>
                        {n.label} ({n.type === 'dataStore' ? 'Store' : n.type})
                      </span>
                    ))}
                  </div>
                  {!hintsRevealed && (
                    <button onClick={() => setHintsRevealed(true)} className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface/40 backdrop-blur-[1px] font-bold text-[10px] hover:bg-surface/60 transition-colors uppercase tracking-widest text-ink">
                      <Eye size={16} className="mb-1 opacity-80" />
                      Reveal (-15 pts)
                    </button>
                  )}
                </div>`;
code = code.replace(oldHints, newHints);

// 7. Conditionally render the right Evaluation sidebar
const oldRightSidebar = `<aside className="w-[280px] bg-surface text-ink p-5 flex flex-col z-10 border-l-2 border-line overflow-hidden shrink-0">`;
const newRightSidebar = `{evalState.evaluating && (
          <aside className="w-[280px] bg-surface text-ink p-5 flex flex-col z-10 border-l-2 border-line overflow-hidden shrink-0">`;
code = code.replace(oldRightSidebar, newRightSidebar);

const oldSidebarEnd = `</aside>\n       </div>`;
const newSidebarEnd = `</aside>\n       )}\n       </div>`;
code = code.replace(oldSidebarEnd, newSidebarEnd);


fs.writeFileSync('src/App.tsx', code);
