# Day 3 Exercises

## useRef

### Clear Input

**File to edit:** [use-ref-clear-input/starter/QuickNote.tsx](use-ref-clear-input/starter/QuickNote.tsx)

**Tasks:**

1. Create `inputRef` with `useRef<HTMLInputElement>(null)` and attach it to the input with `ref={inputRef}`.
2. In `handleClear`, set `inputRef.current.value = ''` and call `inputRef.current.focus()`.
3. Check that after clicking **Clear** you can keep typing without clicking the input.

## React Router: StreamBox

Five self-contained exercises extend one fictional movie app. Each starter
includes the completed prerequisite work; students do not copy their previous
exercise forward. Each solution finishes only its own checkpoint.

| Order | Exercise | Main files to edit |
| --- | --- | --- |
| 1 | [Pages and Links](streambox-pages/starter/entry.tsx) | AppRoutes.tsx, StandaloneApp.tsx |
| 2 | [Shared Layout and Index](streambox-layout/starter/entry.tsx) | AppRoutes.tsx, StreamingLayout.tsx, StandaloneApp.tsx |
| 3 | [Movie Details and Cast](streambox-movie-details/starter/entry.tsx) | AppRoutes.tsx, MovieCatalogPage.tsx, MovieDetailsPage.tsx, MoviesLayout.tsx |
| 4 | [Genre in the URL](streambox-genre-filter/starter/entry.tsx) | MovieCatalogPage.tsx |
| 5 | [Search and Sort Together](streambox-search-and-sort/starter/entry.tsx) | MovieCatalogPage.tsx |

Every folder has `starter` and `solution` variants. Open them from the Day 3
launcher, or select one directly:

```sh
npm run course -- day-3/exercises/streambox-pages/starter
npm run course -- day-3/exercises/streambox-search-and-sort/solution
```

Each preview lists its TODOs, editable files, and observable completion checks.
```

For Practice 1, start its app in another terminal:

```sh
[streambox-shared](streambox-shared); the teaching components are local to each
```

For Practice 2, stop any previous server on port 5174, then run:

```sh
authentication, payment integration, or playable video.

### Standalone viewing for Practices 1-5

Run the course instructions in one terminal:

```sh
npm run course
```

In another terminal, stop any previous server on port 5174, then run the
command for the practice you are working on:

| Practice | Starter command |
| --- | --- |
| 1. Pages and Links | `npm run course -- day-3/exercises/streambox-pages/starter --standalone --port 5174` |
| 2. Shared Layout and Index | `npm run course -- day-3/exercises/streambox-layout/starter --standalone --port 5174` |
| 3. Movie Details and Cast | `npm run course -- day-3/exercises/streambox-movie-details/starter --standalone --port 5174` |
| 4. Genre in the URL | `npm run course -- day-3/exercises/streambox-genre-filter/starter --standalone --port 5174` |
| 5. Search and Sort Together | `npm run course -- day-3/exercises/streambox-search-and-sort/starter --standalone --port 5174` |

