import React, { Component } from "react";

export default class ErrorBoundary extends Component {
      constructor(props) {
        super(props);
        this.state = {
          hasError: false,
          componentName: "",
        };
      }
    
      static getDerivedStateFromError(error) {
        return {
          hasError: true,
        };
      }
    
      componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
        this.setState({
          componentName: this.props.componentName || "Unknown Component",
        });
      }
    
      render() {
        if (this.state.hasError) {
          return (
            <div>
              <h2>An error occurred in the {this.state.componentName} component.</h2>
              <p>Please check the console for more details.</p>
            </div>
          );
        }
    
        return this.props.children;
      }
    }
