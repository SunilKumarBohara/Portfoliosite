import React, { useState, useEffect, useMemo } from "react";
import { BLOG_POSTS, formatBlogDate } from "../data/blogData";
import { SITE_CONFIG } from "../data/portfolioData";
import { SectionBadge } from "./SectionBadge";
import { ArrowUpRight, Clock, Search, ArrowLeft, Sparkles, BookOpen } from "lucide-react";

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // SEO head metadata for Blog index page
    const originalTitle = document.title;
    document.title = `SEO Blog & Technical Articles | ${SITE_CONFIG.name}`;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const blogUrl = `${SITE_CONFIG.url}/#blog`;
    const blogDescription = "In-depth SEO guides, technical audit checklists, and keyword research strategies by SEO Executive Sunil Kumar Bohara.";

    setMeta("description", blogDescription);
    setMeta("og:title", `SEO Blog & Guides | ${SITE_CONFIG.name}`, "property");
    setMeta("og:description", blogDescription, "property");
    setMeta("og:url", blogUrl, "property");
    setMeta("twitter:title", `SEO Blog & Guides | ${SITE_CONFIG.name}`);
    setMeta("twitter:description", blogDescription);

    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenPost = (slug: string) => {
    window.location.hash = `blog/${slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    window.location.hash = "home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Top Breadcrumb / Back Link */}
        <div className="flex items-center justify-between mb-8 pt-2">
          <button
            onClick={handleBackToHome}
            data-interactive="true"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <span>Portfolio</span>
            <span className="text-white/20">/</span>
            <span className="text-accent font-semibold">Blog</span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="max-w-3xl mb-14">
          <SectionBadge label="Knowledge Hub & Articles" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            SEO Insights, Guides &amp; Strategy
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed">
            Practical, actionable articles on organic search algorithms, technical crawl audits, keyword intent research, and modern SEO execution by {SITE_CONFIG.name}.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 mb-10 border-b border-white/[0.08]">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  data-interactive="true"
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-white shadow-[0_0_12px_rgba(91,124,250,0.4)] border border-accent"
                      : "bg-surface-elevated/70 text-secondary hover:text-white hover:bg-surface-elevated border border-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, keywords..."
              className="w-full pl-10 pr-4 py-2 text-xs font-mono bg-surface-elevated/60 border border-white/[0.08] focus:border-accent/60 rounded-full text-white placeholder-muted focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-white"
              >
                ×
              </button>
            )}
          </div>

        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 text-xs font-mono text-muted">
          <span>
            Showing <strong className="text-white">{filteredPosts.length}</strong> of {BLOG_POSTS.length} articles
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </span>
          {searchQuery && (
            <span>Filtering by &quot;{searchQuery}&quot;</span>
          )}
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-surface/40 border border-white/[0.06]">
            <BookOpen className="w-8 h-8 text-muted mx-auto mb-3 opacity-50" />
            <p className="text-white font-medium mb-1">No articles found</p>
            <p className="text-xs text-secondary mb-4">
              Try adjusting your search query or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-mono text-accent hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, idx) => (
              <article
                key={post.slug}
                onClick={() => handleOpenPost(post.slug)}
                className="group relative flex flex-col p-5 rounded-2xl bg-surface-elevated/50 border border-white/[0.08] hover:border-accent/40 hover:bg-surface-elevated transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                data-interactive="true"
              >
                {/* Featured Image Container */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 bg-surface border border-white/[0.06] shrink-0">
                  <img
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Latest Badge on first post */}
                  {idx === 0 && selectedCategory === "All" && !searchQuery && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-widest text-accent bg-[#0A0A0A]/80 backdrop-blur-md border border-accent/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                      <Sparkles className="w-2.5 h-2.5" />
                      Latest
                    </span>
                  )}

                  {/* Category Pill on Image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-white bg-[#0A0A0A]/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                    <span>{post.coverEmoji}</span>
                    <span>{post.category}</span>
                  </div>
                </div>

                {/* Read Time & Date */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="flex items-center gap-1 text-[11px] font-mono text-muted">
                    <Clock className="w-3 h-3 text-accent" />
                    {post.readTime}
                  </span>
                  <span className="text-white/20">·</span>
                  <time className="text-[11px] font-mono text-muted" dateTime={post.date}>
                    {formatBlogDate(post.date)}
                  </time>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-secondary leading-relaxed flex-1 line-clamp-3 mb-6">
                  {post.excerpt}
                </p>

                {/* Tags preview */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-muted bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <time className="text-[11px] font-mono text-muted" dateTime={post.date}>
                    {formatBlogDate(post.date)}
                  </time>
                  <span className="flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-1.5 transition-all duration-200">
                    Read Post
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Consultation CTA Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-accent/[0.08] via-surface-elevated/60 to-surface-elevated/40 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-1.5">
              Organic Search Consulting
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Want these strategies executed on your website?
            </h3>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Connect directly with Sunil Kumar Bohara for a technical SEO audit, keyword opportunity mapping, or tailored organic strategy.
            </p>
          </div>
          <a
            href="https://wa.me/9779745628054?text=Hello%20Sunil%2C%20I%20saw%20your%20SEO%20blog%20and%20would%20like%20to%20consult%20about%20SEO%20services."
            target="_blank"
            rel="noopener noreferrer"
            data-interactive="true"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-xl shadow-lg shadow-accent/20 transition-all hover:scale-105"
          >
            <span>Consult on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
