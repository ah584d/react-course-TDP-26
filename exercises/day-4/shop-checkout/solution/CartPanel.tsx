import useCartStore from './useCartStore'
import CheckoutButton from './CheckoutButton'

export default function CartPanel(props: { simulateError: boolean }) {
  const items = useCartStore((state) => state.items)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

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
            <button type="button" className="sc-button" onClick={() => removeFromCart(item.id)}>
              ✕
            </button>
          </span>
        </div>
      ))}
      <CheckoutButton simulateError={props.simulateError} />
    </section>
  )
}
