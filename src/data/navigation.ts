// ============================================================
// NAVIGATION CONFIGURATION
// ============================================================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "University Admissions", href: "/services#admissions" },
      { label: "Visa Processing", href: "/services#visa" },
      { label: "UAE Equivalency", href: "/services#equivalency" },
      { label: "Career Guidance", href: "/services#career" },
      { label: "Scholarship Assistance", href: "/services#scholarships" },
    ],
  },
  { label: "Universities", href: "/universities" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const mobileNavigation = navigation;
