// ============================================================
// SERVICES DATA
// ============================================================

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  gradient: string;
  accentColor: string;
}

export const services: Service[] = [
  {
    id: "admissions",
    title: "University Admissions",
    subtitle: "Your Gateway to World-Class Education",
    description:
      "Strategic admissions guidance that transforms applications into acceptance letters at top-tier global universities.",
    longDescription:
      "Our admissions team combines deep institutional knowledge with data-driven insights to craft applications that stand out. We've built relationships with universities across 30+ countries, giving our students a competitive edge in the admissions process.",
    icon: "graduation-cap",
    features: [
      "Personalized university shortlisting",
      "Application strategy development",
      "Document preparation & review",
      "Interview coaching & preparation",
      "Scholarship application support",
      "Decision tracking & management",
    ],
    gradient: "from-violet-600 to-indigo-600",
    accentColor: "#7C3AED",
  },
  {
    id: "visa",
    title: "Visa Processing",
    subtitle: "Seamless Global Mobility",
    description:
      "End-to-end visa processing support ensuring smooth transitions to your destination country with zero complications.",
    longDescription:
      "Navigating international visa requirements can be complex and overwhelming. Our dedicated visa specialists handle the entire process, from documentation to approval, with a track record of 99.2% success rate across 40+ countries.",
    icon: "plane",
    features: [
      "Country-specific visa guidance",
      "Document compilation & verification",
      "Application submission & tracking",
      "Embassy interview preparation",
      "Visa extension & renewal support",
      "Family visa assistance",
    ],
    gradient: "from-cyan-600 to-blue-600",
    accentColor: "#0891B2",
  },
  {
    id: "equivalency",
    title: "UAE Equivalency",
    subtitle: "Recognized Worldwide, Validated Locally",
    description:
      "Expert navigation of UAE's educational equivalency processes, ensuring your international qualifications are fully recognized.",
    longDescription:
      "The UAE Ministry of Education equivalency process can be intricate. Our specialists understand every requirement and procedure, ensuring your international degrees are validated and recognized for employment and further education within the UAE.",
    icon: "shield-check",
    features: [
      "MOE equivalency assessment",
      "Document authentication",
      "Attestation services",
      "Translation services",
      "Ministry liaison",
      "Status tracking & updates",
    ],
    gradient: "from-emerald-600 to-teal-600",
    accentColor: "#059669",
  },
  {
    id: "career",
    title: "Career Guidance",
    subtitle: "From Classroom to Career Excellence",
    description:
      "Comprehensive career pathway planning that connects your academic journey to your professional aspirations.",
    longDescription:
      "Education is the beginning, not the end. Our career guidance team works with industry professionals and recruiters to map your academic choices directly to career outcomes, ensuring every decision you make is aligned with your professional goals.",
    icon: "briefcase",
    features: [
      "Career aptitude assessment",
      "Industry trend analysis",
      "Skill gap identification",
      "Internship placement support",
      "Professional networking",
      "Resume & LinkedIn optimization",
    ],
    gradient: "from-orange-600 to-red-600",
    accentColor: "#EA580C",
  },
  {
    id: "scholarships",
    title: "Scholarship Assistance",
    subtitle: "Making Excellence Affordable",
    description:
      "Strategic scholarship identification and application support to make world-class education accessible and affordable.",
    longDescription:
      "Talent should never be limited by finances. Our scholarship team identifies opportunities across global institutions and helps craft compelling applications that highlight your strengths and maximize your chances of securing financial support.",
    icon: "award",
    features: [
      "Scholarship database access",
      "Eligibility assessment",
      "Application crafting",
      "Essay & statement support",
      "Financial planning guidance",
      "Ongoing funding search",
    ],
    gradient: "from-pink-600 to-rose-600",
    accentColor: "#DB2777",
  },
];
