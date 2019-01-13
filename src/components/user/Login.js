import React, { Component, Fragment } from 'react'
import { Error } from './_error'
import LoginForm from './_loginForm'
import { Link } from 'react-router-dom'

export class Login extends Component {
  render() {
    const { error, isFetching, onSubmit } = this.props

    return (
      <div className="user">
        {isFetching && (
          <div className="loading"><p>Загружаю...</p></div>
        )}

        {!isFetching && error && (
          <Error error={error}/>
        )}

        {!isFetching && !error && (
          <Fragment>
            <LoginForm onSubmit={onSubmit} />
            <nav className="link">
              <hr />
              <Link to="/register">Sign Up</Link>
            </nav>
          </Fragment>
        )}
      </div>
    )
  }
}
