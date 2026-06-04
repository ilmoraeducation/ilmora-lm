// ============================================================
// ILMORA EDUCATION GROUP — CMS-READY SITE CONFIGURATION
// ============================================================
// Edit this file to update all site-wide content.
// No code changes required for content updates.
// ============================================================

export const siteConfig = {
  name: "ILMORA Education Group",
  shortName: "ILMORA",
  tagline: "The Future Operating System for Global Higher Education",
  description:
    "ILMORA Education Group transforms the way students access global higher education. From university selection to graduation, we provide a comprehensive, technology-driven platform that guides every step of the academic journey.",
  url: "https://ilmora.com",
  ogImage: "/images/og-image.jpg",
  links: {
    whatsapp: "https://wa.me/971XXXXXXXXX",
    phone: "+971-XX-XXX-XXXX",
    phoneDisplay: "+971 XX XXX XXXX",
    email: "info@ilmora.com",
    emailAdmissions: "admissions@ilmora.com",
    address: {
      street: "Sheikh Zayed Road",
      area: "Business Bay",
      city: "Dubai",
      country: "United Arab Emirates",
      full: "Business Bay, Sheikh Zayed Road, Dubai, UAE",
    },
    social: {
      instagram: "https://instagram.com/ilmoraeducation",
      linkedin: "https://linkedin.com/company/ilmoraeducation",
      twitter: "https://twitter.com/ilmoraedu",
      facebook: "https://facebook.com/ilmoraeducation",
      youtube: "https://youtube.com/@ilmoraeducation",
    },
  },
  seo: {
    title: "ILMORA Education Group — Global Higher Education Reimagined",
    metaDescription:
      "Transform your future with ILMORA Education Group. Expert guidance for university admissions, visa processing, UAE equivalency, and global career pathways. Your journey to world-class education starts here.",
    keywords: [
      "ILMORA Education",
      "study abroad",
      "university admissions",
      "UAE education",
      "Dubai education consultancy",
      "higher education",
      "international universities",
      "student visa",
      "UAE equivalency",
      "global education platform",
    ],
    ogTitle: "ILMORA — The Future of Global Higher Education",
    ogDescription:
      "Experience the next generation of education guidance. ILMORA transforms how students connect with world-class universities worldwide.",
  },
  logo: {
    primary: "/images/brands/ilmora-dark.png",
    light: "/images/brands/ilmora-white.png",
    width: 180,
    height: 73,
  },
  contact: {
    ctaText: "Begin Your Journey",
    ctaLink: "/contact",
    secondaryCta: "Explore Universities",
    secondaryLink: "/universities",
  },
} as const;

export type SiteConfig = typeof siteConfig;
