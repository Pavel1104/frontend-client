import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { loadReviews } from '../actions/ReviewsActions'
import { Review } from '../components/review/Review'

class Reviews extends Component {
  componentDidMount() {
    const { loadReviews, user, productId } = this.props;
    loadReviews(user.token, productId);
  }

  findById = (arr, id) => {
    return arr.find(x => x.id === id);
  };

  render() {
    const reviews = this.props.reviews.reviews;

    return (
      <Fragment>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)
