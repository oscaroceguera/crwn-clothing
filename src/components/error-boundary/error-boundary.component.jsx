import React from 'react'

import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from './error-boundary.styles'

// https://i.imgur.com/yW2W9SC.png
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(error) {
    // process the error
    return {
      hasErrored: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Valio verga!</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children
  }
}

export default ErrorBoundary