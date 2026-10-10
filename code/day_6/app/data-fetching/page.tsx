import Link from "next/link";

// Server Component with async data fetching
async function getStarships() {
  const res = await fetch("https://swapi.dev/api/starships", {
    cache: "no-store", // Disable caching for demo purposes
  });

  if (!res.ok) {
    throw new Error("Failed to fetch starships");
  }

  return res.json();
}

export default async function DataFetching() {
  const data = await getStarships();
  const starships = data.results;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
          📡 Data Fetching in Server Components
        </h1>

        <div className="space-y-6">
          <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-indigo-900 dark:text-indigo-100">
              Fetched {starships.length} Starships from API
            </h2>
            <div className="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
              <p>
                📁 File:{" "}
                <code className="bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">
                  app/data-fetching/page.tsx
                </code>
              </p>
              <p>
                🌐 API:{" "}
                <code className="bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">
                  swapi.dev/api/starships
                </code>
              </p>
              <p>
                ✨ Data fetched directly in Server Component with{" "}
                <code>async/await</code>
              </p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-6">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              How It Works:
            </h3>
            <ul className="text-zinc-700 dark:text-zinc-300">
              <li>
                Server Component can be <code>async</code>
              </li>
              <li>
                Fetch data directly with <code>await fetch()</code>
              </li>
              <li>No need for useEffect or loading states</li>
              <li>Data is fetched on the server before rendering</li>
              <li>Fully rendered HTML sent to client (great for SEO)</li>
            </ul>
          </div>

          <div className="grid gap-4">
            {starships.map((ship: any) => (
              <div
                key={ship.name}
                className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">
                      {ship.name}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Model: {ship.model}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Class: {ship.starship_class}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">
                      Cost: {ship.cost_in_credits} credits
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">
              Benefits of Server-Side Data Fetching:
            </h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>
                ✅ No loading spinners needed (data ready before page renders)
              </li>
              <li>✅ No API routes needed (direct database/API access)</li>
              <li>✅ Secure (API keys never exposed to client)</li>
              <li>✅ Fast (rendered once on server, cached)</li>
            </ul>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
              >
                ← Home
              </Link>
              <Link
                href="/loading-example"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Loading States →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
