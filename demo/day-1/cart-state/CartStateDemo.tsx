import Cart from './Cart'
import cartSource from './Cart.tsx?raw'
import CartDemoLayout from './CartDemoLayout'

export default function CartStateDemo() {
  return (
    <CartDemoLayout sources={[
      { path: 'demo/day-1/cart-state/Cart.tsx', source: cartSource },
    ]}>
      <Cart />
    </CartDemoLayout>
  )
}
