const PROMOS: Record<string, { label: string }> = {
  SAVE10: { label: '10% off your order' },
  FREESHIP: { label: 'Free shipping' },
}

// Ready to use - it has a bug on purpose: an unknown promo code makes it crash while rendering.
export default function PromoBanner(props: { code: string }) {
  if (props.code === '') {
    return null
  }

  const promo = PROMOS[props.code]

  return <div className="sc-promo">🎁 Promo applied: {promo.label}</div>
}
