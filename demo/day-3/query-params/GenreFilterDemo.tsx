import CartDemoLayout from '../../day-1/cart-state/CartDemoLayout'
import GenreFilterCatalog from './GenreFilterCatalog'
import genreFilterSource from './GenreFilterCatalog.tsx?raw'

export default function GenreFilterDemo() {
  return (
    <CartDemoLayout
      className="streambox-query-demo"
      previewLabel="Live genre filter"
      sourceLabel="Genre filter source code"
      sources={[{
        path: 'demo/day-3/query-params/GenreFilterCatalog.tsx',
        source: genreFilterSource,
      }]}
    >
      <GenreFilterCatalog />
    </CartDemoLayout>
  )
}