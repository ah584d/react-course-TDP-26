import { Suspense } from "react";
import Link from "next/link";
import { StarshipsList } from "./StarshipsList";

export default async function StreamingDemo({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { stream } = await searchParams;
  const isStreamingEnabled = stream === "true";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            ⏳ Streaming Demo
          </h1>

          <div className="flex bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
            <Link
              href="/streaming-demo?stream=false"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                !isStreamingEnabled
                  ? "bg-white shadow text-zinc-900 dark:bg-zinc-700 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              }`}
            >
              Standard (Wait)
            </Link>
            <Link
              href="/streaming-demo?stream=true"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isStreamingEnabled
                  ? "bg-white shadow text-zinc-900 dark:bg-zinc-700 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              }`}
            >
              Streaming
            </Link>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p>
            {isStreamingEnabled
              ? "Notice how the UI below renders immediately with a loading skeleton, then swaps in the data as soon as it arrives! This is React Suspense + Next.js Streaming."
              : "Notice how the whole page pauses and nothing renders until the data is fully fetched. This is standard blocking data fetching."}
          </p>
        </div>

        {isStreamingEnabled ? (
          <Suspense
            fallback={
              <div className="animate-pulse space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-24 bg-zinc-200 dark:bg-zinc-800 rounded-lg"
                  ></div>
                ))}
              </div>
            }
          >
            <StarshipsList />
          </Suspense>
        ) : (
          <StarshipsList />
        )}
      </div>
    </div>
  );
}
