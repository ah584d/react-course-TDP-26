import ProductDescription from './ProductDescription'
import ProductPrice from './ProductPrice'
import ProductTitle from './ProductTitle'

const product = {
  title: 'Wireless Headphones',
  description: 'Noise-cancelling over-ear headphones with a 30-hour battery life.',
  price: '$129',
}

export default function ProductCard() {
  return (
    <article className="product-card">
      <ProductTitle title={product.title} />
      <ProductDescription />
      <ProductPrice />
    </article>
  )
}
