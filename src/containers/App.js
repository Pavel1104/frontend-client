import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
// import { Login } from '../components/user/Login'
import { Register } from '../components/user/Register'
// import { RegisterForm } from '../components/user/_registerForm'
import { handleLogin,
  onUserInputChange, handleRegister } from '../actions/UserActions'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onUserInputChange(name, value);
  }

  onSubmit (event) {
    event.preventDefault();
    const { user, handleRegister } = this.props
    handleRegister(user.name, user.password);
  }

  render() {
    const { history, user, handleLogin } = this.props
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
          {/* < RegisterForm  handleLogin={handleLogin}/> */}
          <Route path="/register" exact component={() =>
            <Register
              name={user.name}
              password={user.password}
              isFetching={user.isFetching}
              error={user.error}
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
          }/>

          {/* <Route path="/" exact component={() =>
            <Login name={user.name}
              isFetching={user.isFetching}
              error={user.error}
              handleLogin={handleLogin}
            />
          }/> */}
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
    onUserInputChange: (key, value) => dispatch(onUserInputChange(key, value)),
    handleRegister: (name, password) => dispatch(handleRegister(name, password)),
    handleLogin: () => dispatch(handleLogin()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
