import type { CourseTargetMeta } from "../../../../src/course.ts";

export const meta: CourseTargetMeta = {
  id: "day-2/exercises/task-list/starter",
  title: "Task List",
  description: "Render a list of tasks.",
  dayOrder: 2,
  dayLabel: "Day 2",
  kind: "exercise",
  variant: "starter",
  order: 1,
};

export const starterTasks = [
  "Create an array of tasks with structure: { id, title }",
  "Use .map() to iterate over the tasks array",
  "Render each task in a <li> element with a key prop",
];

export const starterHint =
  "Remember: Each item in a list needs a unique key prop.";
