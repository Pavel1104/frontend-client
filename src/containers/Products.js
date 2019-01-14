import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadProducts} from '../actions/ProductsActions'
import {ProductItem} from '../components/product/ProductItem'
import {Load} from '../components/Load'
import {Error} from '../components/Error'

class Products extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    const {products, isFetching, error} = this.props.products

    return (
      <div className="products-container">
        {isFetching && <Load/>}

        {!isFetching && error && <Error error={error}/>}

        {!isFetching && !error &&
          <div className="reviews-list">
           {products.map(product => <ProductItem key={product.id} product={product}/>)}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    products: store.products,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => dispatch(loadProducts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products)
