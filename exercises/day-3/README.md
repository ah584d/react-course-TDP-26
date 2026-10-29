# Day 3 Exercises

## useRef

### Clear Input

**File to edit:** [use-ref-clear-input/starter/QuickNote.tsx](use-ref-clear-input/starter/QuickNote.tsx)

**Tasks:**

1. Create `inputRef` with `useRef<HTMLInputElement>(null)` and attach it to the input with `ref={inputRef}`.
2. In `handleClear`, set `inputRef.current.value = ''` and call `inputRef.current.focus()`.
3. Check that after clicking **Clear** you can keep typing without clicking the input.

## Morning: React Router Basics

### Podcast Navigator

**File to edit:** [podcast-navigator/starter/entry.tsx](podcast-navigator/starter/entry.tsx)

Transform a static podcast list into a multi-page app using React Router components and hooks.

**Tasks:**

1. **`entry.tsx`** — Add a `<Routes>` block inside the `<MemoryRouter>` with:
   - A route for the list page at `/`
   - A route for the details page at `/episode/:id`

2. **`PodcastList.tsx`** — Import `Link` from `react-router-dom` and wrap each `EpisodeCard` so clicking it navigates to `/episode/:id`.

3. **`EpisodeDetails.tsx`** — Import `useParams` and use it to read the episode `id` from the URL.

4. **`EpisodeDetails.tsx`** — Replace the plain `<a href="/">` anchor tags with `<Link to="/">` so navigation stays inside the router.

> **Note:** This exercise uses `<MemoryRouter>` instead of `<BrowserRouter>` because the course runner already uses the real browser URL for navigation. In a real app you would use `<BrowserRouter>`.

## Afternoon: TanStack Query

### Star Wars useQuery

**File to edit:** [starwars-use-query/starter/usePerson.ts](starwars-use-query/starter/usePerson.ts)

Everything is already built except the custom hook. Two components (`PersonHeader` shows the name, `PersonDetails` shows the full profile) both call `usePerson(personId)`, and a counter shows how many network requests were sent.

**Tasks:**

1. **`usePerson.ts`** — Replace the placeholder with `useQuery`, using `queryKey: ['person', personId]` and `queryFn: () => fetchPerson(personId)`.
2. Check that the counter goes up by **1** per character even though two components ask for the same data.
3. Click another character and go back: the data appears instantly with no new request.
