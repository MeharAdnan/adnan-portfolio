
import { Project, Service, SkillCategory, Testimonial } from './types';

export const BRAND_NAME = "Adnan";
export const BRAND_TAGLINE = "High-performance WordPress solutions for modern businesses.";
export const ABOUT_TEXT = "I specialize in crafting lean, fast, and SEO-optimized WordPress websites. My philosophy is simple: clean code, clear communication, and conversion-focused design. No bloat, just results.";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "EcoStyle E-commerce",
    category: "WooCommerce",
    description: "A fast-loading sustainable fashion store with custom product filtering and headless WordPress architecture.",
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556740734-792a4b7da096?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
    ],
    link: "https://example.com"
  },
  {
    id: "2",
    title: "FinTech Insight",
    category: "News Portal",
    description: "High-traffic financial blog optimized for Core Web Vitals and ad-revenue placement. Screenshot-only preview.",
    imageUrl: "https://images.unsplash.com/photo-1611974714658-058e11e3b122?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1611974714658-058e11e3b122?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "3",
    title: "Aura Creative Agency",
    category: "Portfolio",
    description: "Minimalist portfolio with advanced CSS animations and lightweight page transitions.",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    title: "Urban Real Estate",
    category: "LMS/Listing",
    description: "Property listing platform integrated with Google Maps and custom post types for easy management.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    link: "https://example.com"
  }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Custom Development",
    description: "Tailor-made WordPress themes and plugins built from scratch without unnecessary frameworks.",
    icon: "code"
  },
  {
    id: "s2",
    title: "Performance Tuning",
    description: "Turning slow, bloated sites into blazing fast platforms with 90+ PageSpeed scores.",
    icon: "zap"
  },
  {
    id: "s3",
    title: "WP Migration",
    description: "Seamlessly moving your site to high-performance hosting with zero downtime.",
    icon: "refresh"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    id: "cms",
    title: "CMS & Development",
    skills: ["WordPress Core", "PHP / MySQL", "WooCommerce", "Advanced Custom Fields (ACF)", "Child Theme Dev"]
  },
  {
    id: "opt",
    title: "Optimization & SEO",
    skills: ["Core Web Vitals", "WP Rocket / Litespeed", "Image Optimization", "Yoast / RankMath", "Database Cleanup"]
  },
  {
    id: "tools",
    title: "Design & Infrastructure",
    skills: ["Elementor / Divi", "Gutenberg Blocks", "Tailwind CSS", "WP Engine / SiteGround", "Cloudflare Setup"]
  }
];

export const SOCIAL_LINKS = {
  email: "mailto:hello@adnan.com"
};
