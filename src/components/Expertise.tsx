import React from 'react';
import { PORTFOLIO_DATA, CONTACT_INFO } from '../data/portfolioData';
import { SectionBadge } from './SectionBadge';
import { 
  Code2, 
  FileText, 
  Search, 
  Share2, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export const Expertise: React.FC = () => {
  const getCardIcon = (id: string) => {
    switch (id) {
      case 'technical-seo':
        return <Code2 className="w-5 h-5 text-accent" />;
      case 'on-page-seo':
        return <FileText className="w-5 h-5 text-accent" />;
      case 'keyword-research':
        return <Search className="w-5 h-5 text-accent" />;
      case 'off-page-seo':
        return <Share2 className="w-5 h-5 text-accent" />;
      case 'local-seo':
        return <MapPin className="w-5 h-5 text-accent" />;
      case 'seo-audits':
      default:
        return <ShieldCheck className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="expertise" className="py-24 border-t border-white/[0.06] relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionBadge label="SEO Expertise" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What I Do
            </h2>
          </div>
          <p className="text-sm sm:text-base text-secondary max-w-md font-normal leading-relaxed">
            Comprehensive search engine optimization services designed to create sustainable visibility and high-intent organic traffic.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.expertise.map((item) => (
            <div
              key={item.id}
              className="group relative p-7 rounded-2xl bg-surface/80 border border-white/[0.07] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              {/* Background hover light */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-accent/30 flex items-center justify-center transition-colors">
                    {getCardIcon(item.id)}
                  </div>
                  <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors font-semibold tracking-wider">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-secondary leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Tag Chips */}
              <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-muted group-hover:text-secondary group-hover:border-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-12 p-6 rounded-2xl border border-white/[0.08] bg-surface-elevated/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-white">Need a comprehensive SEO audit or custom strategy?</h4>
            <p className="text-xs text-muted mt-1">Get an objective overview of your site's search visibility and technical health.</p>
          </div>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold tracking-wide transition-colors whitespace-nowrap shadow-md shadow-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Discuss Your Site</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
