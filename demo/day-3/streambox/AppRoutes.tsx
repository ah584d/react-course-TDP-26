import { Route, Routes } from 'react-router-dom'
import HomePage from '../../../exercises/day-3/streambox-search-and-sort/solution/HomePage'
import MovieCatalogPage from '../../../exercises/day-3/streambox-search-and-sort/solution/MovieCatalogPage'
import MovieDetailsPage from '../../../exercises/day-3/streambox-search-and-sort/solution/MovieDetailsPage'
import MovieCastPage from '../../../exercises/day-3/streambox-search-and-sort/solution/MovieCastPage'
import MoviesLayout from '../../../exercises/day-3/streambox-search-and-sort/solution/MoviesLayout'
import StreamingLayout from '../../../exercises/day-3/streambox-search-and-sort/solution/StreamingLayout'
import AccountPage from '../../../exercises/day-3/streambox-search-and-sort/solution/AccountPage'
import HelpPage from '../../../exercises/day-3/streambox-search-and-sort/solution/HelpPage'
import NotFoundPage from '../../../exercises/day-3/streambox-search-and-sort/solution/NotFoundPage'
import YearFilterCatalog from './YearFilterCatalog'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StreamingLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MovieCatalogPage />} />
        <Route path="movies/years" element={<YearFilterCatalog />} />
        <Route path="movies/:movieId" element={<MoviesLayout />}>
          <Route index element={<MovieDetailsPage />} />
          <Route path="cast" element={<MovieCastPage />} />
        </Route>
        <Route path="account" element={<AccountPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}