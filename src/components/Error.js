import React from 'react'

export const Error = props => {
  const {error} = props

  return (
    <div className="error-msg">{error}</div>
  )
}
