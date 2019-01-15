import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {handleLogout} from '../actions/UserActions'


class UserMenu extends Component {
  handleLogout = () => {
    this.props.handleLogout()
  }

  render() {
    const {name, token} = this.props.user

    return (
      <div className="user-menu">
        {name && token &&
          <Fragment>
            <span className="greetings">
              Hello, <span className="user-name">{name}</span>>
            </span>
            |
            <span
              className="logout"
              onClick={this.handleLogout}
            >
              Logout
            </span>
          </Fragment>
        }

        {!(name && token) &&
          <Fragment>
            <Link to="/login">Login</Link>
            |
            <Link to="/register">Register</Link>
          </Fragment>
        }
      </div>
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
    handleLogout: () => dispatch(handleLogout()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserMenu)
