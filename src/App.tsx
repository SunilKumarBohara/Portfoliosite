import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { WhyMe } from './components/WhyMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BlogPage } from './components/BlogPage';
import { BlogPost } from './components/BlogPost';

type RouteState = 
  | { view: 'home' }
  | { view: 'blog-list' }
  | { view: 'blog-post'; slug: string };

function getRoute(): RouteState {
  // 1. Check pathname first (for clean SEO URLs like /blog, /blog/:slug)
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (pathname.startsWith('blog/')) {
    const slug = pathname.replace('blog/', '').split('/')[0];
    if (slug) {
      return { view: 'blog-post', slug };
    }
  }
  if (pathname === 'blog') {
    return { view: 'blog-list' };
  }

  // 2. Check hash fallback (for hash navigation: #blog, #blog/:slug)
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash.startsWith('blog/')) {
    const slug = hash.replace('blog/', '').split('/')[0].split('?')[0];
    if (slug) {
      return { view: 'blog-post', slug };
    }
  }
  if (hash === 'blog' || hash.startsWith('blog?')) {
    return { view: 'blog-list' };
  }

  return { view: 'home' };
}

export const App: React.FC = () => {
  const [route, setRoute] = useState<RouteState>(getRoute);

  useEffect(() => {
    const onRouteChange = () => {
      const newRoute = getRoute();
      setRoute(newRoute);

      // When returning to home with an anchor, scroll smoothly to that section
      if (newRoute.view === 'home') {
        const hash = window.location.hash.replace(/^#\/?/, '');
        if (hash && hash !== 'home' && !hash.startsWith('blog')) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }
      }
    };

    window.addEventListener('hashchange', onRouteChange);
    window.addEventListener('popstate', onRouteChange);
    return () => {
      window.removeEventListener('hashchange', onRouteChange);
      window.removeEventListener('popstate', onRouteChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white flex flex-col justify-between">
      {/* Scroll indicator bar */}
      <ScrollProgress />

      {/* Subtle Desktop Custom Cursor */}
      <CustomCursor />

      {route.view === 'blog-post' ? (
        // Dedicated Individual Blog Post Page
        <>
          <Navbar isBlogPage />
          <BlogPost slug={route.slug} />
          <Footer />
        </>
      ) : route.view === 'blog-list' ? (
        // Dedicated All Blogs Page (Separate from Homepage)
        <>
          <Navbar isBlogPage />
          <BlogPage />
          <Footer />
        </>
      ) : (
        // Main Homepage Flow (No Blog section inside)
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Expertise />
            <Skills />
            <Experience />
            <Projects />
            <Process />
            <WhyMe />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
