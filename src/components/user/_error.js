
import React, { Component, Fragment } from 'react'

export class Error extends Component {
  render() {
    const { error } = this.props
    return (
      <Fragment>
        <p>{error}</p>
      </Fragment>
    );
  }
}
