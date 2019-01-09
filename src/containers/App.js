import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Login } from '../components/user/Login'
import { handleLogin } from '../actions/UserActions'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Link } from 'react-router-dom'

// import './App.css';

class App extends Component {
  render() {
    const { history, user, handleLoginAction } = this.props
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login/">Login</Link></li>
              <li><Link to="/register/">Register</Link></li>
            </ul>
          </nav>

          <Route path="/" exact component={() =>
            <Login name={user.name}
              isFetching={user.isFetching}
              error={user.error}
              handleLoginAction={handleLoginAction}
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
    handleLoginAction: () => dispatch(handleLogin()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
