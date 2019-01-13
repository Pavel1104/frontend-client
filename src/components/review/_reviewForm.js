import React, { Component, Fragment } from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { validateReviewForm as validate } from './formValidate';
import { Rate } from './_rate'

class ReviewForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rate: ''
    };
  }

  renderTextArea = ({className, input, placeholder, meta: { touched, error }}) => (
    <Fragment>
      <textarea className={className} {...input} placeholder={placeholder} rows="10" cols="40"></textarea>
      {touched && (error && <span className="error">{error}</span>)}
    </Fragment>
);

  setRate = (event) => {
    let rate = parseInt( event.target.dataset.rate );
    this.props.dispatch(change('reviewForm', 'rate', rate));
    this.setState({rate});
  }

  render(){
    const {handleSubmit, invalid} = this.props;

    return (
      <form className="review" onSubmit={handleSubmit}>
        <div className="container">
          <div className="rating">
            <Rate rate={this.state.rate} editable="editable" setRate={this.setRate} />
          </div>
          <Field className="hidden" name="rate" component="input" placeholder="rate" />
          <Field className="text" name="text" component={this.renderTextArea}  placeholder="Review" type="textarea"/>

          <button type="submit" disabled={invalid}>Add review</button>
        </div>
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: 'reviewForm',
  validate,
})(ReviewForm);

export default ReviewForm;
