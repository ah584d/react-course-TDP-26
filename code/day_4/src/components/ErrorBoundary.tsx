import { Component } from "react";
import type { ReactNode } from "react";

type ErrorBoundaryProps = {
  fallback: ReactNode;
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  // React calls this when a child throws while rendering
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Caught by ErrorBoundary:", error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

export default ErrorBoundary;
