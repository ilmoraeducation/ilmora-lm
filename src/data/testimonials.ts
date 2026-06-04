// ============================================================
// TESTIMONIALS DATA
// ============================================================

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  university: string;
  country: string;
  quote: string;
  avatar?: string;
  rating: number;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Al-Rashid",
    role: "Computer Science Graduate",
    university: "University of Melbourne",
    country: "Australia",
    quote:
      "ILMORA didn't just help me get into university — they transformed my entire perspective on what was possible. From day one, I felt like I had a team of experts dedicated to my success.",
    rating: 5,
    featured: true,
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "MBA Student",
    university: "London Business School",
    country: "United Kingdom",
    quote:
      "The visa process was something I was terrified about. ILMORA handled everything seamlessly. Their expertise and attention to detail made what seemed impossible feel effortless.",
    rating: 5,
    featured: true,
  },
  {
    id: "t3",
    name: "Mohammed Al-Ketbi",
    role: "Engineering Student",
    university: "Technical University of Munich",
    country: "Germany",
    quote:
      "What sets ILMORA apart is their genuine care for each student. They took the time to understand my goals and mapped out a journey that led me to my dream program in Germany.",
    rating: 5,
    featured: false,
  },
  {
    id: "t4",
    name: "Fatima Al-Zaabi",
    role: "Medical Student",
    university: "Charles University",
    country: "Czech Republic",
    quote:
      "Getting my UAE equivalency was a complex process, but ILMORA's team knew exactly what was needed. Their expertise saved me months of confusion and uncertainty.",
    rating: 5,
    featured: true,
  },
  {
    id: "t5",
    name: "Raj Patel",
    role: "Data Science Graduate",
    university: "University of Toronto",
    country: "Canada",
    quote:
      "The scholarship I received through ILMORA's guidance changed everything. They helped me secure funding I didn't even know existed. Truly life-changing support.",
    rating: 5,
    featured: false,
  },
  {
    id: "t6",
    name: "Sara Al-Mansoori",
    role: "Architecture Student",
    university: "Politecnico di Milano",
    country: "Italy",
    quote:
      "ILMORA felt like a premium experience from start to finish. Every interaction was thoughtful, every recommendation was strategic. They treated my future with the importance it deserved.",
    rating: 5,
    featured: true,
  },
];
