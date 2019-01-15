import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, change} from 'redux-form'
import {validateReviewForm as validate} from '../utils/formsValidate'
import {Rate} from '../components/review/Rate'
import {addReview} from '../actions/ReviewsActions'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rate: 0,
    }
  }

  handleSubmitReviewForm = values => {
    const {productId} = this.props
    this.props.addReview(productId, values.rate, values.text)
  }

  renderTextArea = ({className, input, placeholder, meta: {touched, error}}) => (
    <Fragment>
      <textarea
        className={className}
        {...input}
        placeholder={placeholder}
      />
      {touched && (error && <span className="error">{error}</span>)}
    </Fragment>
  )

  setRate = (event) => {
    let rate = parseInt( event.target.dataset.rate )
    this.props.dispatch(change('reviewForm', 'rate', rate))
    this.setState({rate})
  }

  render() {
    const {handleSubmit, invalid} = this.props

    return (
      <form
        className="review"
        onSubmit={handleSubmit(this.handleSubmitReviewForm)}
      >
        <div className="container">
          <div className="rating">
            <Rate rate={this.state.rate} editable="editable" setRate={this.setRate} />
          </div>
          <Field className="hidden" name="rate" component="input" placeholder="rate" />
          <Field className="text" name="text" component={this.renderTextArea}  placeholder="Review" type="textarea"/>

          <button type="submit" disabled={invalid}>Add review</button>
        </div>
      </form>
    )
  }
}

ReviewForm = reduxForm({
  form: 'reviewForm',
  validate,
})(ReviewForm)

ReviewForm = connect(
  () => ({
    initialValues: {rate:0}
  }),
)(ReviewForm)

// connect data from store
const mapStateToProps = store => {
  return {
    reviews: store.reviews,
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (productId, rate, text) => dispatch(addReview(productId, rate, text)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)
