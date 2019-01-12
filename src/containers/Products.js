import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { loadProducts } from '../actions/ProductsActions'
import { Product } from '../components/product/Product'
import Reviews from './Reviews'

class Products extends Component {
  componentDidMount() {
    const { loadProducts, user } = this.props;
    loadProducts(user.token);
  }

  findById = (arr, id) => {
    return arr.find(x => x.id === id);
  };

  render() {
    const products = this.props.products.products;

    if ( this.props.match ) {
      const { id }  = this.props.match
      let product = this.findById(this.props.products.products, parseInt(id));

      if (product !== undefined) {
        return (
          <Fragment>
            <Product product={product} />
            <Reviews productId={id}/>
          </Fragment>
        )
      }

      return (
        <div className="error">Product isn't found</div>
      )
    }

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
