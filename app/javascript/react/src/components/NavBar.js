import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <div>
      <nav className="top-bar" data-topbar role="navigation">
        <ul className="title-area">
          <li className="name">
        <h1>  <Link to='/'> Nerd Words </Link></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>
        <section className="top-bar-section">
          <ul className="right">
            <li className="active sign-in"><a href="/users/sign_in">Log In</a></li>
            <li className="active sign-in"><a href="/users/sign_out">Log Out</a></li>
            <li className="active"><a href="/users/sign_up">Sign Up</a></li>
            <li className="has-dropdown">
              <a href="#">Right Button Dropdown</a>
              <ul className="dropdown">
                <li><a href="#">First link in dropdown</a></li>
                <li className="active"><a href="#">Active link in dropdown</a></li>
              </ul>
            </li>
          </ul>
          <ul className="left">
            <li><a href="#">Left Nav Button</a></li>
          </ul>
        </section>
      </nav>
      {props.children}
    </div>
  )
}
export default NavBar;
