import CartDemoLayout from '../cart-state/CartDemoLayout'
import CartSummary from './CartSummary'
import cartSummarySource from './CartSummary.tsx?raw'

export default function CartDerivedDemo() {
  return (
    <CartDemoLayout sources={[
      { path: 'demo/day-1/cart-derived/CartSummary.tsx', source: cartSummarySource },
    ]}>
      <CartSummary />
    </CartDemoLayout>
  )
}
