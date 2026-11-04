import useCartStore from './useCartStore'

export default function CheckoutButton(props: { simulateError: boolean }) {
  const items = useCartStore((state) => state.items)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // TODO (Phase 2): call useMutation (from "@tanstack/react-query")
  //   - mutationFn: () => submitOrder({ items, simulateError: props.simulateError })  (submitOrder is in ../api)
  //   - onSuccess: empty the cart with clearCart() from the store
  // Then use the result: mutation.mutate(), mutation.isPending, mutation.isSuccess,
  // mutation.isError, mutation.data and mutation.error
  void props.simulateError

  return (
    <div>
      {/* TODO (Phase 2): call mutation.mutate() on click, disable while pending, show "Paying..." */}
      <button type="button" className="sc-button sc-button-primary" disabled={items.length === 0}>
        {`Pay $${total}`}
      </button>

      {/* TODO (Phase 2): on success show the order id (mutation.data.orderId), on error show mutation.error.message */}
      {/* BONUS: add a "Retry" button that calls mutation.mutate() again */}
    </div>
  )
}
