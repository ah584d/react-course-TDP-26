import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ErrorBoundary from '../ErrorBoundary'
import PromoBanner from '../PromoBanner'
import CartPanel from './CartPanel'
import ProductList from './ProductList'
import ShopHeader from './ShopHeader'

function Shop() {
  const [simulateError, setSimulateError] = useState(false)
  const [promoDraft, setPromoDraft] = useState('')
  const [promoCode, setPromoCode] = useState('')

  return (
    <div className="sc-app">
      <ShopHeader />

      <div className="sc-columns">
        <ProductList />
        <CartPanel simulateError={simulateError} />
      </div>

      <div className="sc-toolbar">
        <label>
          <input
            type="checkbox"
            checked={simulateError}
            onChange={(event) => setSimulateError(event.target.checked)}
          />{' '}
          Simulate server error
        </label>
        <input
          className="sc-input"
          value={promoDraft}
          onChange={(event) => setPromoDraft(event.target.value)}
          placeholder="Promo code (SAVE10, FREESHIP...)"
        />
        <button type="button" className="sc-button" onClick={() => setPromoCode(promoDraft)}>
          Apply
        </button>
      </div>

      <ErrorBoundary
        onReset={() => {
          setPromoDraft('')
          setPromoCode('')
        }}
        fallback={({ error, reset }) => (
          <div className="sc-promo sc-promo-error">
            <p>Promo banner failed: {error.message}</p>
            <button type="button" className="sc-button" onClick={reset}>
              Try again
            </button>
          </div>
        )}
      >
        <PromoBanner code={promoCode} />
      </ErrorBoundary>

      <p className="sc-hint">
        Header, products and basket share one Zustand store. Checkout fails above $150 or when "Simulate server
        error" is on. Try the unknown promo code HELLO: the banner crashes, but the rest of the shop keeps working.
      </p>
    </div>
  )
}

export default function ShopCheckout() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Shop />
    </QueryClientProvider>
  )
}
