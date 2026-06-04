// ============================================================
// UNIVERSITIES DATA — CMS READY
// ============================================================
// Add, remove, or edit universities here.
// The website will automatically reflect all changes.
// ============================================================

export interface University {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  location: string;
  country: string;
  description: string;
  ranking?: string;
  programs: string[];
  highlights: string[];
  partnershipLevel: "platinum" | "gold" | "silver" | "partner";
  website?: string;
  featured: boolean;
}

export const universities: University[] = [
  {
    id: "arni",
    name: "ARNI University",
    shortName: "ARNI",
    logo: "/images/universities/arni.png",
    location: "Himachal Pradesh",
    country: "India",
    description:
      "A premier private university offering diverse programs in engineering, management, pharmacy, and applied sciences with a commitment to innovation and research excellence.",
    ranking: "Top Emerging University",
    programs: [
      "Engineering",
      "Business Administration",
      "Pharmacy",
      "Computer Applications",
      "Applied Sciences",
    ],
    highlights: [
      "NAAC Accredited",
      "Industry-Integrated Curriculum",
      "Research Excellence Center",
      "Global Collaborations",
    ],
    partnershipLevel: "gold",
    website: "https://arni.in",
    featured: true,
  },
  {
    id: "jamia-urdu",
    name: "Jamia Urdu",
    shortName: "Jamia Urdu",
    logo: "/images/universities/jamia-urdu.png",
    location: "Aligarh",
    country: "India",
    description:
      "A historic institution dedicated to linguistic excellence, cultural preservation, and academic empowerment through quality education in Urdu language and literature.",
    ranking: "Nationally Recognized Institution",
    programs: [
      "Urdu Literature",
      "Arabic Studies",
      "Education",
      "Commerce",
      "Humanities",
    ],
    highlights: [
      "Heritage Institution",
      "Linguistic Excellence",
      "Cultural Preservation",
      "Community Empowerment",
    ],
    partnershipLevel: "gold",
    website: "https://jmi.ac.in",
    featured: true,
  },
  {
    id: "lingayas",
    name: "Lingaya's University",
    shortName: "Lingayas",
    logo: "/images/universities/lingayas.png",
    location: "Faridabad, Haryana",
    country: "India",
    description:
      "A leading university known for its engineering, technology, and management programs, fostering innovation and preparing students for the global digital economy.",
    ranking: "Top Private University — Haryana",
    programs: [
      "Engineering & Technology",
      "Computer Science",
      "Business Administration",
      "Architecture",
      "Pharmacy",
    ],
    highlights: [
      "NBA Accredited Programs",
      "State-of-the-Art Labs",
      "Strong Industry Connect",
      "Innovation Hub",
    ],
    partnershipLevel: "platinum",
    website: "https://lingayasuniversity.edu.in",
    featured: true,
  },
  {
    id: "osgu",
    name: "Om Sterling Global University",
    shortName: "OSGU",
    logo: "/images/universities/osgu.png",
    location: "Hisar, Haryana",
    country: "India",
    description:
      "A multidisciplinary university offering world-class education across engineering, management, health sciences, and humanities with a global outlook and modern infrastructure.",
    ranking: "Top Emerging University — North India",
    programs: [
      "Engineering",
      "Management",
      "Health Sciences",
      "Law",
      "Agriculture",
      "Humanities",
    ],
    highlights: [
      "Multidisciplinary Campus",
      "Global Exposure Programs",
      "Modern Infrastructure",
      "Research Centers",
    ],
    partnershipLevel: "gold",
    website: "https://osgu.ac.in",
    featured: true,
  },
  {
    id: "rgu",
    name: "Renaissance University",
    shortName: "RGU",
    logo: "/images/universities/rgu.png",
    location: "Guwahati, Assam",
    country: "India",
    description:
      "A forward-thinking university in Northeast India, offering innovative programs and fostering research-driven education that bridges the gap between academia and industry.",
    ranking: "Leading University — Northeast India",
    programs: [
      "Engineering",
      "Management",
      "Computer Science",
      "Design",
      "Media & Communication",
    ],
    highlights: [
      "Innovation-Driven Curriculum",
      "Northeast India Excellence",
      "Industry Partnerships",
      "Research Opportunities",
    ],
    partnershipLevel: "silver",
    website: "https://rgu.ac",
    featured: false,
  },
  {
    id: "rntu",
    name: "Rabindranath Tagore University",
    shortName: "RNTU",
    logo: "/images/universities/rntu.png",
    location: "Bhopal, Madhya Pradesh",
    country: "India",
    description:
      "Named after the legendary Nobel laureate, RNTU is a multidisciplinary university committed to holistic education, cultural enrichment, and preparing future leaders across diverse fields.",
    ranking: "Top Private University — Madhya Pradesh",
    programs: [
      "Engineering & Technology",
      "Agriculture",
      "Management",
      "Pharmacy",
      "Education",
      "Law",
    ],
    highlights: [
      "Named After Nobel Laureate",
      "Holistic Education Model",
      "Agricultural Excellence",
      "Cultural Heritage Programs",
    ],
    partnershipLevel: "platinum",
    website: "https://rntu.ac.in",
    featured: true,
  },
];

export const universityFilters = [
  { id: "all", label: "All Universities" },
  { id: "platinum", label: "Platinum Partners" },
  { id: "gold", label: "Gold Partners" },
  { id: "silver", label: "Silver Partners" },
  { id: "featured", label: "Featured" },
];

export const countries = [...new Set(universities.map((u) => u.country))];
