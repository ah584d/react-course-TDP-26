import { useState } from 'react'
import './StateNavigationDemo.css'

export default function StateNavigationDemo() {
  const [selectedScreen, setSelectedScreen] = useState<'home' | 'about'>('home')

  return (
    <div className="state-navigation-demo">
      <section className="lesson-card">
        <p className="eyebrow">File to review</p>
        <code>demo/day-3/state-navigation/StateNavigationDemo.tsx</code>
        <ol>
          <li>Look at the browser address while Home is visible.</li>
          <li>Click About. Compare the content and the address.</li>
          <li>Predict what refresh will show, then try it.</li>
          <li>Return to About, then copy this URL into a new tab. Which screen appears?</li>
        </ol>
      </section>

      <section className="state-navigation-app" aria-label="State-only website">
        <header>
          <p className="state-navigation-brand">A small website</p>
          <nav aria-label="Screen selection">
            <button
              type="button"
              aria-pressed={selectedScreen === 'home'}
              onClick={() => setSelectedScreen('home')}
            >
              Home
            </button>
            <button
              type="button"
              aria-pressed={selectedScreen === 'about'}
              onClick={() => setSelectedScreen('about')}
            >
              About
            </button>
          </nav>
        </header>

        <div className="state-navigation-content">
          {selectedScreen === 'home' ? (
            <section aria-labelledby="state-navigation-home">
              <h2 id="state-navigation-home">Home</h2>
              <p>Welcome! This is the first screen you see when the app starts.</p>
              <p>Use the About button to learn more about this little website.</p>
            </section>
          ) : (
            <section aria-labelledby="state-navigation-about">
              <h2 id="state-navigation-about">About</h2>
              <p>This website has two screens, selected with React state.</p>
              <p>The button updates selectedScreen; conditional rendering chooses the content.</p>
            </section>
          )}
        </div>
      </section>
    </div>
  )
}
