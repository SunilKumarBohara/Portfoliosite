import React from 'react';
import { PORTFOLIO_DATA, CONTACT_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { SocialIcon } from './SocialIcon';
import { ArrowUp, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-12 border-t border-white/[0.08] bg-[#070708] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Multi-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.06]">
          
          {/* Column 1: Brand & Profile (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white/15 shrink-0 bg-surface-elevated shadow-sm">
                  <img
                    src="/avatar.jpg"
                    alt={CONTACT_INFO.name}
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>
                <span className="font-bold text-lg text-white tracking-tight">
                  {CONTACT_INFO.name}
                </span>
              </div>
              
              <p className="text-xs font-mono text-muted mb-2 tracking-wide uppercase">
                {CONTACT_INFO.role} • {CONTACT_INFO.location}
              </p>

              <p className="text-sm text-secondary italic font-light max-w-sm mb-6 leading-relaxed">
                "Building visibility. Creating growth."
              </p>

              {/* Direct WhatsApp Callout Pill */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-elevated/80 border border-white/10 hover:border-accent/40 text-xs font-medium text-secondary hover:text-white transition-all group"
              >
                <MessageSquare className="w-3.5 h-3.5 text-accent" />
                <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
                <ArrowUpRight className="w-3 h-3 text-muted group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links - Vertical List (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-5 font-semibold">
              Navigation
            </span>
            <ul className="space-y-3 text-sm">
              {PORTFOLIO_DATA.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-secondary hover:text-white transition-colors block py-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Focus Areas - Vertical List (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-5 font-semibold">
              Focus Areas
            </span>
            <ul className="space-y-3 text-sm">
              {PORTFOLIO_DATA.expertise.map((item) => (
                <li key={item.id}>
                  <a
                    href="#expertise"
                    className="text-secondary hover:text-white transition-colors block py-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect / Social Profiles - Vertical List (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-5 font-semibold">
              Connect
            </span>
            <ul className="space-y-3 text-sm">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-secondary hover:text-white transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                    aria-label={social.ariaLabel}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-muted group-hover:text-accent transition-colors">
                        <SocialIcon name={social.name} className="w-4 h-4" />
                      </span>
                      <span>{social.name}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            © {currentYear} {CONTACT_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>{CONTACT_INFO.location} ({CONTACT_INFO.timezone})</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 text-secondary hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-2 py-1"
              aria-label="Back to Top of Page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
