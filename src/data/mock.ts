export type StudentState = "active" | "missed" | "first-day" | "empty-profile";

export type Student = {
  name: string;
  track: string;
  currentDay: number;
  totalDays: number;
  streak: number;
  completedDays: number;
  state: StudentState;
};

export type Challenge = {
  day: number;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  description: string;
  requirements: string[];
  successCriteria: string[];
};

export const student: Student = {
  name: "Arjun",
  track: "Web Development",
  currentDay: 12,
  totalDays: 60,
  streak: 11,
  completedDays: 11,
  state: "active",
};

export const challenge: Challenge = {
  day: 12,
  title: "Build a Weather App",
  difficulty: "Beginner",
  estimatedTime: "~2 hours",
  description:
    "Create a responsive weather application that allows users to search for a city and view its current weather.",
  requirements: [
    "Search for a city",
    "Display temperature",
    "Display weather condition",
    "Show an appropriate weather icon",
    "Make the interface responsive",
  ],
  successCriteria: [
    "The app runs without errors and handles an empty search",
    "Weather data updates when a new city is searched",
    "Layout works cleanly on a phone screen",
    "Code is pushed to GitHub with a clear README",
  ],
};

export const proof = {
  github: "",
  linkedin: "",
};

export type Achievement = {
  id: string;
  emoji: string;
  title: string;
  caption: string;
  unlocked: boolean;
};

export const achievements: Achievement[] = [
  { id: "warrior", emoji: "🔥", title: "7 Day Warrior", caption: "One week straight", unlocked: true },
  { id: "first", emoji: "💻", title: "First Project", caption: "Day 1 shipped", unlocked: true },
  { id: "ten", emoji: "🚀", title: "10 Day Streak", caption: "Momentum unlocked", unlocked: true },
  { id: "thirty", emoji: "🏆", title: "Halfway Hero", caption: "Reach day 30", unlocked: false },
];

export const proofStats = [
  { label: "Projects", value: 12 },
  { label: "GitHub Proofs", value: 11 },
  { label: "LinkedIn Posts", value: 11 },
];

export const tracks = ["Web Development", "Data Science", "Mobile Apps", "DSA & Problem Solving"];

export const howItWorks = [
  { step: "01", title: "Pick a track", body: "Choose what you want to learn." },
  { step: "02", title: "Build every day", body: "Turn learning into daily action." },
  { step: "03", title: "Show your proof", body: "Share your GitHub work and LinkedIn progress." },
];

export const journeyMilestones = [
  { day: 1, label: "First commit", body: "Your very first proof goes public." },
  { day: 15, label: "Habit forming", body: "Two weeks of shipping, no excuses." },
  { day: 30, label: "Halfway hero", body: "A real project history starts to show." },
  { day: 60, label: "Proof of skill", body: "60 days of public, verifiable work." },
];
