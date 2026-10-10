# Day 4 Exercises

## Exercise 1: Stable Product Rows (`React.memo` + `useCallback`)

A product list with a ticking counter that forces parent rerenders every 80ms. All rows rerender unnecessarily.

**Your task:** Add `React.memo` and `useCallback` (~3 lines of code) to stop the unnecessary rerenders.

```
npm run course -- day-4/exercises/stable-product-rows
```

## Exercise 2: Filtered Analytics Summary (`useMemo`)

An analytics dashboard where an expensive `computeSummary` function runs on every tick even when the filter hasn't changed.

**Your task:** Wrap the computation in `useMemo` with the correct dependency (~1 line of code).

```
npm run course -- day-4/exercises/filtered-analytics-summary
```