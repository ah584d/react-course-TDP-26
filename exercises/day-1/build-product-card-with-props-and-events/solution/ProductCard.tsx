import ProductTitle from './ProductTitle'
import ProductDescription from './ProductDescription'
import ProductPrice from './ProductPrice'
import MyButton from './MyButton'

 const Product = {
  title: 'Wireless Headphones',
  description: 'Noise-cancelling over-ear headphones with a 30-hour battery life.',
  price: '$129',
}

export default function ProductCard() {
    function handleAddToCart() {
    console.log(Product.title)
  }

  return (
    <article className="product-card">
      <ProductTitle title={Product.title} />
      <ProductDescription description={Product.description} />
      <ProductPrice price={Product.price} />
      <MyButton onClick={handleAddToCart}>Add to Cart</MyButton>
    </article>
  )
}
