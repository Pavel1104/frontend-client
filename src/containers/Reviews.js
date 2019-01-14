import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadReviews} from '../actions/ReviewsActions'
import {Review} from '../components/review/Review'
import {Load} from '../components/Load'
import {Error} from '../components/Error'
import ReviewForm from './ReviewForm'

class Reviews extends Component {
  componentDidMount() {
    const {loadReviews, productId} = this.props
    loadReviews(productId)
  }

  render() {
    const {reviews, isFetching, error} = this.props.reviews
    const {name, token} = this.props.user

    return (
      <div className="reviews-container">
        {name && token && <ReviewForm productId={this.props.productId}/>}

        {isFetching && <Load/>}

        {!isFetching && error && <Error error={error}/>}

        {!isFetching &&
          <div className="reviews-list">
            {reviews.map(review => <Review key={review.id} review={review}/>)}
          </div>
        }
      </div>
    )
  }
}

// connect data from store
const mapStateToProps = store => {
  return {
    reviews: store.reviews,
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadReviews: productId => dispatch(loadReviews(productId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)
