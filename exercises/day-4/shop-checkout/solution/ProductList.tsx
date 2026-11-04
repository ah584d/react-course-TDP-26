import { products } from '../products'
import useCartStore from './useCartStore'

export default function ProductList() {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <section className="sc-panel">
      <p className="sc-panel-label">Products</p>
      {products.map((product) => (
        <div key={product.id} className="sc-row">
          <span>
            {product.emoji} {product.name} - ${product.price}
          </span>
          <button type="button" className="sc-button" onClick={() => addToCart(product)}>
            Add
          </button>
        </div>
      ))}
    </section>
  )
}
