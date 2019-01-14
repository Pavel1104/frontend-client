import React from 'react'
import LoginForm from '../../containers/LoginForm'
import {Error} from '../Error'
import {Load} from '../Load'

export function Login(props) {
  const {error, isFetching} = props
  return (
    <div className="user">
      {isFetching && <Load/>}

      {!isFetching && error && <Error error={error}/>}

      {!isFetching && <LoginForm/>}
    </div>
  )
}
