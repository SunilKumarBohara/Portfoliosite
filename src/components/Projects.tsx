import React from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { FolderKanban, ArrowUpRight, BarChart3, LineChart } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionBadge label="Case Studies" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-secondary max-w-md font-normal leading-relaxed">
            Data-driven organic search campaigns, technical audit implementations, and content expansion initiatives.
          </p>
        </div>

        {/* Selected Projects Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Active Empty State Card (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-surface/70 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <FolderKanban className="w-48 h-48 text-white" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                <FolderKanban className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-muted mb-2 block">
                Portfolio Showcase
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                Selected projects will be added here.
              </h3>
              <p className="text-sm text-secondary leading-relaxed mb-8 max-w-lg">
                In-depth SEO case studies showcasing technical crawl remediation, search intent architecture, and organic growth benchmarks are currently being compiled for public publication.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-muted">
                Need references or tailored audit samples?
              </div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-elevated border border-white/10 hover:border-accent/40 text-xs font-semibold text-white transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Request Case Study Overview</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </div>

          {/* Project Architecture Structure Preview (5 Cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-surface-elevated/40 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-4 h-4 text-accent" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Case Study Structure
                </h4>
              </div>
              <p className="text-xs text-muted mb-6 leading-relaxed">
                Each upcoming project document adheres to a rigorous reporting framework:
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-surface/80 border border-white/[0.04] text-xs">
                  <span className="font-mono text-accent font-semibold">01. Baseline Audit & Challenge</span>
                  <p className="text-muted mt-0.5">Diagnosing indexation bottlenecks & ranking ceilings.</p>
                </div>
                <div className="p-3 rounded-lg bg-surface/80 border border-white/[0.04] text-xs">
                  <span className="font-mono text-accent font-semibold">02. Strategic SEO Roadmap</span>
                  <p className="text-muted mt-0.5">Keyword intent mapping, on-page taxonomy & technical fixes.</p>
                </div>
                <div className="p-3 rounded-lg bg-surface/80 border border-white/[0.04] text-xs">
                  <span className="font-mono text-accent font-semibold">03. Measured Organic Impact</span>
                  <p className="text-muted mt-0.5">Tracking organic impressions, CTR, and search visibility.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-xs font-mono text-muted">
              <LineChart className="w-3.5 h-3.5 text-emerald-400" />
              <span>Standardized Data-Driven Reporting</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
