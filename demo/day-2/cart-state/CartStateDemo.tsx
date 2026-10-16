import Cart from './Cart'
import cartSource from './Cart.tsx?raw'
import './CartStateDemo.css'

export default function CartStateDemo() {
  return (
    <div className="cart-state-demo">
      <Cart />
      <aside className="cart-state-source" aria-labelledby="cart-source-title">
        <h2 id="cart-source-title">Cart code</h2>
        <p><code>demo/day-2/cart-state/Cart.tsx</code></p>
        <p>Edit in VS Code and save to update the preview and source together.</p>
        <pre tabIndex={0} aria-label="Cart component source">
          <code>{cartSource}</code>
        </pre>
      </aside>
    </div>
  )
}
