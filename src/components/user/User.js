import React, { Component, Fragment } from 'react'
import { RegisterForm } from './_registerForm'
import { Error } from './_error'
import { Form } from './_form'

import './user.scss'

export class User extends Component {
  renderTemplate = () => {
    const { name, error, isFetching, handleLoginAction } = this.props

    if (error) {
      return <Error />
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

    if (name) {
      return <p>Привет, {name}!</p>
    } else {
      return (
        <Fragment>
          <RegisterForm handleLoginAction={handleLoginAction}/>
          < Form />
        </Fragment>
      )
    }
  }
  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}
