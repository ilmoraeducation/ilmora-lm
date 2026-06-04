// ============================================================
// SUCCESS STORIES DATA
// ============================================================

export interface SuccessStory {
  id: string;
  name: string;
  origin: string;
  destination: string;
  university: string;
  program: string;
  summary: string;
  challenge: string;
  journey: string;
  outcome: string;
  advice: string;
  gradient: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "s1",
    name: "Ahmed Al-Rashid",
    origin: "Dubai, UAE",
    destination: "Melbourne, Australia",
    university: "University of Melbourne",
    program: "BSc Computer Science",
    summary:
      "From a dream in Dubai to a degree from one of the world's top universities.",
    challenge:
      "Ahmed always dreamed of studying computer science at a world-class institution, but navigating the Australian university system from Dubai seemed overwhelming.",
    journey:
      "ILMORA mapped out a comprehensive 18-month plan, from university selection to application crafting, scholarship applications, and visa processing.",
    outcome:
      "Accepted into the University of Melbourne with a partial scholarship. Now thriving in his second year with a 3.8 GPA.",
    advice:
      "Start early, trust the process, and believe that world-class education is within your reach.",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    id: "s2",
    name: "Fatima Al-Zaabi",
    origin: "Abu Dhabi, UAE",
    destination: "Prague, Czech Republic",
    university: "Charles University",
    program: "Medicine (MD)",
    summary:
      "Turning a childhood dream of becoming a doctor into reality across continents.",
    challenge:
      "Medical school admission requirements vary drastically between countries, and Fatima needed both admission and UAE equivalency assurance.",
    journey:
      "ILMORA identified the right program, prepared the application, handled the complex equivalency pre-assessment, and managed the entire visa process.",
    outcome:
      "Now in her clinical years, Fatima is on track to graduate with a degree fully recognized in the UAE.",
    advice:
      "Never let complexity discourage you. With the right guidance, even the most challenging paths become navigable.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "s3",
    name: "Raj Patel",
    origin: "Sharjah, UAE",
    destination: "Toronto, Canada",
    university: "University of Toronto",
    program: "MSc Data Science",
    summary:
      "From data enthusiast to data scientist at one of Canada's most prestigious programs.",
    challenge:
      "Raj needed to find a data science program that matched his career goals while also securing funding to make it feasible.",
    journey:
      "ILMORA identified scholarship opportunities, crafted a compelling research statement, and guided Raj through the competitive admissions process.",
    outcome:
      "Accepted with a research assistantship covering tuition. Now working at a leading AI company in Toronto.",
    advice:
      "Your background doesn't define your ceiling. The right program can transform your career trajectory.",
    gradient: "from-orange-500 to-red-500",
  },
];

export const journeySteps = [
  {
    step: 1,
    phase: "Dream",
    title: "Define Your Vision",
    description: "Every great journey begins with a dream. We help you crystallize your academic and career aspirations into a clear, actionable vision.",
    icon: "sparkles",
  },
  {
    step: 2,
    phase: "Plan",
    title: "Strategic Planning",
    description: "We map out your entire journey — from university selection to career outcomes — creating a personalized roadmap for success.",
    icon: "map",
  },
  {
    step: 3,
    phase: "Apply",
    title: "Application Excellence",
    description: "Our team crafts compelling applications that showcase your unique strengths, ensuring you stand out in competitive admissions.",
    icon: "file-text",
  },
  {
    step: 4,
    phase: "Admit",
    title: "Admission Secured",
    description: "With our proven strategies, you receive the acceptance letter from your dream university. The journey is now real.",
    icon: "trophy",
  },
  {
    step: 5,
    phase: "Visa",
    title: "Global Mobility",
    description: "We handle the entire visa process with precision, ensuring smooth approvals and seamless travel arrangements.",
    icon: "plane",
  },
  {
    step: 6,
    phase: "Graduate",
    title: "Academic Excellence",
    description: "With ongoing support throughout your studies, you achieve academic excellence and prepare for the next chapter.",
    icon: "graduation-cap",
  },
  {
    step: 7,
    phase: "Career",
    title: "Launch Your Career",
    description: "Your education culminates in a thriving career. Our career guidance ensures your degree translates into professional success.",
    icon: "rocket",
  },
];
