import React, { Component } from "react";

// This component will wrap the component we need to display a message when it fails.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // Now, let's use a lifecycle hook to turn the hasError to true when the
  // component that it wrapes errors out. we need to use a hook that came
  // in React 16 and higher.
  componentDidMount(error, info) {
    // it receives two params such as: error and info
    this.setState({ hasError: true });
  }

  render() {
    // condition to check if the component wrapped in ErrorBoundary
    // (that is children) has error
    if (this.state.hasError) {
      return <h2> Ooops!! Something went wrong! </h2>;
    }
    // Othewize render the wrapped component
    return this.props.children;
  }
}

export default ErrorBoundary;
