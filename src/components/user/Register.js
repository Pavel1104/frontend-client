import React, { Component, Fragment } from 'react'
import { Error } from './_error'
import { Form } from './_form'
import { Link } from 'react-router-dom'

export class Register extends Component {
  renderTemplate = () => {
    const { error, isFetching, name, password, onInputChange, onSubmit } = this.props

    if (isFetching) {
      return <p>Загружаю...</p>
    } else {
      return (
        <Fragment>
          {error && <Error error={error}/>}
          <Form
            name={name}
            password={password}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            submitValue={"Sing Up"}
          />
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
