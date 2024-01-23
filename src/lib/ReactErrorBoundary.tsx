import React from "react";
import Container from "./Container";
import H1 from "./H1";
import Button from "./Button";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

class ReactErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }
  reload(){
    window.location.href = '/';
    window.location.reload();
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container className="flex flex-col items-center justify-center">
          <H1>Something went wrong.</H1>
          <Button title="Reload" onClick={this.reload}/>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ReactErrorBoundary;
