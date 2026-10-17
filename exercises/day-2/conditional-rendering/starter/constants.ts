import type { CourseTargetMeta } from "../../../../src/course.ts";

export const meta: CourseTargetMeta = {
  id: "day-2/exercises/conditional-rendering/starter",
  title: "Conditional Rendering: Premium Badge",
  description:
    "Use conditional rendering to mark premium users with a star and a badge.",
  dayOrder: 2,
  dayLabel: "Day 2",
  kind: "exercise",
  variant: "starter",
  order: 2,
};

export const starterTasks = [
  "TODO 1: Inside users.map(), render a <button> for each user with a unique key",
  "Call setSelectedUser(user) when the button is clicked",
  'Set className to "active" when selectedUser.name === user.name (ternary)',
  "Show a ⭐ after the name of premium users only (ternary: user.isPremium ? \"⭐\" : \"\")",
  'TODO 2: Next to the selected user\'s name, render <span className="badge">🌟 Premium</span> only when selectedUser.isPremium is true (use &&)',
];

export const starterHint =
  "Use a ternary (condition ? a : b) when you need one of two values, and the logical AND operator (condition && <JSX />) when you want to render something or nothing.";
