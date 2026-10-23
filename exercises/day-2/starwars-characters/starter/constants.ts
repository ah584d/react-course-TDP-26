import type { CourseTargetMeta } from "../../../../src/course.ts";

export const meta: CourseTargetMeta = {
  id: "day-2/exercises/starwars-characters/starter",
  title: "Fetch and Render a List",
  description:
    "Fetch and display Star Wars characters with search functionality.",
  dayOrder: 2,
  dayLabel: "Day 2",
  kind: "exercise",
  variant: "starter",
  order: 4,
};

export const starterPhases = [
  {
    title: "Phase 1 — Fetch data with async/await",
    tasks: [
      "Create a useEffect hook with an empty dependency array []",
      "Inside it, declare an async function (the effect callback itself must not be async)",
      "Use await fetch(...) to call: https://swapi.py4e.com/api/people/ and await response.json()",
      "Store the first 10 results in state with setCharacters(data.results.slice(0, 10)) and call console.log to check them",
    ],
  },
  {
    title: "Phase 2 — Dependency array",
    tasks: [
      "Add a search state and an input field bound to it (value + onChange)",
      "Fetch with the query parameter: https://swapi.py4e.com/api/people/?search=${search}",
      "Add search to the dependency array so the effect runs again every time it changes",
    ],
  },
  {
    title: "Phase 3 — Render the list",
    tasks: [
      "Use .map() to render each character in the table body with a unique key",
      'Add a loading state and show "Loading characters..." while fetching',
      'Show "No characters found" when the list is empty',
    ],
  },
];

export const starterHint =
  'API endpoint: https://swapi.py4e.com/api/people/ - The response has a "results" array. Complete the phases in order and check the result after each one.';
