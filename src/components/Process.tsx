import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionBadge } from './SectionBadge';
import { 
  Search, 
  FileCheck2, 
  Milestone, 
  Sliders, 
  TrendingUp, 
  Rocket 
} from 'lucide-react';

export const Process: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-4 h-4 text-accent" />;
      case '02':
        return <FileCheck2 className="w-4 h-4 text-accent" />;
      case '03':
        return <Milestone className="w-4 h-4 text-accent" />;
      case '04':
        return <Sliders className="w-4 h-4 text-accent" />;
      case '05':
        return <TrendingUp className="w-4 h-4 text-accent" />;
      case '06':
      default:
        return <Rocket className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="process" className="py-24 border-t border-white/[0.06] relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionBadge label="Methodology" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            SEO Execution Process
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-md font-normal leading-relaxed">
            A systematic, iterative framework designed to convert technical health into long-term organic momentum.
          </p>
        </div>

        {/* Process Flow - Responsive Grid (Horizontal Desktop / Vertical Mobile) */}
        <div className="relative">
          
          {/* Subtle Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-accent/20 via-white/10 to-accent/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {PORTFOLIO_DATA.process.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-surface/80 border border-white/[0.07] hover:border-accent/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  {/* Step badge & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                      {getStepIcon(item.step)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-muted uppercase">
                  Phase {item.step}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
