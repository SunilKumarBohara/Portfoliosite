import React from 'react';
import { SITE_CONFIG } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status and Location Label */}
            <div className="inline-flex flex-wrap items-center gap-3 mb-6">
              {/* Availability status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-white/10 text-xs font-medium text-secondary shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{SITE_CONFIG.status}</span>
              </div>

              {/* Tagline / Location Pill */}
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted">
                {SITE_CONFIG.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Turning Search Into{' '}
              <span className="bg-gradient-to-r from-accent-light via-accent to-[#A5B4FC] bg-clip-text text-transparent">
                Sustainable Growth.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed mb-10 font-normal">
              {SITE_CONFIG.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-primary font-medium text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <span>View My Work</span>
              </a>
            </div>

          </div>

          {/* Right Visual Element (5 Cols on desktop) */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted hover:text-secondary text-xs font-mono uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded p-1"
            aria-label="Scroll to About section"
          >
            <span>Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
};
