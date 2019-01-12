import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Link } from 'react-router-dom'

import Welcome from './Welcome'
import { Login } from '../components/user/Login'
import { Register } from '../components/user/Register'
import { handleLogin, handleRegister } from '../actions/UserActions'

import Products from './Products'

class App extends Component {

  handleSubmitRegisterForm = (values) => {
    this.props.handleRegister(values.username, values.password);
  };

  handleSubmitLoginForm = (values) => {
    this.props.handleLogin(values.username, values.password);
  };

  render() {
    const { history, user } = this.props;

    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </nav>

          <Route path="/" exact component={() =>
            <Welcome onSubmit={this.handleSubmitLoginForm}/>
          }/>

          <Route path="/register" component={() =>
            <Register
              onSubmit={this.handleSubmitRegisterForm}
              isFetching={user.isFetching}
              error={user.error}
            />
          }/>

          <Route path="/login" component={() =>
            <Login
              onSubmit={this.handleSubmitLoginForm}
              isFetching={user.isFetching}
              error={user.error}
            />
          }/>

          <Route path="/products" component={() =>
            <Products />
          }/>

          <Route path="/product/:id" component={(props) =>
            <Products match={props.match.params}/>
          }/>
        </Fragment>
      </ConnectedRouter>
    );
  }
}

// connect data from store
const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleRegister: (name, password) => dispatch(handleRegister(name, password)),
    handleLogin: (name, password) => dispatch(handleLogin(name, password)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
