import React, { Component } from 'react';

class index extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div><b>Something went wrong:</b> <p style={{ color: 'red' }}>{this.state.error.message}</p></div>;
    }

    return this.props.children;
  }
}

export default index;
