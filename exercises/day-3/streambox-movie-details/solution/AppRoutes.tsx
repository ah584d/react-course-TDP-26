import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import MovieCatalogPage from './MovieCatalogPage'
import AccountPage from './AccountPage'
import HelpPage from './HelpPage'
import StreamingLayout from './StreamingLayout'
import MoviesLayout from './MoviesLayout'
import MovieDetailsPage from './MovieDetailsPage'
import MovieCastPage from './MovieCastPage'
import NotFoundPage from './NotFoundPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StreamingLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MovieCatalogPage />} />
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
