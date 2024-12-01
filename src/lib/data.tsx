type NavLink = { text: string; to: string };
export const navLinks = Object.freeze([
  { text: "Issues", to: "/issues" },
  { text: "Vote", to: "/vote" },
  { text: "Survey", to: "/survey" },
  { text: "Meetings", to: "/meetings" },
  { text: "Track Progres", to: "/progress" },
] as const) satisfies Readonly<Array<NavLink>>;
