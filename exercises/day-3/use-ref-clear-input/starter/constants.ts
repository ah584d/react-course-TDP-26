import type { CourseTargetMeta } from "../../../../src/course.ts";

export const meta: CourseTargetMeta = {
  id: "day-3/exercises/use-ref-clear-input/starter",
  title: "useRef - clear input",
  description: "Use a ref to clear a text input and put the cursor back in it.",
  dayOrder: 3,
  dayLabel: "Day 3",
  kind: "exercise",
  variant: "starter",
  order: 0,
};

export const starterTasks = [
  "Open QuickNote.tsx - it is the only file you need to change. The Clear button currently does nothing.",
  'Import useRef from "react" and create inputRef = useRef<HTMLInputElement>(null).',
  "Attach it to the input with ref={inputRef}.",
  "In handleClear, set inputRef.current.value to an empty string and call inputRef.current.focus().",
  "Check the result: type something, click Clear, and keep typing without clicking the input again.",
];
