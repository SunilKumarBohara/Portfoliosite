import React from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { Clock, Briefcase, PlusCircle } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/[0.06] relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionBadge label="Career Timeline" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Journey
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-md font-normal leading-relaxed">
            Chronological progression of SEO roles, execution milestones, and technical achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l border-white/[0.12] space-y-10">
            
            {/* Timeline Marker */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface-elevated border-2 border-accent flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>

            {/* Ready State Card */}
            <div className="p-8 rounded-2xl bg-surface/70 border border-white/[0.08] backdrop-blur-sm relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      SEO Executive Positions & Engagements
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-muted">
                      Timeline Active
                    </span>
                  </div>
                  
                  <p className="text-sm text-secondary leading-relaxed mb-6">
                    Professional experience records and detailed case milestones will be updated here. Currently open for full-time roles, strategic consulting, and project-based SEO engagements.
                  </p>

                  <div className="p-4 rounded-xl bg-surface-elevated/80 border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>Inquiries & Resume: Available upon direct request</span>
                    </div>
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Request Work History</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
