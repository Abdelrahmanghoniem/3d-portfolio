import React from 'react';
import PropTypes from 'prop-types';

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to trigger fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Canvas rendering failed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback; // Render fallback UI if error occurs
    }
    return this.props.children; // Render `ComputersCanvas` otherwise
  }
}

// Define PropTypes to validate props
CanvasErrorBoundary.propTypes = {
  fallback: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default CanvasErrorBoundary;
