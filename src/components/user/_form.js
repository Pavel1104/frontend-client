import React, { Component, Fragment } from 'react'
import profileImg from '../../assets/img/profile.jpeg'

export class Form extends Component {
  render() {
    const { name, password, onInputChange, onSubmit, submitValue } = this.props
    return (
      <Fragment>
        <form className="user-form" onSubmit={onSubmit}>
          <div className="imgcontainer">
            <img src={profileImg} alt="Avatar" className="avatar" />
          </div>
          <hr />

          <div className="container">
            <i className="icon fa fa-user"></i>
            <input placeholder="Username"
              name="name" type="text"
              onChange={onInputChange} value={name}
            />
            <i className="icon fa fa-key"></i>
            <input placeholder="Password"
              name="password" type="password"
              onChange={onInputChange} value={password}
            />

            <button type="submit">{submitValue}</button>
          </div>
        </form>
      </Fragment>
    );
  }
}
