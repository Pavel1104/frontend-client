import React from 'react'
import RegisterForm from '../../containers/RegisterForm'
import {Error} from '../Error'
import {Load} from '../Load'

export function Register(props) {
  const {error, isFetching} = props

  return (
    <div className="user">
      {isFetching && <Load/>}

      {!isFetching && error && <Error error={error}/>}

      {!isFetching && <RegisterForm/>}
    </div>
  )
}
