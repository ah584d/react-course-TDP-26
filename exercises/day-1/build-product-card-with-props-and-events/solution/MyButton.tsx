type MyButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export default function MyButton({ children, onClick }: MyButtonProps) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
