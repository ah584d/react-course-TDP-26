// TODO: Wrap this component in React.memo so it skips rerenders when props are unchanged.

type ProductRowProps = {
  id: number
  name: string
  price: number
  onRemove: (id: number) => void
}

function ProductRow(props: ProductRowProps) {
  console.log(`🔄 ProductRow rendered: ${props.name}`)

  return (
    <div className="product-row">
      <span>{props.name}</span>
      <span>${props.price}</span>
      <button type="button" onClick={() => props.onRemove(props.id)} className="product-row-remove">
        Remove
      </button>
    </div>
  )
}

export default ProductRow
