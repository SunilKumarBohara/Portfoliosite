export interface NavItem {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

export interface PrincipleItem {
  tag: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: 'LinkedIn' | 'Facebook' | 'Instagram' | 'X / Twitter' | 'WhatsApp';
  url: string;
  handle: string;
  ariaLabel: string;
}

// 1. Centralized Contact Information
export const CONTACT_INFO = {
  name: "Sunil Kumar Bohara",
  role: "SEO Executive",
  location: "Kathmandu, Nepal",
  timezone: "NPT (UTC+5:45)",
  phoneDisplay: "+977 9745628054",
  phoneRaw: "9745628054",
  whatsappNumber: "+977 9745628054",
  whatsappUrl: "https://wa.me/9779745628054",
  heading: "Let's Build Something That Gets Found.",
  subheading: "Have an SEO project, collaboration opportunity, or professional opportunity? Let's talk.",
} as const;

// 2. Centralized Social Media Links (Single Source of Truth)
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sunil-kumar-bohara/",
    handle: "sunil-kumar-bohara",
    ariaLabel: "Visit Sunil Kumar Bohara's LinkedIn Profile",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/sunilkumarbohara99",
    handle: "sunilkumarbohara99",
    ariaLabel: "Visit Sunil Kumar Bohara's Facebook Profile",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sunilkumarbohara7/",
    handle: "@sunilkumarbohara7",
    ariaLabel: "Visit Sunil Kumar Bohara's Instagram Profile",
  },
  {
    name: "X / Twitter",
    url: "https://x.com/SunilBohara66",
    handle: "@SunilBohara66",
    ariaLabel: "Visit Sunil Kumar Bohara's X (Twitter) Profile",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/9779745628054",
    handle: "+977 9745628054",
    ariaLabel: "Chat with Sunil Kumar Bohara on WhatsApp",
  },
];

// 3. Centralized Site Configuration & Metadata
export const SITE_CONFIG = {
  name: "Sunil Kumar Bohara",
  title: "Sunil Kumar Bohara | SEO Executive in Kathmandu, Nepal",
  description: "Sunil Kumar Bohara is an SEO Executive in Kathmandu, Nepal, focused on technical SEO, on-page optimization, keyword research, content strategy and organic growth.",
  url: "https://sunilkumarbohara.com.np",
  status: "Available for SEO Opportunities",
  tagline: "SEO EXECUTIVE • KATHMANDU, NEPAL",
  heroHeadline: "Turning Search Into Sustainable Growth.",
  heroDescription: "I’m Sunil Kumar Bohara, an SEO Executive focused on building search visibility, improving organic performance, and turning data-driven strategies into measurable growth.",
  aboutText: "I’m an SEO Executive passionate about helping websites improve their visibility, attract the right audience, and grow through organic search. My approach combines technical SEO, on-page optimization, content strategy, keyword research, and performance analysis.",
} as const;

