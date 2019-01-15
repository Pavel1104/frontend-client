import React from 'react';
import {Link} from 'react-router-dom'
import UserMenu from '../containers/UserMenu';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link className="logo-link" to="/"></Link>
      </div>

      <UserMenu/>
    </header>
  )
}
