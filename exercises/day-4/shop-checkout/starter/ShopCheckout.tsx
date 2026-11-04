import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

      {/* TODO (Phase 3): wrap PromoBanner in the ErrorBoundary from "../ErrorBoundary".
          Give it a fallback that shows the error message and a "Try again" button (call reset),
          and use onReset to clear promoDraft and promoCode. */}
      <PromoBanner code={promoCode} />

      <p className="sc-hint">
        Header, products and basket share one Zustand store. Checkout fails above $150 or when "Simulate server
        error" is on. Warning: the unknown promo code HELLO crashes PromoBanner - do Phase 3 first, or reload
        the page.
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
