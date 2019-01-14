import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {Route} from 'react-router-dom'

import {Login} from '../components/user/Login'
import {Register} from '../components/user/Register'
import {restoreUserSession} from '../actions/UserActions'

import Products from './Products'
import Product from './Product'
import {Header} from '../components/Header';

class App extends Component {
  componentDidMount() {
    this.props.restoreUserSession()
  }

  render() {
    const {history, user} = this.props

    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <Header/>

          <Route path="/" exact component={Products}/>

          <Route path="/register" component={() =>
            <Register
              isFetching={user.isFetching}
              error={user.error}
            />
          }/>

          <Route path="/login" component={() =>
            <Login
              isFetching={user.isFetching}
              error={user.error}
            />
          }/>

          <Route path="/products" component={Products}/>

          <Route path="/product/:productId" component={props =>
            <Product match={props.match.params}/>
          }/>
        </Fragment>
      </ConnectedRouter>
    )
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
    restoreUserSession: () => dispatch(restoreUserSession()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
