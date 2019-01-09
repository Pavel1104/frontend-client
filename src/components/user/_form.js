import React, { Component, Fragment } from 'react'
import profile from '../../img/profile.jpeg'

export class Form extends Component {
  render() {
    return (
      <Fragment>
        <form action="">
          <div className="imgcontainer">
            <img src={profile} alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit">Login</button>
          </div>
        </form>
      </Fragment>
    );
  }
}
