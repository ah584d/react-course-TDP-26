import type { CourseTargetMeta } from "../../../../src/course.ts";

export const meta: CourseTargetMeta = {
  id: "day-3-part-2/exercises/zustand-counter/starter",
  title: "Zustand Counter: 2×2 Grid",
  description: "Create a counter in a 2×2 grid layout with Zustand.",
  dayOrder: 4,
  dayLabel: "Day 3 - part 2",
  kind: "exercise",
  variant: "starter",
  order: 1,
};

export const starterTasks = [
  'Add a "remove" action to the counter store that decreases count by 1.',
  'Complete the 2×2 grid by adding a second row with gridTemplateRows: "1fr 1fr".',
  "Add another counter display in the bottom-left quarter (same styling as top-right).",
  'Add a "Remove" button in the bottom-right quarter (red background #f44336).',
  "Verify all 4 quarters display correctly and both counters show the same value.",
];

export const starterHint =
  'Hint: The grid should look like a square divided by a "+" sign into 4 equal quarters. Both counter displays should show the same value from the Zustand store.';
