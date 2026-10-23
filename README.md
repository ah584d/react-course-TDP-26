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
- `day-3/exercises/podcast-navigator/starter`
- `day-3/exercises/podcast-navigator/solution`
- `day-3-part-2/exercises/zustand-counter/starter`
- `day-3-part-2/exercises/zustand-counter/solution`

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
