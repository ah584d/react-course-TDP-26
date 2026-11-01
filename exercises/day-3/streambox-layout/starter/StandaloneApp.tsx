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
          <Link to="/account">Account</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <AppRoutes />
    </div>
  )
}
