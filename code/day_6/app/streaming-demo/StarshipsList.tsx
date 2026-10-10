async function getStarshipsSlow() {
  const res = await fetch("https://swapi.dev/api/starships", {
    cache: "no-store", // Disable caching
  });

  // Artificial delay to make the streaming obvious
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!res.ok) {
    throw new Error("Failed to fetch starships");
  }

  return res.json();
}

export async function StarshipsList() {
  const data = await getStarshipsSlow();
  const starships = data.results;

  return (
    <div className="grid gap-4">
      {starships.map((ship: any) => (
        <div
          key={ship.name}
          className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4"
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
  );
}
