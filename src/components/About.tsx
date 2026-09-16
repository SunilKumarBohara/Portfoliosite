import React from 'react';
import { PORTFOLIO_DATA, CONTACT_INFO, SITE_CONFIG } from '../data/portfolioData';
import { MapPin, User, Target, Layers } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export const About: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MapPin className="w-4 h-4 text-accent" />;
      case 1:
        return <User className="w-4 h-4 text-accent" />;
      case 2:
        return <Target className="w-4 h-4 text-accent" />;
      case 3:
      default:
        return <Layers className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="about" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Label */}
        <SectionBadge label="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Statement (7 Cols) */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              Bridging technical search mechanics with business growth strategy.
            </h2>
            <p className="text-base sm:text-lg text-secondary leading-relaxed mb-8">
              {SITE_CONFIG.aboutText}
            </p>
            
            <div className="p-6 rounded-2xl bg-surface/80 border border-white/[0.08] backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                Core Philosophy
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                SEO is not a one-time setup or a collection of quick tricks. It is a continuous discipline of understanding search intent, eliminating crawl frictions, creating authoritative content, and building measurable organic visibility that compounds over time.
              </p>
            </div>
          </div>

          {/* Quick Facts Grid (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.profile.quickFacts.map((fact, index) => (
                <div
                  key={fact.label}
                  className="p-5 rounded-xl bg-surface-elevated/60 border border-white/[0.08] hover:border-white/15 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 text-muted text-xs font-mono mb-2 uppercase tracking-wider">
                    {getIcon(index)}
                    <span>{fact.label}</span>
                  </div>
                  <div className="text-sm font-semibold text-primary font-sans">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick direct contact note */}
            <div className="mt-4 p-5 rounded-xl bg-accent/[0.04] border border-accent/15 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-muted">Currently based in</p>
                <p className="text-sm font-semibold text-white">{CONTACT_INFO.location} ({CONTACT_INFO.timezone})</p>
              </div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-accent hover:text-accent-light underline underline-offset-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
