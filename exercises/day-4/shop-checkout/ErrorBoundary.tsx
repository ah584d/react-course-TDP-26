import { Component } from 'react'
import type { ReactNode } from 'react'

interface ErrorBoundaryProps {
  // Receives the error and a reset function that tries to render the children again
  fallback: (args: { error: Error; reset: () => void }) => ReactNode
  onReset?: () => void
  children: ReactNode
}

interface ErrorBoundaryState {
  error: Error | null
}

// Ready to use - you do not need to edit this file.
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  reset = () => {
    this.props.onReset?.()
    this.setState({ error: null })
  }

  render() {
    if (this.state.error) {
      return this.props.fallback({ error: this.state.error, reset: this.reset })
    }

    return this.props.children
  }
}
