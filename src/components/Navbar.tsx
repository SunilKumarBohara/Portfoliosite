import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, CONTACT_INFO, SITE_CONFIG } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isBlogPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isBlogPage = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(isBlogPage ? 'blog' : 'home');

  useEffect(() => {
    if (isBlogPage) {
      setActiveSection('blog');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isBlogPage) {
        // Simple active section detection for homepage
        const sections = PORTFOLIO_DATA.navigation.map((n) => n.href.replace('#', ''));
        const scrollPos = window.scrollY + 120;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBlogPage]);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const isHeaderCompact = isBlogPage || scrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderCompact
          ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-xl shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          aria-label={`${SITE_CONFIG.name} - Home`}
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border border-white/15 group-hover:border-accent/60 transition-all duration-200 shrink-0 bg-surface-elevated shadow-sm">
            <img
              src="/avatar.jpg"
              alt={SITE_CONFIG.name}
              className="w-full h-full object-cover object-top scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-tight text-primary group-hover:text-white transition-colors">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[11px] text-muted tracking-wide font-medium uppercase sm:hidden">
              {CONTACT_INFO.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {PORTFOLIO_DATA.navigation.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'text-white'
                    : 'text-secondary hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent rounded-full transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-white/[0.06] hover:bg-accent hover:text-white border border-white/10 hover:border-accent rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-secondary hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[57px] bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/[0.08] transition-all duration-300 md:hidden flex flex-col justify-between p-6 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
        style={{ height: 'calc(100vh - 57px)' }}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col space-y-2 pt-2">
          {PORTFOLIO_DATA.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-lg font-medium text-secondary hover:text-white hover:bg-white/[0.04] rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 px-5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-center text-xs text-muted">
            {CONTACT_INFO.location} • {CONTACT_INFO.role}
          </p>
        </div>
      </div>
    </header>
  );
};
