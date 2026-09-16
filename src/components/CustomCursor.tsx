import React, { useEffect, useState, useRef } from 'react';

type CursorMode = 'default' | 'link' | 'link-external' | 'blog' | 'cta' | 'copy' | 'drag';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [clickRipple, setClickRipple] = useState(false);

  // Position tracking using refs to prevent React state thrashing at 120fps
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener('change', handlePointerChange);

    if (!mediaQuery.matches) return;

    // Fluid lerp physics loop
    const render = () => {
      // Smooth glide toward mouse position
      const lerp = 0.18;
      ring.current.x += (mouse.current.x - ring.current.x) * lerp;
      ring.current.y += (mouse.current.y - ring.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };
    rafId.current = requestAnimationFrame(render);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsMouseDown(true);
      setClickRipple(true);
      setTimeout(() => setClickRipple(false), 500);
    };

    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Interactive target detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const whatsappBtn = target.closest('a[href*="wa.me"]');
      const copyBtn = target.closest('button[aria-label*="Copy"]');
      const blogCard = target.closest('article[data-interactive="true"], a[href*="blog"]');
      const externalLink = target.closest('a[target="_blank"], a[href^="http"]');
      const regularInteractive = target.closest('a, button, input, textarea, select, [role="button"], [data-interactive="true"]');
      const caseStudy = target.closest('#projects, #experience, [data-cursor="explore"]');

      if (whatsappBtn) {
        setCursorMode('cta');
      } else if (copyBtn) {
        setCursorMode('copy');
      } else if (blogCard) {
        setCursorMode('blog');
      } else if (externalLink) {
        setCursorMode('link-external');
      } else if (regularInteractive) {
        setCursorMode('link');
      } else if (caseStudy) {
        setCursorMode('drag');
      } else {
        setCursorMode('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isFinePointer || !isVisible) return null;

  // Compute ring styling based on interactive context — COMPACT, ELEGANT, NO BLUR
  const getRingStyles = () => {
    if (isMouseDown) {
      return 'w-5 h-5 border-accent bg-accent/20 scale-90 shadow-sm shadow-accent/40';
    }
    switch (cursorMode) {
      case 'cta':
        return 'w-8 h-8 border-emerald-400/90 bg-emerald-500/[0.04] shadow-[0_0_12px_rgba(52,211,153,0.35)]';
      case 'copy':
        return 'w-8 h-8 border-emerald-400/90 bg-emerald-500/[0.04] shadow-[0_0_10px_rgba(52,211,153,0.3)]';
      case 'blog':
        return 'w-8 h-8 border-accent bg-accent/[0.04] shadow-[0_0_12px_rgba(91,124,250,0.35)]';
      case 'link-external':
        return 'w-8 h-8 border-accent bg-accent/[0.04] shadow-[0_0_12px_rgba(91,124,250,0.35)]';
      case 'link':
        return 'w-7 h-7 border-accent/90 bg-accent/[0.04] shadow-[0_0_10px_rgba(91,124,250,0.3)]';
      case 'drag':
        return 'w-6 h-6 border-white/40 bg-white/[0.02]';
      case 'default':
      default:
        return 'w-5 h-5 border-white/30 bg-transparent';
    }
  };

  const isLinkHovered = cursorMode === 'link' || cursorMode === 'link-external' || cursorMode === 'blog' || cursorMode === 'cta';

  return (
    <>
      {/* Precision Core Dot (Exact mouse coordinates with zero lag) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[999] rounded-full transition-all duration-150 will-change-transform ${
          isMouseDown
            ? 'w-1.5 h-1.5 bg-white shadow-[0_0_6px_#ffffff]'
            : cursorMode === 'cta' || cursorMode === 'copy'
            ? 'w-1.5 h-1.5 bg-emerald-400 shadow-[0_0_6px_#34d399]'
            : isLinkHovered
            ? 'w-1.5 h-1.5 bg-white shadow-[0_0_6px_#ffffff]'
            : 'w-1.5 h-1.5 bg-accent shadow-[0_0_6px_#5B7CFA]'
        }`}
        aria-hidden="true"
      />

      {/* Trailing Physics Ring with Compact Interactive Orbit and Micro Badges */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[998] rounded-full border transition-all duration-300 ease-out will-change-transform flex items-center justify-center ${getRingStyles()}`}
        aria-hidden="true"
      >
        {/* Click ripple shockwave wave */}
        {clickRipple && (
          <span className="absolute inset-0 rounded-full border border-accent animate-ping opacity-60 pointer-events-none" />
        )}

        {/* Orbiting Satellite Particle on Link Hover (Compact, tight orbital bead) */}
        {isLinkHovered && (
          <div className="absolute inset-[-3px] pointer-events-none animate-[spin_2.4s_linear_infinite]">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_6px_#5B7CFA]" />
          </div>
        )}

        {/* Precision Crosshair Ticks on General Link Hover */}
        {cursorMode === 'link' && (
          <>
            <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-accent rounded-full" />
            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-accent rounded-full" />
            <span className="absolute top-1/2 -left-0.5 -translate-y-1/2 w-0.5 h-1 bg-accent rounded-full" />
            <span className="absolute top-1/2 -right-0.5 -translate-y-1/2 w-0.5 h-1 bg-accent rounded-full" />
          </>
        )}

        {/* Sleek Floating Micro-Arrow ↗ Badge for External Links, Blog & WhatsApp CTA */}
        {(cursorMode === 'link-external' || cursorMode === 'cta' || cursorMode === 'blog') && (
          <div
            className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full text-white flex items-center justify-center shadow-md animate-in zoom-in-75 duration-200 ${
              cursorMode === 'cta'
                ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]'
                : 'bg-accent shadow-[0_0_8px_rgba(91,124,250,0.8)]'
            }`}
          >
            <svg
              className="w-2 h-2 stroke-[2.5]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        )}

        {/* Compact Micro "COPY" badge */}
        {cursorMode === 'copy' && (
          <div className="absolute -top-2 -right-2 px-1 py-0.2 rounded-full bg-emerald-500 text-[7px] font-mono font-bold text-white tracking-wider uppercase shadow-[0_0_8px_rgba(16,185,129,0.8)]">
            COPY
          </div>
        )}
      </div>
    </>
  );
};
