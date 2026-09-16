import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { 
  MessageSquare, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Send 
} from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [inquiryType, setInquiryType] = useState('SEO Audit / Consultation');
  const [message, setMessage] = useState('');

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Sunil, I'm reaching out regarding: ${inquiryType}.\n${
        websiteUrl ? `Website: ${websiteUrl}\n` : ''
      }${message ? `Details: ${message}` : ''}`
    );
    window.open(`${CONTACT_INFO.whatsappUrl}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 border-t border-white/[0.06] relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionBadge label="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Direct CTA (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                {CONTACT_INFO.heading}
              </h2>
              <p className="text-base sm:text-lg text-secondary leading-relaxed mb-8">
                {CONTACT_INFO.subheading}
              </p>

              {/* Direct WhatsApp Callout Card */}
              <div className="p-6 rounded-2xl bg-surface border border-white/[0.08] mb-8">
                <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-2">
                  Direct WhatsApp Communication
                </span>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-mono font-bold text-white hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span>{CONTACT_INFO.phoneDisplay}</span>
                    <ArrowUpRight className="w-5 h-5 text-accent" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyNumber}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-white/10 hover:border-white/20 text-xs font-medium text-secondary hover:text-white transition-all w-fit"
                    aria-label="Copy WhatsApp Phone Number"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-6">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/35"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>


            </div>
          </div>

          {/* Direct Instant WhatsApp Dispatch Form (6 Cols) */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-surface/90 border border-white/[0.08] backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-2">
              Send a Direct Project Inquiry
            </h3>
            <p className="text-xs text-muted mb-6">
              Fill in your details below to automatically format and dispatch your request directly via WhatsApp.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label htmlFor="inquiry-focus" className="block text-xs font-mono text-secondary mb-1.5 uppercase">
                  Inquiry Focus
                </label>
                <select
                  id="inquiry-focus"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="SEO Audit / Consultation">SEO Audit / Consultation</option>
                  <option value="Technical SEO Optimization">Technical SEO Optimization</option>
                  <option value="On-Page & Keyword Strategy">On-Page & Keyword Strategy</option>
                  <option value="Local SEO / Google Business">Local SEO / Google Business</option>
                  <option value="Full-Time / Career Opportunity">Full-Time / Career Opportunity</option>
                </select>
              </div>

              <div>
                <label htmlFor="website-url" className="block text-xs font-mono text-secondary mb-1.5 uppercase">
                  Website / Domain URL (Optional)
                </label>
                <input
                  id="website-url"
                  type="url"
                  placeholder="https://example.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-sm text-white placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message-text" className="block text-xs font-mono text-secondary mb-1.5 uppercase">
                  Brief Message or Requirements
                </label>
                <textarea
                  id="message-text"
                  rows={4}
                  placeholder="Describe your website goals, search challenges, or project scope..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-sm text-white placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-accent text-white font-semibold text-sm border border-white/10 hover:border-accent transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Send className="w-4 h-4" />
                <span>Launch WhatsApp Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
