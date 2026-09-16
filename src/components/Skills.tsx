import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sparkles, CheckCircle } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionBadge label="Capabilities" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-md font-normal leading-relaxed">
            A strategic matrix of organic search competencies built for sustainable search indexation and long-term algorithmic resilience.
          </p>
        </div>

        {/* Skill Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="p-7 rounded-2xl bg-surface/60 border border-white/[0.08] relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-mono font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                {/* Capability Chips */}
                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="group flex items-center justify-between p-3 rounded-xl bg-surface-elevated/80 border border-white/[0.04] hover:border-accent/30 hover:bg-surface-elevated transition-all"
                    >
                      <span className="text-sm font-medium text-secondary group-hover:text-white transition-colors">
                        {skill}
                      </span>
                      <CheckCircle className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-xs font-mono text-muted">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Verified Core Competency</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
