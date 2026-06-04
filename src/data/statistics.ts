// ============================================================
// STATISTICS & ACHIEVEMENTS
// ============================================================

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const statistics: Statistic[] = [
  {
    id: "students-placed",
    value: 2500,
    suffix: "+",
    label: "Students Placed",
    description: "Successfully placed in top universities worldwide",
  },
  {
    id: "countries",
    value: 30,
    suffix: "+",
    label: "Countries",
    description: "Global network of academic institutions",
  },
  {
    id: "universities",
    value: 200,
    suffix: "+",
    label: "Partner Universities",
    description: "Prestigious institutional partnerships",
  },
  {
    id: "success-rate",
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Admission acceptance rate for our students",
  },
  {
    id: "visa-success",
    value: 99,
    suffix: "%",
    label: "Visa Approval",
    description: "Visa approval rate across all destinations",
  },
  {
    id: "scholarships",
    value: 15,
    suffix: "M+",
    label: "Scholarships Won",
    description: "In scholarship funding secured for students (AED)",
  },
];

export const achievements = [
  "Certified by UAE Ministry of Education",
  "Recognized by KHDA Dubai",
  "ISO 9001:2015 Certified",
  "Member of NAFSA Association",
  "ICEF Trained Agents",
  "British Council Partner",
];
