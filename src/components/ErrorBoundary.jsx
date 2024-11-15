import React from 'react';
import PropTypes from 'prop-types';

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, modelLoaded: false };
    this.canvasRef = React.createRef();
  }

  static getDerivedStateFromError(error) {
    // If an error occurs, set the error state to display fallback UI
    return { hasError: true };
  }

  componentDidMount() {
    // Skip all error boundary logic if not running on a mobile device
    if (!this.isMobileDevice()) return;

    // Set a 3-second timeout to check if the canvas has content
    this.timer = setTimeout(() => {
      if (!this.state.modelLoaded) {
        this.setState({ hasError: true });
      }
    }, 3000);

    // Set up a MutationObserver to detect changes in the canvas
    if (this.canvasRef.current) {
      this.observer = new MutationObserver(() => {
        // If there’s any content change, set modelLoaded to true and clear the error
        this.setState({ modelLoaded: true, hasError: false });
        clearTimeout(this.timer);
      });
      this.observer.observe(this.canvasRef.current, {
        childList: true,
        subtree: true,
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Canvas rendering failed:", error, errorInfo);
  }

  // Function to detect if the device is a mobile device
  isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /mobile|android|iphone|ipod|ipad/i.test(userAgent);
  }

  render() {
    // Skip rendering the error boundary entirely on non-mobile devices
    if (!this.isMobileDevice()) {
      return <div ref={this.canvasRef}>{this.props.children}</div>;
    }

    // Show fallback UI if the error occurred on mobile
    if (this.state.hasError) {
      return this.props.fallback;
    }

    // Otherwise, render the children normally
    return <div ref={this.canvasRef}>{this.props.children}</div>;
  }
}

// Define PropTypes to validate props
CanvasErrorBoundary.propTypes = {
  fallback: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default CanvasErrorBoundary;
