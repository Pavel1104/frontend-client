import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { loadProducts } from '../actions/ProductsActions'
import { Product } from '../components/product/Product'


class Products extends Component {
  componentDidMount() {
    const { loadProducts, user } = this.props;
    loadProducts(user.token);
  }

  render() {
    const products = this.props.products.products;
    return (
      <Fragment>
        {products.map((product) => <Product key={product.id} product={product} />)}
      </Fragment>
    )
  }
}

// connect data from store
const mapStateToProps = store => {
  return {
    products: store.products,
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: (token) => dispatch(loadProducts(token)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
