import React, { Component } from 'react';

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  };

  componentDidCatch() {
    this.setState({
      hasErrored: true
    });
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/U3vTGjX.png" />
          <ErrorImageText>There’s a Leak in the Website</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
