# react-course-2026

React course slides and runnable workshop code.

## Course runner

This repository now has one root Vite React TypeScript app that can run demos and exercises from every day folder.

### Install

```bash
npm install
```

### Run the launcher

```bash
npm run course
```

The default launcher lives at `/`, for example `http://localhost:5173/` during local development.

### Run a single target directly

```bash
npm run course -- day-1/demo/changing-values
npm run course -- day-1/exercises/build-product-card/starter
npm run course -- day-1/exercises/build-product-card/solution
npm run course -- day-1/exercises/counter/starter
npm run course -- day-2/exercises/fetch-and-render-a-list/solution
```

### Live-coding sandbox

```bash
npm run sandbox
```

Open the URL printed by Vite. This starts the existing course app with the
sandbox selected directly, without going through the launcher menu.
If the course server is already running, you can instead use
`/?target=sandbox` on that server; no second process is needed.

Edit [sandbox/Playground.tsx](sandbox/Playground.tsx) in VS Code and save.
The preview and read-only actual source appear side by side and update together.
The workspace starts with a minimal component and stays separate from the
prepared demos and exercise files. Edits persist on disk; there is no automatic
reset or browser editor. React Fast Refresh may reset state when you change
the component's Hooks. Syntax or import errors appear in Vite's error overlay.

The presentation shell and scoped styles live in
[sandbox/Sandbox.tsx](sandbox/Sandbox.tsx) and
[sandbox/Sandbox.css](sandbox/Sandbox.css). No extra dependencies or standalone
Vite setup are required.

### Standalone exercise app (optional)

Keep the launcher in one terminal and open a supported app without its course
frame in a second terminal:

```bash
npm run course -- day-3/exercises/streambox-movie-details/starter --standalone --port 5174
```

Use the URL Vite prints; it may choose another port if one is occupied. Append
`--strictPort` if you want Vite to fail rather than switch ports.
Standalone mode is available for all five StreamBox starter/solution pairs and
`day-3/demo/streambox`. It uses the same Vite project and dependencies.

The selected target is fixed at startup, not encoded in the URL. Browse directly
to `/movies`, `/account`, or `/movies/101` (once that route is implemented).
Refresh and direct entry retain the selected checkpoint. Query parameters belong
to the app; `?target=` and `?day=` do not switch targets in this mode.
Stop the server and restart the command with another target to switch checkpoints.

The normal exercise page still shows instructions and its embedded preview.
Both views import the same `StandaloneApp.tsx`, so saved edits update both while
both servers run. URL, history, and runtime state are independent between views.
Editing a starter does not change its solution. Unsupported or unknown standalone
targets fail explicitly; normal launcher and sandbox commands are unchanged.

For contributors: an opt-in browser-routed entry can export a named
`StandaloneApp` component from a neighboring `StandaloneApp.tsx`. The default
entry remains the instructional preview and renders that same component.
The runner supplies a root-level BrowserRouter for standalone mode, or the
existing per-target basename for embedded mode. Do not add a nested router.
Check runner argument regressions with `node --test scripts/course.test.mjs`.

## Folder convention

Presentations stay under `presentation/`, but runnable targets now live in root-level `demo/` and `exercises/` folders:

```text
demo/
	day-x/
		some-demo-title/
			entry.tsx

exercises/
	day-x/
		some-exercise-title/
			starter/
				entry.tsx
			solution/
				entry.tsx

presentation/
	Day X/
		index.html
```

The launcher groups content by day and shows:

- a presentation link when that day already has `index.html`
- a demos section with direct links to each demo target
- an exercises section with direct links to starter and solution targets

## Target contract

Every runnable target exports:

1. `meta`: identifies the day, title, kind, variant, and launcher id
2. `default`: the React component rendered by the root course app

Example:

```tsx
import type { CourseTargetMeta } from '../../../src/course.ts'

export const meta: CourseTargetMeta = {
	id: 'day-1/demo/example',
	title: 'Example',
	dayOrder: 1,
	dayLabel: 'Day 1',
	kind: 'demo',
	variant: 'demo',
	order: 1,
}

export default function Example() {
	return <div>Demo content</div>
}
```

## Current seeded targets

### Day 1
- `day-1/demo/changing-values`
- `day-1/demo/cart-state`
- `day-1/demo/cart-derived`
- `day-1/demo/cart-sharing`
- `day-1/exercises/build-product-card/starter`
- `day-1/exercises/build-product-card/solution`
- `day-1/exercises/build-product-card-with-props/starter`
- `day-1/exercises/build-product-card-with-props/solution`
- `day-1/exercises/build-product-card-with-props-and-events/starter`
- `day-1/exercises/build-product-card-with-props-and-events/solution`
- `day-1/exercises/counter/starter`
- `day-1/exercises/counter/solution`
- `day-1/exercises/podcast-episode-cards/starter`
- `day-1/exercises/podcast-episode-cards/solution`

The changing-values demo lives in `demo/day-1/changing-values/` and displays
its actual `Counter.tsx` source alongside the running counter. Edit that file
to fix the intentionally broken increment live. It uses the root course server,
not a standalone app or separate server. The previous Product Counter example
is preserved under `demo/day-1/product-counter/`, but is no longer registered
as a launcher target.

