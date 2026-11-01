import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import MovieCatalogPage from './MovieCatalogPage'
import AccountPage from './AccountPage'
import HelpPage from './HelpPage'
import StreamingLayout from './StreamingLayout'
import NotFoundPage from './NotFoundPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StreamingLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MovieCatalogPage />} />
        {/* TODO: Import MoviesLayout, MovieDetailsPage, and MovieCastPage. Add a movies/:movieId parent with Details as its index and Cast as a child. */}
        <Route path="account" element={<AccountPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
