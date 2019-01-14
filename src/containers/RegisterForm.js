import React, {Component, Fragment} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {validateRegisterForm as validate} from '../utils/userFormValidate'
import {connect} from 'react-redux'
import {handleRegister} from '../actions/UserActions'

import profileImg from '../assets/img/profile.jpeg'

class RegisterForm extends Component {
  renderField = ({input, placeholder, type, meta: {touched, error}}) => (
    <Fragment>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && (error && <span className="error">{error}</span>)}
    </Fragment>
  )

  handleSubmitRegisterForm = (values) => {
    this.props.handleRegister(values.username, values.password)
  }

  render() {
    const {handleSubmit, invalid} = this.props

    return (
      <form
        className="user-form"
        onSubmit={handleSubmit(this.handleSubmitRegisterForm)}
      >
        <div className="imgcontainer">
          <img src={profileImg} alt="Avatar" className="avatar"/>
        </div>
        <hr />

        <div className="container">
          <div className="relative">
            <i className="icon fa fa-user"></i>
            <Field
              name="username"
              component={this.renderField}
              placeholder="Username"
              type="text"
            />
          </div>

          <div className="relative">
            <i className="icon fa fa-key"></i>
            <Field
              name="password"
              component={this.renderField}
              placeholder="Password"
              type="password"
            />
          </div>

          <div className="relative">
            <i className="icon fa fa-key"></i>
            <Field
              name="confirm_password"
              component={this.renderField}
              placeholder="Confirm password"
              type="password"
            />
          </div>

          <button type="submit" disabled={invalid}>Sign Up</button>
        </div>
        <hr />
        <Link to="/login">Sign In</Link>
      </form>
    )
  }
}

RegisterForm = reduxForm({
  form: 'registerForm',
  validate,
})(RegisterForm)

// connect data from store
const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleRegister: (name, password) => dispatch(handleRegister(name, password)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm)
