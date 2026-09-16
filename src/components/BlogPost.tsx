import React, { useEffect } from "react";
import { getBlogPost, formatBlogDate } from "../data/blogData";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "../data/portfolioData";

interface BlogPostProps {
  slug: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const post = getBlogPost(slug);

  const handleBack = () => {
    window.location.hash = "blog";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });

    if (!post) return;

    // Dynamically update page SEO meta tags for this blog post
    document.title = post.metaTitle;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const postUrl = `${SITE_CONFIG.url}/#blog/${post.slug}`;

    setMeta("description", post.metaDescription);
    setMeta("keywords", post.tags.join(", "));
    setMeta("og:title", post.metaTitle, "property");
    setMeta("og:description", post.metaDescription, "property");
    setMeta("og:url", postUrl, "property");
    setMeta("og:type", "article", "property");
    if (post.featuredImage) {
      setMeta("og:image", post.featuredImage, "property");
      setMeta("twitter:image", post.featuredImage);
    }
    setMeta("twitter:title", post.metaTitle);
    setMeta("twitter:description", post.metaDescription);
    setMeta("twitter:card", "summary_large_image");

    // Set canonical
    let canonical = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", postUrl);

    // Inject Article JSON-LD schema
    const schemaId = "blog-post-schema";
    let existingSchema = document.getElementById(schemaId);
    if (existingSchema) existingSchema.remove();

    const linkedinUrl = SOCIAL_LINKS.find((s) => s.name === 'LinkedIn')?.url;
    const twitterUrl = SOCIAL_LINKS.find((s) => s.name === 'X / Twitter')?.url;

    const schema = document.createElement("script");
    schema.id = schemaId;
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription,
      "image": post.featuredImage ? [post.featuredImage] : undefined,
      "datePublished": post.date,
      "dateModified": post.date,
      "url": postUrl,
      "author": {
        "@type": "Person",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.url,
        "sameAs": [linkedinUrl, twitterUrl].filter(Boolean),
      },
      "publisher": {
        "@type": "Person",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.url,
      },
      "keywords": post.tags.join(", "),
      "articleSection": post.category,
      "inLanguage": "en",
    });
    document.head.appendChild(schema);

    return () => {
      // Restore original title when leaving post
      document.title = SITE_CONFIG.title;
      const s = document.getElementById(schemaId);
      if (s) s.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-5">
        <p className="text-secondary mb-6 font-mono text-sm">Post not found.</p>
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      {/* Back nav */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-10 pb-6">
        <button
          onClick={handleBack}
          data-interactive="true"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>
      </div>

      <article className="max-w-3xl mx-auto px-5 sm:px-8 pb-32">

        {/* Post header */}
        <header className="mb-10">
          {/* Category + read time */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted">
              <Calendar className="w-3 h-3" />
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-secondary leading-relaxed border-l-2 border-accent/40 pl-4 mb-8">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/15 bg-surface-elevated shrink-0 shadow-sm">
              <img
                src="/avatar.jpg"
                alt={SITE_CONFIG.name}
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{SITE_CONFIG.name}</p>
              <p className="text-xs text-muted font-mono">{SITE_CONFIG.title}</p>
            </div>
          </div>
        </header>

        {/* Featured Image Section */}
        {post.featuredImage && (
          <div className="mb-12">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-surface-elevated">
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent pointer-events-none" />
            </div>
            {post.featuredImageAlt && (
              <p className="mt-2 text-center text-xs font-mono text-muted">
                {post.featuredImageAlt}
              </p>
            )}
          </div>
        )}

        {/* Post content */}
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-14 pt-8 border-t border-white/[0.06]">
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-3">Tagged</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-secondary bg-surface-elevated border border-white/[0.08] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-accent/[0.05] border border-accent/15 text-center">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">Need expert SEO?</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Let&apos;s grow your organic traffic together.
          </h2>
          <p className="text-sm text-secondary mb-6 max-w-sm mx-auto">
            Ready to turn these strategies into measurable rankings? Get in touch via WhatsApp for a free consultation.
          </p>
          <a
            href={`https://wa.me/9779745628054?text=${encodeURIComponent("Hello Sunil, I read your blog and would like to discuss SEO for my website.")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-interactive="true"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-light transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>

      </article>
    </div>
  );
};
