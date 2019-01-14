import React from 'react'
import {Error} from './Error'
import LoginForm from '../../containers/LoginForm'

export function Login(props) {
  const {error, isFetching} = props
  return (
    <div className="user">
      {isFetching &&
        <div className="loading"><p>Загружаю...</p></div>
      }

      {!isFetching && error && <Error error={error}/>}

      {!isFetching && <LoginForm/>}
    </div>
  )
}
