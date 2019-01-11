import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './formValidate';

import profileImg from '../../assets/img/profile.jpeg'

class RegisterForm extends Component {
  renderField = ({ input, placeholder, type, meta: { touched, error }}) => (
    <Fragment>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && (error && <span className="error">{error}</span>)}
    </Fragment>
  );
  render(){
    const {handleSubmit, invalid} = this.props;

    return (
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src={profileImg} alt="Avatar" className="avatar" />
        </div>

        <hr />

        <div className="container">
          <div className="relative">
            <i className="icon fa fa-user"></i>
            <Field name="username" component={this.renderField}  placeholder="Username" type="text"/>
          </div>

          <div className="relative">
            <i className="icon fa fa-key"></i>
            <Field name="password" component={this.renderField}  placeholder="Password" type="password"/>
          </div>

          <div className="relative">
            <i className="icon fa fa-key"></i>
            <Field name="confirm_password" component={this.renderField}  placeholder="Confirm password" type="password"/>
          </div>

          <button type="submit" disabled={invalid}>Sign Up</button>
        </div>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: 'registerForm',
  validate,
})(RegisterForm);

export default RegisterForm;
