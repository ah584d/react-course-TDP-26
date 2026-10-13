import Link from "next/link";

// Simulate slow data fetching
async function getSlowData() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay

  return {
    message: "This data took 2 seconds to load!",
    items: [
      {
        id: 1,
        title: "Loading State Demo",
        description: "Automatic loading UI while fetching",
      },
      {
        id: 2,
        title: "Suspense Boundary",
        description: "Next.js automatically wraps async components",
      },
      {
        id: 3,
        title: "loading.tsx",
        description: "Special file for loading UI",
      },
      {
        id: 4,
        title: "User Experience",
        description: "Shows skeleton while data loads",
      },
    ],
  };
}

export default async function LoadingExample() {
  const data = await getSlowData();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
          ⏳ Loading States
        </h1>

        <div className="space-y-6">
          <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-purple-900 dark:text-purple-100">
              {data.message}
            </h2>
            <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <p>
                📁 File:{" "}
                <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                  app/loading-example/loading.tsx
                </code>
              </p>
              <p>⏱️ Simulated 2-second delay</p>
              <p>✨ You should have seen a loading skeleton!</p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              How Loading States Work:
            </h3>
            <ul className="text-zinc-700 dark:text-zinc-300">
              <li>
                Create <code>loading.tsx</code> in the same folder as{" "}
                <code>page.tsx</code>
              </li>
              <li>Next.js automatically shows it while the page loads</li>
              <li>Works with Suspense boundaries under the hood</li>
              <li>Great for showing skeletons or spinners</li>
              <li>Improves perceived performance</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.items.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border border-purple-200 dark:border-purple-800 rounded-lg p-4"
              >
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                  {item.title}
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
              Try It Again:
            </h4>
            <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
              Click the button below to see the loading state again. The
              loading.tsx component will show automatically!
            </p>
            <Link
              href="/loading-example"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              🔄 Reload Page
            </Link>
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
                href="/data-fetching"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                ← Back to Data Fetching
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