Day 1 covers setup, components, JSX, typed props, events, primitive state,
state snapshots, batching, functional setters, introductory hook rules, controlled
inputs, immutable array additions and object updates, derived values, and lifting state.
The Events section introduces passing parent-defined handlers through typed
callback props before the props-and-events exercise. The basket lesson revisits
that mechanism to explain action requests and the separation between shared
state/rules and product presentation, without requiring a rigid component pattern.
Install React DevTools during setup, inspect components and props after those
topics, and inspect state after introducing `useState`.
The podcast exercise uses separate number and string state variables.
The **Managing State Correctly** section follows the podcast exercise and covers
three state rules through separate instructor-led cart demos and staged slides,
not extra student exercises:

1. [Cart: Updating an Array](demo/day-1/cart-state/README.md) — fix a mutation
   that leaves the display unchanged.
2. [Cart: Calculating a Count](demo/day-1/cart-derived/README.md) — replace a stale
   stored count with `cart.length`.
3. [Cart: Sharing State](demo/day-1/cart-sharing/README.md) — start with local Mug
   and Notebook quantities plus a separately stored parent total. Lift the
   quantities into one Basket, derive the total, and add an Empty basket action
   that resets both product quantities. A plain preview sits beside two actual-source tabs.

Each guide includes a live fix, observable verification, and reset instructions.
All three use the existing launcher and server. Focused slides after the
mutation demo explain array spread for adding a product and object spread for
updating a basket quantity. A follow-up demonstrates copying both the basket
and its nested quantities object. Array remove/update operations are deferred
to later worked examples. Day 1 owns the state lesson;
Day 2 builds on it for lists and effects.
The section has a stable slide link:
`/presentation/Day%201/index.html#/managing-state`.

### Day 2
- `day-2/exercises/fetch-and-render-a-list/starter`
- `day-2/exercises/fetch-and-render-a-list/solution`
- `day-2/exercises/fetch-data/starter`
- `day-2/exercises/fetch-data/solution`
- `day-2/exercises/starwars-characters/starter`
- `day-2/exercises/starwars-characters/solution`
- `day-2/exercises/task-list/starter`
- `day-2/exercises/task-list/solution`
- `day-2/exercises/conditional-rendering/starter`
- `day-2/exercises/conditional-rendering/solution`

Day 2 builds on Day 1 state concepts with lists and keys, conditional rendering,
reconciliation, and effects. The deeper Hooks background, including
**Why Hooks Exist?**, stays in Day 2 before effects; Day 1 introduces `useState`
as a Hook and covers its placement rules. Day 2 has no separate state-update
instruction section.

### Day 3
- `day-3/demo/state-navigation`
- `day-3/demo/streambox`
- `day-3/exercises/streambox-pages/starter`
- `day-3/exercises/streambox-pages/solution`
- `day-3/exercises/streambox-layout/starter`
- `day-3/exercises/streambox-layout/solution`
- `day-3/exercises/streambox-movie-details/starter`
- `day-3/exercises/streambox-movie-details/solution`
- `day-3/exercises/streambox-genre-filter/starter`
- `day-3/exercises/streambox-genre-filter/solution`
- `day-3/exercises/streambox-search-and-sort/starter`
- `day-3/exercises/streambox-search-and-sort/solution`
- `day-3/exercises/podcast-navigator/starter`
- `day-3/exercises/podcast-navigator/solution`
- `day-3-part-2/exercises/zustand-counter/starter`
- `day-3-part-2/exercises/zustand-counter/solution`

The [StreamBox exercises](exercises/day-3/README.md) progressively extend the same
fictional app: pages/links, shared layout/index, movie details, genre filtering,
then search/sort. Every starter supplies the completed prerequisite work.
Podcast Navigator remains optional practice. Earlier Day 3 topics are unchanged.
The routing lecture teaches React Router through general website, settings,
people-directory, and product-filter examples; StreamBox is used for progressive
practice and reviews rather than as the lecture's organizing theme.
The [state-navigation demo](demo/day-3/state-navigation/StateNavigationDemo.tsx)
illustrates the opening problem: local state can switch Home/About content
without changing the browser URL, so refresh or sharing the address starts at Home.

StreamBox Home is `/`; the catalogue is `/movies`. From Exercise 2 onward,
StreamingLayout provides app-wide navigation and an Outlet. Its `movies` child
uses MoviesLayout, with movie-section navigation and a second Outlet.
The catalogue is the movies index; `:movieId` is added beside it in Exercise 3.
Account and Help use only the app layout. Catalogue filters use URLs such as
`/movies?genre=comedy`, not the Home URL.

Targets that opt into `routing: 'browser'` in their metadata run under
`/play/<target-id>/`. The runner supplies one `BrowserRouter` with that basename.
This keeps exercise selection out of app query parameters, so refreshing
`/play/day-3/exercises/streambox-movie-details/solution/movies/101` retains the
correct target. Old `?target=` links and direct CLI selection still work; browser
targets are converted to their canonical path before rendering.
The supplied router uses `useTransitions={false}` so URL-controlled text inputs
receive synchronous location updates and do not lose characters during fast typing.
This applies only to targets opting into browser routing.
Return through Back to Day 3 or use `/?target=launcher` to override a CLI default.

Vite handles development SPA fallback. A production/static host must serve the
root app HTML for `/play/*` requests while serving real assets normally.

### Day 4
- `day-4/demo/react-memo`
- `day-4/demo/use-memo`
- `day-4/demo/use-callback`
- `day-4/exercises/filtered-analytics-summary/starter`
- `day-4/exercises/filtered-analytics-summary/solution`
- `day-4/exercises/stable-product-rows/starter`
- `day-4/exercises/stable-product-rows/solution`

## Build

```bash
npm run build
```
