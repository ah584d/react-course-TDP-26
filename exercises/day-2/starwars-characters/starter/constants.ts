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

export const starterTasks = [
  "Create a useEffect hook to fetch data from: https://swapi.py4e.com/api/people/",
  "Parse the JSON response and store the first 10 characters in state",
  "Use .map() to render each character in the table body with a unique key",
  'Add a loading state to show "Loading characters..." while fetching',
  "BONUS: Add a search input field and fetch with query parameter: ?search=${search}",
];

export const starterHint =
  'API endpoint: https://swapi.py4e.com/api/people/ - The response has a "results" array. Remember to add search as a dependency in useEffect if you implement the bonus feature.';
