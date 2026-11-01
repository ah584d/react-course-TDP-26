import { Route, Routes, useParams } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home page</p>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the About page</p>
    </div>
  )
}

function ProductPage() {
  const { id } = useParams()

  return <h1>Welcome to the page for product id: {id}</h1>
}

function NotFoundPage() {
  return <h1>Page not found</h1>
}

export default function StandaloneApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}