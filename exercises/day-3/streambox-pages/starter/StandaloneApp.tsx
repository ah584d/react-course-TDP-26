import { Link } from 'react-router-dom'
import '../../streambox-shared/StreamBox.css'
import AppRoutes from './AppRoutes'

export default function StandaloneApp() {
  return (
    <div className="streambox">
      <header className="sb-header">
        <Link className="sb-brand" to="/">StreamBox</Link>
        <nav aria-label="StreamBox navigation">
          <Link to="/movies">Browse movies</Link>
          {/* TODO: Replace these placeholders with links to /account and /help. */}
          <span>Account (add Link)</span>
          <span>Help (add Link)</span>
        </nav>
      </header>
      <AppRoutes />
    </div>
  )
}
