import React, { useState, useEffect, useRef } from 'react';
import { Search, TrendingUp, Cpu, Compass, CheckCircle2 } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / 25;
      const y = (e.clientY - (rect.top + rect.height / 2)) / 25;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[480px] mx-auto lg:max-w-none flex items-center justify-center select-none"
    >
      {/* Subtle background glow */}
      <div
        className="absolute w-72 h-72 rounded-full bg-accent/15 blur-[80px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
        }}
      />

      {/* Outer Technical Frame */}
      <div
        className="relative w-full h-full max-h-[440px] rounded-2xl border border-white/[0.08] bg-[#0E0E11]/70 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-transform duration-500 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${-mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg)`,
        }}
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Top Metric Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-muted tracking-wider uppercase">
              Organic Search Architecture
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium">
            <CheckCircle2 className="w-3 h-3" />
            <span>Optimal Indexation</span>
          </div>
        </div>

        {/* Main Growth Vector Graph */}
        <div className="relative z-10 my-auto py-4">
          <div className="relative h-44 w-full flex items-end">
            <svg
              viewBox="0 0 400 160"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5B7CFA" stopOpacity="0.2" />
                  <stop offset="60%" stopColor="#5B7CFA" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5B7CFA" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#5B7CFA" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
              <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />

              {/* Area Fill */}
              <path
                d="M 10 140 Q 90 135, 150 110 T 280 60 T 390 20 L 390 150 L 10 150 Z"
                fill="url(#areaGradient)"
              />

              {/* Smooth Growth Curve */}
              <path
                d="M 10 140 Q 90 135, 150 110 T 280 60 T 390 20"
                stroke="url(#curveGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Node Points */}
              <circle cx="10" cy="140" r="4" fill="#5B7CFA" />
              <circle cx="150" cy="110" r="4.5" fill="#5B7CFA" />
              <circle cx="280" cy="60" r="4.5" fill="#818CF8" />
              
              {/* Peak Animated Node */}
              <circle cx="390" cy="20" r="6" fill="#818CF8" className="animate-ping opacity-75" />
              <circle cx="390" cy="20" r="5" fill="#FFFFFF" />
            </svg>

            {/* Floating Metric Badge 1: Discovery */}
            <div
              className="absolute left-2 bottom-6 bg-surface-elevated/90 border border-white/10 rounded-lg p-2 backdrop-blur-md shadow-lg transition-transform duration-300"
              style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
            >
              <div className="flex items-center gap-1.5 text-[10px] text-muted font-mono">
                <Search className="w-3 h-3 text-accent" />
                <span>Search Intent</span>
              </div>
            </div>

            {/* Floating Metric Badge 2: Authority */}
            <div
              className="absolute left-[40%] top-[40%] -translate-x-1/2 bg-surface-elevated/90 border border-white/10 rounded-lg p-2 backdrop-blur-md shadow-lg transition-transform duration-300"
              style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
            >
              <div className="flex items-center gap-1.5 text-[10px] text-muted font-mono">
                <Cpu className="w-3 h-3 text-accent-light" />
                <span>Technical Health</span>
              </div>
            </div>

            {/* Floating Metric Badge 3: Sustainable Rank */}
            <div
              className="absolute right-2 top-0 bg-surface-elevated/90 border border-accent/30 rounded-lg p-2.5 backdrop-blur-md shadow-xl transition-transform duration-300"
              style={{ transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)` }}
            >
              <div className="flex items-center gap-1.5 text-xs text-white font-semibold">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Organic Growth</span>
              </div>
              <p className="text-[10px] text-muted font-mono mt-0.5">High-Intent Traffic</p>
            </div>
          </div>
        </div>

        {/* Bottom Strategic Flow Bar */}
        <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-muted">
          <span className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-accent" />
            <span>DISCOVER</span>
          </span>
          <span className="text-white/20">→</span>
          <span>INDEX</span>
          <span className="text-white/20">→</span>
          <span>RANK</span>
          <span className="text-white/20">→</span>
          <span className="text-accent font-semibold">CONVERT</span>
        </div>
      </div>
    </div>
  );
};
