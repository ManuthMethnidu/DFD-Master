import React, { useState, useEffect, useMemo } from 'react';
import { SCENARIOS, Scenario } from './scenarios';
import { Trophy, ChevronRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updateUserScore } from './firebase';

export function MobileMCQ({ user }: { user: any }) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const scenario = SCENARIOS[scenarioIndex] || SCENARIOS[0];
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const options = useMemo(() => {
    // Generate 3 options. One is correct, two are incorrect.
    const correct = {
      isCorrect: true,
      text: scenario.ideal.edges.map(e => `${e.source} → ${e.label} → ${e.target}`).join('\\n')
    };
    
    // Create wrong option 1 by swapping some targets and sources
    const wrong1Edges = scenario.ideal.edges.map(e => ({
      source: e.target,
      target: e.source,
      label: e.label
    }));
    const wrong1 = {
      isCorrect: false,
      text: wrong1Edges.map(e => `${e.source} → ${e.label} → ${e.target}`).join('\\n')
    };

    // Create wrong option 2 by modifying labels randomly
    const wrong2Edges = scenario.ideal.edges.map(e => ({
      source: e.source,
      target: e.target,
      label: e.label + ' Data'
    }));
    const wrong2 = {
      isCorrect: false,
      text: wrong2Edges.map(e => `${e.source} → ${e.label} → ${e.target}`).join('\\n')
    };

    const arr = [correct, wrong1, wrong2];
    // Shuffle
    return arr.sort(() => Math.random() - 0.5);
  }, [scenario]);

  const handleSubmit = async () => {
    setHasSubmitted(true);
    if (selectedOption !== null && options[selectedOption].isCorrect) {
      if (user) {
        // Log mobile score
        await updateUserScore(user.uid, 'mobile_' + scenario.id, 100);
      }
    }
  };

  const nextScenario = () => {
    setHasSubmitted(false);
    setSelectedOption(null);
    setScenarioIndex((prev) => (prev + 1) % SCENARIOS.length);
  };

  return (
    <div className="h-screen bg-canvas text-ink font-sans flex flex-col">
      <header className="p-4 border-b-2 border-line bg-surface flex justify-between items-center sticky top-0 z-10">
        <div>
          <h1 className="text-2xl font-serif font-black italic leading-none">DFD Master</h1>
          <span className="text-sm font-bold tracking-[0.1em] uppercase text-ink">Mobile Edition</span>
        </div>
        <div className="flex gap-2">
           <Link to="/leaderboard" className="p-2 border-2 border-line hover:bg-canvas">
             <Trophy size={16} />
           </Link>
           <Link to="/profile" className="p-2 border-2 border-line hover:bg-canvas">
             <User size={16} />
           </Link>
        </div>
      </header>

      <main className="flex-1 min-h-0 p-4 flex flex-col gap-6 overflow-y-auto" style={{ touchAction: "auto", overscrollBehavior: "contain" }}>
        <div className="bg-surface border-2 border-line p-4 shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)]">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-bold uppercase">{scenario.level}</span>
            <span className="text-sm font-bold bg-accent text-on-accent px-1.5 py-0.5">{scenario.category}</span>
          </div>
          <h2 className="text-xl font-serif font-bold mb-2">{scenario.title}</h2>
          <p className="text-base italic border-l-2 border-line pl-3 bg-canvas p-2">"{scenario.description}"</p>
          <div className="mt-4 text-sm font-bold uppercase tracking-widest text-muted">Identify the correct flows:</div>
        </div>

        <div className="flex flex-col gap-4">
          {options.map((opt, idx) => (
            <button
              key={idx}
              disabled={hasSubmitted}
              onClick={() => setSelectedOption(idx)}
              className={`p-4 border-2 text-left transition-colors text-base font-mono whitespace-pre-wrap leading-relaxed shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)]
                ${hasSubmitted 
                  ? opt.isCorrect 
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-green-500' 
                    : selectedOption === idx 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 shadow-red-500' 
                      : 'border-line bg-surface opacity-50'
                  : selectedOption === idx 
                    ? 'border-accent bg-accent/10' 
                    : 'border-line bg-surface hover:bg-canvas'
                }`}
            >
              {opt.text}
            </button>
          ))}
        </div>

        {hasSubmitted ? (
          <button 
            onClick={nextScenario}
            className="mt-auto py-4 bg-accent text-on-accent font-bold uppercase tracking-widest text-base flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)]"
          >
            Next Scenario <ChevronRight size={16} />
          </button>
        ) : (
          <button 
            disabled={selectedOption === null}
            onClick={handleSubmit}
            className="mt-auto py-4 bg-accent text-on-accent font-bold uppercase tracking-widest text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)]"
          >
            Submit Answer
          </button>
        )}
      </main>
    </div>
  );
}
