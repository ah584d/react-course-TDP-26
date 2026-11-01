import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import MovieCatalogPage from './MovieCatalogPage'
import AccountPage from './AccountPage'
import HelpPage from './HelpPage'
import NotFoundPage from './NotFoundPage'

export default function AppRoutes() {
  return (
    <Routes>
      {/* TODO: Nest the pages under StreamingLayout; Home is its index. Keep movies as a child route. */}
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MovieCatalogPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
