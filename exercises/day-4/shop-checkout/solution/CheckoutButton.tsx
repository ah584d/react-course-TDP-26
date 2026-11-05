import { useMutation } from '@tanstack/react-query'
import { submitOrder } from '../api'
import useCartStore from './useCartStore'

export default function CheckoutButton(props: { simulateError: boolean }) {
  const items = useCartStore((state) => state.items)
  const clearCart = useCartStore((state) => state.clearCart)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const mutation = useMutation({
    mutationFn: () => submitOrder({ items, simulateError: props.simulateError }),
    onSuccess: () => clearCart(),
  })

  return (
    <div>
      <button
        type="button"
        className="sc-button sc-button-primary"
        disabled={items.length === 0 || mutation.isPending}
        onClick={() => mutation.mutate()}
      >
        {mutation.isPending ? 'Paying...' : `Pay $${total}`}
      </button>

      {mutation.isSuccess && (
        <p className="sc-status sc-success">✅ Order {mutation.data.orderId} confirmed - thank you!</p>
      )}
      {mutation.isError && (
        <p className="sc-status sc-error">
          ❌ {mutation.error.message}{' '}
          <button type="button" className="sc-button" onClick={() => mutation.mutate()}>
            Retry
          </button>
        </p>
      )}
    </div>
  )
}
