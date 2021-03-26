import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state to trigger fallback UI
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            // Render fallback UI
            return <div><h1>Something went wrong.</h1></div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;