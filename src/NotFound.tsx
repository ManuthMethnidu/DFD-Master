import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Home, Trophy, AlertTriangle, Compass } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen min-h-[100dvh] bg-canvas text-ink flex flex-col font-sans overflow-y-auto">
      {/* Top Header */}
      <header className="h-16 border-b-2 border-line bg-surface flex items-center px-4 sm:px-8 justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-on-accent border-2 border-line bg-surface px-3 py-1.5 transition-colors shadow-[2px_2px_0px_0px_rgba(var(--shadow-rgb),1)]"
          >
            <ArrowLeft size={16} /> Home
          </Link>
          <span className="font-serif font-black text-base sm:text-lg italic tracking-wide">
            DFD Master
          </span>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center">
        <div className="w-full bg-surface border-2 sm:border-4 border-line p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_rgba(var(--shadow-rgb),1)] sm:shadow-[16px_16px_0px_0px_rgba(var(--shadow-rgb),1)]">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-line bg-canvas text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <AlertTriangle size={14} className="text-amber-500 shrink-0" />
            <span>HTTP 404 &bull; Entity Not Found</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black italic tracking-tight leading-none mb-3">
            Process Interrupted
          </h1>
          <p className="text-sm sm:text-base font-mono text-ink/80 uppercase tracking-wider mb-8">
            The data flow destination does not exist within the system boundary.
          </p>

          {/* DFD Visual Representation */}
          <div className="bg-canvas border-2 border-line p-4 sm:p-6 mb-8 font-mono text-xs sm:text-sm overflow-x-auto">
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted mb-3 flex items-center gap-2">
              <Compass size={14} /> Diagnostic Data Flow:
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 text-center">
              {/* External Entity */}
              <div className="border-2 border-line bg-surface p-3 w-full sm:w-auto min-w-[130px] shadow-[3px_3px_0px_0px_rgba(var(--shadow-rgb),1)]">
                <div className="text-[9px] uppercase tracking-wider text-muted">Entity 1.0</div>
                <div className="font-bold">Client Browser</div>
              </div>

              {/* Data Flow Arrow */}
              <div className="flex flex-col items-center text-xs font-bold text-muted px-1">
                <span>GET {location.pathname}</span>
                <span className="hidden sm:inline">&rarr; &rarr; &rarr;</span>
                <span className="sm:hidden">&darr;</span>
              </div>

              {/* Broken Process */}
              <div className="border-2 border-dashed border-line bg-surface p-3 rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center shadow-[3px_3px_0px_0px_rgba(var(--shadow-rgb),1)] shrink-0">
                <span className="text-[9px] font-bold text-red-500">404</span>
                <span className="font-bold text-xs uppercase leading-tight">Severed</span>
                <span className="text-[9px] text-muted">Process</span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center text-xs font-bold text-red-500 px-1">
                <span>&times; Blocked</span>
                <span className="hidden sm:inline">&rarr; &times; &rarr;</span>
                <span className="sm:hidden">&darr;</span>
              </div>

              {/* Data Store */}
              <div className="border-y-2 border-x-0 border-line bg-surface p-3 w-full sm:w-auto min-w-[130px]">
                <div className="text-[9px] uppercase tracking-wider text-muted">D0</div>
                <div className="font-bold">Null Void</div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-line/40 text-[11px] text-muted flex flex-wrap justify-between gap-2">
              <span>Path requested: <code className="text-ink font-bold">{location.pathname}</code></span>
              <span>Status: Unhandled System Route</span>
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-canvas font-bold uppercase tracking-widest text-xs sm:text-sm border-2 border-ink hover:bg-accent hover:text-on-accent transition-all shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] active:translate-x-[2px] active:translate-y-[2px]"
            >
              <Home size={16} /> Back to Simulator
            </Link>

            <Link
              to="/leaderboard"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface text-ink font-bold uppercase tracking-widest text-xs sm:text-sm border-2 border-line hover:bg-canvas transition-all shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] active:translate-x-[2px] active:translate-y-[2px]"
            >
              <Trophy size={16} /> Hall of Fame
            </Link>

            <Link
              to="/terms"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-mono uppercase tracking-wider text-ink/70 hover:text-ink underline underline-offset-4"
            >
              System Docs
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
