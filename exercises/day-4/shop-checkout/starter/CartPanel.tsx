import type { CartItem } from '../products'
import CheckoutButton from './CheckoutButton'

export default function CartPanel(props: { simulateError: boolean }) {
  // TODO (Phase 1): read items and removeFromCart from the cart store instead of this empty array
  const items: CartItem[] = []

  return (
    <section className="sc-panel">
      <p className="sc-panel-label">Your basket</p>
      {items.length === 0 && <p className="sc-status">The basket is empty</p>}
      {items.map((item) => (
        <div key={item.id} className="sc-row">
          <span>
            {item.emoji} {item.name} × {item.quantity}
          </span>
          <span>
            ${item.price * item.quantity}{' '}
            {/* TODO (Phase 1): call removeFromCart(item.id) when clicked */}
            <button type="button" className="sc-button">
              ✕
            </button>
          </span>
        </div>
      ))}
      <CheckoutButton simulateError={props.simulateError} />
    </section>
  )
}
