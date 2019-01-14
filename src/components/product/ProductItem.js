import React from 'react'
import {Link} from 'react-router-dom'
import {BASE_URL} from '../../index'

export const ProductItem = props => {
  const {id, title, img, text} = props.product

  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <h1>{title}</h1>
      </Link>

      <img
        className="preview"
        src={`${BASE_URL}/static/${img}`}
        alt={title}
      />

      <p className="description">{text}</p>
    </div>
  )
}
