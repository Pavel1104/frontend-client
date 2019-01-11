import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Login } from '../components/user/Login'
import { Register } from '../components/user/Register'
import { handleLogin, handleRegister } from '../actions/UserActions'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Link } from 'react-router-dom'

class App extends Component {

  handleSubmitRegisterForm = (values) => {
    this.props.handleRegister(values.username, values.password);
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
            </ul>
          </nav>
          <Route path="/register" exact component={() =>
            <Register
              onSubmit={this.handleSubmitRegisterForm}

              isFetching={user.isFetching}
              error={user.error}
            />
          }/>

          <Route path="/" exact component={() =>
            <Login name={user.name}
              isFetching={user.isFetching}
              error={user.error}
              handleLogin={handleLogin}
            />
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
    handleLogin: () => dispatch(handleLogin()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
