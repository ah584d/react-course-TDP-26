import { products } from '../products'

export default function ProductList() {
  // TODO (Phase 1): get addToCart from the cart store and call it with the product when "Add" is clicked

  return (
    <section className="sc-panel">
      <p className="sc-panel-label">Products</p>
      {products.map((product) => (
        <div key={product.id} className="sc-row">
          <span>
            {product.emoji} {product.name} - ${product.price}
          </span>
          <button type="button" className="sc-button">
            Add
          </button>
        </div>
      ))}
    </section>
  )
}
