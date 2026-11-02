import CartDemoLayout from '../../day-1/cart-state/CartDemoLayout'
import LoginFlow from './LoginFlow'
import loginFlowSource from './LoginFlow.tsx?raw'

export default function LoginFlowDemo() {
  return (
    <CartDemoLayout
      className="login-flow-demo"
      previewLabel="Rendered login flow"
      sourceLabel="Login flow source code"
      sources={[{
        path: 'demo/day-3/login-flow/LoginFlow.tsx',
        source: loginFlowSource,
      }]}
    >
      <LoginFlow />
    </CartDemoLayout>
  )
}