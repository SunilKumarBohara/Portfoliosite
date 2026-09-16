import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BarChart2, Users, Cpu, ShieldCheck } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export const WhyMe: React.FC = () => {
  const getPrincipleIcon = (tag: string) => {
    switch (tag) {
      case 'DATA-DRIVEN':
        return <BarChart2 className="w-5 h-5 text-accent" />;
      case 'USER-FIRST':
        return <Users className="w-5 h-5 text-accent" />;
      case 'TECHNICAL + CREATIVE':
        return <Cpu className="w-5 h-5 text-accent" />;
      case 'LONG-TERM GROWTH':
      default:
        return <ShieldCheck className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionBadge label="Guiding Principles" />

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            SEO Is More Than Rankings.
          </h2>
          <p className="text-base sm:text-xl text-secondary font-normal leading-relaxed">
            Strong SEO connects the right people with the right information at the right moment.
          </p>
        </div>

        {/* Principles 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.principles.map((item) => (
            <div
              key={item.tag}
              className="p-7 rounded-2xl bg-surface/70 border border-white/[0.08] hover:border-accent/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  {getPrincipleIcon(item.tag)}
                </div>

                <span className="text-[11px] font-mono tracking-widest text-accent font-semibold block mb-2">
                  {item.tag}
                </span>

                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.05] text-[10px] font-mono text-muted">
                Core Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
