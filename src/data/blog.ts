// ============================================================
// BLOG DATA
// ============================================================

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  featured: boolean;
  slug: string;
}

export const blogCategories = [
  "All",
  "Admissions",
  "Visa Guide",
  "Scholarships",
  "Career Tips",
  "Student Life",
  "UAE Education",
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "The Complete Guide to Studying in Australia in 2025",
    excerpt:
      "Everything you need to know about Australian university admissions, visa requirements, and scholarship opportunities for international students.",
    category: "Admissions",
    author: "ILMORA Team",
    date: "2025-06-01",
    readTime: "8 min read",
    featured: true,
    slug: "complete-guide-studying-australia-2025",
  },
  {
    id: "b2",
    title: "UAE Equivalency: Your Step-by-Step Guide",
    excerpt:
      "Understanding the UAE Ministry of Education equivalency process can be complex. This guide breaks down every step clearly.",
    category: "UAE Education",
    author: "ILMORA Team",
    date: "2025-05-20",
    readTime: "6 min read",
    featured: true,
    slug: "uae-equivalency-step-by-step-guide",
  },
  {
    id: "b3",
    title: "Top 10 Scholarships for UAE Students in 2025",
    excerpt:
      "Discover the most prestigious and accessible scholarship opportunities available to students from the UAE this year.",
    category: "Scholarships",
    author: "ILMORA Team",
    date: "2025-05-15",
    readTime: "10 min read",
    featured: false,
    slug: "top-10-scholarships-uae-students-2025",
  },
  {
    id: "b4",
    title: "Visa Processing for Germany: What Every Student Must Know",
    excerpt:
      "A comprehensive guide to the German student visa process, including documentation requirements and interview preparation.",
    category: "Visa Guide",
    author: "ILMORA Team",
    date: "2025-05-10",
    readTime: "7 min read",
    featured: false,
    slug: "visa-processing-germany-student-guide",
  },
  {
    id: "b5",
    title: "From Engineering to Data Science: A Career Transition Guide",
    excerpt:
      "How to leverage your engineering background to transition into the booming field of data science and AI.",
    category: "Career Tips",
    author: "ILMORA Team",
    date: "2025-05-05",
    readTime: "9 min read",
    featured: true,
    slug: "engineering-to-data-science-career-guide",
  },
  {
    id: "b6",
    title: "Student Life in Canada: What to Expect",
    excerpt:
      "A realistic look at student life in Canada, from accommodation and cost of living to cultural adaptation and community.",
    category: "Student Life",
    author: "ILMORA Team",
    date: "2025-04-28",
    readTime: "7 min read",
    featured: false,
    slug: "student-life-in-canada-what-to-expect",
  },
];
