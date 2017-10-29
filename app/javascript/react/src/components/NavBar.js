import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <div>
      <Link to='/'> HOME </Link>
      <h1 className="page-title">First</h1>
    </div>
  )
}
export default NavBar;
