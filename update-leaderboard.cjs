const fs = require('fs');

let content = fs.readFileSync('src/RouterApp.tsx', 'utf-8');

// add icons
content = content.replace(
  "import { User, LogOut, Award, Trophy, ArrowLeft } from 'lucide-react';",
  "import { User, LogOut, Award, Trophy, ArrowLeft, Info, X } from 'lucide-react';"
);

const newLeaderboard = `function Leaderboard() {
  const [leaders, setLeaders] = useState<any[]>([]);
  const [showInfo, setShowInfo] = useState(false);
  
  useEffect(() => {
    getLeaderboard().then(data => data && setLeaders(data));
  }, []);

  const getRank = (score: number) => {
    if (score >= 1000) return 'DFD Grandmaster';
    if (score >= 500) return 'Systems Architect';
    if (score >= 250) return 'Process Analyst';
    if (score >= 100) return 'Data Flow Apprentice';
    return 'Novice Modeler';
  };

  const getRankColor = (score: number) => {
    if (score >= 1000) return 'text-amber-500 border-amber-500 bg-amber-50 dark:bg-amber-900/30';
    if (score >= 500) return 'text-slate-500 border-slate-500 bg-slate-50 dark:bg-slate-800/50';
    if (score >= 250) return 'text-amber-700 border-amber-700 bg-orange-50 dark:bg-orange-900/30';
    if (score >= 100) return 'text-emerald-500 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30';
    return 'text-sky-500 border-sky-500 bg-sky-50 dark:bg-sky-900/30';
  };

  return (
    <div className="min-h-screen bg-canvas text-ink p-8 md:p-16 relative">
      <div className="absolute top-4 right-4"><ThemeToggle /></div>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-on-accent border-2 border-transparent hover:border-line px-3 py-1.5 transition-colors">
            <ArrowLeft size={16} /> Back to Simulator
          </Link>
          <button onClick={() => setShowInfo(true)} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-surface border-2 border-line px-3 py-1.5 hover:bg-canvas transition-colors">
            <Info size={16} /> Marking & Ranks
          </button>
        </div>
        
        <div className="bg-surface border-4 border-line p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(var(--shadow-rgb),1)]">
          <div className="flex items-center gap-4 mb-12 border-b-4 border-line pb-6">
            <Trophy size={48} className="text-ink" />
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-black italic">Hall of Fame</h1>
              <p className="text-sm font-mono text-muted uppercase tracking-widest mt-2">Top 10 DFD Masters</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {leaders.length > 0 ? (
              leaders.map((leader, idx) => (
                <div key={leader.uid} className={\`flex items-center justify-between p-4 md:p-6 border-2 border-line \${idx === 0 ? 'bg-amber-100 dark:bg-amber-900 shadow-[8px_8px_0px_0px_rgba(var(--shadow-rgb),1)] -translate-y-1 -translate-x-1' : 'bg-canvas'}\`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <div className="flex items-center gap-4">
                        <span className="text-2xl md:text-3xl font-serif font-black italic text-muted w-8">#{idx + 1}</span>
                        <span className="text-lg md:text-xl font-bold">{leader.displayName}</span>
                    </div>
                    <span className={\`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 whitespace-nowrap self-start md:self-auto \${getRankColor(leader.totalScore)}\`}>
                        {getRank(leader.totalScore)}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 text-right">
                    <span className="text-2xl md:text-3xl font-serif font-black italic">{leader.totalScore}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted">PTS</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center font-mono text-sm text-muted py-12 border-2 border-dashed border-line">
                No scores recorded yet. Be the first to make the leaderboard!
              </p>
            )}
          </div>
        </div>
      </div>

      {showInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/20 backdrop-blur-sm overflow-y-auto">
          <div className="bg-surface border-4 border-line max-w-2xl w-full p-8 shadow-[16px_16px_0px_0px_rgba(var(--shadow-rgb),1)] my-auto relative">
            <button onClick={() => setShowInfo(false)} className="absolute top-4 right-4 p-2 hover:bg-canvas border-2 border-transparent hover:border-line transition-colors text-ink">
              <X size={20} strokeWidth={3} />
            </button>
            <h2 className="text-3xl font-serif font-black italic mb-8 border-b-4 border-line pb-4 text-ink">Marking & Ranks</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-4">Ranking System</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b-2 border-line/20 pb-2">
                    <span className={\`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 \${getRankColor(1000)}\`}>DFD Grandmaster</span>
                    <span className="font-mono text-sm font-bold text-ink">1000+ pts</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-line/20 pb-2">
                    <span className={\`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 \${getRankColor(500)}\`}>Systems Architect</span>
                    <span className="font-mono text-sm font-bold text-ink">500+ pts</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-line/20 pb-2">
                    <span className={\`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 \${getRankColor(250)}\`}>Process Analyst</span>
                    <span className="font-mono text-sm font-bold text-ink">250+ pts</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-line/20 pb-2">
                    <span className={\`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 \${getRankColor(100)}\`}>Data Flow Apprentice</span>
                    <span className="font-mono text-sm font-bold text-ink">100+ pts</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className={\`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 \${getRankColor(0)}\`}>Novice Modeler</span>
                    <span className="font-mono text-sm font-bold text-ink">0+ pts</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-4">Marking Scheme</h3>
                <div className="space-y-4 font-mono text-sm text-ink">
                  <p><strong>Base Score:</strong> 100 points per scenario.</p>
                  <ul className="space-y-2 list-disc list-inside text-muted">
                    <li><span className="text-emerald-600 font-bold">Correct Matches:</span> +Points</li>
                    <li><span className="text-red-500 font-bold">Missing Element:</span> -20 pts each</li>
                    <li><span className="text-red-500 font-bold">Wrong Connection:</span> -10 pts each</li>
                    <li><span className="text-red-500 font-bold">Wrong Direction:</span> -5 pts each</li>
                    <li><span className="text-red-500 font-bold">Revealing Hints:</span> -15 pts flat penalty</li>
                  </ul>
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-200 dark:border-amber-700 text-amber-800 dark:text-amber-200 text-xs mt-4">
                    <strong>Note:</strong> Architecture rules (e.g. Entity to Entity direct links) will cause immediate failure of the evaluation step for that element.
                  </div>
                </div>
              </div>
            </div>
            
            <button onClick={() => setShowInfo(false)} className="mt-8 w-full py-4 border-4 border-line bg-surface text-ink font-bold uppercase tracking-widest hover:bg-canvas transition-colors">
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}`;

content = content.replace(/function Leaderboard\(\) \{[\s\S]*?\n\}/, newLeaderboard);

fs.writeFileSync('src/RouterApp.tsx', content);
