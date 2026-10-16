interface ProductTitleProps {
  title: string
}

export default function ProductTitle({ title }: ProductTitleProps) {
  return <h2>{title}</h2>
}