Open [localhost:5174](http://localhost:5174/) to see your work. All five
practice pages show instructions only; the standalone app displays at `/`, with
no course frame or `/play/...` prefix. Stop/restart the runner with the desired
starter or solution target to review it on the same port. The instructions and
app have independent URL/history and runtime state.

Each entry keeps its instructions and exports `StandaloneApp` for the runner.
The runner supplies BrowserRouter; do not add another one. No new installation
or separate teaching project is needed. Unsupported targets fail before
starting Vite.

### Pages and nested rendering

| App-relative path | Content |
| --- | --- |
| / | Welcome page (Home) |
| /movies | Catalogue, inside the app layout |
| /movies/:movieId | Movie layout plus its index Details page |
| /movies/:movieId/cast | The same movie layout plus Cast |
| /account | Account, without the movie layout |
| /help | Help, without the movie layout |

Exercise 1 starts with flat sibling routes and the shared app header above them.
Exercise 2 moves the shared header into StreamingLayout and makes Home its index
child. Exercise 3 adds the movies/:movieId parent using MoviesLayout, with Details
as its index and Cast as a child. The title and movie navigation remain while
the Outlet switches between Details and Cast. The catalogue has no movie-specific
layout; Account, Help, and Home do not render it either.

Starting in Exercise 4, supplied catalogue genre shortcuts link to fresh
catalogue views such as `/movies?genre=comedy`. These simple links intentionally
start a new view; the catalogue controls, by contrast, preserve other parameters
when changing one filter. The shortcuts do not appear in earlier checkpoints,
before query parameters are introduced.

### Embedded browser URLs

Unlike the optional Podcast Navigator below, StreamBox uses `BrowserRouter`.
The course runner provides it with a per-target basename, for example:

```text
/play/day-3/exercises/streambox-movie-details/solution/
/play/day-3/exercises/streambox-movie-details/solution/movies
/play/day-3/exercises/streambox-movie-details/solution/account
/play/day-3/exercises/streambox-movie-details/solution/movies/101
/play/day-3/exercises/streambox-movie-details/solution/movies/101/cast
```

The first part identifies the exercise and variant. Route declarations and Links
use app-relative paths such as `/account`, not the runner prefix.
Keep the prefix when typing a URL directly.

The supplied router opts out of transition scheduling with
`useTransitions={false}`. These exercises deliberately make the URL the source
of truth even for controlled search text; synchronous location updates prevent
fast typing from being overwritten by a delayed navigation render. This is
runner setup, not another student TODO.

Old links such as `/?target=day-3/exercises/streambox-pages/starter` still work;
the runner replaces them with the canonical browser path. A refresh, copied deep
link, or new tab retains the correct target. The outer Back to Day 3 link exits
the exercise, including when the server was started with a CLI-selected target.

The catalogue at `/movies` reads URL state rather than maintaining duplicate
filter state, for example `/movies?genre=sci-fi&q=space&sort=newest`:

| Parameter | Meaning | Default |
| --- | --- | --- |
| genre | action, comedy, drama, sci-fi, animation | All genres |
| q | Case-insensitive, trimmed title search | Empty search |
| sort | title or newest | title |

Parameters combine. Updating one preserves the others. Unknown genre or sort
values produce an explicit recovery message. Text typing uses history
replacement; discrete genre/sort changes and Clear filters create entries.
Clear filters removes only these three parameters. The movie layout links back
to the unfiltered `/movies` catalogue; preserving prior results is an optional challenge.

### Teaching and review

Start with the concise Home/About introduction, then use the main-branch router
examples and matching-priority question. Follow each concept with its relevant
StreamBox checkpoint. Keep the optional fifth checkpoint and Podcast Navigator
available outside the main slide sequence.

| Teaching block | General example | Practice application |
| --- | --- | --- |
| Routes and links | Home/About/Contact website | App pages and navigation |
| Nested layouts, Outlet, index | Dashboard and Site layouts | Shared app layout and Home index |
| Dynamic segments and useParams | Product ID | Movie-specific Details/Cast layout |
| Query state and controlled UI | Product category filter | Genre filter |
| Multiple query values | StreamBox year-checkbox demo | Instructor-led only |

Contrast flat and nested declarations at the same URL: nesting controls shared
rendered UI. In checkpoint 2, the StreamingLayout Outlet renders Home or another
app page. After introducing `:movieId`, trace `/movies/101/cast` through that
Outlet to MoviesLayout, then through its Outlet to Cast. The Details index at
`/movies/101` does not redirect. The instructor demo at
`/play/day-3/demo/streambox/movies/years` uses comma-separated `years` in the
URL; refresh or share the URL to restore the checked boxes and results.

Starter incompleteness is deliberate: missing links/routes and disabled filter
controls are labelled TODOs. Later starters supply completed prerequisite work.
Do not complete these gaps as incidental bug fixes.

For each review, test the exact behavior in its Check your work section. Include
Back/Forward, direct entry, refresh, an unknown movie ID, an unmatched URL, and
combined filter URLs. Exercise 5 remains an optional extension.

Programmatic navigation is part of the routing teaching, without requiring a
sixth exercise. A supplied profile-save operation first illustrates success,
then explicit failure UI and staying on the form. Compare Link and useNavigate,
and show one absolute versus relative destination. Redirects, history replacement,
and route-versus-path-relative `..` are outside the core slide sequence.

## Optional practice: Podcast Navigator

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

It is preserved as additional practice. Its internal paths do not update the
browser address bar, so use StreamBox to demonstrate real URL/history behavior.

## Afternoon: TanStack Query

### Star Wars useQuery

**File to edit:** [starwars-use-query/starter/usePerson.ts](starwars-use-query/starter/usePerson.ts)

Everything is already built except the custom hook. Two components (`PersonHeader` shows the name, `PersonDetails` shows the full profile) both call `usePerson(personId)`, and a counter shows how many network requests were sent.

**Tasks:**

1. **`usePerson.ts`** — Replace the placeholder with `useQuery`, using `queryKey: ['person', personId]` and `queryFn: () => fetchPerson(personId)`.
2. Check that the counter goes up by **1** per character even though two components ask for the same data.
3. Click another character and go back: the data appears instantly with no new request.
