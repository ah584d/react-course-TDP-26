import { useCartStore } from "../../stores/useCartStore";

function CartPanel() {
  const items = useCartStore((state) => state.items);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const remove = useCartStore((state) => state.remove);

  return (
    <section className="shop-panel">
      <h2>Your basket</h2>
      {items.length === 0 && <p className="shop-empty">The basket is empty</p>}
      {items.map((item) => (
        <div key={item.id} className="shop-row">
          <span>
            {item.emoji} {item.name}
          </span>
          <span>
            <button onClick={() => decrease(item.id)}>−</button>
            <span className="shop-quantity">{item.quantity}</span>
            <button onClick={() => increase(item.id)}>+</button>
            <span className="shop-line-total">${item.price * item.quantity}</span>
            <button onClick={() => remove(item.id)}>✕</button>
          </span>
        </div>
      ))}
    </section>
  );
}

export default CartPanel;
