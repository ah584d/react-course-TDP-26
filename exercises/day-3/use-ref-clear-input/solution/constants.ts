import type { CourseTargetMeta } from "../../../../src/course.ts";

export const meta: CourseTargetMeta = {
  id: "day-3/exercises/use-ref-clear-input/solution",
  title: "useRef - clear input",
  description: "Use a ref to clear a text input and put the cursor back in it.",
  dayOrder: 3,
  dayLabel: "Day 3",
  kind: "exercise",
  variant: "solution",
  order: 0,
};

export const solutionTasks = [
  "QuickNote.tsx: created inputRef with useRef<HTMLInputElement>(null) and attached it with ref={inputRef}.",
  "handleClear sets inputRef.current.value to an empty string and calls inputRef.current.focus().",
  "The input is uncontrolled, so no useState is needed and typing or clearing causes no re-render.",
  "After clicking Clear the cursor is back in the input and you can type right away.",
];
