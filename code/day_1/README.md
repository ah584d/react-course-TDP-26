# Day 1: Working with Changing Values

From the repository root, use the existing root dependencies:

```sh
npm run course
```

Open the Day 1 launcher at http://localhost:5173/?day=day-1 and select
**Working with Changing Values**, or go directly to
http://localhost:5173/?target=day-1/demo/changing-values.
Use the URL printed by Vite if it selects a different port.
The presentation links to this same target on the same server; no second
server is needed.
The counter starts intentionally broken.
The read-only panel imports the actual [Counter.tsx](./src/Counter.tsx) source;
save that file in VS Code to update both the example and the panel.
The [App.tsx](./src/App.tsx) shell is not displayed in the panel.
The launcher registration lives in
[entry.tsx](../../demo/day-1/changing-values/entry.tsx); it reuses this shell.

## Live teaching flow

1. Open the browser console. Click the counter: the log increases but the
   displayed number stays at zero. Changing a local variable does not request
   a render.
2. Explain `useState`, then return to the same file and fix it live:

   ```tsx
   import { useState } from 'react'

   export default function Counter() {
     const [count, setCount] = useState<number>(0)

     function increaseCount() {
       setCount(count + 1)
     }

     return (
       <button className="counter" onClick={increaseCount}>
         Count is {count}
       </button>
     )
   }
   ```

3. Click the counter and confirm the displayed value increases. Each click
   requests a new render, and React remembers the count between those renders.

Changing a component's hooks during live editing can reset its state. Demonstrate
the working counter after saving, rather than expecting state to survive edits.
Do not log the expected new count immediately after the setter: a handler
still reads its current render's snapshot. Functional updates are taught later.

## Validation

From the repository root:

```sh
npm run build
npm exec eslint -- code/day_1/src demo/day-1/changing-values
```
