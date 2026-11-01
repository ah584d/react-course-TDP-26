import { Link, Outlet } from 'react-router-dom'

export default function StreamingLayout() {
  return (
    <>
      <header className="sb-header">
        <Link className="sb-brand" to="/">StreamBox</Link>
        <nav aria-label="StreamBox navigation">
          <Link to="/movies">Browse movies</Link>
          <Link to="/account">Account</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
