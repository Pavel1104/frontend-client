import React, { Component, Fragment } from 'react'
import { Error } from './_error'
import LoginForm from './_loginForm'
import { Link } from 'react-router-dom'

export class Login extends Component {
  renderTemplate = () => {
    const { error, isFetching, onSubmit } = this.props

    if (isFetching) {
      return <div className="loading"><p>Загружаю...</p></div>
    } else {
      return (
        <Fragment>
          {error && <Error error={error}/>}
          <LoginForm onSubmit={onSubmit} />
          <nav className="link">
            <hr />
            <Link to="/register">Sign Up</Link>
          </nav>
        </Fragment>
      )
    }
  }
  render() {
    return <div className="user">{this.renderTemplate()}</div>
  }
}
