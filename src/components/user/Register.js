import React, { Component, Fragment } from 'react'
import { Error } from './_error'
import RegisterForm from './_registerForm'
import { Link } from 'react-router-dom'

export class Register extends Component {
  renderTemplate = () => {
    const { error, isFetching, onSubmit } = this.props

    if (isFetching) {
      return <div className="loading"><p>Загружаю...</p></div>
    } else {
      return (
        <Fragment>
          {error && <Error error={error}/>}
          <RegisterForm onSubmit={onSubmit} />
          <nav className="link">
          <hr />
          <Link to="/login">Sign In</Link>
          </nav>
        </Fragment>
      )
    }
  }
  render() {
    return <div className="user">{this.renderTemplate()}</div>
  }
}
