import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { loadReviews } from '../actions/ReviewsActions'
import { Review } from '../components/review/Review'
import ReviewForm from '../components/review/_reviewForm'
import { handleAddReview } from '../actions/ReviewsActions'

class Reviews extends Component {

  handleSubmitReviewForm = (values) => {
    const { user, productId } = this.props;
    this.props.handleAddReview(user.token, productId, values.rate, values.text);
  };

  componentDidMount() {
    const { loadReviews, user, productId } = this.props;
    loadReviews(user.token, productId);
  }

  findById = (arr, id) => {
    return arr.find(x => x.id === id);
  };

  render() {
    const reviews = this.props.reviews.reviews;
    const { user } = this.props;

    return (
      <Fragment>
        {user.token &&
          <ReviewForm onSubmit={this.handleSubmitReviewForm}/>
        }
        {reviews.map((review) => <Review key={review.id} review={review} />)}
      </Fragment>
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
    loadReviews: (token, productId) => dispatch(loadReviews(token, productId)),
    handleAddReview: (token, productId, rate, text) => dispatch(handleAddReview(token, productId, rate, text)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)
