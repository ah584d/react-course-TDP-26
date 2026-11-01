import { Link } from 'react-router-dom'

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
      {/* TODO: Replace this message with Outlet so the matched child can render. */}
      <p className="sb-todo">The layout needs an Outlet here.</p>
    </>
  )
}
