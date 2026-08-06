/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import ReactFlow, { addEdge, useNodesState, useEdgesState, Controls, Background, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import { SCENARIOS, Scenario } from './scenarios';
import { EntityNode, ProcessNode, DataStoreNode, CustomEdge } from './CustomNodes';
import { Info, Play, CheckCircle, RefreshCw, AlertTriangle, BookOpen, Search, X, ChevronLeft, ChevronRight, ListFilter, User, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updateUserScore } from './firebase';

const nodeTypes = {
  entity: EntityNode,
  process: ProcessNode,
  dataStore: DataStoreNode,
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

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    SCENARIOS.forEach(s => cats.add(s.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredScenarios = useMemo(() => {
    return SCENARIOS.filter(s => {
      const matchesCat = selectedCategory === 'All' || s.category === selectedCategory;
      const matchesLevel = selectedLevelFilter === 'All' || s.level === selectedLevelFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = !query || 
        s.title.toLowerCase().includes(query) || 
        s.description.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query);
      return matchesCat && matchesLevel && matchesQuery;
    });
  }, [selectedCategory, selectedLevelFilter, searchQuery]);

  const selectScenario = (index: number) => {
    setScenarioIndex(index);
    setNodes([]);
    setEdges([]);
    setEvalState({ evaluating: false, score: 0, feedback: [] });
    setShowQuestionModal(false);
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

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge({ 
      ...params, 
      type: 'custom', 
      markerEnd: { type: MarkerType.ArrowClosed, color: '#1e3a8a' }, 
      data: { label: '' } 
    }, eds));
  }, [setEdges]);

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
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
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: '' },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const evaluateDiagram = () => {
    let currentScore = 100;
    const errors: string[] = [];

    const idealNodesMap = scenario.ideal.nodes.map(n => ({ ...n, lowerLabel: n.label.toLowerCase() }));
    const idealEdgesMap = scenario.ideal.edges.map(e => ({ 
      ...e, 
      lowerSource: e.source.toLowerCase(), 
      lowerTarget: e.target.toLowerCase(), 
      lowerLabel: e.label.toLowerCase() 
    }));

    const updatedNodes = nodes.map(node => {
      const label = (node.data.label || '').toLowerCase().trim();
      const idealMatch = idealNodesMap.find(n => n.lowerLabel === label);
      let isError = false;
      let isCorrect = false;

      if (!label) {
         isError = true;
         errors.push(`Shape without a label found (${node.type}). Please label all shapes.`);
      } else if (scenario.level === 'Context Diagram' && node.type === 'dataStore') {
         isError = true;
         errors.push(`Syllabus Rule Violation: Context Diagrams cannot contain Data Stores.`);
      } else if (!idealMatch) {
         isError = true;
         errors.push(`Unrecognized node: '${node.data.label}'. Check your spelling against the scenario.`);
      } else if (idealMatch.type !== node.type) {
         isError = true;
         errors.push(`Type mismatch: '${node.data.label}' should be a ${idealMatch.type === 'dataStore' ? 'Data Store' : idealMatch.type}.`);
      } else {
         isCorrect = true;
      }

      if (isError) currentScore -= 10;
      return { ...node, data: { ...node.data, correct: isCorrect, error: isError } };
    });

    const updatedEdges = edges.map(edge => {
      const sourceNode = nodes.find(n => n.id === edge.source);
      const targetNode = nodes.find(n => n.id === edge.target);
      const sourceLabel = (sourceNode?.data.label || '').toLowerCase().trim();
      const targetLabel = (targetNode?.data.label || '').toLowerCase().trim();
      const edgeLabel = (edge.data?.label || '').toLowerCase().trim();

      let isError = false;
      let isCorrect = false;

      if (sourceNode?.type === 'entity' && targetNode?.type === 'entity') {
         errors.push(`Syllabus Rule Violation: External Entity to External Entity flow is not allowed.`);
         isError = true;
      }
      if ((sourceNode?.type === 'entity' && targetNode?.type === 'dataStore') || (sourceNode?.type === 'dataStore' && targetNode?.type === 'entity')) {
         errors.push(`Syllabus Rule Violation: Entities cannot connect directly to Data Stores.`);
         isError = true;
      }
      if (sourceNode?.type === 'dataStore' && targetNode?.type === 'dataStore') {
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
      if (node.type === 'process') {
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
    const finalScore = Math.max(0, currentScore);
    setEvalState({ evaluating: true, score: finalScore, feedback: errors });
    
    if (user) {
      updateUserScore(user.uid, scenario.id, finalScore).catch(console.error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#FAF9F6] text-[#1A1A1A] font-sans overflow-hidden border border-gray-200">
       <header className="flex items-center justify-between px-6 py-2 border-b-2 border-black bg-white z-10">
          <div className="flex items-baseline gap-3">
             <h1 className="text-2xl font-serif font-black italic leading-none">DFD Master.</h1>
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">A/L ICT SYLLABUS ({SCENARIOS.length} QUESTIONS)</span>
          </div>

          <div className="flex items-center gap-2">
             <button onClick={prevScenario} className="p-2 border-2 border-black bg-white hover:bg-gray-100 transition-colors" title="Previous Question">
                <ChevronLeft size={16} />
             </button>
             <button onClick={() => setShowQuestionModal(true)} className="px-3 py-1.5 border-2 border-black bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-100 flex items-center gap-2">
                <Search size={14} />
                <span>Q {scenarioIndex + 1} of {SCENARIOS.length}</span>
             </button>
             <button onClick={nextScenario} className="p-2 border-2 border-black bg-white hover:bg-gray-100 transition-colors" title="Next Question">
                <ChevronRight size={16} />
             </button>
          </div>

          <div className="flex gap-2">
             <Link to="/leaderboard" className="px-3 py-1.5 border-2 border-black bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Trophy size={14} /> Leaders
             </Link>
             <Link to="/profile" className="px-3 py-1.5 border-2 border-black bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center gap-2">
                <User size={14} /> Profile
             </Link>
             <div className="w-px bg-gray-300 mx-1"></div>
             <button onClick={randomScenario} className="px-3 py-1.5 border-2 border-transparent text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">
                Random Q
             </button>
             <button onClick={() => setShowCheatSheet(true)} className="px-3 py-1.5 border-2 border-black bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">
                Rules
             </button>
          </div>
       </header>

       <div className="flex-1 flex overflow-hidden">
          <aside className="w-[340px] bg-white border-r-2 border-black flex flex-col z-10 overflow-hidden shrink-0">
             <div className="p-5 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{scenario.level}</span>
                   <span className="text-[9px] font-bold bg-black text-white px-2 py-0.5 rounded-none uppercase">{scenario.category}</span>
                </div>
                <h3 className="text-lg font-bold font-serif mb-2 leading-tight">{scenario.title}</h3>
                <p className="text-xs font-serif leading-relaxed text-gray-700 italic bg-gray-50 p-3 border-l-2 border-black">
                   "{scenario.description}"
                </p>
             </div>
             
             <div className="p-5 flex-1 flex flex-col gap-4 overflow-y-auto">
                <div className="border border-black p-3 bg-white">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Expected Elements</h4>
                  <div className="flex flex-wrap gap-1">
                    {scenario.ideal.nodes.map(n => (
                      <span key={n.id} className={`text-[10px] font-mono px-2 py-0.5 border border-black ${n.type === 'entity' ? 'bg-amber-50' : n.type === 'process' ? 'bg-sky-50' : 'bg-emerald-50'}`}>
                        {n.label} ({n.type === 'dataStore' ? 'Store' : n.type})
                      </span>
                    ))}
                  </div>
                </div>

                {!evalState.evaluating ? (
                   <button onClick={evaluateDiagram} className="w-full py-3.5 mt-auto bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      Submit Diagram
                   </button>
                ) : (
                   <button onClick={() => setEvalState({ evaluating: false, score: 0, feedback: [] })} className="w-full py-3.5 mt-auto border-2 border-black bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      Edit Diagram
                   </button>
                )}
             </div>
          </aside>
          
          <main className="flex-1 relative flex bg-[#F2F2F0] bg-[radial-gradient(#d1d1d1_1px,transparent_1px)] [background-size:20px_20px]" ref={reactFlowWrapper}>
             <div className="absolute top-4 left-4 z-10 pointer-events-none flex gap-2">
               <h3 className="text-xs font-bold font-mono bg-white px-2 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black">
                 {scenario.level.toUpperCase()}
               </h3>
             </div>
             <ReactFlow
               nodes={nodes}
               edges={edges}
               onNodesChange={onNodesChange}
               onEdgesChange={onEdgesChange}
               onConnect={onConnect}
               onInit={setReactFlowInstance}
               onDrop={onDrop}
               onDragOver={onDragOver}
               nodeTypes={nodeTypes}
               edgeTypes={edgeTypes}
               fitView
             >
               <Controls />
             </ReactFlow>
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white border-2 border-black p-2 flex gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
               <div className="flex flex-col items-center gap-1 cursor-grab" onDragStart={(e) => { e.dataTransfer.setData('application/reactflow', 'entity'); e.dataTransfer.effectAllowed = 'move'; }} draggable>
                 <div className="w-8 h-8 border border-black bg-gray-100"></div>
                 <span className="text-[8px] font-bold tracking-widest uppercase">Entity</span>
               </div>
               <div className="w-[1px] bg-black h-10 self-center"></div>
               <div className="flex flex-col items-center gap-1 cursor-grab" onDragStart={(e) => { e.dataTransfer.setData('application/reactflow', 'process'); e.dataTransfer.effectAllowed = 'move'; }} draggable>
                 <div className="w-8 h-8 rounded-full border border-black bg-gray-100"></div>
                 <span className="text-[8px] font-bold tracking-widest uppercase">Process</span>
               </div>
               <div className="w-[1px] bg-black h-10 self-center"></div>
               <div className="flex flex-col items-center gap-1 cursor-grab" onDragStart={(e) => { e.dataTransfer.setData('application/reactflow', 'dataStore'); e.dataTransfer.effectAllowed = 'move'; }} draggable>
                 <div className="w-10 h-8 border-y border-l border-black bg-gray-100"></div>
                 <span className="text-[8px] font-bold tracking-widest uppercase">Store</span>
               </div>
             </div>
          </main>
          
          <aside className="w-[280px] bg-white text-black p-5 flex flex-col z-10 border-l-2 border-black overflow-hidden shrink-0">
             <div className="mb-6">
               <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Evaluation Result</h2>
               <div className="flex items-baseline gap-2">
                 <span className="text-6xl font-serif italic font-black">{evalState.evaluating ? evalState.score : '--'}</span>
                 <span className="text-xl text-gray-400">/ 100</span>
               </div>
               <div className="mt-3 h-1.5 w-full bg-gray-200">
                 <div className="h-full bg-black transition-all duration-1000 ease-out" style={{ width: `${evalState.evaluating ? evalState.score : 0}%` }}></div>
               </div>
             </div>

             <div className="flex-1 overflow-y-auto">
               <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Critique</h3>
               {!evalState.evaluating ? (
                  <p className="text-xs font-mono text-gray-500">Submit your diagram to view the evaluation results based on standard syllabus rules.</p>
               ) : (
                  <ul className="space-y-3 font-mono text-[11px] leading-tight">
                    {evalState.feedback.length > 0 ? (
                       evalState.feedback.map((f, i) => (
                         <li key={i} className="flex gap-2 border-b border-gray-100 pb-2">
                           <span className="text-red-600 shrink-0">✗</span>
                           <span className="text-red-700">{f}</span>
                         </li>
                       ))
                    ) : (
                       <li className="flex gap-2">
                         <span className="text-green-600 shrink-0">✓</span>
                         <span className="text-gray-700">Perfect! You have mastered this DFD.</span>
                       </li>
                    )}
                  </ul>
               )}
             </div>
          </aside>
       </div>

       {/* Question Selector Modal (200+ Scenarios Browser) */}
       {showQuestionModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6 backdrop-blur-xs">
             <div className="bg-white border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden">
                <div className="p-5 border-b-2 border-black flex justify-between items-center bg-gray-50">
                   <div>
                     <h2 className="text-2xl font-serif font-black italic">Question Bank</h2>
                     <p className="text-xs font-mono text-gray-500">Browse and search {SCENARIOS.length} Sri Lankan A/L ICT DFD Scenarios</p>
                   </div>
                   <button onClick={() => setShowQuestionModal(false)} className="p-2 hover:bg-gray-200 border border-black transition-colors">
                      <X size={20} />
                   </button>
                </div>

                {/* Filters */}
                <div className="p-4 border-b border-gray-200 bg-white flex flex-col gap-3">
                   <div className="flex gap-3">
                     <div className="relative flex-1">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search 200+ questions by keyword (e.g., Bookland, Hospital, Admission, ATM, Library)..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-9 pr-4 py-2 border border-black text-xs font-mono outline-none focus:ring-2 focus:ring-black"
                        />
                     </div>
                     <select
                       value={selectedLevelFilter}
                       onChange={(e) => setSelectedLevelFilter(e.target.value)}
                       className="px-3 py-2 border border-black text-xs font-mono bg-white outline-none cursor-pointer"
                     >
                       <option value="All">All Levels</option>
                       <option value="Context Diagram">Context Diagrams</option>
                       <option value="Level 1 DFD">Level 1 DFDs</option>
                     </select>
                   </div>

                   {/* Category Pills */}
                   <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`text-[10px] font-mono px-3 py-1 border border-black whitespace-nowrap transition-colors ${selectedCategory === cat ? 'bg-black text-white font-bold' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                        >
                          {cat}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Question List */}
                <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50">
                   {filteredScenarios.length > 0 ? (
                      filteredScenarios.map((s) => {
                        const originalIndex = SCENARIOS.findIndex(sc => sc.id === s.id);
                        const isCurrent = originalIndex === scenarioIndex;
                        return (
                          <div
                            key={s.id}
                            onClick={() => selectScenario(originalIndex)}
                            className={`p-4 border-2 border-black cursor-pointer transition-all flex flex-col justify-between bg-white hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${isCurrent ? 'ring-2 ring-black bg-amber-50' : ''}`}
                          >
                            <div>
                               <div className="flex items-center justify-between mb-1.5">
                                  <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">Q #{s.id} • {s.level}</span>
                                  <span className="text-[9px] font-bold bg-black text-white px-2 py-0.5">{s.category}</span>
                               </div>
                               <h4 className="text-sm font-bold font-serif mb-1 leading-snug">{s.title}</h4>
                               <p className="text-xs text-gray-600 line-clamp-2 font-serif italic mb-2">"{s.description}"</p>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[10px] font-mono text-gray-500">
                               <span>Nodes: {s.ideal.nodes.length} | Flows: {s.ideal.edges.length}</span>
                               <span className="font-bold text-black uppercase">Start Practice →</span>
                            </div>
                          </div>
                        );
                      })
                   ) : (
                      <div className="col-span-2 text-center py-12 text-gray-500 font-mono text-xs">
                         No scenarios matching "{searchQuery}". Try a different search term or category.
                      </div>
                   )}
                </div>

                <div className="p-3 border-t border-black bg-white flex justify-between items-center text-xs font-mono text-gray-500">
                   <span>Showing {filteredScenarios.length} of {SCENARIOS.length} Scenarios</span>
                   <button onClick={() => setShowQuestionModal(false)} className="px-4 py-1.5 bg-black text-white font-bold text-xs uppercase tracking-widest">
                      Close
                   </button>
                </div>
             </div>
          </div>
       )}

       {showCheatSheet && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
             <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full p-8 flex flex-col">
                <h2 className="text-2xl font-serif font-black italic mb-6 border-b-2 border-black pb-4">DFD Syllabus Rules</h2>
                <ul className="space-y-4 text-sm font-mono text-gray-800">
                   <li className="flex gap-3">
                     <span className="font-bold">01.</span>
                     <span><strong>External Entities</strong> are sources or destinations of data. They cannot communicate directly with each other (Entity → Entity is invalid).</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">02.</span>
                     <span><strong>Data Stores</strong> hold data at rest. Data cannot move directly from one store to another (Data Store → Data Store is invalid).</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">03.</span>
                     <span>An External Entity cannot directly read/write to a Data Store. It must go through a Process (Entity → Data Store is invalid).</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">04.</span>
                     <span>A <strong>Process</strong> transforms data. It must have at least one input data flow and at least one output data flow (no miracles or black holes).</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">05.</span>
                     <span><strong>Context Diagrams</strong> (Level 0) must NOT contain Data Stores. They provide a high-level view showing only the main system Process and External Entities.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="font-bold">06.</span>
                     <span>All data flows must be labeled accurately.</span>
                   </li>
                </ul>
                <div className="mt-8 flex justify-end">
                   <button onClick={() => setShowCheatSheet(false)} className="px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
                      Acknowledge
                   </button>
                </div>
             </div>
          </div>
       )}
    </div>
  );
}
