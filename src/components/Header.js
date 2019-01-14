import React from 'react';
import {Link} from 'react-router-dom'
import UserMenu from '../containers/UserMenu';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/products">Products</Link>

      <UserMenu/>
    </header>
  )
}
