import React, { Component, Fragment } from 'react'
import { Error } from './_error'
import { Form } from './_form'

import './user.scss'

export class Login extends Component {
  renderTemplate = () => {
    const { name, error, isFetching, handleLoginAction } = this.props

    if (error) {
      return <Error error={error}/>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

    if (name) {
      return <p>Привет, {name}!</p>
    } else {
      return (
        <Fragment>
          login
          <Form handleLoginAction={handleLoginAction}/>
        </Fragment>
      )
    }
  }
  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}
