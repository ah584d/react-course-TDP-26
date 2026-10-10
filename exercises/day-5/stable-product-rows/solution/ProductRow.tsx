import { memo } from 'react'

type ProductRowProps = {
  id: number
  name: string
  price: number
  onRemove: (id: number) => void
}

const ProductRow = memo(function ProductRow(props: ProductRowProps) {
  console.log(`🔄 ProductRow rendered: ${props.name}`)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderBottom: '1px solid #333' }}>
      <span>{props.name}</span>
      <span>${props.price}</span>
      <button type="button" onClick={() => props.onRemove(props.id)} style={{ marginLeft: '12px' }}>
        Remove
      </button>
    </div>
  )
})

export default ProductRow
