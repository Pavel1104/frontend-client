import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {loadProducts} from '../actions/ProductsActions'
import {ProductItem} from '../components/product/ProductItem'
import {Error} from '../components/Error'
import {Load} from '../components/Load'
import Reviews from './Reviews'

class Product extends Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  findById = (arr, id) => {
    return arr.find(x => x.id.toString() === id)
  }

  render() {
    const {isFetching, error, products} = this.props.products
    const {productId} = this.props.match
    let product = this.findById(products, productId)

    return (
      <div className="product-container">
        {isFetching && <Load/>}

        {!isFetching && !product &&
          <Error error={error || "Product isn't found"}/>}

        {!isFetching && product &&
          <Fragment>
            <ProductItem product={product}/>
            <Reviews productId={productId}/>
          </Fragment>
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
)(Product)
