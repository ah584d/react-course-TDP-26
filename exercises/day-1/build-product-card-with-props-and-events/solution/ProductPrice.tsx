interface ProductPriceProps {
  price: string
}

export default function ProductPrice({ price }: ProductPriceProps) {
  return <p>{price}</p>
}
