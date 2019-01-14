import React from 'react'
import {Error} from './Error'
import RegisterForm from '../../containers/RegisterForm'

export function Register(props) {
  const {error, isFetching} = props

  return (
    <div className="user">
      {isFetching &&
        <div className="loading"><p>Загружаю...</p></div>
      }

      {!isFetching && error && <Error error={error}/>}

      {!isFetching && <RegisterForm/>}
    </div>
  )
}
