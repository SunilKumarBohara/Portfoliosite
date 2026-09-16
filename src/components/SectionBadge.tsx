import React, { useState } from 'react';

interface SectionBadgeProps {
  label: string;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ label, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group/badge inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface-elevated/70 border border-white/[0.08] hover:border-accent/40 hover:bg-surface-elevated hover:shadow-[0_0_20px_rgba(91,124,250,0.18)] transition-all duration-300 cursor-pointer select-none mb-3.5 ${className}`}
      data-interactive="true"
      title="Click to pulse signal"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Interactive Radar Beacon & Shimmer Track */}
      <div className="relative flex items-center justify-center w-3.5 h-3.5">
        {/* Expanding radar ping wave */}
        <span
          className={`absolute w-full h-full rounded-full bg-accent/30 transition-all duration-500 ${
            isHovered || clicked ? 'animate-ping scale-150 bg-accent/60' : 'animate-pulse'
          }`}
        />
        
        {/* Outer orbital ring */}
        <span
          className={`absolute w-3 h-3 rounded-full border border-accent/40 transition-transform duration-500 ${
            isHovered ? 'rotate-90 scale-125 border-accent' : ''
          }`}
        />

        {/* Center glowing core dot */}
        <span
          className={`relative w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300 ${
            isHovered
              ? 'scale-125 bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]'
              : 'shadow-[0_0_6px_rgba(91,124,250,0.8)]'
          }`}
        />
      </div>


      {/* Label Text */}
      <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-semibold group-hover/badge:text-white transition-colors">
        {label}
      </span>
    </div>
  );
};