// 4. Centralized Portfolio Data
export const PORTFOLIO_DATA = {
  profile: {
    name: SITE_CONFIG.name,
    role: CONTACT_INFO.role,
    location: CONTACT_INFO.location,
    status: SITE_CONFIG.status,
    tagline: SITE_CONFIG.tagline,
    heroHeadline: SITE_CONFIG.heroHeadline,
    heroDescription: SITE_CONFIG.heroDescription,
    aboutText: SITE_CONFIG.aboutText,
    quickFacts: [
      { label: "Location", value: CONTACT_INFO.location },
      { label: "Role", value: CONTACT_INFO.role },
      { label: "Focus", value: "Organic Search Growth" },
      { label: "Approach", value: "Data + Strategy + Execution" },
    ],
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],

  contact: {
    whatsappUrl: CONTACT_INFO.whatsappUrl,
    whatsappDisplay: CONTACT_INFO.phoneDisplay,
    whatsappRaw: CONTACT_INFO.phoneRaw,
    heading: CONTACT_INFO.heading,
    subheading: CONTACT_INFO.subheading,
  },

  socials: SOCIAL_LINKS,

  expertise: [
    {
      id: "technical-seo",
      number: "01",
      title: "Technical SEO",
      description:
        "Website architecture, crawlability, indexing, technical issues, Core Web Vitals and search-engine accessibility.",
      tags: ["Crawlability", "Indexing", "Core Web Vitals", "Architecture"],
    },
    {
      id: "on-page-seo",
      number: "02",
      title: "On-Page SEO",
      description:
        "Content optimization, metadata, headings, internal linking, keyword targeting and page structure.",
      tags: ["Content Optimization", "Metadata", "Internal Linking", "Heading Hierarchy"],
    },
    {
      id: "keyword-research",
      number: "03",
      title: "Keyword Research",
      description:
        "Search intent analysis, keyword discovery, competitor research and content opportunities.",
      tags: ["Search Intent", "Competitor Research", "Content Gap", "Targeting"],
    },
    {
      id: "off-page-seo",
      number: "04",
      title: "Off-Page SEO",
      description:
        "Authority building, backlink strategy and digital visibility.",
      tags: ["Authority Building", "Backlink Strategy", "Digital PR", "Visibility"],
    },
    {
      id: "local-seo",
      number: "05",
      title: "Local SEO",
      description:
        "Google Business Profile optimization, local visibility and location-based search strategy.",
      tags: ["Google Business Profile", "Local Citations", "Geo-Targeting", "Local Search"],
    },
    {
      id: "seo-audits",
      number: "06",
      title: "SEO Audits",
      description:
        "Comprehensive website analysis to identify technical, content and search-performance opportunities.",
      tags: ["Deep Audit", "Technical Health", "Performance Gap", "Actionable Roadmap"],
    },
  ] as ExpertiseItem[],

  skillCategories: [
    {
      category: "Core SEO Disciplines",
      skills: [
        "Technical SEO",
        "On-Page SEO",
        "Off-Page SEO",
        "Local SEO",
        "SEO Auditing",
      ],
    },
    {
      category: "Search Strategy & Analysis",
      skills: [
        "Keyword Research",
        "Competitor Analysis",
        "Search Intent Mapping",
        "Content Optimization",
        "Internal Linking Architecture",
      ],
    },
    {
      category: "Technical & Performance Focus",
      skills: [
        "Crawlability & Indexability",
        "Structured Data / Schema",
        "Core Web Vitals Assessment",
        "URL Taxonomy & Hierarchy",
        "Site Speed Optimization",
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "Discover",
      description: "Understand the website, business goals, and search landscape.",
    },
    {
      step: "02",
      title: "Audit",
      description: "Identify technical, content, and authority opportunities.",
    },
    {
      step: "03",
      title: "Strategize",
      description: "Build a prioritized, high-impact SEO roadmap.",
    },
    {
      step: "04",
      title: "Optimize",
      description: "Implement technical, on-page, and content improvements.",
    },
    {
      step: "05",
      title: "Measure",
      description: "Track performance, ranking shifts, and identify new opportunities.",
    },
    {
      step: "06",
      title: "Grow",
      description: "Continuously iterate and scale sustainable organic visibility.",
    },
  ] as ProcessItem[],

  principles: [
    {
      tag: "DATA-DRIVEN",
      title: "Data-Driven Precision",
      description: "Decisions based on actual search data and measurable insights rather than assumptions.",
    },
    {
      tag: "USER-FIRST",
      title: "User-First Alignment",
      description: "Optimization should improve both search visibility and actual user experience seamlessly.",
    },
    {
      tag: "TECHNICAL + CREATIVE",
      title: "Technical + Creative Balance",
      description: "SEO requires solid technical foundations paired with strategic, engaging content thinking.",
    },
    {
      tag: "LONG-TERM GROWTH",
      title: "Sustainable Long-Term Growth",
      description: "Focus on resilient, high-yield organic visibility built to withstand algorithm updates.",
    },
  ] as PrincipleItem[],
};
