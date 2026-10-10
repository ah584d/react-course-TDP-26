import Link from "next/link";

export default async function DynamicRoute({ params}: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
          🔀 Dynamic Route
        </h1>

        <div className="space-y-6">
          <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-purple-900 dark:text-purple-100">
              Current Slug:{" "}
              <span className="text-purple-600 dark:text-purple-400">
                {slug}
              </span>
            </h2>
            <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <p>
                📁 File:{" "}
                <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                  app/dynamic/[slug]/page.tsx
                </code>
              </p>
              <p>
                🌐 URL:{" "}
                <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                  /dynamic/{slug}
                </code>
              </p>
              <p>
                ✨ Dynamic segment in square brackets: <code>[slug]</code>
              </p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              How Dynamic Routes Work:
            </h3>
            <ul className="text-zinc-700 dark:text-zinc-300">
              <li>
                Folder name with square brackets: <code>[slug]</code>
              </li>
              <li>The value from URL is passed as a parameter</li>
              <li>Can be used for blog posts, products, user profiles, etc.</li>
              <li>Still a Server Component by default</li>
            </ul>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-zinc-50 dark:bg-zinc-950">
            <h3 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-50">
              Try Different URLs:
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/dynamic/hello-world"
                className="text-sm px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
              >
                /dynamic/hello-world
              </Link>
              <Link
                href="/dynamic/nextjs-rocks"
                className="text-sm px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
              >
                /dynamic/nextjs-rocks
              </Link>
              <Link
                href="/dynamic/123"
                className="text-sm px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
              >
                /dynamic/123
              </Link>
            </div>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <Link
              href="/"
              className="inline-block px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
