import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';

class NavBar extends Component {
  render() {
    return (
      <Navbar
        brand='Details'
        right
        className="teal">
        <NavItem>
          <Link
            to={`/`}>
            Home
          </Link>
        </NavItem>
      	<NavItem>
          <Link
            to={`/`}>
            Back
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to={`/`}>
            Next
          </Link>
        </NavItem>
      </Navbar>
    );
  }
}

export default NavBar;
