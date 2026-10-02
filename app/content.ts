export const SLIDES = [
  { id: "top", label: "Cover" },
  { id: "principles", label: "Principles" },
  { id: "rituals", label: "Rituals" },
  { id: "gauges", label: "Gauges" },
  { id: "hazards", label: "Hazards" },
  { id: "schedule", label: "Schedule" },
] as const;

export const META = [
  ["Doc", "TEAM-001"],
  ["Class", "Engineering team"],
  ["Rev", "A"],
  ["Status", "In production"],
] as const;

export const STATS = [
  ["Principles", "04"],
  ["Gauges", "04"],
  ["Days to run", "90"],
  ["Sheets", "06"],
] as const;

export const TICKER = [
  "Clear mission",
  "Small teams",
  "End-to-end ownership",
  "Psychological safety",
  "Fast feedback",
  "Measure flow",
  "Tune every week",
];

export const PRINCIPLES = [
  {
    code: "A.01",
    title: "Clear mission",
    text: "Everyone can say what the team is for, and what it will not do this quarter.",
  },
  {
    code: "A.02",
    title: "Small teams, full ownership",
    text: "A handful of people own one product area end to end, from idea to production.",
  },
  {
    code: "A.03",
    title: "Psychological safety",
    text: "People raise risks, admit mistakes and disagree openly without paying a social cost.",
  },
  {
    code: "A.04",
    title: "Fast feedback loops",
    text: "Short-lived branches, quick reviews and automated tests keep learning cheap.",
  },
];

export const RITUALS = [
  {
    code: "B.01",
    cadence: "Every day",
    title: "Sync",
    text: "A short check on what is blocked and who can unblock it. Status lives in the tracker.",
  },
  {
    code: "B.02",
    cadence: "Every week",
    title: "Planning",
    text: "Pick the few outcomes that matter this week and say what will wait.",
  },
  {
    code: "B.03",
    cadence: "Every change",
    title: "Review",
    text: "A second pair of eyes on every change, inside an agreed review window.",
  },
  {
    code: "B.04",
    cadence: "Every two weeks",
    title: "Retrospective",
    text: "Name one thing to fix in how the team works, and give it an owner.",
  },
];

export const HAZARDS = [
  {
    code: "D.01",
    reads: "People",
    metric: "Hero culture",
    shows: "One person holds the critical knowledge",
    habit: "Pair, rotate ownership, write it down",
  },
  {
    code: "D.02",
    reads: "Flow",
    metric: "Too much in progress",
    shows: "Everything is started, little is finished",
    habit: "Limit work in progress; finish before starting",
  },
  {
    code: "D.03",
    reads: "Flow",
    metric: "Slow reviews",
    shows: "Changes wait days for a reviewer",
    habit: "Keep changes small; agree a review window",
  },
  {
    code: "D.04",
    reads: "People",
    metric: "Blame after incidents",
    shows: "People hide mistakes and risks",
    habit: "Blameless reviews that look at the system",
  },
];

export const GAUGES = [
  {
    code: "C.01",
    reads: "Speed",
    metric: "Deployment frequency",
    shows: "How often value reaches users",
    habit: "Ship small changes behind feature flags",
  },
  {
    code: "C.02",
    reads: "Speed",
    metric: "Lead time for changes",
    shows: "How long from commit to production",
    habit: "Automate build, test and release",
  },
  {
    code: "C.03",
    reads: "Stability",
    metric: "Change failure rate",
    shows: "How often a release causes trouble",
    habit: "Review every change; test before merge",
  },
  {
    code: "C.04",
    reads: "Stability",
    metric: "Time to restore service",
    shows: "How fast the team recovers",
    habit: "Practice rollback; hold blameless reviews",
  },
];

export const PHASES = [
  {
    days: "Days 01–30",
    title: "Align",
    items: ["Write the mission on one page", "Map who owns what", "Agree working norms"],
  },
  {
    days: "Days 31–60",
    title: "Build the loop",
    items: ["Automate test and deploy", "Set a review time target", "Start weekly retrospectives"],
  },
  {
    days: "Days 61–90",
    title: "Measure and tune",
    items: ["Baseline the four gauges", "Fix the slowest step first", "Share results with the team"],
  },
];
