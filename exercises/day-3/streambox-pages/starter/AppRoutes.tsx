import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import MovieCatalogPage from './MovieCatalogPage'
import NotFoundPage from './NotFoundPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MovieCatalogPage />} />
      {/* TODO: Import AccountPage and HelpPage and add their routes here. */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
