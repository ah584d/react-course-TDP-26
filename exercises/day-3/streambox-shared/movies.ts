export const GENRES = [
  { id: 'action', label: 'Action' },
  { id: 'comedy', label: 'Comedy' },
  { id: 'drama', label: 'Drama' },
  { id: 'sci-fi', label: 'Sci-Fi' },
  { id: 'animation', label: 'Animation' },
] as const

export interface Movie {
  id: string
  title: string
  genre: (typeof GENRES)[number]['id']
  year: number
  duration: number
  description: string
}

export const MOVIES: Movie[] = [
  { id: '101', title: 'Space Station Seven', genre: 'sci-fi', year: 2026, duration: 112, description: 'A station gardener discovers that the mysterious signal outside is answering her questions.' },
  { id: '102', title: 'The Last Signal', genre: 'sci-fi', year: 2024, duration: 98, description: 'Two radio operators on different planets try to arrange a meeting before their connection disappears.' },
  { id: '103', title: 'Weekend Mix-Up', genre: 'comedy', year: 2025, duration: 94, description: 'Two neighbours collect the wrong suitcases and accidentally swap their holiday plans.' },
  { id: '104', title: 'Dinner for Eight', genre: 'comedy', year: 2022, duration: 88, description: 'An ambitious home cook invites eight strangers to dinner, but nobody agrees about the occasion.' },
  { id: '105', title: 'Night Run', genre: 'action', year: 2026, duration: 105, description: 'A bicycle courier has one night to deliver a package across a city with no working traffic lights.' },
  { id: '106', title: 'The Rooftop Chase', genre: 'action', year: 2023, duration: 101, description: 'A retired stunt performer must recover a stolen film reel before its first screening.' },
  { id: '107', title: 'Letters Home', genre: 'drama', year: 2024, duration: 118, description: 'A librarian returns a box of undelivered letters and reconnects the people who wrote them.' },
  { id: '108', title: 'The Quiet Stage', genre: 'drama', year: 2021, duration: 109, description: 'A small-town theatre prepares its final performance with a cast who have never met.' },
  { id: '109', title: 'Space Garden', genre: 'animation', year: 2025, duration: 82, description: 'A curious robot and a stubborn sunflower set out to turn a tiny moon green.' },
  { id: '110', title: 'Cloud Parade', genre: 'animation', year: 2026, duration: 86, description: 'A young weather-maker loses the clouds for the annual parade and must invent a new celebration.' },
]

export const MOVIE_CAST: Record<string, string[]> = {
  '101': ['Maya Chen', 'Jonah Reed'],
  '102': ['Amina Okafor', 'Leo Park'],
  '103': ['Nina Torres', 'Caleb Brooks'],
  '104': ['Rosa Marin', 'Dev Patel'],
  '105': ['Samira Ali', 'Evan Brooks'],
  '106': ['Tessa Morgan', 'Hugo Silva'],
  '107': ['Elena Cruz', 'Marcus Lee'],
  '108': ['Priya Shah', 'Noah Bennett'],
  '109': ['Kira Ito', 'Alex Rivera'],
  '110': ['Dani Flores', 'Robin Quinn'],
}
