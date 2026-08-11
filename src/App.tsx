/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import ReactFlow, { addEdge, useNodesState, useEdgesState, Controls, Background, MarkerType, ConnectionMode } from 'reactflow';
import 'reactflow/dist/style.css';
import { SCENARIOS, Scenario } from './scenarios';
import { EntityNode, ContextProcessNode, DetailedProcessNode, ProcessNode, DataStoreNode, NoteNode, CustomEdge } from './CustomNodes';
import { Info, Play, CheckCircle, RefreshCw, AlertTriangle, BookOpen, Search, X, ChevronLeft, ChevronRight, ListFilter, User, Trophy, StickyNote, Undo, Redo, Eye, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updateUserScore } from './firebase';

import { useHistory } from './useHistory';

const nodeTypes = {
  entity: EntityNode,
  process: ProcessNode,
  dataStore: DataStoreNode,
  note: NoteNode,
};
const edgeTypes = {
  custom: CustomEdge,
};

let idCounter = 0;
const getId = () => `dndnode_${idCounter++}`;

export default function DFDSimulator({ user }: { user: any }) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const scenario = SCENARIOS[scenarioIndex] || SCENARIOS[0];
  
  const [evalState, setEvalState] = useState({ evaluating: false, score: 0, feedback: [] as string[] });
  const [showCheatSheet, setShowCheatSheet] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [hintsRevealed, setHintsRevealed] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [isExpectedExpanded, setIsExpectedExpanded] = useState(false);
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

  
  const onLayout = useCallback(() => {
    // Layout elements in a straight line y = mx + c
    const m = 0.6; // Slope
    const c = 100; // Y-intercept
    const stepX = 300; // Horizontal spacing

    const layoutedNodes = nodes.map((node, index) => {
      node.targetPosition = 'left' as any;
      node.sourcePosition = 'right' as any;

      const x = index * stepX + 50;
      const y = m * x + c;

      node.position = { x, y };

      return node;
    });

    setNodes([...layoutedNodes]);
  }, [nodes, setNodes]);


  const handleRedo = () => {
    const state = redo();
    if (state) {
      skipNextSnapshot.current = true;
      setNodes(state.nodes);
      setEdges(state.edges);
    }
  };

  const categories = useMemo(() => {
    const cats = new Set<string>();
    SCENARIOS.forEach(s => cats.add(s.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredScenarios = useMemo(() => {
    return SCENARIOS.filter(s => {
      const matchesCat = selectedCategory === 'All' || s.category === selectedCategory;
      const matchesLevel = selectedLevelFilter === 'All' || s.level === selectedLevelFilter;
      const matchesDiff = selectedDifficulty === 'All' || s.difficulty === selectedDifficulty;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = !query || 
        s.title.toLowerCase().includes(query) || 
        s.description.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query);
      return matchesCat && matchesLevel && matchesDiff && matchesQuery;
    });
  }, [selectedCategory, selectedLevelFilter, selectedDifficulty, searchQuery]);

  const totalPages = Math.ceil(filteredScenarios.length / itemsPerPage);
  const paginatedScenarios = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredScenarios.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredScenarios, currentPage, itemsPerPage]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedLevelFilter, selectedDifficulty, searchQuery]);

  const selectScenario = (index: number) => {
    setScenarioIndex(index);
    setNodes([]);
    setEdges([]);
    setEvalState({ evaluating: false, score: 0, feedback: [] });
    setShowQuestionModal(false);
    setHintsRevealed(false);
    clearHistory([], []);
  };

  const nextScenario = () => {
    const nextIdx = (scenarioIndex + 1) % SCENARIOS.length;
    selectScenario(nextIdx);
  };

  const prevScenario = () => {
    const prevIdx = (scenarioIndex - 1 + SCENARIOS.length) % SCENARIOS.length;
    selectScenario(prevIdx);
  };

  const randomScenario = () => {
    const randIdx = Math.floor(Math.random() * SCENARIOS.length);
    selectScenario(randIdx);
  };

  const isValidConnection = useCallback(
    (conn: any) => {
      if (conn.source === conn.target) return false;
      const sourceNode = nodes.find((n) => n.id === conn.source);
      const targetNode = nodes.find((n) => n.id === conn.target);
      if (!sourceNode || !targetNode) return false;

      const sType = sourceNode.type || '';
      const tType = targetNode.type || '';

      if (sType.includes('dataStore') && tType.includes('dataStore')) return false;
      // if (sType.includes('entity') && tType.includes('entity')) return false; // Allowed now, rendered as dashed
      if (sType.includes('entity') && tType.includes('dataStore')) return false;
      if (sType.includes('dataStore') && tType.includes('entity')) return false;

      return true;
    },
    [nodes]
  );

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => {
      const newEdge = {
        ...params,
        id: `e${params.source}-${params.sourceHandle || ''}-${params.target}-${params.targetHandle || ''}-${Date.now()}`,
        type: 'custom',
        animated: true,
        markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--color-border)' }, 
        data: { label: '' } 
      };

      return [...eds, newEdge];
    });
  }, [setEdges]);

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    setIsDraggingOver(true);
  }, []);
  
  const onDragLeave = useCallback(() => {
    setIsDraggingOver(false);
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      const type = event.dataTransfer.getData('application/reactflow');
      if (!type || !reactFlowInstance) return;

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const isNote = type === 'note';
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: '', isContext: scenario.level === 'Context Diagram' },
        style: isNote ? { width: 160, height: 160 } : undefined,
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes, scenario.level]
  );

  const evaluateDiagram = () => {
    let currentScore = 100;
    const errors: string[] = [];

    if (hintsRevealed) {
      currentScore -= 15;
      errors.push("Hint Penalty: Expected elements were revealed (-15).");
    }

    const idealNodesMap = scenario.ideal.nodes.map(n => ({ ...n, lowerLabel: n.label.toLowerCase() }));
    const idealEdgesMap = scenario.ideal.edges.map(e => ({ 
      ...e, 
      lowerSource: e.source.toLowerCase(), 
      lowerTarget: e.target.toLowerCase(), 
      lowerLabel: e.label.toLowerCase() 
    }));

    const updatedNodes = nodes.map(node => {
      if (node.type === 'note') return node;

      const label = (node.data.label || '').toLowerCase().trim();
      const idealMatch = idealNodesMap.find(n => n.lowerLabel === label);
      let isError = false;
      let isCorrect = false;

      let idealType: string = idealMatch?.type || "";
      let actualType = node.type;
      
      // Remap for evaluation since scenarios use 'process'
      if (idealType === 'process') {
         if (scenario.level === 'Context Diagram') idealType = 'contextProcess';
         else idealType = 'detailedProcess';
      }
      if (actualType === 'process') {
         if (node.data.isContext) actualType = 'contextProcess';
         else actualType = 'detailedProcess';
      }

      if (!label) {
         isError = true;
         errors.push(`Shape without a label found (${node.type}). Please label all shapes.`);
      } else if (scenario.level === 'Context Diagram' && node.type.includes('dataStore')) {
         isError = true;
         errors.push(`Architecture Rule Violation: Context Diagrams cannot contain Data Stores.`);
      } else if (!idealMatch) {
         isError = true;
         errors.push(`Unrecognized node: '${node.data.label}'. Check your spelling against the scenario.`);
      } else if (idealType !== actualType) {
         isError = true;
         errors.push(`Architecture Rule: '${node.data.label}' should be a ${idealType === 'contextProcess' ? 'Context Process (unpartitioned)' : idealType === 'detailedProcess' ? 'Level 1/2 Process (partitioned)' : idealType === 'dataStore' ? 'Data Store' : idealType}.`);
      } else {
         isCorrect = true;
      }

      if (isError) currentScore -= 10;
      return { ...node, data: { ...node.data, correct: isCorrect, error: isError } };
    });

    
    // Check Duplicate Entity Architecture Rule
    const entityNodes = updatedNodes.filter(n => n.type.includes('entity'));
    const entityLabels = new Set();
    const duplicatedLabels = new Set();
    
    entityNodes.forEach(en => {
      const label = (en.data.label || '').toLowerCase().trim();
      if (label) {
        if (entityLabels.has(label)) duplicatedLabels.add(label);
        entityLabels.add(label);
      }
    });

    entityNodes.forEach(en => {
      const label = (en.data.label || '').toLowerCase().trim();
      if (duplicatedLabels.has(label)) {
        // Automatically marked as duplicate by the node component itself, so no need to error on missing manual notation.
        // However, we can still award points or note it. We'll just leave it as structurally correct!
      }
    });

    const updatedEdges = edges.map(edge => {
      const sourceNode = nodes.find(n => n.id === edge.source);
      const targetNode = nodes.find(n => n.id === edge.target);
      const sourceLabel = (sourceNode?.data.label || '').toLowerCase().trim();
      const targetLabel = (targetNode?.data.label || '').toLowerCase().trim();
      const edgeLabel = (edge.data?.label || '').toLowerCase().trim();

      let isError = false;
      let isCorrect = false;

      // Entity to Entity is now allowed per user request (rendered as dashed lines)
      if ((sourceNode?.type.includes('entity') && targetNode?.type.includes('dataStore')) || (sourceNode?.type.includes('dataStore') && targetNode?.type.includes('entity'))) {
         errors.push(`Syllabus Rule Violation: Entities cannot connect directly to Data Stores.`);
         isError = true;
      }
      if (sourceNode?.type.includes('dataStore') && targetNode?.type.includes('dataStore')) {
         errors.push(`Syllabus Rule Violation: Data Store to Data Store flow is not allowed.`);
         isError = true;
      }

      if (!edgeLabel && !isError) {
         errors.push(`Missing Flow Label: Arrow from '${sourceNode?.data.label}' to '${targetNode?.data.label}' has no label.`);
         isError = true;
      }

      if (!isError) {
         const matchingIdeal = idealEdgesMap.find(e => e.lowerSource === sourceLabel && e.lowerTarget === targetLabel);
         if (!matchingIdeal) {
            errors.push(`Invalid Flow: No flow expected from '${sourceNode?.data.label}' to '${targetNode?.data.label}'.`);
            isError = true;
         } else if (matchingIdeal.lowerLabel !== edgeLabel) {
            errors.push(`Incorrect Flow Label: Expected '${matchingIdeal.label}', got '${edge.data?.label}'.`);
            isError = true;
         } else {
            isCorrect = true;
         }
      }

      if (isError) currentScore -= 10;
      return { 
         ...edge, 
         markerEnd: { type: MarkerType.ArrowClosed, color: isError ? '#ef4444' : isCorrect ? '#22c55e' : '#1e3a8a' },
         data: { ...edge.data, correct: isCorrect, error: isError } 
      };
    });

    scenario.ideal.nodes.forEach(idealNode => {
      if (!nodes.some(n => (n.data.label || '').toLowerCase().trim() === idealNode.label.toLowerCase())) {
         errors.push(`Missing Node: You forgot to include '${idealNode.label}'.`);
         currentScore -= 10;
      }
    });

    scenario.ideal.edges.forEach(idealEdge => {
      if (!edges.some(e => {
         const sNode = nodes.find(n => n.id === e.source);
         const tNode = nodes.find(n => n.id === e.target);
         return (sNode?.data.label || '').toLowerCase().trim() === idealEdge.source.toLowerCase() &&
                (tNode?.data.label || '').toLowerCase().trim() === idealEdge.target.toLowerCase() &&
                (e.data?.label || '').toLowerCase().trim() === idealEdge.label.toLowerCase();
      })) {
         errors.push(`Missing Flow: Expected '${idealEdge.label}' from '${idealEdge.source}' to '${idealEdge.target}'.`);
         currentScore -= 10;
      }
    });

    updatedNodes.forEach(node => {
      if (node.type.includes('process')) {
         const hasInputs = edges.some(e => e.target === node.id);
         const hasOutputs = edges.some(e => e.source === node.id);
         
         if (!hasInputs && hasOutputs) {
            errors.push(`Syllabus Rule Violation: Process '${node.data.label}' has outputs but no inputs (Miracle).`);
            currentScore -= 10;
            node.data.error = true;
         } else if (hasInputs && !hasOutputs) {
            errors.push(`Syllabus Rule Violation: Process '${node.data.label}' has inputs but no outputs (Black Hole).`);
            currentScore -= 10;
            node.data.error = true;
         } else if (!hasInputs && !hasOutputs) {
            errors.push(`Syllabus Rule Violation: Process '${node.data.label}' is isolated.`);
            currentScore -= 10;
            node.data.error = true;
         }
      }
    });

    setNodes(updatedNodes);
    setEdges(updatedEdges);
    
    let difficultyMultiplier = 1;
    switch(scenario.difficulty) {
       case 'Medium': difficultyMultiplier = 1.5; break;
       case 'Hard': difficultyMultiplier = 2.0; break;
       case 'Expert': difficultyMultiplier = 3.0; break;
       case 'Easy':
       default: difficultyMultiplier = 1.0; break;
    }
    const finalScore = Math.max(0, Math.floor(currentScore * difficultyMultiplier));
    setEvalState({ evaluating: true, score: finalScore, feedback: errors });
    
    if (user) {
      const isMobile = window.innerWidth <= 768;
      const scenarioIdToUse = isMobile ? `mobile_${scenario.id}` : scenario.id;
      updateUserScore(user.uid, scenarioIdToUse, finalScore).catch(console.error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-canvas text-ink font-sans overflow-hidden border border-line">
       <header className="flex items-center justify-between px-6 py-2 border-b-2 border-line bg-surface z-10">
          <div className="flex items-baseline gap-3">
             <h1 className="text-3xl font-serif font-black italic leading-none">DFD Master.</h1>
             <span className="text-sm font-bold tracking-[0.2em] uppercase text-ink">A/L ICT SYLLABUS ({SCENARIOS.length} QUESTIONS)</span>
          </div>

          <div className="flex items-center gap-2">
             <button onClick={prevScenario} className="p-2 border-2 border-line bg-surface hover:bg-canvas transition-colors" title="Previous Question">
                <ChevronLeft size={16} />
             </button>
             <button onClick={() => setShowQuestionModal(true)} className="px-3 py-1.5 border-2 border-line bg-surface text-ink text-sm font-bold uppercase tracking-wider hover:bg-canvas flex items-center gap-2">
                <Search size={14} />
                <span>Q {scenarioIndex + 1} of {SCENARIOS.length}</span>
             </button>
             <button onClick={nextScenario} className="p-2 border-2 border-line bg-surface hover:bg-canvas transition-colors" title="Next Question">
                <ChevronRight size={16} />
             </button>
          </div>

          <div className="flex gap-2 items-center">
             <Link to="/leaderboard" className="px-3 py-1.5 border-2 border-line bg-surface text-ink text-sm font-bold uppercase tracking-widest hover:bg-canvas transition-colors flex items-center gap-2">
                <Trophy size={14} /> Leaders
             </Link>
             <Link to="/profile" className="px-3 py-1.5 border-2 border-line bg-surface text-ink text-sm font-bold uppercase tracking-widest hover:bg-canvas transition-colors flex items-center gap-2">
                <User size={14} /> Profile
             </Link>
             <div className="w-px bg-muted mx-1 h-4"></div>
             <button onClick={randomScenario} className="px-3 py-1.5 border-2 border-transparent text-ink text-sm font-bold uppercase tracking-widest hover:bg-canvas transition-colors">
                Random Q
             </button>
             
             <button onClick={onLayout} className="p-2 border-2 border-line bg-surface text-ink hover:bg-canvas transition-colors" title="Auto-layout">
                <LayoutGrid size={14} strokeWidth={3} />
             </button>
             <button onClick={handleUndo} disabled={!canUndo} className="p-2 border-2 border-line bg-surface text-ink disabled:opacity-50 disabled:cursor-not-allowed hover:bg-canvas transition-colors" title="Undo">
                <Undo size={14} strokeWidth={3} />
             </button>
             <button onClick={handleRedo} disabled={!canRedo} className="p-2 border-2 border-line bg-surface text-ink disabled:opacity-50 disabled:cursor-not-allowed hover:bg-canvas transition-colors" title="Redo">
                <Redo size={14} strokeWidth={3} />
             </button>
             <button onClick={() => setShowCheatSheet(true)} className="px-3 py-1.5 border-2 border-line bg-surface text-ink text-sm font-bold uppercase tracking-widest hover:bg-canvas transition-colors">
                Rules
             </button>
          </div>
       </header>

       <div className="flex-1 flex overflow-hidden">
          <aside className="w-[340px] bg-surface border-r-2 border-line flex flex-col z-10 overflow-hidden shrink-0">
             <div className="p-5 flex-1 min-h-0 flex flex-col overflow-y-auto" style={{ touchAction: "auto", overscrollBehavior: "contain" }}>
                <div className="flex items-center justify-between mb-2">
                   <span className="text-sm font-bold text-ink uppercase tracking-widest">{scenario.level}</span>
                   <span className="text-sm font-bold bg-accent text-on-accent px-2 py-0.5 rounded-none uppercase">{scenario.category}</span>
                </div>
                <h3 className="text-xl font-bold font-serif mb-2 leading-tight">{scenario.title}</h3>
                <p className="text-base font-serif leading-relaxed text-ink italic bg-canvas p-3 border-l-2 border-line mb-6">
                   "{scenario.description}"
                </p>
                <div className="mt-auto">
                   {!evalState.evaluating ? (
                      <button onClick={evaluateDiagram} className="w-full py-3 bg-accent text-on-accent font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-colors shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)]">
                         Submit Diagram
                      </button>
                   ) : (
                      <button onClick={() => setEvalState({ evaluating: false, score: 0, feedback: [] })} className="w-full py-3 border-2 border-line bg-surface text-ink font-bold uppercase tracking-widest text-sm hover:bg-canvas transition-colors shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)]">
                         Edit Diagram
                      </button>
                   )}
                </div>
             </div>
          </aside>
          
          <main className="flex-1 relative flex bg-[#F2F2F0] bg-[radial-gradient(#d1d1d1_1px,transparent_1px)] [background-size:20px_20px]" ref={reactFlowWrapper}>
             <div className="absolute top-4 left-4 z-10 pointer-events-none flex gap-2">
               <h3 className="text-sm font-bold font-mono bg-surface px-2 py-1 border border-line shadow-[2px_2px_0px_0px_rgba(var(--shadow-rgb),1)] text-ink">
                 {scenario.level.toUpperCase()}
               </h3>
             </div>

             <div className="absolute bottom-4 right-4 z-20 flex items-end gap-4">
                <div className="flex flex-col items-end">
                   {isExpectedExpanded ? (
                      <div className="bg-surface border-2 border-line shadow-[8px_8px_0px_0px_rgba(var(--shadow-rgb),1)] p-4 w-[320px] flex flex-col max-h-[300px]">
                         <div className="flex justify-between items-center mb-3">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-ink">Expected Elements</h4>
                            <button onClick={() => setIsExpectedExpanded(false)} className="hover:bg-canvas p-1 border border-transparent hover:border-line transition-colors">
                               <X size={16} />
                            </button>
                         </div>
                         <div className="relative overflow-y-auto min-h-0 flex-1 pr-2">
                            <div className={`flex flex-wrap gap-1 transition-all ${!hintsRevealed ? 'blur-sm opacity-60 select-none' : ''}`}>
                               {scenario.ideal.nodes.map(n => (
                                 <span key={n.id} className={`text-sm font-mono px-2 py-0.5 border border-line text-ink ${n.type.includes('entity') ? 'bg-surface text-ink' : n.type.includes('process') ? 'bg-canvas text-ink' : 'bg-surface text-ink'}`}>
                                   {n.label} ({n.type.includes('dataStore') ? 'Store' : n.type})
                                 </span>
                               ))}
                            </div>
                            {!hintsRevealed && (
                               <button onClick={() => setHintsRevealed(true)} className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface/40 backdrop-blur-[1px] font-bold text-sm hover:bg-surface/60 transition-colors uppercase tracking-widest text-ink">
                                  <Eye size={16} className="mb-1 opacity-80" />
                                  Reveal (-15 pts)
                               </button>
                            )}
                         </div>
                      </div>
                   ) : (
                      <button onClick={() => setIsExpectedExpanded(true)} className="bg-surface border-2 border-line shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] h-10 px-4 font-bold uppercase tracking-widest text-sm text-ink hover:bg-canvas transition-colors flex items-center gap-2">
                         <Eye size={16} /> Expected Elements
                      </button>
                   )}
                </div>
             </div>
             <ReactFlow
               nodes={nodes}
               edges={edges}
               onNodesChange={onNodesChange}
               onEdgesChange={onEdgesChange}
               onConnect={onConnect}
               onInit={setReactFlowInstance}
               onDrop={(e) => { setIsDraggingOver(false); onDrop(e); }}
               onDragOver={onDragOver}
               nodeTypes={nodeTypes}
               edgeTypes={edgeTypes}
               connectionMode={ConnectionMode.Loose}
               isValidConnection={isValidConnection}
               fitView
             >
               <Controls />
             </ReactFlow>
             {isDraggingOver && (
               <div className="absolute inset-0 z-20 pointer-events-none border-4 border-dashed border-accent bg-accent/5 flex items-center justify-center transition-all">
                 <div className="bg-surface px-6 py-3 border-2 border-accent text-accent font-bold uppercase tracking-widest text-base shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)]">
                    Drop to add node
                 </div>
               </div>
             )}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-surface border-2 border-line p-2 flex gap-4 shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] z-10">
               <div className="flex flex-col items-center gap-1 cursor-grab" onDragStart={(e) => { e.dataTransfer.setData('application/reactflow', 'entity'); e.dataTransfer.effectAllowed = 'move'; }} draggable>
                 <div className="w-10 h-6 border-2 border-line rounded-[50%] bg-surface"></div>
                 <span className="text-[8px] font-bold tracking-widest uppercase">Entity</span>
               </div>
               <div className="w-[1px] bg-accent h-10 self-center"></div>
               <div className="flex flex-col items-center gap-1 cursor-grab" onDragStart={(e) => { e.dataTransfer.setData('application/reactflow', 'process'); e.dataTransfer.effectAllowed = 'move'; }} draggable>
                 {scenario.level === 'Context Diagram' ? (
                   <div className="w-10 h-7 border-2 border-line bg-surface"></div>
                 ) : (
                   <div className="w-10 h-7 border-2 border-line bg-surface flex flex-col">
                     <div className="flex h-2.5 border-b-2 border-line">
                       <div className="w-3 border-r-2 border-line shrink-0"></div>
                       <div className="flex-1"></div>
                     </div>
                     <div className="flex-1"></div>
                   </div>
                 )}
                 <span className="text-[8px] font-bold tracking-widest uppercase">Process</span>
               </div>
               <div className="w-[1px] bg-accent h-10 self-center"></div>
               <div className="flex flex-col items-center gap-1 cursor-grab" onDragStart={(e) => { e.dataTransfer.setData('application/reactflow', 'dataStore'); e.dataTransfer.effectAllowed = 'move'; }} draggable>
                 <div className="w-10 h-7 border-y-2 border-l-2 border-r-0 border-line bg-surface flex">
    <div className="w-3 border-r-2 border-line h-full"></div>
    <div className="flex-1"></div>
  </div>
                 <span className="text-[8px] font-bold tracking-widest uppercase">Store</span>
               </div>
               <div className="w-[1px] bg-accent h-10 self-center"></div>
               <div className="flex flex-col items-center gap-1 cursor-grab" onDragStart={(e) => { e.dataTransfer.setData('application/reactflow', 'note'); e.dataTransfer.effectAllowed = 'move'; }} draggable>
                 <div className="w-8 h-8 bg-yellow-200 border border-yellow-400 rotate-[-2deg]"></div>
                 <span className="text-[8px] font-bold tracking-widest uppercase">Note</span>
               </div>
             </div>
          </main>
          
          {evalState.evaluating && (
          <aside className="w-[280px] bg-surface text-ink p-5 flex flex-col z-10 border-l-2 border-line overflow-hidden shrink-0">
             <div className="mb-6">
               <h2 className="text-sm font-bold uppercase tracking-widest text-ink mb-4">Evaluation Result</h2>
               <div className="flex items-baseline gap-2">
                 <span className="text-6xl font-serif italic font-black">{evalState.evaluating ? evalState.score : '--'}</span>
                 <span className="text-2xl text-ink">/ 100</span>
               </div>
               <div className="mt-3 h-1.5 w-full bg-surface hover:bg-canvas">
                 <div className="h-full bg-accent transition-all duration-1000 ease-out" style={{ width: `${evalState.evaluating ? evalState.score : 0}%` }}></div>
               </div>
             </div>

             <div className="flex-1 min-h-0 overflow-y-auto" style={{ touchAction: "auto", overscrollBehavior: "contain" }}>
               <h3 className="text-sm font-bold uppercase tracking-widest text-ink mb-3">Critique</h3>
               {!evalState.evaluating ? (
                  <p className="text-sm font-mono text-ink">Submit your diagram to view the evaluation results based on standard syllabus rules.</p>
               ) : (
                  <ul className="space-y-3 font-mono text-[11px] leading-tight">
                    {evalState.feedback.length > 0 ? (
                       evalState.feedback.map((f, i) => (
                         <li key={i} className="flex gap-2 border-b border-line pb-2">
                           <span className="text-ink shrink-0">✗</span>
                           <span className="text-ink">{f}</span>
                         </li>
                       ))
                    ) : (
                       <li className="flex gap-2">
                         <span className="text-ink shrink-0">✓</span>
                         <span className="text-ink">Perfect! You have mastered this DFD.</span>
                       </li>
                    )}
                  </ul>
               )}
             </div>
          </aside>
       )}
       </div>

       {/* Question Selector Modal (200+ Scenarios Browser) */}
       {showQuestionModal && (
          <div className="fixed inset-0 bg-accent/60 flex items-center justify-center z-50 p-6 backdrop-blur-xs">
             <div className="bg-surface border-2 border-line shadow-[12px_12px_0px_0px_rgba(var(--shadow-rgb),1)] max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden">
                <div className="p-5 border-b-2 border-line flex justify-between items-center bg-canvas">
                   <div>
                     <h2 className="text-3xl font-serif font-black italic">Question Bank</h2>
                     <p className="text-sm font-mono text-ink">Browse and search {SCENARIOS.length} Sri Lankan A/L ICT DFD Scenarios</p>
                   </div>
                   <button onClick={() => setShowQuestionModal(false)} className="p-2 hover:bg-surface hover:bg-canvas border border-line transition-colors">
                      <X size={20} />
                   </button>
                </div>

                {/* Filters */}
                <div className="p-4 border-b border-line bg-surface flex flex-col gap-3">
                   <div className="flex gap-3">
                     <div className="relative flex-1">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink" />
                        <input
                          type="text"
                          placeholder="Search 200+ questions by keyword (e.g., Bookland, Hospital, Admission, ATM, Library)..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-9 pr-4 py-2 border border-line text-sm font-mono outline-none focus:ring-2 focus:ring-black"
                        />
                     </div>
                     <select
                       value={selectedDifficulty}
                       onChange={(e) => setSelectedDifficulty(e.target.value)}
                       className="px-3 py-2 border border-line text-sm font-mono bg-surface outline-none cursor-pointer"
                     >
                       <option value="All">All Difficulties</option>
                       <option value="Easy">Easy</option>
                       <option value="Medium">Medium</option>
                       <option value="Hard">Hard</option>
                       <option value="Expert">Expert</option>
                     </select>
                     <select
                       value={selectedLevelFilter}
                       onChange={(e) => setSelectedLevelFilter(e.target.value)}
                       className="px-3 py-2 border border-line text-sm font-mono bg-surface outline-none cursor-pointer"
                     >
                       <option value="All">All Levels</option>
                       <option value="Context Diagram">Context Diagrams</option>
                       <option value="Level 1 DFD">Level 1 DFDs</option>
                       <option value="Level 2 DFD">Level 2 DFDs</option>
                     </select>
                   </div>

                   {/* Category Pills */}
                   <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`text-sm font-mono px-3 py-1 border border-line whitespace-nowrap transition-colors ${selectedCategory === cat ? 'bg-accent text-on-accent font-bold' : 'bg-surface hover:bg-surface hover:bg-canvas text-ink'}`}
                        >
                          {cat}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Question List */}
                <div className="flex-1 min-h-0 overflow-y-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-canvas" style={{ touchAction: "auto", overscrollBehavior: "contain" }}>
                   {paginatedScenarios.length > 0 ? (
                      paginatedScenarios.map((s) => {
                        const originalIndex = SCENARIOS.findIndex(sc => sc.id === s.id);
                        const isCurrent = originalIndex === scenarioIndex;
                        return (
                          <div
                            key={s.id}
                            onClick={() => selectScenario(originalIndex)}
                            className={`p-4 border-2 border-line cursor-pointer transition-all flex flex-col justify-between bg-surface hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] ${isCurrent ? 'ring-2 ring-black font-black border-4' : ''}`}
                          >
                            <div>
                               <div className="flex items-center justify-between mb-1.5">
                                  <span className="text-sm font-bold tracking-widest text-ink uppercase">Q #{s.id} • {s.level}</span>
                                  <div className="flex gap-2">
                                    {s.difficulty && <span className="text-xs font-bold border border-line px-1.5 py-0.5 bg-canvas">{s.difficulty}</span>}
                                    <span className="text-sm font-bold bg-accent text-on-accent px-2 py-0.5">{s.category}</span>
                                  </div>
                               </div>
                               <h4 className="text-base font-bold font-serif mb-1 leading-snug">{s.title}</h4>
                               <p className="text-sm text-ink line-clamp-2 font-serif italic mb-2">"{s.description}"</p>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-line text-sm font-mono text-ink">
                               <span>Nodes: {s.ideal.nodes.length} | Flows: {s.ideal.edges.length}</span>
                               <span className="font-bold text-ink uppercase">Start Practice →</span>
                            </div>
                          </div>
                        );
                      })
                   ) : (
                      <div className="col-span-2 text-center py-12 text-ink font-mono text-sm">
                         No scenarios matching "{searchQuery}". Try a different search term or category.
                      </div>
                   )}
                </div>

                <div className="p-3 border-t border-line bg-surface flex flex-col md:flex-row gap-3 justify-between items-center text-sm font-mono text-ink">
                   <div className="flex items-center gap-4">
                     <span>Showing {paginatedScenarios.length} of {filteredScenarios.length} Scenarios (Total: {SCENARIOS.length})</span>
                     <div className="flex gap-2 items-center">
                       <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-2 py-1 border border-line disabled:opacity-50 hover:bg-canvas">Prev</button>
                       <span>Page {currentPage} of {totalPages || 1}</span>
                       <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages || totalPages === 0} className="px-2 py-1 border border-line disabled:opacity-50 hover:bg-canvas">Next</button>
                     </div>
                   </div>
                   <button onClick={() => setShowQuestionModal(false)} className="px-4 py-1.5 bg-accent text-on-accent font-bold text-sm uppercase tracking-widest shrink-0">
                      Close
                   </button>
                </div>
             </div>
          </div>
       )}

       {showCheatSheet && (
          <div className="fixed inset-0 bg-accent/50 flex items-center justify-center z-50 p-4">
             <div className="bg-surface border-2 border-line shadow-[8px_8px_0px_0px_rgba(var(--shadow-rgb),1)] max-w-2xl w-full p-8 flex flex-col">
                <h2 className="text-3xl font-serif font-black italic mb-6 border-b-2 border-line pb-4">DFD Syllabus Rules</h2>
                <ul className="space-y-4 text-base font-mono text-ink">
                   <li className="flex gap-3">
                     <span className="font-bold">01.</span>
                     <span><strong>Data Flow Routing:</strong> Flow lines cannot intersect. Use jump notation for crossings. Text labels must reside entirely above the directional arrow.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">02.</span>
                     <span><strong>Entity Connections:</strong> Entity → Entity is valid but requires a dashed arrow. Entity → Data Store is structurally invalid.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">03.</span>
                     <span><strong>Data Store Connections:</strong> Data Store → Data Store is invalid. Data Store → Entity is invalid. Intermediary processes are always required.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">04.</span>
                     <span><strong>Duplicate Entities:</strong> Marked by a diagonal strike-through in the top-left quadrant. If used, all identical entities in the system must be marked as duplicates.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">05.</span>
                     <span><strong>Process Geometries:</strong> Context Diagrams use unpartitioned processes. Level 1/2 DFDs use partitioned processes (ID, Noun Name, Verb Description).</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">06.</span>
                     <span><strong>Data Flow Targets:</strong> A component CANNOT have a data flow pointing to itself (no self-loops).</span>
                   </li>
                </ul>
                <div className="mt-8 flex justify-end">
                   <button onClick={() => setShowCheatSheet(false)} className="px-6 py-3 bg-accent text-on-accent font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-colors">
                      Acknowledge
                   </button>
                </div>
             </div>
          </div>
       )}
    </div>
  );
}
