// NavigationBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <h1 className='colors'>PWL</h1>
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact activeClassName="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" activeClassName="active">Contact</Nav.Link>
          <Nav.Link as={NavLink} to="/result" activeClassName="active">Result</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
