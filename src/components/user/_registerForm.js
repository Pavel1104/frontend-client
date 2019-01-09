import React, { Component, Fragment } from 'react'

export class RegisterForm extends Component {
  render() {
    const { handleLoginAction } = this.props
    return (
      <Fragment>
        <button className="btn" onClick={handleLoginAction}>
          Войти
        </button>
      </Fragment>
    );
  }
}
