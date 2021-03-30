import React from "react";
import "./styles.scss";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return <div className="boundryError"><h1>Something went wrong.</h1></div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;