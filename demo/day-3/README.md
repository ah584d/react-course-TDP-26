# Day 3 demos

## Switching Screens with State

```sh
npm run course -- day-3/demo/state-navigation
```

Or open `/?target=day-3/demo/state-navigation` on the existing course server.
The routing introduction links directly to this demo. It appears before the
StreamBox tour in the Day 3 launcher.

The [component](state-navigation/StateNavigationDemo.tsx) starts with
`selectedScreen` set to `home`. Home/About buttons update that local state, and
conditional rendering selects the visible content. No router, history API,
storage, or URL synchronization is used. This limitation is the teaching point,
not a bug to fix.

1. Note the browser address while Home is visible.
2. Click About: the content and selected button change, but the address does not.
3. Ask learners to predict a refresh, then refresh: Home appears again.
4. Return to About, then copy the address into a fresh tab: Home appears there.
5. Return to the slides to introduce routes and URL-based navigation.

This is a regular launcher demo, not a standalone browser-routing target. Use the
actual browser address bar to observe the missing connection, not a simulated URL.

## Home and About Routes

```sh
npm run course -- day-3/demo/basic-routing --standalone --port 5174
```

Open http://localhost:5174/ from the "Setting Up React Router" slide. The
[standalone app](basic-routing/StandaloneApp.tsx) starts with two fixed pages:
`/` and `/about`. Type `/about` directly and refresh to see the URL select the
page. There are no page links or navigation bar yet. Later matching slides use
the same app to show `/no-such-page` (the `*` fallback) and `/products/42`
(a dynamic `:id` value); change 42 to another ID to see the page update.
The runner supplies BrowserRouter, so do not wrap the demo in another one.

## Navigation with Links

Stop the basic-routing server on port 5174, then run:

```sh
npm run course -- day-3/demo/navigation-links --standalone --port 5174
```

Open http://localhost:5174/. This separate [demo](navigation-links/StandaloneApp.tsx)
uses the same Home and About URLs but adds a shared Navbar with Links in both
pages. Clicking Home or About changes the URL without reloading the document.

## Updating Query Parameters

Open `/play/day-3/demo/query-params` on the existing course server (normally
`http://localhost:5173`). It has its own target title and shows
`GenreFilterCatalog.tsx` beside the live filter. Selecting a genre updates the
URL and results; refresh and Back/Forward restore the selected state.

## StreamBox: Finished App Tour

```sh
npm run course -- day-3/demo/streambox
npm run course -- day-3/demo/streambox --standalone --port 5174
```

Use the URL Vite prints. The runner selects a stable `/play/day-3/demo/streambox/`
base path and supplies `BrowserRouter`; do not add a second router in the demo.
The app-relative `/account` route therefore appears under that base.
With `--standalone`, the same app runs at `/`, without the guide/course frame or
basename. The selected demo stays fixed on refresh; query parameters belong to
the app. Use a separate terminal/port to keep the launcher available.

The demo reuses pages from the final
[search-and-sort solution](../../../exercises/day-3/streambox-search-and-sort/solution/AppRoutes.tsx)
and adds a demo-only [year checkbox page](streambox/YearFilterCatalog.tsx) at
`/movies/years`. Selecting years writes a comma-separated `years` query value;
refreshing or sharing the URL restores both the checkboxes and the movie list.
Exercise starters never import another checkpoint's solution.

### Optional practice preview or final review

1. Start at `/` (Home), then `/movies`. The app header remains while the
   catalogue replaces Home.
2. Open movie 101, then its Cast tab: a path parameter identifies the movie.
   Details and Cast replace each other under the same movie header.
3. Visit Account and Help: the app header remains but the movie header disappears.
   Return to `/movies`, select Sci-Fi, search for `space`, and sort by newest.
4. Refresh or share that URL: the controls and results agree.
5. Open `/movies/years`, select two years, then share or refresh the URL.

App-wide navigation belongs to StreamingLayout. Movie-specific navigation belongs
to MoviesLayout. The catalogue genre shortcuts start fresh genre views;
catalogue controls preserve existing search/sort/genre parameters.

Do not open the React Router lesson as a StreamBox tour. Teach the library's
purpose, mental model, and tools first. Use general micro-examples for concept
explanations and introduce StreamBox only as practice. A short demo at the first
exercise handoff or a final review is optional. Review each checkpoint's solution
rather than editing the final app during those reviews.