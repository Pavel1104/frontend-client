import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Login } from '../components/user/Login'
import { handleLogout } from '../actions/UserActions'

class Welcome extends Component {
  handleLogout = () => {
    this.props.handleLogout()
  }

  render() {
    const { user, onSubmit } = this.props;

    if (user.success) {
      return <Fragment>
        <p>Hello, {user.name}</p>
        <p onClick={this.handleLogout}>Logout</p>
      </Fragment>
    }

    return (
      <Login
        onSubmit={onSubmit}
        isFetching={user.isFetching}
        error={user.error}
      />
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
    handleLogout: () => dispatch(handleLogout()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome)
