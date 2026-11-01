import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'

export default function StandaloneApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}