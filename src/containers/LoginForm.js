import React, {Component, Fragment} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {validateLoginForm as validate} from '../utils/formsValidate'
import {connect} from 'react-redux'
import {handleLogin} from '../actions/UserActions'

import profileImg from '../assets/img/profile.jpeg'

class LoginForm extends Component {
  renderField = ({input, placeholder, type, meta: {touched, error}}) => (
    <Fragment>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && (error && <span className="error">{error}</span>)}
    </Fragment>
  )

  handleSubmitLoginForm = (values) => {
    this.props.handleLogin(values.username, values.password)
  }

  render() {
    const {handleSubmit, invalid} = this.props

    return (
      <form
        className="user-form"
        onSubmit={handleSubmit(this.handleSubmitLoginForm)}
      >
        <div className="imgcontainer">
          <img src={profileImg} alt="Avatar" className="avatar"/>
        </div>
        <hr/>

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

          <button type="submit" disabled={invalid}>Sign In</button>
        </div>
        <hr/>
        <Link to="/register">Sign Up</Link>
      </form>
    )
  }
}

LoginForm = reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm)

// connect data from store
const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (name, password) => dispatch(handleLogin(name, password)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm)
