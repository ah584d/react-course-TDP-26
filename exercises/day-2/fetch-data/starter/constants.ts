import type { CourseTargetMeta } from "../../../../src/course.ts";

export const meta: CourseTargetMeta = {
  id: "day-2/exercises/fetch-data/starter",
  title: "Fetch data",
  description: "Fetch a list with useEffect and async/await and display it as is.",
  dayOrder: 2,
  dayLabel: "Day 2",
  kind: "exercise",
  variant: "starter",
  order: 3,
};

export const starterTasks = [
  "Inside useEffect, declare an async function named fetchCharacters (the effect callback itself must not be async)",
  "Use await fetch(...) to call: https://swapi.py4e.com/api/people/",
  "Use await response.json() to parse the response",
  "Call setCharacters with the data.results array",
  "Call fetchCharacters() inside the effect and use an empty dependency array []",
];

export const starterHint =
  'The response has a "results" array. The list is displayed as is, so no loading, error or search state is needed.';
