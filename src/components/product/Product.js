import React, { Component, Fragment } from 'react'
import { baseUrl } from '../../index'

export class Product extends Component {
  render() {
    const { id, title, img, text } = this.props.product;

    return (
      <Fragment>
        <div className="product">
          <h1>{title}</h1>
          <img className="preview" src={`${baseUrl}/static/${img}`}
            alt={title}
          />
          <p className="description">{text}</p>
        </div>
      </Fragment>
    )
  }
}
